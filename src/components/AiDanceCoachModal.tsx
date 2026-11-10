import React, { useState } from 'react';
import { X, Sparkles, Send, MessageSquare, Bot, User, Check, RefreshCw } from 'lucide-react';
import { DanceStyle } from '../types/dance';

interface AiDanceCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStyle: DanceStyle;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  time: string;
}

const PRESET_QUESTIONS = [
  '巴洽達 (Bachata) 的骨盆提臀點步 (Hip Pop) 怎麼練才不生硬？',
  '莎莎舞 (Salsa) 在快節奏 (180+ BPM) 下如何保持前腳掌輕盈？',
  '吉魯巴 (Jitterbug) 的 Rock-Step 後踩怎樣避免拉扯舞伴？',
  '探戈 (Tango) 走步如何保持絕對的水平滑行、不上下顛簸？',
  '華爾茲 (Waltz) 升降 (Rise & Fall) 的黃金節拍口訣是什麼？',
  '舞會社交禮儀：如何得體地邀請舞伴與拒絕？',
];

const LOCAL_KNOWLEDGE_BASE: Record<string, string> = {
  '巴洽達': `【巴洽達 (Bachata) 提臀點步核心秘訣】
1. **不要刻意扭腰**：提臀動作（Hip Pop）不是靠腰椎死扭，而是來自支撐腿「膝蓋彎曲」與「腳踩入地板」，帶動對側側腹肌自然微縮。
2. **重心絕對零負擔**：第 4 拍與第 8 拍的點步（Tap），那隻腳底是「空」的！如果放了任何體重，第 5 拍與第 1 拍就無法俐落跨出。
3. **呼吸與音樂配合**：想像腳尖是在敲擊一個小鈴鐺，發出短促清脆的叮一聲，隨即收回。
4. **自主練習**：背靠一面牆，練習原地 1-2-3-Tap，背部始終貼牆，確認骨盆是在冠狀面（左右）律動，而非臀部後翹撞牆。`,

  '莎莎': `【莎莎舞 (Salsa) 快速步法的輕盈法則】
1. **永遠站在前腳掌 (Balls of the feet)**：腳跟不要重踩砸地！如同在微熱的地面上小跑，腳踝充滿彈性。
2. **步伐小而緊湊**：速度越快，步子越要收小。步長不超過自己鞋長的 1.5 倍。
3. **第 4 拍與第 8 拍的暫停 (Pause)**：Salsa 不是一直狂踩，而是「快、快、慢」。第 4 拍與第 8 拍是身體延伸與蓄力，這是 Latin 味道的靈魂。
4. **彈簧手臂 (Spring frame)**：手臂像兩根微彎的彈簧，保持一定的抗阻力（Resistance），不要變成軟綿綿的麵條，也不要變成鐵棍。`,

  '吉魯巴': `【吉魯巴 (Jitterbug) 搖擺後踩 (Rock-Step) 技巧】
1. **後踩距離控制在 20 公分內**：新手最容易在第 5 拍大跨步後退，結果把女伴硬拉過來失衡。只要微退半腳掌，利用前腳掌點地即可。
2. **持續的屈膝彈跳 (Pulse)**：雙膝不要打直，隨時保持 10-15 度的放鬆微屈，如同在踩蹦床。
3. **握手方式**：領舞者右手掌微曲成鉤狀，女伴手掌搭上，雙方像兩隻相扣的掛鉤，不要用大拇指去死捏對方手背！`,

  '探戈': `【探戈 (Tango) 貓步潛行與消除上下顛簸】
1. **鎖定膝蓋高度**：在出步前，雙膝微屈並將身體重心沉入骨盆。在整個走步過程（Slow, Slow, Quick, Quick, Slow），頭頂高度保持一條絕對水平線。
2. **前腳跟先落地 (Heel Lead)**：前進走步時，前腳由腳跟著地，平滑滾動到腳掌；後腳掌緊貼地板，如同黑豹在雪地潛行。
3. **斷奏定格 (Staccato Close)**：Tango Close 時，左腳迅速靠向右腳，呼吸瞬間屏息定格，展現極致張力。
4. **絕對禁止升降**：嚴禁任何華爾茲的掂腳尖上升！探戈是屬於大地的舞蹈。`,

  '華爾茲': `【華爾茲 (Waltz) 升降 (Rise & Fall) 節拍法則】
1. **第 1 拍 (Down)**：向前邁步，腳跟著地，膝蓋深沉彎曲，重心降至最低點（為擺盪蓄能）。
2. **第 2 拍 (Rise)**：側邁擺盪，由腳掌開始推動身體向斜上方舒展上升。
3. **第 3 拍 (Up & Lower)**：腳尖併步達到拋物線最高點；在第 3 拍末尾（and 拍），膝蓋柔美放鬆降回，流暢過渡到下一個第 1 拍。
4. **口訣**：「降——升——降（Down, Rise, Lower）」。升降來自關節屈伸，切忌抬起肩膀！`,

  '禮儀': `【社交舞會黃金禮儀 (Milonga & Social Etiquette)】
1. **舞程線 (Line of Dance)**：逆時針環繞舞池外圈前進，外圈走快步，內圈停頓做小招式。切勿逆行追撞！
2. **邀請禮儀**：
   - 探戈：使用「Cabeceo（眼神邀舞）」，先在遠處以微笑目光致意，對方點頭後再紳士上前。
   - 其他社交舞：面帶微笑走到舞者身前微微躬身邀請：「請問能與您跳這首曲子嗎？」
   - 尊重拒絕：若對方表示需要休息，請微笑致謝「好的，請多休息」，切勿死纏爛打。
3. **安全第一**：領舞者的第一職責是保護舞伴，避免在擁擠舞池做過度激烈的甩腿或大旋轉。`
};

