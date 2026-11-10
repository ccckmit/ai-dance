import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DanceStyle, DanceFigure, Role, StepItem } from '../types/dance';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';
import { rhythmAudio } from '../utils/audioMetronome';

interface DanceFloorSimulatorProps {
  currentStyle: DanceStyle;
  currentFigure: DanceFigure;
  activeStepIndex: number;
  onStepChange: (index: number) => void;
}

export const DanceFloorSimulator: React.FC<DanceFloorSimulatorProps> = ({
  currentStyle,
  currentFigure,
  activeStepIndex,
  onStepChange,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const [roleView, setRoleView] = useState<Role>('both');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);
  const [beatPulse, setBeatPulse] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  const totalSteps = currentFigure.steps.length;
  const currentStep: StepItem = currentFigure.steps[activeStepIndex] || currentFigure.steps[0];

  // Base beat interval calculated from BPM and speed multiplier
  const beatIntervalMs = Math.round((60000 / currentFigure.bpm) / speedMultiplier);

  // Play sound for the current step
  const triggerBeatAudio = useCallback((stepIdx: number) => {
    const step = currentFigure.steps[stepIdx];
    if (!step) return;

    // Trigger visual pulse
    setBeatPulse(true);
    setTimeout(() => setBeatPulse(false), 140);

    // Play synthesized acoustic rhythm
    rhythmAudio.playBeat(currentStyle.id, step.stepNumber, totalSteps);
  }, [currentFigure.steps, currentStyle.id, totalSteps]);

  const activeStepRef = useRef(activeStepIndex);
  activeStepRef.current = activeStepIndex;

  // Handle Play/Pause timer
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    triggerBeatAudio(activeStepRef.current);

    timerRef.current = window.setInterval(() => {
      const next = (activeStepRef.current + 1) % totalSteps;
      onStepChange(next);
      triggerBeatAudio(next);
    }, beatIntervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, beatIntervalMs, totalSteps, triggerBeatAudio, onStepChange]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextStep = () => {
    const next = (activeStepIndex + 1) % totalSteps;
    onStepChange(next);
    triggerBeatAudio(next);
  };

  const handlePrevStep = () => {
    const prev = (activeStepIndex - 1 + totalSteps) % totalSteps;
    onStepChange(prev);
    triggerBeatAudio(prev);
  };

  const handleVolumeToggle = () => {
    const newMuted = !isAudioMuted;
    setIsAudioMuted(newMuted);
    rhythmAudio.setMute(newMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    rhythmAudio.setVolume(val);
    if (isAudioMuted && val > 0) {
      setIsAudioMuted(false);
      rhythmAudio.setMute(false);
    }
  };

  // Helper for rendering Footprint Sole SVG
  const renderFootSole = (
    foot: 'L' | 'R',
    role: 'leader' | 'follower',
    weight: number,
    contact: string,
    isCurrent: boolean
  ) => {
    const isLeader = role === 'leader';
    const primaryColor = isLeader ? '#6366F1' : '#F43F5E';
    const secondaryColor = isLeader ? '#38BDF8' : '#FB923C';
    const isTap = contact === 'tap';

    return (
      <g className="transition-all duration-300">
        {/* Glowing pulse aura on active step */}
        {isCurrent && (
          <ellipse
            cx={foot === 'L' ? -2 : 2}
            cy="2"
            rx="20"
            ry="30"
            fill={primaryColor}
            opacity={beatPulse ? '0.35' : '0.15'}
            className="animate-pulse"
          />
        )}

        {/* Sole outline & fill */}
        <path
          d={
            foot === 'L'
              ? 'M -10 -22 C -4 -25 8 -25 10 -20 C 12 -12 11 -3 9 3 C 8 7 6 12 7 18 C 7 24 5 27 0 27 C -6 27 -8 24 -8 18 C -7 12 -9 7 -10 3 C -12 -5 -13 -18 -10 -22 Z'
              : 'M 10 -22 C 4 -25 -8 -25 -10 -20 C -12 -12 -11 -3 -9 3 C -8 7 -6 12 -7 18 C -7 24 -5 27 0 27 C 6 27 8 24 8 18 C 7 12 9 7 10 3 C 12 -5 13 -18 10 -22 Z'
          }
          fill={isTap ? 'transparent' : primaryColor}
          stroke={primaryColor}
          strokeWidth={isTap ? '2.5' : '1.5'}
          strokeDasharray={isTap ? '3,2' : undefined}
          fillOpacity={isCurrent ? (isTap ? 0.1 : Math.max(0.4, weight)) : 0.25}
          className="transition-colors duration-200"
        />

        {/* Heel cup marking */}
        <ellipse
          cx="0"
          cy="18"
          rx="5.5"
          ry="6.5"
          fill={isCurrent ? secondaryColor : '#78716C'}
          fillOpacity={isCurrent ? 0.7 : 0.3}
        />

        {/* Ball of foot cushion marking */}
        <ellipse
          cx={foot === 'L' ? -1.5 : 1.5}
          cy="-10"
          rx="7"
          ry="8"
          fill={isCurrent ? secondaryColor : '#78716C'}
          fillOpacity={isCurrent ? 0.5 : 0.2}
        />

        {/* Foot indicator text: L or R */}
        <text
          x="0"
          y="2"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="bold"
          fontFamily="system-ui"
          className="pointer-events-none select-none"
        >
          {foot}
        </text>

        {/* Contact indicator badge */}
        {isCurrent && (
          <g transform="translate(0, 36)">
            <rect
              x="-18"
              y="-7"
              width="36"
              height="14"
              rx="4"
              fill="#0C0A09"
              stroke={primaryColor}
              strokeWidth="1"
            />
            <text
              x="0"
              y="2"
              textAnchor="middle"
              dominantBaseline="central"
              fill={secondaryColor}
              fontSize="8"
              fontWeight="bold"
              className="select-none"
            >
              {contact === 'flat' ? '全腳掌' : contact === 'ball' ? '前掌' : contact === 'heel' ? '腳跟' : '點步Tap'}
            </text>
          </g>
        )}
      </g>
    );
  };

  return (
    <section id="dance-floor" className="py-8 bg-stone-900/40 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1">
              <span className="font-semibold">{currentStyle.chineseName}</span>
              <span aria-hidden="true">·</span>
              <span>{currentFigure.name} ({currentFigure.englishName})</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-400">{currentFigure.level}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-100 font-display flex items-center gap-2.5">
              <span>動態舞池模擬器</span>
              {/* Pulsing Beat Light */}
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono transition-all duration-150 ${
                  beatPulse
                    ? 'bg-amber-500 text-stone-950 font-bold scale-105 shadow-md shadow-amber-500/50'
                    : 'bg-stone-800 text-stone-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${beatPulse ? 'bg-stone-950' : 'bg-amber-500'}`} />
                拍子: {currentStep.countLabel}
              </span>
            </h2>
          </div>

          {/* Perspective selector & Volume */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Role switch */}
            <div className="flex items-center p-1 bg-stone-950 rounded-lg border border-stone-800">
              <button
                onClick={() => setRoleView('both')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  roleView === 'both' ? 'bg-stone-800 text-amber-400 shadow-sm' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                雙人對跳
              </button>
              <button
                onClick={() => setRoleView('leader')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  roleView === 'leader' ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/50' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                領舞者 (藍)
              </button>
              <button
                onClick={() => setRoleView('follower')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  roleView === 'follower' ? 'bg-rose-950 text-rose-300 border border-rose-700/50' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                跟舞者 (粉)
              </button>
            </div>

            {/* Metronome audio button & volume */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-950 rounded-lg border border-stone-800">
              <button
                onClick={handleVolumeToggle}
                className="text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
                title={isAudioMuted ? '取消靜音節奏' : '靜音舞曲節奏'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4 text-stone-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isAudioMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                title="音量"
              />
              <span className="text-[11px] text-stone-400 font-mono tabular-nums">
                {isAudioMuted ? '靜音' : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </div>
        </div>

        {/* Main 2-Zone Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Zone: The Interactive SVG Dance Floor Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px]">
            {/* Ambient subtle floor wood grain effect */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#44403c_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Floor Header Controls: LOD and orientation badge */}
            <div className="flex items-center justify-between text-xs text-stone-400 z-10 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-stone-300">舞程線 (Line of Dance)</span>
                <span className="text-stone-500">→ 逆時針巡航</span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 text-indigo-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500/80" /> 領舞 (Leader)
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-500/80" /> 跟舞 (Follower)
                </span>
              </div>
            </div>

            {/* Interactive Floor SVG Stage */}
            <div className="relative flex-1 w-full flex items-center justify-center py-2">
              <svg
                viewBox="0 0 500 420"
                className="w-full h-full max-h-[360px] select-none"
              >
                <defs>
                  {/* Subtle wood floor grid pattern */}
                  <pattern id="floor-plank" width="50" height="20" patternUnits="userSpaceOnUse">
                    <rect width="50" height="20" fill="#141210" />
                    <line x1="0" y1="20" x2="50" y2="20" stroke="#24201c" strokeWidth="0.8" />
                    <line x1="50" y1="0" x2="50" y2="20" stroke="#24201c" strokeWidth="0.8" />
                  </pattern>

                  {/* Marker arrow */}
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="4"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 3, 0 6" fill="#F59E0B" />
                  </marker>
                </defs>

                {/* Ballroom Parquet Canvas */}
                <rect x="10" y="10" width="480" height="400" rx="16" fill="url(#floor-plank)" stroke="#292524" strokeWidth="1.5" />

                {/* Central circular stage ring */}
                <circle cx="250" cy="210" r="150" fill="none" stroke="#44403C" strokeWidth="1" strokeDasharray="4,6" opacity="0.4" />
                <circle cx="250" cy="210" r="80" fill="none" stroke="#44403C" strokeWidth="1" opacity="0.25" />

                {/* Axis lines */}
                <line x1="250" y1="30" x2="250" y2="390" stroke="#292524" strokeWidth="1" strokeDasharray="2,4" />
                <line x1="30" y1="210" x2="470" y2="210" stroke="#292524" strokeWidth="1" strokeDasharray="2,4" />

                {/* Line of Dance trajectory indicator */}
                <path
                  d="M 60 70 L 440 70"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  markerEnd="url(#arrowhead)"
                  opacity="0.6"
                />
                <text x="70" y="62" fill="#F59E0B" fontSize="10" fontWeight="500" opacity="0.8">
                  舞程線 LOD
                </text>

                {/* Trajectory arrow between previous step and current step */}
                {activeStepIndex > 0 && (
                  <path
                    d={`M ${
                      currentFigure.steps[activeStepIndex - 1].leaderFoot.pos.x * 5
                    } ${
                      currentFigure.steps[activeStepIndex - 1].leaderFoot.pos.y * 4.2
                    } Q 250 210 ${
                      currentStep.leaderFoot.pos.x * 5
                    } ${currentStep.leaderFoot.pos.y * 4.2}`}
                    fill="none"
                    stroke="#818CF8"
                    strokeWidth="1.8"
                    strokeDasharray="3,3"
                    opacity="0.6"
                  />
                )}

                {/* Render Leader Footprints */}
                {(roleView === 'both' || roleView === 'leader') && (
                  <g
                    transform={`translate(${currentStep.leaderFoot.pos.x * 5}, ${
                      currentStep.leaderFoot.pos.y * 4.2
                    }) rotate(${currentStep.leaderFoot.pos.angle})`}
                    className="cursor-pointer"
                  >
                    {renderFootSole(
                      currentStep.leaderFoot.foot,
                      'leader',
                      currentStep.leaderFoot.pos.weight,
                      currentStep.leaderFoot.pos.contact,
                      true
                    )}
                  </g>
                )}

                {/* Render Follower Footprints */}
                {(roleView === 'both' || roleView === 'follower') && (
                  <g
                    transform={`translate(${currentStep.followerFoot.pos.x * 5}, ${
                      currentStep.followerFoot.pos.y * 4.2
                    }) rotate(${currentStep.followerFoot.pos.angle})`}
                    className="cursor-pointer"
                  >
                    {renderFootSole(
                      currentStep.followerFoot.foot,
                      'follower',
                      currentStep.followerFoot.pos.weight,
                      currentStep.followerFoot.pos.contact,
                      true
                    )}
                  </g>
                )}

                {/* Center partner connection anchor line */}
                {roleView === 'both' && (
                  <line
                    x1={currentStep.leaderFoot.pos.x * 5}
                    y1={currentStep.leaderFoot.pos.y * 4.2}
                    x2={currentStep.followerFoot.pos.x * 5}
                    y2={currentStep.followerFoot.pos.y * 4.2}
                    stroke="#EAB308"
                    strokeWidth="1"
                    strokeDasharray="2,3"
                    opacity="0.3"
                  />
                )}
              </svg>
            </div>

            {/* Bottom Timeline Controls */}
            <div className="z-10 pt-3 border-t border-stone-850 flex flex-col gap-3">
              {/* Stepping Scrubber Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {currentFigure.steps.map((st, idx) => {
                  const isCurrent = idx === activeStepIndex;
                  return (
                    <button
                      key={st.id}
                      onClick={() => {
                        onStepChange(idx);
                        triggerBeatAudio(idx);
                      }}
                      className={`flex-1 min-w-[50px] py-1.5 px-2 rounded-lg text-xs font-mono font-medium transition-all text-center cursor-pointer border ${
                        isCurrent
                          ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md shadow-amber-500/20 scale-[1.02]'
                          : 'bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700 hover:text-stone-200'
                      }`}
                    >
                      <div className="text-[10px] opacity-75">#{st.stepNumber}</div>
                      <div className="truncate">{st.countLabel}</div>
                    </button>
                  );
                })}
              </div>

              {/* Playback Buttons Strip */}
              <div className="flex items-center justify-between gap-4">
                {/* Speed Multiplier */}
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-stone-500 mr-1 hidden sm:inline">速度:</span>
                  {[0.5, 0.75, 1.0, 1.25].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setSpeedMultiplier(spd)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                        speedMultiplier === spd
                          ? 'bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40'
                          : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* Primary Play/Pause / Prev / Next */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevStep}
                    className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-colors cursor-pointer"
                    title="上一拍"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleTogglePlay}
                    className={`px-5 py-2 rounded-lg font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                      isPlaying
                        ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-amber-500/30'
                        : 'bg-stone-100 hover:bg-white text-stone-950 shadow-stone-100/10'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-stone-950" /> : <Play className="w-4 h-4 fill-stone-950" />}
                    <span>{isPlaying ? '暫停循環' : '自動踩步循環'}</span>
                  </button>

                  <button
                    onClick={handleNextStep}
                    className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-colors cursor-pointer"
                    title="下一拍"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                {/* Step indicator */}
                <div className="text-xs text-stone-400 font-mono tabular-nums">
                  步驟 {activeStepIndex + 1} / {totalSteps}
                </div>
              </div>
            </div>
          </div>

          {/* Right Zone: Control & Real-Time Technique Feedback Deck (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Active Step Real-time Feedback Card */}
            <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-amber-500 font-bold uppercase tracking-wider">
                      當前拍子
                    </span>
                    <span className="text-base font-bold text-stone-100 font-display">
                      拍 {currentStep.countLabel}
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 font-mono">
                    步序 #{currentStep.stepNumber}
                  </span>
                </div>

                {/* Leader & Follower Dual Action Panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {/* Leader detail */}
                  <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                    <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold mb-1">
                      <span>領舞者 (Leader)</span>
                      <span className="font-mono bg-indigo-900/60 px-1.5 py-0.5 rounded text-[10px]">
                        {currentStep.leaderFoot.foot} 腳
                      </span>
                    </div>
                    <div className="text-xs font-medium text-stone-200 mt-1">
                      {currentStep.leaderFoot.actionDetail}
                    </div>
                    <div className="text-[11px] text-indigo-300/80 mt-2 pt-2 border-t border-indigo-900/50">
                      <span className="text-indigo-400 font-medium">引帶信號：</span>
                      {currentStep.leaderFoot.leadCue}
                    </div>
                  </div>

                  {/* Follower detail */}
                  <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-800/40">
                    <div className="flex items-center justify-between text-xs text-rose-400 font-semibold mb-1">
                      <span>跟舞者 (Follower)</span>
                      <span className="font-mono bg-rose-900/60 px-1.5 py-0.5 rounded text-[10px]">
                        {currentStep.followerFoot.foot} 腳
                      </span>
                    </div>
                    <div className="text-xs font-medium text-stone-200 mt-1">
                      {currentStep.followerFoot.actionDetail}
                    </div>
                    <div className="text-[11px] text-rose-300/80 mt-2 pt-2 border-t border-rose-900/50">
                      <span className="text-rose-400 font-medium">跟隨感知：</span>
                      {currentStep.followerFoot.followCue}
                    </div>
                  </div>
                </div>

                {/* Body Mechanics & Cuban Motion / Rise & Fall */}
                <div className="mt-4 p-3.5 rounded-xl bg-stone-950/80 border border-stone-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>軀幹與骨盆動態機制</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {currentStep.bodyMechanics}
                  </p>
                </div>
              </div>

              {/* Common Pitfall & Pro Tip */}
              <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-col gap-1.5 text-xs">
                <div className="text-red-400/90 flex items-start gap-1.5">
                  <span className="font-bold shrink-0">常見錯誤：</span>
                  <span className="text-stone-400">{currentStep.commonMistake}</span>
                </div>
                <div className="text-emerald-400/90 flex items-start gap-1.5">
                  <span className="font-bold shrink-0">教練口訣：</span>
                  <span className="text-stone-300">{currentStep.fixTip}</span>
                </div>
              </div>
            </div>

            {/* Quick Figure Switcher Bar */}
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs">
              <div className="text-stone-400 mb-2 font-medium flex items-center justify-between">
                <span>切換同舞種動作花樣：</span>
                <span className="text-[11px] text-stone-500">{currentStyle.figures.length} 個套路</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStyle.figures.map((fig) => {
                  const isCurrentFig = fig.id === currentFigure.id;
                  return (
                    <span
                      key={fig.id}
                      className={`px-3 py-1.5 rounded-lg font-medium cursor-default transition-all ${
                        isCurrentFig
                          ? 'bg-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-900 text-stone-400 border border-stone-800'
                      }`}
                    >
                      {fig.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
