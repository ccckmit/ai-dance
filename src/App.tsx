import React, { useState } from 'react';
import { DANCE_STYLES } from './data/danceData';
import { DanceId, DanceStyle, DanceFigure } from './types/dance';
import { TopNav } from './components/TopNav';
import { DanceStyleSelector } from './components/DanceStyleSelector';
import { DanceFloorSimulator } from './components/DanceFloorSimulator';
import { StepBreakdownSection } from './components/StepBreakdownSection';
import { VideoTutorialSection } from './components/VideoTutorialSection';
import { MirrorPracticeModal } from './components/MirrorPracticeModal';
import { AiDanceCoachModal } from './components/AiDanceCoachModal';
import { DanceEtiquetteGuideModal } from './components/DanceEtiquetteGuideModal';
import { Sparkles, Music2, Disc3, BookOpen, Compass, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeStyleId, setActiveStyleId] = useState<DanceId>('bachata');
  const [activeFigureIndex, setActiveFigureIndex] = useState<number>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Modals state
  const [isMirrorOpen, setIsMirrorOpen] = useState<boolean>(false);
  const [isCoachOpen, setIsCoachOpen] = useState<boolean>(false);
  const [isEtiquetteOpen, setIsEtiquetteOpen] = useState<boolean>(false);

  const currentStyle: DanceStyle =
    DANCE_STYLES.find((s) => s.id === activeStyleId) || DANCE_STYLES[0];

  const currentFigure: DanceFigure =
    currentStyle.figures[activeFigureIndex] || currentStyle.figures[0];

  const handleSelectStyle = (id: DanceId) => {
    setActiveStyleId(id);
    setActiveFigureIndex(0);
    setActiveStepIndex(0);
  };

  const handleSelectFigure = (idx: number) => {
    setActiveFigureIndex(idx);
    setActiveStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* 1. Header adhering to Top Bar Contract */}
      <TopNav
        onOpenMirror={() => setIsMirrorOpen(true)}
        onOpenCoach={() => setIsCoachOpen(true)}
        onOpenEtiquette={() => setIsEtiquetteOpen(true)}
      />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-10 border-b border-stone-850">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-600/15 via-rose-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-3 tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>全方互動社交舞教學系統</span>
              <span aria-hidden="true">·</span>
              <span>Social Ballroom & Latin Academy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-100 font-display leading-[1.15] text-balance">
              以精確足跡與節奏律動，解鎖社交舞的迷人靈魂
            </h1>

            <p className="mt-4 text-sm sm:text-base text-stone-400 leading-relaxed max-w-2xl">
              專為零基礎與進階舞者打造。收錄熱情巴洽達（Bachata）、切分莎莎（Salsa）、美式吉魯巴（Jitterbug）、戲劇探戈（Tango）與優雅華爾茲（Waltz），搭配動態雙人舞池模擬器、節奏合成器與詳細步驟分解。
            </p>

            {/* Quick action buttons & stat markers */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <a
                href="#dance-floor"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
              >
                <span>立即開啟動態舞池</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsMirrorOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 text-stone-200 border border-stone-800 font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>開啟全身鏡對位</span>
              </button>

              <button
                onClick={() => setIsCoachOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 text-amber-400 border border-stone-800 font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>諮詢 AI 舞伴顧問</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dance Style Selector (5 styles) */}
      <DanceStyleSelector
        styles={DANCE_STYLES}
        activeStyleId={activeStyleId}
        onSelectStyle={handleSelectStyle}
      />

      {/* 4. Active Dance Style Spotlight & Musicality Structure */}
      <section className="py-6 bg-stone-900/20 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Style cultural profile (7 cols) */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1">
                  <span>舞種文化與風格核心</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentStyle.origin}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-100 font-display mb-2">
                  {currentStyle.chineseName} ({currentStyle.name})：{currentStyle.subtitle}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {currentStyle.description}
                </p>
                <p className="text-xs text-stone-400 leading-relaxed mt-2">
                  {currentStyle.culturalBackground}
                </p>
              </div>

              {/* Action figure selector pills */}
              <div className="mt-5 pt-4 border-t border-stone-850">
                <div className="text-xs font-semibold text-stone-300 mb-2 flex items-center justify-between">
                  <span>當前動作模式（Figure）：</span>
                  <span className="text-[11px] text-stone-400 font-normal">
                    切換不同套路查看腳法
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentStyle.figures.map((fig, idx) => {
                    const isSelected = idx === activeFigureIndex;
                    return (
                      <button
                        key={fig.id}
                        onClick={() => handleSelectFigure(idx)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                            : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200 hover:border-stone-700'
                        }`}
                      >
                        {fig.name} ({fig.englishName})
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Musicality & Percussion Card (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1">
                  <Music2 className="w-3.5 h-3.5" />
                  <span>樂理與節奏聽音指南 (Musicality)</span>
                </div>
                <h4 className="text-base font-bold text-stone-100 font-display mb-3">
                  拍子口訣與樂器解析
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-850">
                    <span className="text-amber-400 font-semibold block mb-0.5">節奏結構：</span>
                    <span className="text-stone-300">{currentStyle.musicalityGuide.rhythmStructure}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-850">
                    <span className="text-amber-400 font-semibold block mb-0.5">標誌打擊樂器：</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {currentStyle.musicalityGuide.percussionInstruments.map((inst, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[11px]"
                        >
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-850">
                    <span className="text-amber-400 font-semibold block mb-0.5">數拍口訣與重心：</span>
                    <span className="text-stone-300">{currentStyle.musicalityGuide.countingRule}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-850 text-[11px] text-stone-400 flex items-center justify-between">
                <span>預設速度: <strong className="text-stone-200">{currentStyle.bpmRange}</strong></span>
                <span className="text-emerald-400">● 節奏器音頻已同步</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive SVG Dance Floor Simulator */}
      <DanceFloorSimulator
        currentStyle={currentStyle}
        currentFigure={currentFigure}
        activeStepIndex={activeStepIndex}
        onStepChange={setActiveStepIndex}
      />

      {/* 6. Step-by-Step Breakdown Accordions / Tables */}
      <StepBreakdownSection
        currentStyle={currentStyle}
        currentFigure={currentFigure}
        activeStepIndex={activeStepIndex}
        onSelectStep={setActiveStepIndex}
      />

      {/* 7. Curated Video Lessons Suite */}
      <VideoTutorialSection currentStyle={currentStyle} />

      {/* 8. Dance Etiquette Highlights Banner */}
      <section className="py-8 bg-stone-950 border-b border-stone-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-stone-850 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-stone-100 font-display">
                  社交舞會現場黃金禮儀 (Milonga & Social Etiquette)
                </h4>
                <p className="text-xs text-stone-400 mt-1 max-w-xl">
                  掌握逆時針舞程線（Line of Dance）、眼神邀舞法（Cabeceo）、手部安全界限與翻毛皮底舞鞋注意事項，讓你在任何社交舞池都能從容得體。
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEtiquetteOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              閱讀舞池禮儀規範
            </button>
          </div>
        </div>
      </section>

      {/* 9. Modals */}
      <MirrorPracticeModal
        isOpen={isMirrorOpen}
        onClose={() => setIsMirrorOpen(false)}
        currentStyle={currentStyle}
      />

      <AiDanceCoachModal
        isOpen={isCoachOpen}
        onClose={() => setIsCoachOpen(false)}
        currentStyle={currentStyle}
      />

      <DanceEtiquetteGuideModal
        isOpen={isEtiquetteOpen}
        onClose={() => setIsEtiquetteOpen(false)}
      />

      {/* 10. Footer */}
      <footer className="py-8 px-6 bg-stone-950 border-t border-stone-900 text-stone-500 text-xs mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-300 font-display">RitmoDance</span>
            <span>· 社交舞互動學院</span>
            <span aria-hidden="true">·</span>
            <span>Bachata · Salsa · 吉魯巴 · 探戈 · 華爾茲</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>雙人舞姿互動教學</span>
            <span aria-hidden="true">·</span>
            <span>Web Audio 節奏合成技術</span>
            <span aria-hidden="true">·</span>
            <span>© 2026 RitmoDance</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