export const AiDanceCoachModal: React.FC<AiDanceCoachModalProps> = ({
  isOpen,
  onClose,
  currentStyle,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: `你好！我是你的社交舞 AI 私人教練。目前你正在研習【${currentStyle.chineseName} (${currentStyle.name})】。\n\n不論是巴洽達的提臀律動、莎莎的切分張力、吉魯巴的搖擺彈跳、探戈的貓步定格，還是華爾茲的升降擺盪，或者舞會舞池禮儀，隨時向我提問！`,
      time: '剛剛',
    },
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Generate responsive dance response
    setTimeout(() => {
      let reply = '';

      if (text.includes('巴洽達') || text.includes('Bachata') || text.includes('提臀') || text.includes('Tap')) {
        reply = LOCAL_KNOWLEDGE_BASE['巴洽達'];
      } else if (text.includes('莎莎') || text.includes('Salsa') || text.includes('快節奏') || text.includes('前腳掌')) {
        reply = LOCAL_KNOWLEDGE_BASE['莎莎'];
      } else if (text.includes('吉魯巴') || text.includes('Jitterbug') || text.includes('搖擺') || text.includes('Rock')) {
        reply = LOCAL_KNOWLEDGE_BASE['吉魯巴'];
      } else if (text.includes('探戈') || text.includes('Tango') || text.includes('貓步') || text.includes('顛簸') || text.includes('定格')) {
        reply = LOCAL_KNOWLEDGE_BASE['探戈'];
      } else if (text.includes('華爾茲') || text.includes('Waltz') || text.includes('升降') || text.includes('擺盪')) {
        reply = LOCAL_KNOWLEDGE_BASE['華爾茲'];
      } else if (text.includes('禮儀') || text.includes('邀請') || text.includes('拒絕') || text.includes('舞程線')) {
        reply = LOCAL_KNOWLEDGE_BASE['禮儀'];
      } else {
        reply = `針對你提到的「${text}」，在【${currentStyle.chineseName}】中有幾個關鍵實戰原則：\n\n1. **重心轉移（Weight Transfer）**：每邁出一步都要確認體重完全落在新支撐腳上，骨盆自然沈入該側。\n2. **框架連接（Frame Connection）**：保持胸腔挺拔向上，雙手給予彈性輕托，不要用手指死抓舞伴。\n3. **音樂拍點**：數拍時在心裡默唸重音位置，多配合舞池模擬器與節拍器進行慢速練習。\n\n如果有具體的動作細節想深入拆解，歡迎繼續問我！`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'coach',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[650px] max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-stone-950 flex items-center justify-center shadow-lg font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-stone-100 font-display">
                  AI 社交舞步顧問
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  在線指導
                </span>
              </div>
              <p className="text-xs text-stone-400">
                專精拉丁美洲舞、美式搖擺舞與歐洲摩登宮廷舞技術拆解
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

        {/* Preset chips */}
        <div className="px-6 py-2.5 bg-stone-950/50 border-b border-stone-850 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-amber-500 font-medium shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 常見提問：
          </span>
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] text-stone-300 bg-stone-850 hover:bg-stone-800 hover:text-amber-400 border border-stone-750 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30 text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    isUser
                      ? 'bg-amber-500 text-stone-950 font-medium rounded-br-none shadow-md'
                      : 'bg-stone-950 text-stone-200 border border-stone-800 rounded-bl-none shadow'
                  }`}
                >
                  <div className="whitespace-pre-line">{m.text}</div>
                  <div
                    className={`text-[9px] mt-1.5 text-right ${
                      isUser ? 'text-stone-900/60' : 'text-stone-500'
                    }`}
                  >
                    {m.time}
                  </div>
                </div>
                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30 text-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-stone-950 border border-stone-800 text-stone-400 rounded-2xl px-4 py-2.5 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-300" />
                <span className="ml-1 text-[11px]">教練正在解析舞步機制...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="p-4 bg-stone-950 border-t border-stone-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={`詢問關於【${currentStyle.chineseName}】或任何舞步技巧...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-stone-900 border border-stone-850 rounded-xl px-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-stone-950 font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-amber-500/20"
            >
              <span>發送</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
