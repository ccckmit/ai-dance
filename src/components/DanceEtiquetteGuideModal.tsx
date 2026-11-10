import React from 'react';
import { X, Compass, ShieldCheck, Heart, Footprints, AlertCircle } from 'lucide-react';

interface DanceEtiquetteGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DanceEtiquetteGuideModal: React.FC<DanceEtiquetteGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-100 font-display">
                社交舞會禮儀與舞池安全守則 (Social Etiquette)
              </h3>
              <p className="text-xs text-stone-400">
                優雅舞者必讀：舞程線交通規則、邀舞與拒絕、身體邊界與裝備指南
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-300">
          {/* Section 1: Line of Dance */}
          <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
              <Compass className="w-4 h-4" />
              <span>01. 舞池交通心臟：舞程線 (Line of Dance, LOD)</span>
            </div>
            <p className="leading-relaxed text-stone-300 mb-3">
              在摩登社交舞會（華爾茲、探戈）中，整個舞池如同單向環形高速公路，所有伴侶必須嚴格依照<strong className="text-amber-400">「逆時針方向」</strong>環繞舞池外緣推進。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <div className="font-semibold text-stone-200 mb-1 text-emerald-400">外圈巡航道 (Fast Lane)</div>
                <div className="text-stone-400">保留給華爾茲、探戈等前進位移較大的大舞步伴侶高速流暢通過。</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <div className="font-semibold text-stone-200 mb-1 text-amber-400">中心慢速區 (Center Island)</div>
                <div className="text-stone-400">保留給原地旋轉、吉魯巴原地搖擺或新手練習基礎小幅動態。</div>
              </div>
            </div>
          </div>

          {/* Section 2: Cabeceo & Invitation */}
          <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
              <Heart className="w-4 h-4" />
              <span>02. 邀舞與拒絕的高情商藝術 (Cabeceo)</span>
            </div>
            <ul className="space-y-2 leading-relaxed text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">·</span>
                <span><strong>眼神邀舞法 (Cabeceo)</strong>：源自阿根廷探戈。在遠處與心儀舞伴對視微笑，若對方以微笑或輕微點頭回應（Mirada），方可走到其桌旁伸手相邀；若對方轉移視線，則代表委婉婉拒，雙方免除尷尬。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">·</span>
                <span><strong>禮貌拒絕</strong>：任何人都有權利因疲倦、需要喝水或想休息而拒絕共舞。一句真誠的「謝謝您，我剛跳完需要休息一下」即可，切勿冷言冷語。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">·</span>
                <span><strong>曲末護送</strong>：一曲（或探戈的一組 Tanda）結束後，領舞者應禮貌道謝，並護送舞伴回到其座位或舞池邊緣。</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Physical Boundaries & Hygiene */}
          <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>03. 身體安全界限與社交衛生禮儀</span>
            </div>
            <div className="space-y-2 text-stone-300">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>領舞保護職責</strong>：領舞者在做任何開身、旋轉前，有義務時刻環顧四周，防止跟舞者的手肘、背部或高跟鞋撞到其他舞者。</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>手部接觸原則</strong>：手掌托扶位置應在女伴肩胛骨或背部中段，切勿越界滑向腰部以下；避免用大拇指用力掐捏舞伴手腕。</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>社交衛生</strong>：隨身攜帶手帕吸汗，預備薄荷糖保持口氣清新，社交舞衣著宜透氣合身。</span>
              </div>
            </div>
          </div>

          {/* Section 4: Footwear advice */}
          <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <Footprints className="w-4 h-4" />
              <span>04. 社交舞鞋挑選指南</span>
            </div>
            <p className="leading-relaxed text-stone-300">
              標準社交舞鞋鞋底為<strong className="text-emerald-400">「翻毛牛皮底 (Suede Sole)」</strong>，提供恰到好處的摩擦力與旋轉滑動性能。嚴禁穿著戶外橡膠底跑鞋（抓地過死易扭傷膝蓋）或硬質光面皮鞋（過滑易摔跤）進入專業木地板舞池。
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors cursor-pointer"
          >
            我已知曉，返回課堂
          </button>
        </div>
      </div>
    </div>
  );
};
