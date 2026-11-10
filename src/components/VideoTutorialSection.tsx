import React, { useState } from 'react';
import { DanceStyle, VideoLesson } from '../types/dance';
import { Play, Clock, User, CheckCircle, ExternalLink, Film } from 'lucide-react';

interface VideoTutorialSectionProps {
  currentStyle: DanceStyle;
}

export const VideoTutorialSection: React.FC<VideoTutorialSectionProps> = ({
  currentStyle,
}) => {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const activeLesson: VideoLesson =
    currentStyle.videoLessons[selectedLessonIndex] || currentStyle.videoLessons[0];

  return (
    <section id="video-lessons" className="py-10 bg-stone-900/30 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1 tracking-wider uppercase">
              <span>名師教學實錄</span>
              <span aria-hidden="true">·</span>
              <span>Curated Video Masterclasses</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 font-display">
              {currentStyle.chineseName} · 完整示範影片與章節速查
            </h2>
          </div>
          <p className="text-xs text-stone-400 max-w-md">
            精選國際大師與頂尖舞社示範視頻，涵蓋單人步法、雙人框架引帶與常犯失誤現場示範。
          </p>
        </div>

        {/* Video Lesson Selector Tabs if multiple lessons */}
        {currentStyle.videoLessons.length > 1 && (
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
            {currentStyle.videoLessons.map((lesson, idx) => {
              const isSelected = idx === selectedLessonIndex;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonIndex(idx);
                    setActiveChapterIndex(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>課堂 {idx + 1}：{lesson.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Video Sandbox Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: The Embedded Video Player & Overview (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-4 sm:p-5 shadow-2xl overflow-hidden">
            {/* Video Container (16:9) */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeLesson.youtubeId}?rel=0`}
                title={activeLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Metadata Header */}
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mb-1.5">
                <span className="flex items-center gap-1 text-amber-400 font-medium">
                  <User className="w-3.5 h-3.5" />
                  {activeLesson.instructor}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {activeLesson.duration}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentStyle.meter}</span>
              </div>

              <h3 className="text-lg font-bold text-stone-100 font-display">
                {activeLesson.title}
              </h3>

              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                {activeLesson.summary}
              </p>
            </div>

            {/* Direct YouTube link escape hatch */}
            <div className="mt-4 pt-3 border-t border-stone-850 flex items-center justify-between text-[11px] text-stone-400">
              <span>播放遇到問題？可直接前往官方頻道收看</span>
              <a
                href={`https://www.youtube.com/watch?v=${activeLesson.youtubeId}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
              >
                <span>在 YouTube 開啟</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Chapters & Key Takeaways Checklist (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Video Chapters Box */}
            <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-stone-100 font-display">
                    課程章節時間軸 ({activeLesson.chapters.length})
                  </h4>
                </div>
                <span className="text-[11px] text-stone-400">點擊查看章節要點</span>
              </div>

              <div className="space-y-2">
                {activeLesson.chapters.map((chap, idx) => {
                  const isCurrent = idx === activeChapterIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveChapterIndex(idx)}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between gap-3 border cursor-pointer ${
                        isCurrent
                          ? 'bg-stone-800 text-stone-100 border-amber-500/60 shadow-sm'
                          : 'bg-stone-950/60 text-stone-400 border-stone-800/80 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono shrink-0 ${
                            isCurrent
                              ? 'bg-amber-500 text-stone-950 font-bold'
                              : 'bg-stone-850 text-stone-400'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="truncate font-medium">{chap.title}</span>
                      </div>
                      <span className="font-mono text-[11px] text-amber-400/90 shrink-0">
                        {chap.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Master Key Takeaways Checklist */}
            <div className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-800 mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-stone-100 font-display">
                  本課專業必背口訣
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs text-stone-300">
                {activeLesson.keyTakeaways.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-stone-950/60 p-2.5 rounded-lg border border-stone-850">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
