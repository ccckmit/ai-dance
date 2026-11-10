import React, { useState, useEffect, useRef } from 'react';
import { X, Camera, CameraOff, Volume2, VolumeX, Grid, Sliders, RefreshCw } from 'lucide-react';
import { DanceStyle } from '../types/dance';
import { rhythmAudio } from '../utils/audioMetronome';

interface MirrorPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStyle: DanceStyle;
}

export const MirrorPracticeModal: React.FC<MirrorPracticeModalProps> = ({
  isOpen,
  onClose,
  currentStyle,
}) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(true);
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [bpm, setBpm] = useState<number>(currentStyle.defaultBpm);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const beatTimerRef = useRef<number | null>(null);

  // Sync BPM when style changes
  useEffect(() => {
    setBpm(currentStyle.defaultBpm);
  }, [currentStyle]);

  // Start / stop camera
  useEffect(() => {
    if (!isOpen) {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
      if (beatTimerRef.current) {
        clearInterval(beatTimerRef.current);
        beatTimerRef.current = null;
      }
      return;
    }

    let isMounted = true;

    async function initCamera() {
      try {
        setCameraError(null);
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });

        if (isMounted) {
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        }
      } catch (err) {
        if (isMounted) {
          setCameraError(
            err instanceof Error
              ? `未取得視訊鏡頭授權或設備不可用 (${err.message})。您仍可在無鏡頭模式下使用節拍器自主練習。`
              : '無法存取鏡頭。'
          );
        }
      }
    }

    initCamera();

    return () => {
      isMounted = false;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isOpen]);

  // Metronome beat loop in mirror mode
  useEffect(() => {
    if (!isOpen || !isMetronomeActive) {
      if (beatTimerRef.current) {
        clearInterval(beatTimerRef.current);
        beatTimerRef.current = null;
      }
      return;
    }

    const maxBeats = currentStyle.id === 'waltz' ? 3 : currentStyle.id === 'jitterbug' ? 6 : 8;
    const intervalMs = Math.round(60000 / bpm);

    beatTimerRef.current = window.setInterval(() => {
      setCurrentBeat((prev) => {
        const next = (prev % maxBeats) + 1;
        rhythmAudio.playBeat(currentStyle.id, next, maxBeats);
        return next;
      });
    }, intervalMs);

    return () => {
      if (beatTimerRef.current) {
        clearInterval(beatTimerRef.current);
        beatTimerRef.current = null;
      }
    };
  }, [isOpen, isMetronomeActive, bpm, currentStyle.id]);

  if (!isOpen) return null;

  const maxBeats = currentStyle.id === 'waltz' ? 3 : currentStyle.id === 'jitterbug' ? 6 : 8;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-100 font-display">
                舞蹈教室鏡子練習模式
              </h3>
              <p className="text-xs text-stone-400">
                對照中軸線與肩膀水平線，檢查骨盆傾斜與踏步重心 ({currentStyle.chineseName})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGrid((p) => !p)}
              className={`p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1.5 ${
                showGrid
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-stone-800 text-stone-400 border-stone-700'
              }`}
              title="開關姿勢對齊輔助線"
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">體態格線</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video / Mirror stage */}
        <div className="relative flex-1 bg-stone-950 min-h-[360px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
          {cameraError ? (
            <div className="p-8 text-center max-w-md">
              <CameraOff className="w-12 h-12 text-stone-600 mx-auto mb-3" />
              <div className="text-sm font-semibold text-stone-300 mb-2">鏡頭未連接</div>
              <div className="text-xs text-stone-400 leading-relaxed mb-4">{cameraError}</div>
              <div className="text-xs text-amber-400 bg-amber-950/30 p-3 rounded-xl border border-amber-900/40">
                請在瀏覽器網址列確認已授權攝影機存取，或點擊下方節拍器持續跟隨音樂卡拍踏步。
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover -scale-x-100" // Mirror flip
            />
          )}

          {/* Grid Overlays for Posture Alignment */}
          {showGrid && (
            <div className="absolute inset-0 pointer-events-none select-none">
              {/* Vertical Center Spine Axis */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-amber-400/50 -translate-x-1/2 border-dashed border-amber-400" />
              <div className="absolute left-1/2 top-4 -translate-x-1/2 px-2 py-0.5 rounded bg-stone-950/80 text-[10px] text-amber-400 font-mono border border-amber-500/30">
                脊柱中軸線
              </div>

              {/* Horizontal Shoulder Line */}
              <div className="absolute top-[32%] left-0 right-0 h-[1px] bg-sky-400/40" />
              <div className="absolute right-4 top-[30%] px-2 py-0.5 rounded bg-stone-950/80 text-[10px] text-sky-400 font-mono border border-sky-500/30">
                雙肩水平線
              </div>

              {/* Horizontal Hip Line */}
              <div className="absolute top-[62%] left-0 right-0 h-[1px] bg-rose-400/40" />
              <div className="absolute right-4 top-[60%] px-2 py-0.5 rounded bg-stone-950/80 text-[10px] text-rose-400 font-mono border border-rose-500/30">
                骨盆律動線
              </div>
            </div>
          )}

          {/* Live Beat Visualizer Floating Orb */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-stone-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-800">
            <span
              className={`w-3 h-3 rounded-full transition-all duration-150 ${
                currentBeat === 1
                  ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/80 ring-2 ring-amber-300'
                  : 'bg-stone-500 scale-100'
              }`}
            />
            <div className="font-mono text-sm font-bold text-stone-100">
              拍點: <span className="text-amber-400">{currentBeat}</span> / {maxBeats}
            </div>
          </div>
        </div>

        {/* Bottom Metronome Controller */}
        <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMetronomeActive((p) => !p)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isMetronomeActive
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-800 text-stone-400'
              }`}
            >
              {isMetronomeActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{isMetronomeActive ? '節奏發聲中' : '節奏靜音'}</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-stone-300">
              <span className="text-stone-500">速度:</span>
              <input
                type="range"
                min="60"
                max="220"
                step="2"
                value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-24 h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <span className="font-mono tabular-nums text-amber-400 font-semibold">{bpm} BPM</span>
            </div>
          </div>

          <div className="text-xs text-stone-400">
            提示：鏡中站立距螢幕約 1.5 - 2 公尺，可完整觀察腳掌與軀幹對齊。
          </div>
        </div>
      </div>
    </div>
  );
};
