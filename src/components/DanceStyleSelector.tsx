import React from 'react';
import { DanceStyle, DanceId } from '../types/dance';
import { Music, Activity } from 'lucide-react';

interface DanceStyleSelectorProps {
  styles: DanceStyle[];
  activeStyleId: DanceId;
  onSelectStyle: (id: DanceId) => void;
}

export const DanceStyleSelector: React.FC<DanceStyleSelectorProps> = ({
  styles,
  activeStyleId,
  onSelectStyle,
}) => {
  return (
    <section id="dance-styles" className="py-6 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1 tracking-wider uppercase">
              <span>五大經典社交舞</span>
              <span aria-hidden="true">·</span>
              <span>Syllabus Dance Styles</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 font-display">
              選擇舞種，踏上舞池
            </h2>
          </div>
          <p className="text-xs text-stone-400 max-w-md">
            涵蓋拉丁風情、復古搖擺與摩登宮廷舞步。點擊切換專屬節奏律動機、動態腳印舞池與專業教練分解。
          </p>
        </div>

        {/* 5 Dance Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {styles.map((style) => {
            const isActive = style.id === activeStyleId;
            return (
              <button
                key={style.id}
                onClick={() => onSelectStyle(style.id)}
                className={`group relative text-left rounded-xl overflow-hidden transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-xl shadow-amber-950/20 translate-y-[-2px]'
                    : 'border-stone-800/80 bg-stone-900/60 hover:border-stone-700 hover:bg-stone-850'
                }`}
              >
                {/* Image Aspect ratio container with overlay */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src={style.heroImage}
                    alt={`${style.chineseName} ${style.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

                  {/* Active highlight pill */}
                  {isActive && (
                    <div className="absolute top-2.5 right-2.5 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow">
                      現正學習
                    </div>
                  )}

                  {/* Meter badge */}
                  <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 text-[11px] text-stone-300">
                    <Music className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{style.meter}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-3.5 bg-stone-900/90">
                  <div className="flex items-baseline gap-1.5">
                    <h3 className={`text-base font-bold font-display ${isActive ? 'text-amber-400' : 'text-stone-100 group-hover:text-stone-200'}`}>
                      {style.chineseName}
                    </h3>
                    <span className="text-xs text-stone-400 font-normal">
                      {style.name}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                    {style.subtitle}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="truncate max-w-[90px]">{style.origin.split(' ')[0]}</span>
                    <span className="flex items-center gap-1 tabular-nums font-mono text-[10px] text-amber-400/90">
                      <Activity className="w-2.5 h-2.5" />
                      {style.defaultBpm} BPM
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
