import React from 'react';
import { Sparkles, Camera, Compass } from 'lucide-react';

interface TopNavProps {
  onOpenMirror: () => void;
  onOpenCoach: () => void;
  onOpenEtiquette: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenMirror,
  onOpenCoach,
  onOpenEtiquette,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 px-6 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-950/40 text-stone-950 font-bold text-base">
            R
          </span>
          <span className="text-xl font-bold tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors font-display">
            RitmoDance
          </span>
          <span className="text-xs text-stone-400 hidden sm:inline-block font-normal">
            社交舞互動學院
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#dance-styles" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            舞種選擇
          </a>
          <a href="#dance-floor" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            動態舞池
          </a>
          <a href="#step-breakdown" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            步驟分解
          </a>
          <a href="#video-lessons" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            教學影片
          </a>
          <button
            onClick={onOpenEtiquette}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-stone-300 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-500" />
            舞池禮儀
          </button>
        </nav>

        {/* Zone 3: Primary Action buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenMirror}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-700 bg-stone-900/80 text-stone-200 hover:text-white hover:border-amber-500/60 hover:bg-stone-850 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            title="開啟前鏡頭作為舞蹈教室全身鏡自主對齊"
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>鏡子練習</span>
          </button>

          <button
            onClick={onOpenCoach}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-stone-950 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer shadow-md shadow-rose-950/30 active:scale-95"
            title="諮詢 AI 舞伴顧問"
          >
            <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
            <span>AI 舞步顧問</span>
          </button>
        </div>
      </div>
    </header>
  );
};
