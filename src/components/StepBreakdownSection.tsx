import React from 'react';
import { DanceStyle, DanceFigure, StepItem } from '../types/dance';
import { CheckCircle2, AlertTriangle, Lightbulb, Compass, Award } from 'lucide-react';

interface StepBreakdownSectionProps {
  currentStyle: DanceStyle;
  currentFigure: DanceFigure;
  activeStepIndex: number;
  onSelectStep: (idx: number) => void;
}

export const StepBreakdownSection: React.FC<StepBreakdownSectionProps> = ({
  currentStyle,
  currentFigure,
  activeStepIndex,
  onSelectStep,
}) => {
  return (
    <section id="step-breakdown" className="py-10 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium mb-1 tracking-wider uppercase">
              <span>動作分解指引</span>
              <span aria-hidden="true">·</span>
              <span>Step-by-Step Breakdown</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 font-display">
              {currentFigure.name} · 每一步拍點詳細拆解
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <Award className="w-4 h-4 text-amber-400" />
            <span>點擊任意步驟，舞池模擬器將同步定位該拍重心</span>
          </div>
        </div>

        {/* Lead & Follow General Keypoints Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Leader Keypoints */}
          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>領舞者（Leader）核心原則</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {currentFigure.leadKeypoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-mono">0{i + 1}.</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follower Keypoints */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>跟舞者（Follower）核心原則</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {currentFigure.followKeypoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 font-mono">0{i + 1}.</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step Items List */}
        <div className="space-y-3">
          {currentFigure.steps.map((step: StepItem, idx: number) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={step.id}
                onClick={() => onSelectStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-amber-500 bg-stone-900 shadow-xl shadow-amber-950/20 ring-1 ring-amber-500/30'
                    : 'border-stone-800/80 bg-stone-900/40 hover:border-stone-700 hover:bg-stone-900/80'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Step Count & Header */}
                  <div className="flex items-center gap-3.5 shrink-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center font-mono font-bold transition-colors ${
                        isActive
                          ? 'bg-amber-500 text-stone-950 shadow-md'
                          : 'bg-stone-800 text-stone-300'
                      }`}
                    >
                      <span className="text-[10px] leading-none opacity-80">STEP</span>
                      <span className="text-sm leading-none mt-0.5">{step.stepNumber}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-stone-100 font-display">
                          拍點：{step.countLabel}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            舞池焦點
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5">
                        {step.bodyMechanics}
                      </div>
                    </div>
                  </div>

                  {/* Dual Footwork mini summaries */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 lg:max-w-2xl">
                    {/* Leader Column */}
                    <div className="text-xs bg-stone-950/60 p-2.5 rounded-lg border border-stone-800/60">
                      <div className="flex items-center justify-between text-indigo-400 font-medium mb-1">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          領舞者
                        </span>
                        <span className="font-mono text-[11px] text-stone-400">
                          {step.leaderFoot.foot} 腳 · {step.leaderFoot.pos.contact === 'tap' ? '點步' : '踏步'}
                        </span>
                      </div>
                      <p className="text-stone-300 line-clamp-2">
                        {step.leaderFoot.actionDetail}
                      </p>
                    </div>

                    {/* Follower Column */}
                    <div className="text-xs bg-stone-950/60 p-2.5 rounded-lg border border-stone-800/60">
                      <div className="flex items-center justify-between text-rose-400 font-medium mb-1">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          跟舞者
                        </span>
                        <span className="font-mono text-[11px] text-stone-400">
                          {step.followerFoot.foot} 腳 · {step.followerFoot.pos.contact === 'tap' ? '點步' : '踏步'}
                        </span>
                      </div>
                      <p className="text-stone-300 line-clamp-2">
                        {step.followerFoot.actionDetail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expanded Details when selected or active */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-2 text-stone-300 bg-stone-950/80 p-3 rounded-xl border border-stone-800/80">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-stone-200 mb-0.5">防坑避雷：</div>
                        <div className="text-stone-400">{step.commonMistake}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-stone-300 bg-stone-950/80 p-3 rounded-xl border border-stone-800/80">
                      <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-400 mb-0.5">教練通關秘訣：</div>
                        <div className="text-stone-300">{step.fixTip}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Practice Tip Notice Box */}
        <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-300">
            <span className="font-bold text-amber-400 mr-1.5">專屬自主練習建議：</span>
            {currentFigure.practiceTips}
          </div>
        </div>
      </div>
    </section>
  );
};
