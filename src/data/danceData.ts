import { DanceStyle } from '../types/dance';

export const DANCE_STYLES: DanceStyle[] = [
  {
    id: 'bachata',
    name: 'Bachata',
    chineseName: '巴洽達',
    subtitle: '熱情柔美 · 多明尼加浪漫靈魂',
    origin: '多明尼加共和國 (Dominican Republic)',
    meter: '4/4 拍',
    bpmRange: '120 - 140 BPM',
    defaultBpm: 128,
    heroImage: '/src/assets/images/dance_bachata_sensual_1794290248413.jpg',
    accentColor: '#F59E0B',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    description: '巴洽達起源於多明尼加鄉間，以親暱的四拍循環律動、標誌性的第4拍提臀點步（Tap/Pop）與柔美的骨盆重心轉移為靈魂。現代更演化出色澤浪漫的 Sensual 風格。',
    culturalBackground: '最初被視為多明尼加民間抒發情愁的吉他情歌，如今風靡全球社交舞池。跳巴洽達強調「腳底親吻地板，重心連貫流暢，第4拍以骨盆提臀點步俐落收尾」。',
    musicalityGuide: {
      rhythmStructure: '8 拍大循環，由兩個 4 拍小節組成（1-2-3-點, 5-6-7-點）。',
      percussionInstruments: ['崩哥鼓 (Bongo Martillo)', '刮瓜 (Güira)', '巴洽達吉他 (Requinto)'],
      countingRule: '第 1、2、3 拍踩實帶有古巴臀律動（Cuban Motion），第 4 拍為「Tap 腳尖點地」伴隨骨盆微提，不移轉重心。',
      bodyIsolationTip: '骨盆與胸腔維持獨立。踩左腳時骨盆微送向左，踩右腳向右，膝蓋永遠保持微彎微彈（soft knees）。',
    },
    figures: [
      {
        id: 'bachata-basic-side',
        name: '橫向基本步',
        englishName: 'Basic Side Step',
        level: '入門入門',
        timeSignature: '4/4',
        bpm: 128,
        description: '巴洽達最靈魂的核心步法。男女舞伴鏡像移動，領舞者先向左移 4 拍，再向右移 4 拍。',
        leadKeypoints: [
          '第 1 拍左腳向左側跨步，重心完全踩實',
          '第 2 拍右腳併靠左腳踩實',
          '第 3 拍左腳再度向左側跨',
          '第 4 拍右腳尖在左腳旁輕點 (Tap)，骨盆右側微提，重心仍留在左腳',
          '第 5-8 拍鏡像反向向右移動'
        ],
        followKeypoints: [
          '跟隨者右腳向右跨出，保持框架輕柔彈性連接',
          '第 4 拍左腳點地 (Tap)，感受男士骨盆導向的停頓點',
          '第 5-8 拍向左側回移'
        ],
        practiceTips: '點步（Tap）時絕對不要把體重壓上去！第 4 拍如果踩實重心，第 5 拍就無法俐落換腳。',
        steps: [
          {
            id: 'b-bs-1',
            stepNumber: 1,
            countLabel: '1 (重拍)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 38, y: 55, angle: 0, contact: 'flat', weight: 1, action: '左腳側跨一步' },
              actionDetail: '左腳平穩向左跨出約肩寬，膝蓋微彎沉入地板，帶動身體向左微移。',
              leadCue: '右手掌輕托女士背部中段，以核心驅動向左平移，切忌用手臂硬拉。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 62, y: 45, angle: 180, contact: 'flat', weight: 1, action: '右腳側跨一步' },
              actionDetail: '右腳向右側跨出，感受領舞者核心移動信號，重心平順移至右足。',
              followCue: '左手放鬆輕搭男士三角肌，感受軀幹位移。'
            },
            bodyMechanics: '重心沉入膝關節，產生自然的橫向古巴臀部擺幅（Cuban Hip Motion）。',
            commonMistake: '膝蓋僵直、腳步過大像跑步跳躍。',
            fixTip: '想像在低天花板下跳舞，維持身體水平線，步幅不超過肩膀寬度。'
          },
          {
            id: 'b-bs-2',
            stepNumber: 2,
            countLabel: '2 (併步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 44, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳併向左腳' },
              actionDetail: '右腳靠攏至左腳旁約一個拳頭距離，重心轉移至右腳。',
              leadCue: '維持上半身框架穩定，手指不施加任何捏緊力量。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 56, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳併向右腳' },
              actionDetail: '左腳收回併步，踩實並承載體重。',
              followCue: '維持胸椎挺拔，雙腳掌內緣微刷過地板收回。'
            },
            bodyMechanics: '換腳過度期間臀部維持水平滾動，避免上下浮動。',
            commonMistake: '右腳併步時兩腳打架、或腳步過分外八。',
            fixTip: '雙腳掌保持平行微向前方，內側收攏。'
          },
          {
            id: 'b-bs-3',
            stepNumber: 3,
            countLabel: '3 (開步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 34, y: 55, angle: 0, contact: 'flat', weight: 1, action: '左腳再度側跨' },
              actionDetail: '左腳再次向左側平緩伸出，完全移轉重心，為第 4 拍提臀作準備。',
              leadCue: '身體重心送往左側，給出清晰的支撐腿信號。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 66, y: 45, angle: 180, contact: 'flat', weight: 1, action: '右腳再度側跨' },
              actionDetail: '右腳向右側邁步，完全踩實。',
              followCue: '準備迎接第 4 拍的 Tap，確認右腿成為單一支撐柱。'
            },
            bodyMechanics: '支撐腳踩入地板，對側髖骨自然放鬆。',
            commonMistake: '身體前傾過多或後仰。',
            fixTip: '脊椎延伸朝天花板，耳朵、肩膀、骨盆在垂直線上。'
          },
          {
            id: 'b-bs-4',
            stepNumber: 4,
            countLabel: '4 (Tap 提臀點步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 40, y: 55, angle: -10, contact: 'tap', weight: 0, action: '右腳尖點地，右臀微提' },
              actionDetail: '右腳尖輕點在左腳旁，重心 100% 留在左腳！右臀向上自然提起（Hip Pop）。',
              leadCue: '微收腹部，帶動右側肋骨與骨盆微提，讓女伴感知到這是一個「標點符號」。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 60, y: 45, angle: 170, contact: 'tap', weight: 0, action: '左腳尖點地，左臀微提' },
              actionDetail: '左腳尖點地，重心 100% 在右腳，左臀自然微俏提臀。',
              followCue: '千萬別踩下重心！確認左腳可以隨時自由抬起。'
            },
            bodyMechanics: '巴洽達的標誌性靈魂拍！由非支撐腿一側的側腰腹斜肌微收，帶動骨盆俏皮抬起。',
            commonMistake: '誤把重心踩上去，導致第 5 拍無法順利出右腳。',
            fixTip: '練習時可以在點步時試著微抬該腳，確保完全沒有重量。'
          },
          {
            id: 'b-bs-5',
            stepNumber: 5,
            countLabel: '5 (反向重拍)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 46, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳向右側跨出' },
              actionDetail: '剛才點地的右腳順勢向右跨步踩實，開啟第二小節。',
              leadCue: '向右平穩移轉核心。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 54, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳向左側跨出' },
              actionDetail: '左腳向左側平緩跨步踩實。',
              followCue: '隨男士引帶反向向左移動。'
            },
            bodyMechanics: '流暢向反方向過渡，骨盆從右向左舒展。',
            commonMistake: '起步遲疑或腳步拖沓。',
            fixTip: '第 4 拍的 Tap 正好提供了反向發力的彈性儲備。'
          },
          {
            id: 'b-bs-6',
            stepNumber: 6,
            countLabel: '6 (反向併步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 40, y: 55, angle: 0, contact: 'flat', weight: 1, action: '左腳併向右腳' },
              actionDetail: '左腳收回併步踩實。',
              leadCue: '保持手掌輕貼，背肌穩定。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 60, y: 45, angle: 180, contact: 'flat', weight: 1, action: '右腳併向左腳' },
              actionDetail: '右腳併攏踩實。',
              followCue: '保持胸口正對舞伴。'
            },
            bodyMechanics: '兩側軀幹均勻呼吸，放鬆雙肩。',
            commonMistake: '低頭看腳掌。',
            fixTip: '視線保持平視，看向舞伴右肩上方。'
          },
          {
            id: 'b-bs-7',
            stepNumber: 7,
            countLabel: '7 (反向開步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳再度側跨' },
              actionDetail: '右腳向右側跨步踩實。',
              leadCue: '引領身體向右延伸。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳再度側跨' },
              actionDetail: '左腳向左側跨步踩實。',
              followCue: '重心穩固移至左腿。'
            },
            bodyMechanics: '右側大腿承重，右側臀部微向下沉入地面。',
            commonMistake: '過度扭動造成關節負擔。',
            fixTip: '骨盆運動源於腳底推地與膝蓋交替彎曲，而非刻意扭腰。'
          },
          {
            id: 'b-bs-8',
            stepNumber: 8,
            countLabel: '8 (Tap 提臀點步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 46, y: 55, angle: 10, contact: 'tap', weight: 0, action: '左腳尖點地，左臀微提' },
              actionDetail: '左腳尖在右腳旁點地，重心留在右腳，左臀微提完成 8 拍大循環。',
              leadCue: '給予清晰的循環結束與準備下一循環的彈性。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 54, y: 45, angle: 190, contact: 'tap', weight: 0, action: '右腳尖點地，右臀微提' },
              actionDetail: '右腳尖在左腳旁點地，重心留在左腳。',
              followCue: '右腿放鬆，準備下一個第 1 拍向右跨步。'
            },
            bodyMechanics: '完美閉環。此時重心在右側，左腳自由，下一拍可隨時再出左腳。',
            commonMistake: '第 8 拍身體搖晃失衡。',
            fixTip: '收緊核心（腹橫肌），腳下如同生根。'
          }
        ]
      },
      {
        id: 'bachata-forward-back',
        name: '前後基本步',
        englishName: 'Forward & Backward Step',
        level: '入門入門',
        timeSignature: '4/4',
        bpm: 128,
        description: '在狹窄或擁擠的社交舞池中最實用的步法，透過前後線性位移營造親密的節奏流動。',
        leadKeypoints: [
          '第 1-3 拍左腳起步向前走三步，第 4 拍右腳 Tap',
          '第 5-7 拍右腳退後走三步，第 8 拍左腳 Tap',
          '胸腔保持對向，步伐大小與舞伴保持等距'
        ],
        followKeypoints: [
          '第 1-3 拍由右腳起步向後退三步',
          '保持背部中段與男士引帶的貼合感',
          '後退時以腳尖先著地再滾動至全腳掌'
        ],
        practiceTips: '後退的人切記不要翹屁股，維持骨盆在中立位，膝蓋微彎緩衝。',
        steps: [
          {
            id: 'b-fb-1',
            stepNumber: 1,
            countLabel: '1 (前進)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 45, y: 45, angle: 0, contact: 'flat', weight: 1, action: '左腳前進一步' },
              actionDetail: '左腳向前直行邁出半步，重心平穩前移。',
              leadCue: '上身框架微微前傾，以胸骨帶動女伴後退。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 55, y: 55, angle: 180, contact: 'ball', weight: 1, action: '右腳後退一步' },
              actionDetail: '右腳尖先向後著地，順暢滾動至腳跟，接納男士引帶。',
              followCue: '背部給予均勻微彈性阻抗，不主動大步後逃。'
            },
            bodyMechanics: '重心轉換順暢，如同在沙灘上留下清晰腳印。',
            commonMistake: '男士大步踩踏、女士被動後仰。',
            fixTip: '步長約一人腳長，維持貼身框架穩定。'
          },
          {
            id: 'b-fb-2',
            stepNumber: 2,
            countLabel: '2 (前進跟隨)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 55, y: 40, angle: 0, contact: 'flat', weight: 1, action: '右腳前進超越' },
              actionDetail: '右腳前進一步，重心完全轉移。',
              leadCue: '維持右手對女士肩胛骨的支撐。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 45, y: 60, angle: 180, contact: 'flat', weight: 1, action: '左腳後退一步' },
              actionDetail: '左腳後退踩實，重心換至左腳。',
              followCue: '維持胸口正對男士，頭部微微向左後方展延。'
            },
            bodyMechanics: '雙腳交替時維持雙膝平行微觸。',
            commonMistake: '雙腳大開八字。',
            fixTip: '雙腿內側肌肉微微夾緊（內收肌作動）。'
          },
          {
            id: 'b-fb-3',
            stepNumber: 3,
            countLabel: '3 (前進停頓點)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 45, y: 35, angle: 0, contact: 'flat', weight: 1, action: '左腳前進站穩' },
              actionDetail: '左腳最後一步前進，完全承重。',
              leadCue: '微收核心，示意前進階段即將結束。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 55, y: 65, angle: 180, contact: 'flat', weight: 1, action: '右腳後退站穩' },
              actionDetail: '右腳站穩承重。',
              followCue: '準備第 4 拍 Tap 提臀。'
            },
            bodyMechanics: '為 Tap 預備蓄力。',
            commonMistake: '衝力過猛煞不住車。',
            fixTip: '第 3 拍要有清晰的重心落地沉降感。'
          },
          {
            id: 'b-fb-4',
            stepNumber: 4,
            countLabel: '4 (Tap 提臀)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 53, y: 35, angle: -5, contact: 'tap', weight: 0, action: '右腳旁點，右臀提' },
              actionDetail: '右腳在左腳旁點地無重量，右臀微提。',
              leadCue: '身體垂直線保持挺拔，示意準備轉向後退。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 47, y: 65, angle: 175, contact: 'tap', weight: 0, action: '左腳旁點，左臀提' },
              actionDetail: '左腳尖點地，左臀微提，重心純在右腳。',
              followCue: '準備下拍向前反擊出步。'
            },
            bodyMechanics: '骨盆微傾斜斜提，視覺律動極其優雅。',
            commonMistake: '重心換到點地腳。',
            fixTip: '無負重點步，像用腳尖敲擊小鈴鐺。'
          }
        ]
      },
      {
        id: 'bachata-turn-inside',
        name: '女士內外旋轉步',
        englishName: 'Underarm Inside & Outside Turn',
        level: '基礎核心',
        timeSignature: '4/4',
        bpm: 128,
        description: '社交舞會中出場率最高的旋轉技法，男士以左手舉過頭頂形成拱門，引導女士於 4 拍內完成 360 度優雅平轉。',
        leadKeypoints: [
          '第 4 拍點步時，男士左手抬至女士頭頂斜前方發出預備轉動信號 (Prep)',
          '第 5 拍開始畫小圓環引導女士向其左側（內圈）轉動',
          '男士自身維持穩定的基本步，做女士旋轉的安全中軸'
        ],
        followKeypoints: [
          '旋轉時手肘維持彎曲，手指如掛在男士手掌光環內',
          '3 步走完一圈（第 5 步進、第 6 步轉、第 7 步出），第 8 拍 Tap 恢復閉式舞姿',
          '視線利用留頭甩頭（Spotting）技巧保持平衡不暈眩'
        ],
        practiceTips: '領舞者手肘絕不可死扣女伴手腕，手掌要形成靈活滑動的「吊環（Halo）」。',
        steps: [
          {
            id: 'b-ti-1',
            stepNumber: 1,
            countLabel: '1-4 (基礎側步準備)',
            durationBeats: 4,
            leaderFoot: {
              foot: 'L',
              pos: { x: 40, y: 55, angle: 0, contact: 'flat', weight: 1, action: '向左基本步，第 4 拍抬起左手' },
              actionDetail: '完成前 4 拍基本步，在第 4 拍點步時左手舉至與女伴額頭齊平。',
              leadCue: '手部抬起要有空間感，不要壓迫女士面部。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 60, y: 45, angle: 180, contact: 'flat', weight: 1, action: '向右基本步，感應抬手信號' },
              actionDetail: '完成向右基本步，感知頭頂上方手勢，收緊核心準備旋轉。',
              followCue: '右手保持 90 度 L 型框架，絕不拉拽男士。'
            },
            bodyMechanics: '雙方蓄力準備，呼吸同步。',
            commonMistake: '男士過早旋轉女士手腕造成扭傷。',
            fixTip: '信號在第 4 拍提出，旋轉發生在第 5-7 拍。'
          },
          {
            id: 'b-ti-2',
            stepNumber: 2,
            countLabel: '5 (旋轉起步)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 48, y: 55, angle: 0, contact: 'flat', weight: 1, action: '原地右步，左手在女伴頭上畫圈' },
              actionDetail: '男士踩右腳保持自身重心，左手引導順時針方向。',
              leadCue: '手指微鬆，讓女伴手掌順勢自由滑動。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 55, y: 40, angle: 90, contact: 'ball', weight: 1, action: '左腳前進側轉 90 度' },
              actionDetail: '女士左腳向斜前方跨出，腳尖迅速轉動 90 度。',
              followCue: '眼睛鎖定前進目標點。'
            },
            bodyMechanics: '核心收緊如陀螺軸心。',
            commonMistake: '腳步跳躍導致偏離軸心。',
            fixTip: '雙腿腳尖不離地板滑行。'
          },
          {
            id: 'b-ti-3',
            stepNumber: 3,
            countLabel: '6 (中轉 180 度)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 42, y: 55, angle: 0, contact: 'flat', weight: 1, action: '左腳併步支撐' },
              actionDetail: '男士併步穩定，右手適時在女伴完成旋轉後接應背部。',
              leadCue: '視線關照女伴平衡。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 50, y: 38, angle: 270, contact: 'ball', weight: 1, action: '右腳橫轉 180 度' },
              actionDetail: '右腳踩下並利用腳掌前旋（Pivot），背部轉向男士再轉出。',
              followCue: '保持頭頸挺直，重心平穩。'
            },
            bodyMechanics: '身體轉動帶動裙擺自然飛揚。',
            commonMistake: '重心向後倒。',
            fixTip: '胸口微微含住，不仰頭。'
          },
          {
            id: 'b-ti-4',
            stepNumber: 4,
            countLabel: '7-8 (面客回位 & Tap)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'R',
              pos: { x: 50, y: 55, angle: 0, contact: 'tap', weight: 0, action: '右腳側步後 Tap 收尾' },
              actionDetail: '男士右手接住女伴右側腰背，恢復雙人閉式舞姿。',
              leadCue: '溫柔穩固的接應信號，給予女伴歸屬感。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 58, y: 45, angle: 180, contact: 'tap', weight: 0, action: '轉正踩左腳，右腳 Tap 提臀' },
              actionDetail: '面正對男士，右腳在第 8 拍完美 Tap 點地，完成旋轉！',
              followCue: '手臂順勢落回男士肩膀。'
            },
            bodyMechanics: '伴隨音樂重音乾脆利落地收於第 8 拍。',
            commonMistake: '轉完後失去方向感找不到舞伴。',
            fixTip: '第 7 拍眼睛先找到男士胸膛或眼睛，身體隨之歸位。'
          }
        ]
      }
    ],
    videoLessons: [
      {
        id: 'bachata-vid-1',
        title: '巴洽達極速入門：基本側步與提臀點步技巧',
        instructor: 'Dance Papi & Alex',
        duration: '06:45',
        youtubeId: 'qQ3r32_8v1g',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/qQ3r32_8v1g',
        summary: '權威名師詳細示範巴洽達 1-2-3-Tap 8 拍循環，深度剖析男士引帶要領與女士骨盆點步的重心分離。',
        chapters: [
          { time: '00:00', seconds: 0, title: '巴洽達音樂結構與拍子識別' },
          { time: '01:15', seconds: 75, title: '領舞者單人腳步分解與重心中立' },
          { time: '02:40', seconds: 160, title: '跟隨者骨盆提臀點步 (Hip Pop) 秘訣' },
          { time: '04:15', seconds: 255, title: '雙人閉式擁抱握法與安全引帶' },
          { time: '05:30', seconds: 330, title: '常見新手 5 大錯誤現場糾正' }
        ],
        keyTakeaways: [
          '第 4 拍與第 8 拍的點步（Tap）不可施加任何重力',
          '古巴臀部運動來自於膝關節自然的交替彎曲，切勿刻意生硬扭腰',
          '引帶主要靠軀幹胸椎共振，而非兩條手臂的蠻力推拉'
        ]
      },
      {
        id: 'bachata-vid-2',
        title: '巴洽達單人與雙人旋轉步 (Underarm Turn) 零基礎詳解',
        instructor: 'Marius & Elena',
        duration: '08:20',
        youtubeId: 'pQ79UjQoQ7s',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/pQ79UjQoQ7s',
        summary: '從獨舞旋轉平衡、留頭甩頭（Spotting），到雙人過手轉手勢引導，讓轉動宛如絲綢般平滑自然。',
        chapters: [
          { time: '00:00', seconds: 0, title: '旋轉核心穩定度與腳尖重心' },
          { time: '02:10', seconds: 130, title: '留頭練習：預防頭暈的黃金法則' },
          { time: '04:00', seconds: 240, title: '男士光環手勢（Halo）與手部放鬆' },
          { time: '06:20', seconds: 380, title: '跟隨者轉後穩固接步與銜接基本步' }
        ],
        keyTakeaways: [
          '男士手勢要如同給女士戴上一頂光環，手肘不發緊',
          '旋轉中女士保持手臂框架 90 度，不讓手臂甩向背後'
        ]
      }
    ],
    etiquetteTips: [
      '舞會中初次邀舞建議保持開式舞姿（Open Position）或微留間隙的閉式舞姿，尊重舞伴的安全界限。',
      '巴洽達音樂有強烈情緒，但社交舞池以禮貌、舒適與彼此共鳴為第一準則。',
      '跳完一首曲目後，領舞者應紳士地將舞伴送回舞池邊緣並誠摯致謝。'
    ]
  },
  {
    id: 'salsa',
    name: 'Salsa',
    chineseName: '莎莎舞',
    subtitle: '熱力四射 · 旋轉狂歡與節奏切分',
    origin: '古巴 / 紐約 / 洛杉磯 (Afro-Cuban Roots)',
    meter: '4/4 拍 (快快慢 Quick-Quick-Slow)',
    bpmRange: '160 - 220 BPM',
    defaultBpm: 180,
    heroImage: '/src/assets/images/dance_salsa_dynamic_1794290250222.jpg',
    accentColor: '#EF4444',
    badgeBg: 'rgba(239, 68, 68, 0.15)',
    description: '莎莎舞融合非裔古巴民俗鼓樂與現代爵士，充滿爆發力。以 On 1（洛杉磯風格）最為盛行：1-2-3 拍踩步，第 4 拍停頓懸空；5-6-7 踩步，第 8 拍停頓。',
    culturalBackground: '「Salsa」西班牙語意為「醬料」，象徵將多元節奏辛辣調和。舞步以直線穿梭（Cross Body Lead）與俐落旋轉（Spins）見長，講求精準的張力反饋（Tension & Compression）。',
    musicalityGuide: {
      rhythmStructure: '快-快-慢（Quick-Quick-Slow），每小節 4 拍中只踏 3 步，第 4 拍與第 8 拍留白延伸。',
      percussionInstruments: ['克拉維響棒 (Clave 2:3 或 3:2)', '康加鼓 (Conga Tumbao)', '天巴鼓 (Timbales)'],
      countingRule: '口訣：「一、二、三（慢/停），五、六、七（慢/停）」。',
      bodyIsolationTip: '肩膀與骨盆呈反向對抗（Counter-body movement），踏出腳步時腳跟不重砸地面，以腳掌彈力踩出切分音。',
    },
    figures: [
      {
        id: 'salsa-basic-linear',
        name: '直線基本步 (On 1)',
        englishName: 'Linear Basic Step',
        level: '入門入門',
        timeSignature: '4/4',
        bpm: 180,
        description: 'Salsa 的根本基石。男士先邁左腳前進，女士鏡像右腳後退；後半節男士右腳後退，女士左腳前進。',
        leadKeypoints: [
          '第 1 拍左腳果斷前跨，重心踩在腳前掌',
          '第 2 拍右腳原地替換重心（Rock Step 原地踏步）',
          '第 3 拍左腳收回至中心點踩實',
          '第 4 拍身體延伸微停頓，不踏步！',
          '第 5 拍右腳向後踩一步',
          '第 6 拍左腳原地換重心',
          '第 7 拍右腳收回中心點，第 8 拍停頓'
        ],
        followKeypoints: [
          '第 1 拍右腳向後退步，腳尖先著地',
          '第 2 拍左腳原地換重心',
          '第 3 拍右腳回正踩實，第 4 拍停頓',
          '第 5 拍左腳勇敢向前跨步，第 6 拍右腳原地踩，第 7 拍左腳收回'
        ],
        practiceTips: '第 4 拍和第 8 拍絕對不要慌忙踩腳！正是這半拍的「留白延續」，賦予 Salsa 迷人的拉扯張力。',
        steps: [
          {
            id: 's-lb-1',
            stepNumber: 1,
            countLabel: '1 (快 - 前進)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 45, y: 42, angle: 0, contact: 'ball', weight: 1, action: '左腳前跨一步' },
              actionDetail: '左腳如彈簧般前進踏出，前腳掌著地，膝蓋微屈微沉。',
              leadCue: '手掌給予微弱張力（Tension），帶動女伴向後同步步出。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 55, y: 58, angle: 180, contact: 'ball', weight: 1, action: '右腳後退一步' },
              actionDetail: '右腳尖俐落後踩，吸收前進動能。',
              followCue: '維持彈簧手臂（Spaghetti-free arms），手肘不鎖死。'
            },
            bodyMechanics: '重心輕巧向前壓，腳尖先於腳跟。',
            commonMistake: '腳跟重擊地面發出咚咚巨響。',
            fixTip: '像在熱鐵板上跳舞，腳步敏捷輕盈。'
          },
          {
            id: 's-lb-2',
            stepNumber: 2,
            countLabel: '2 (快 - 原地回踏)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 50, angle: 0, contact: 'flat', weight: 1, action: '右腳原地換重心' },
              actionDetail: '右腳在原地踩一下，將體重瞬間接回右腿。',
              leadCue: '重心開始由前往後拉回。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 50, angle: 180, contact: 'flat', weight: 1, action: '左腳原地換重心' },
              actionDetail: '左腳在原地踩一下，換移體重。',
              followCue: '核心收緊，骨盆朝向正前方。'
            },
            bodyMechanics: '雙腳交替如活塞運動。',
            commonMistake: '第 2 拍腳步亂跑移位。',
            fixTip: '右腳就在原來的位置踩下，無需多餘移動。'
          },
          {
            id: 's-lb-3',
            stepNumber: 3,
            countLabel: '3 (慢 - 回中心)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 47, y: 50, angle: 0, contact: 'flat', weight: 1, action: '左腳收回中間' },
              actionDetail: '左腳收回至雙腳中線位置踩實。',
              leadCue: '雙手恢復中立張力狀態。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 53, y: 50, angle: 180, contact: 'flat', weight: 1, action: '右腳收回中間' },
              actionDetail: '右腳收回至中立位踩實。',
              followCue: '等待第 4 拍停頓。'
            },
            bodyMechanics: '身體回正，為下一個拍子的停頓累積動能。',
            commonMistake: '身體左搖右晃失去垂直軸心。',
            fixTip: '頭頂如同有懸掛繩索向上提拉。'
          },
          {
            id: 's-lb-4',
            stepNumber: 4,
            countLabel: '4 (暫停 / 身體延伸)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 47, y: 50, angle: 0, contact: 'flat', weight: 1, action: '維持重心，身體延伸' },
              actionDetail: '腳不動！身體在第 4 拍維持重心沉降與骨盆平順延展。',
              leadCue: '維持安定的引帶氣息。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 53, y: 50, angle: 180, contact: 'flat', weight: 1, action: '維持重心，呼吸留白' },
              actionDetail: '腳不踩！膝蓋微彎吸氣，蓄勢待發。',
              followCue: '準備迎接第 5 拍前進。'
            },
            bodyMechanics: '音樂中的留白（Pause），是拉丁舞的靈魂呼吸。',
            commonMistake: '沉不住氣亂踏一腳。',
            fixTip: '心裡默數「一、二、三、等；五、六、七、等」。'
          },
          {
            id: 's-lb-5',
            stepNumber: 5,
            countLabel: '5 (快 - 後退)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 58, angle: 0, contact: 'ball', weight: 1, action: '右腳向後退一步' },
              actionDetail: '右腳向後退踩，腳前掌先著地。',
              leadCue: '手部傳遞向前推進的彈性信號。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 42, angle: 180, contact: 'ball', weight: 1, action: '左腳向前邁一步' },
              actionDetail: '左腳順勢向前邁出，自信前行。',
              followCue: '保持軀幹正立，大方邁步。'
            },
            bodyMechanics: '反向 Rock-step，重心拉開再收回。',
            commonMistake: '後退時整個腳板重踩後跌。',
            fixTip: '腳跟永遠離地微懸，由腳掌肉墊緩衝。'
          },
          {
            id: 's-lb-6',
            stepNumber: 6,
            countLabel: '6 (快 - 原地換重)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 47, y: 50, angle: 0, contact: 'flat', weight: 1, action: '左腳原地換重心' },
              actionDetail: '左腳原地踩換，將身體重量接回前足。',
              leadCue: '引領女伴停止前進。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 53, y: 50, angle: 180, contact: 'flat', weight: 1, action: '右腳原地換重心' },
              actionDetail: '右腳原地踩換重心。',
              followCue: '煞住前進慣性。'
            },
            bodyMechanics: '前足收緊支撐，後足順勢收攏。',
            commonMistake: '衝撞舞伴。',
            fixTip: '由核心力量拉回，給彼此安全空間。'
          },
          {
            id: 's-lb-7',
            stepNumber: 7,
            countLabel: '7 (慢 - 回中心)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 50, angle: 0, contact: 'flat', weight: 1, action: '右腳收回中心' },
              actionDetail: '右腳收回併步踩實，完成 8 拍大組合。',
              leadCue: '平穩恢復開式或閉式框架。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 50, angle: 180, contact: 'flat', weight: 1, action: '左腳收回中心' },
              actionDetail: '左腳收回站穩，準備迎接下一個 1 拍。',
              followCue: '完美就位。'
            },
            bodyMechanics: '四平八穩，蓄勢待發。',
            commonMistake: '收步不完整造成下一個 1 拍腳步混亂。',
            fixTip: '7 拍收齊，8 拍靜心感受音樂重音。'
          }
        ]
      },
      {
        id: 'salsa-cross-body-lead',
        name: '十字交叉換位 (Cross Body Lead)',
        englishName: 'Cross Body Lead (CBL)',
        level: '基礎核心',
        timeSignature: '4/4',
        bpm: 180,
        description: 'Salsa 線性風格（LA / NY Style）的靈魂骨幹！男士打開身軀讓出道位，女士如同走在聚光燈伸展台上直行穿過換位。',
        leadKeypoints: [
          '第 1-3 拍男士邁步向側邊開門（Open the door），側身 90 度讓出直線跑道',
          '左手如同一道平順的導軌，引導女士沿直線向前穿過',
          '第 5-7 拍男士轉回面向女士，雙方互換位置'
        ],
        followKeypoints: [
          '第 1-3 拍女士正常執行後退基本步',
          '第 5 拍感受到跑道暢通後，勇敢大步沿直線穿過男士身前（Walk the line）',
          '第 7 拍完成 180 度轉身面朝男士'
        ],
        practiceTips: '想像舞池地板有一條狹窄的軌道（Slot），男女雙方始終在這條直線軌道上穿梭，絕不偏離。',
        steps: [
          {
            id: 's-cbl-1',
            stepNumber: 1,
            countLabel: '1-3 (男士開門讓道)',
            durationBeats: 3,
            leaderFoot: {
              foot: 'L',
              pos: { x: 38, y: 52, angle: 90, contact: 'flat', weight: 1, action: '左腳前進側跨，轉身 90 度讓道' },
              actionDetail: '男士在 1-2-3 拍將左腳側跨讓出中央軌道，左手保持連繫。',
              leadCue: '左手輕穩拉引，示意前方通道已敞開。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 55, y: 60, angle: 180, contact: 'ball', weight: 1, action: '右腳退步蓄力，準備直線穿梭' },
              actionDetail: '女士完成常規退步，眼睛直視前方軌道。',
              followCue: '看到開門信號，準備加速直線穿透。'
            },
            bodyMechanics: '雙方張力在第 3 拍達到蓄能頂點。',
            commonMistake: '男士沒讓開位置，兩人相撞。',
            fixTip: '男士必須完全撤出中心線，像開門請貴賓通行。'
          },
          {
            id: 's-cbl-2',
            stepNumber: 2,
            countLabel: '5-7 (女士穿道過線與轉正)',
            durationBeats: 3,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 48, angle: 0, contact: 'flat', weight: 1, action: '右腳回踩，轉身歸位接應' },
              actionDetail: '男士在 5-6-7 拍轉回正對中心線，雙手迎接女士。',
              leadCue: '右手扶住女士後背，煞停其衝力。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 42, y: 45, angle: 0, contact: 'flat', weight: 1, action: '左腳大步穿過，7 拍轉身 180 度' },
              actionDetail: '女士在 5 拍踩左腳穿出，6 拍右腳前行，7 拍順勢轉身 180 度面對男士。',
              followCue: '走完軌道後乾脆俐落地轉身立定。'
            },
            bodyMechanics: '線性穿梭行雲流水，展現極致舞台張力。',
            commonMistake: '女士走出曲線繞大圈。',
            fixTip: '視線鎖定前方一個定點，沿著最短直線行進。'
          }
        ]
      }
    ],
    videoLessons: [
      {
        id: 'salsa-vid-1',
        title: 'Salsa 線性風格 (On 1) 基礎前後步與身體張力',
        instructor: 'Dance Papi & World Champions',
        duration: '07:15',
        youtubeId: 'qQ3r32_8v1g',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/qQ3r32_8v1g',
        summary: '剖析 Salsa 節拍切分 1-2-3 (pause 4) 5-6-7 (pause 8)，從腳掌觸地彈性到手部張力與阻抗教學。',
        chapters: [
          { time: '00:00', seconds: 0, title: 'Salsa 4/4 拍切分音結構' },
          { time: '01:30', seconds: 90, title: '男士與女士單人足跡分解' },
          { time: '03:20', seconds: 200, title: '手部彈簧框架（Spring Connection）' },
          { time: '05:00', seconds: 300, title: '實戰跟隨音樂慢速至正常速練習' }
        ],
        keyTakeaways: [
          '保持前腳掌承重，腳跟不要沉重踏地',
          '手臂維持微彎，手腕不要僵直，保持彈簧般的推拉感'
        ]
      },
      {
        id: 'salsa-vid-2',
        title: 'Salsa 換位十字步 (Cross Body Lead) 完美指南',
        instructor: 'Inspiration Dance Academy',
        duration: '09:05',
        youtubeId: 'pQ79UjQoQ7s',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/pQ79UjQoQ7s',
        summary: '解析社交舞池中男士如何「開門讓道」、女士如何「走在直線走廊（Slot）」的經典換位招式。',
        chapters: [
          { time: '00:00', seconds: 0, title: '直線軌道（The Slot）概念詳解' },
          { time: '02:15', seconds: 135, title: '男士 90 度讓身開門技巧' },
          { time: '04:40', seconds: 280, title: '女士穿越步長控制與轉身點' },
          { time: '07:10', seconds: 430, title: '雙人配合與防衝撞保護' }
        ],
        keyTakeaways: [
          '男士開門動作要乾脆明確，女士步伐要走直路不繞圈'
        ]
      }
    ],
    etiquetteTips: [
      'Salsa 音樂速度偏快（180+ BPM），初學者切勿盲目加速，先在慢速中把腳掌彈力與重心踩穩。',
      '舞會中請注意手汗問題，可攜帶吸汗小手帕；引帶時避免用手指死抓女伴手腕。',
      '在密集舞池中轉身時，男士應主動環顧四周，防止女伴手肘或高跟鞋撞到鄰近舞者。'
    ]
  },
  {
    id: 'jitterbug',
    name: 'Jitterbug',
    chineseName: '吉魯巴',
    subtitle: '復古狂歡 · 搖滾搖擺與歡樂彈跳',
    origin: '美國 1940-50 年代 (Swing & Rock\'n\'Roll)',
    meter: '4/4 拍 (6 拍節奏循環 6-Count Swing)',
    bpmRange: '130 - 175 BPM',
    defaultBpm: 145,
    heroImage: '/src/assets/images/dance_jitterbug_swing_1794290249914.jpg',
    accentColor: '#10B981',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    description: '吉魯巴（Jitterbug / East Coast Swing）是風靡全球華人社交舞會與美式搖滾舞廳的經典。以「慢、慢、快快」（Slow, Slow, Quick-Quick / 搖擺、搖擺、後踩步 Rock-Step）為節奏口訣，充滿生機與彈跳活力。',
    culturalBackground: '誕生於美國爵士搖擺黃金年代，由 Lindy Hop 衍生簡化，更易於社交普及。其特點為屈膝彈動（Triple bounce or Single bounce）與過手換位，洋溢著樂觀純粹的快樂。',
    musicalityGuide: {
      rhythmStructure: '以 6 拍為一個動作週期：1-2 拍（慢，左跨）、3-4 拍（慢，右跨）、5-6 拍（快快，Rock-Step 後踩換重心）。',
      percussionInstruments: ['搖擺爵士套鼓 (Swing Ride Cymbal)', '大提琴行走低音 (Walking Bass)', '小鼓雙拍重音 (Snare Backbeat)'],
      countingRule: '經典口訣：「左、右、後踩步（Rock-step）」或「慢、慢、快快」。',
      bodyIsolationTip: '雙膝始終保持「軟膝彈性（Bouncy pulse）」，每一次踩步都有向下的彈簧感，絕不僵硬。',
    },
    figures: [
      {
        id: 'jitterbug-basic-in-place',
        name: '原地基礎搖擺與後踩步',
        englishName: 'Basic In-Place & Rock-Step',
        level: '入門入門',
        timeSignature: '4/4 (6 Counts)',
        bpm: 145,
        description: '吉魯巴入門必學的第一招！男女舞伴面對面，以左跨、右跨加俐落的後踩步（Rock-step）構成歡快循環。',
        leadKeypoints: [
          '第 1-2 拍左腳向左微跨踏實，膝蓋彈動一次（Slow）',
          '第 3-4 拍右腳向右微跨踏實，膝蓋彈動一次（Slow）',
          '第 5 拍左腳向後退踏一步（Quick）',
          '第 6 拍右腳原地換回重心（Quick），完成一個 6 拍循環'
        ],
        followKeypoints: [
          '第 1-2 拍右腳向右微跨踏實（Slow）',
          '第 3-4 拍左腳向左微跨踏實（Slow）',
          '第 5 拍右腳向後退踏一步（Quick / Rock）',
          '第 6 拍左腳原地換回重心（Quick / Step）'
        ],
        practiceTips: 'Rock-Step（第 5-6 拍）後踩時，腳掌不要踩太遠，退約半個腳掌即可，維持向前回彈的張力。',
        steps: [
          {
            id: 'j-b-1',
            stepNumber: 1,
            countLabel: '1-2 (慢 - 左側踏彈)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 42, y: 55, angle: 0, contact: 'flat', weight: 1, action: '左腳側踩，雙膝彈跳' },
              actionDetail: '左腳向左側平踩，伴隨爵士樂重音微微向下屈膝彈動兩拍。',
              leadCue: '雙手自然握持女伴雙手，保持歡樂的彈跳共鳴。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 58, y: 45, angle: 180, contact: 'flat', weight: 1, action: '右腳側踩，雙膝彈跳' },
              actionDetail: '右腳向右側平踩，與男士同步輕盈彈動。',
              followCue: '肩膀下沉，感受手心彈簧支撐。'
            },
            bodyMechanics: '上下彈跳源自踝關節與膝關節的放鬆（Pulse）。',
            commonMistake: '全身死硬站直，像木頭樁。',
            fixTip: '想像在小型彈簧床上原地踩跳，保持微屈膝。'
          },
          {
            id: 'j-b-2',
            stepNumber: 2,
            countLabel: '3-4 (慢 - 右側踏彈)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'R',
              pos: { x: 50, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳側踩，雙膝彈跳' },
              actionDetail: '右腳向右側邁步踩實，彈動兩拍。',
              leadCue: '引導重心平順過渡。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 50, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳側踩，雙膝彈跳' },
              actionDetail: '左腳向左側邁步踩實，同步彈跳。',
              followCue: '準備迎接快節奏的後踩。'
            },
            bodyMechanics: '重心完全移入右足，左足放鬆。',
            commonMistake: '踏步時重心卡在兩腳中間。',
            fixTip: '踩哪隻腳，身體重心就完整轉移過去。'
          },
          {
            id: 'j-b-3',
            stepNumber: 3,
            countLabel: '5 (快 - 後踩 Rock)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 40, y: 62, angle: 0, contact: 'ball', weight: 1, action: '左腳後踩半步' },
              actionDetail: '左腳尖向後踩下，身體張力微微拉開。',
              leadCue: '手臂自然延展，如拉滿的彈弓。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 60, y: 38, angle: 180, contact: 'ball', weight: 1, action: '右腳後踩半步' },
              actionDetail: '右腳尖向後踩下，蓄滿反彈勢能。',
              followCue: '腳掌點地迅速回彈。'
            },
            bodyMechanics: '雙方形成微弱的遠離張力（Tension Connection）。',
            commonMistake: '後退過猛把舞伴拉倒。',
            fixTip: '後踩距離不超過 20 公分，維持核心挺拔。'
          },
          {
            id: 'j-b-4',
            stepNumber: 4,
            countLabel: '6 (快 - 回踩 Step)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 50, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳原地接回重心' },
              actionDetail: '右腳在前方原地踩下接回體重，完成 6 拍循環。',
              leadCue: '手部彈簧縮回，準備下一個循環的第 1 拍。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 50, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳原地接回重心' },
              actionDetail: '左腳原地踩實，恢復中立位。',
              followCue: '完美就位，準備左側踏步。'
            },
            bodyMechanics: '利用反彈力順利將重心推回前腳。',
            commonMistake: '忘記換腳連續踩同一隻腳。',
            fixTip: '口訣：「退、踏、左、右」。'
          }
        ]
      },
      {
        id: 'jitterbug-underarm-turn',
        name: '過手旋轉步 (Underarm Turn)',
        englishName: 'Underarm Turn / Change of Places',
        level: '基礎核心',
        timeSignature: '4/4 (6 Counts)',
        bpm: 145,
        description: '吉魯巴的招牌動作！在 6 拍之中，男士抬起左手，女士在男士臂彎下方華麗旋轉一圈並完成位置互換。',
        leadKeypoints: [
          '第 1-2 拍男士抬起左手形成拱門，身體微側向左',
          '第 3-4 拍引導女士自其胸前下方旋轉穿過',
          '第 5-6 拍雙方進行 Rock-step，建立全新的開式連接'
        ],
        followKeypoints: [
          '第 1-2 拍向前邁出並鑽入拱門',
          '第 3-4 拍在男士手臂下旋轉 360 度轉身',
          '第 5-6 拍後踩 Rock-step 穩固煞車'
        ],
        practiceTips: '旋轉時手腕不要交纏打結，男士只需以指腹輕輕圍成環狀，讓女士手掌自由旋轉。',
        steps: [
          {
            id: 'j-ut-1',
            stepNumber: 1,
            countLabel: '1-2 (起手鑽門)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 40, y: 53, angle: 30, contact: 'flat', weight: 1, action: '左腳踏步，左手高舉拱門' },
              actionDetail: '男士左腳踏步，高舉左手示意女士前行旋轉。',
              leadCue: '手掌放鬆，不拉拽女士手指。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 52, y: 48, angle: 90, contact: 'ball', weight: 1, action: '右腳向前鑽入手臂下方' },
              actionDetail: '女士右腳向前邁入手臂下方，開始第一段旋轉。',
              followCue: '核心收緊，頭頸端正。'
            },
            bodyMechanics: '雙方流暢走位，展現 Swing 自由即興風貌。',
            commonMistake: '男士手抬得太低敲到女士額頭。',
            fixTip: '手臂拱門高度應高於女士頭頂約 10-15 公分。'
          },
          {
            id: 'j-ut-2',
            stepNumber: 2,
            countLabel: '3-4 (轉出歸位)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'R',
              pos: { x: 48, y: 55, angle: 0, contact: 'flat', weight: 1, action: '右腳收步，手腕放鬆引出' },
              actionDetail: '男士收步，目迎女伴轉至對面。',
              leadCue: '手勢自然落回腰際高度。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 58, y: 45, angle: 180, contact: 'flat', weight: 1, action: '左腳完成旋轉落地' },
              actionDetail: '女士完成 360 度旋轉，左腳穩穩落地面朝男士。',
              followCue: '眼睛找到舞伴微笑。'
            },
            bodyMechanics: '輕快俐落，毫不拖泥帶水。',
            commonMistake: '旋轉失控跌跌撞撞。',
            fixTip: '轉身時腳步要密集小步，切勿邁大跨步。'
          },
          {
            id: 'j-ut-3',
            stepNumber: 3,
            countLabel: '5-6 (換位後踩 Rock-step)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 40, y: 62, angle: 0, contact: 'ball', weight: 1, action: '左腳後踩，右腳回踩' },
              actionDetail: '雙方在新位置上同步完成 5 拍後踩與 6 拍回踩。',
              leadCue: '拉緊彈簧重新循環。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 60, y: 38, angle: 180, contact: 'ball', weight: 1, action: '右腳後踩，左腳回踩' },
              actionDetail: '同步後踩回踩，完成換位！',
              followCue: '完美銜接基本步。'
            },
            bodyMechanics: '標誌性 Rock-step 瞬間煞車回彈。',
            commonMistake: '忘記後踩直接搶下一個動作。',
            fixTip: '始終保持 6 拍節奏完整性。'
          }
        ]
      }
    ],
    videoLessons: [
      {
        id: 'jitterbug-vid-1',
        title: '吉魯巴 (Jitterbug / East Coast Swing) 6 拍基礎步完整解析',
        instructor: 'Swing Dance Masters & Jumpin Jack',
        duration: '06:50',
        youtubeId: 'qQ3r32_8v1g',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/qQ3r32_8v1g',
        summary: '詳細示範 Slow-Slow-Quick-Quick 口訣與膝蓋彈簧動作（Pulse），以及後踩步（Rock-step）的重心換位技巧。',
        chapters: [
          { time: '00:00', seconds: 0, title: '吉魯巴歷史與搖擺爵士節奏' },
          { time: '01:20', seconds: 80, title: '雙膝彈簧（Bounce Pulse）基本功' },
          { time: '02:50', seconds: 170, title: 'Slow-Slow-Quick-Quick 單人練習' },
          { time: '04:10', seconds: 250, title: '雙人牽手彈力（Elastic Connection）' },
          { time: '05:30', seconds: 330, title: '實戰音樂示範與卡拍練習' }
        ],
        keyTakeaways: [
          '彈動源自放鬆的膝蓋與腳踝，不是用肩膀上下聳動',
          'Rock-step 是重心向後彈回來的過渡，不可倒退太大步'
        ]
      },
      {
        id: 'jitterbug-vid-2',
        title: '吉魯巴經典過手轉與換位步 (Underarm Turn & Change of Places)',
        instructor: 'Passion4Dancing Swing Club',
        duration: '07:45',
        youtubeId: 'pQ79UjQoQ7s',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/pQ79UjQoQ7s',
        summary: '剖析過手旋轉中男士拱門引導手法與女士腳掌小碎步旋轉技巧，讓雙方在舞池中輕鬆暢跳。',
        chapters: [
          { time: '00:00', seconds: 0, title: '過手旋轉手臂拱門高度控制' },
          { time: '02:00', seconds: 120, title: '女士旋轉 360 度腳步平衡' },
          { time: '04:30', seconds: 270, title: '換位後的 Rock-step 煞車點' }
        ],
        keyTakeaways: [
          '男士不要死抓女士手指，女士手掌在男士掌心自由滑動'
        ]
      }
    ],
    etiquetteTips: [
      '吉魯巴跳躍感強，跳舞時請注意避開周圍其他舞伴，特別是舞程線上前進的華爾茲或探戈舞者。',
      '握手時男士手掌應向上輕托女士手指，切忌用大拇指緊捏對方手背造成疼痛。',
      '若舞伴體力有限，可適當降低彈跳幅度，改跳溫和舒服的單步吉魯巴（Single Time Swing）。'
    ]
  },
  {
    id: 'tango',
    name: 'Tango',
    chineseName: '探戈',
    subtitle: '戲劇張力 · 貓般步伐與俐落回首',
    origin: '阿根廷布宜諾斯艾利斯 (Argentine & Ballroom)',
    meter: '4/4 拍 (慢、慢、快、快、慢 T-A-N-G-O)',
    bpmRange: '120 - 132 BPM',
    defaultBpm: 126,
    heroImage: '/src/assets/images/dance_tango_dramatic_1794290251063.jpg',
    accentColor: '#D97706',
    badgeBg: 'rgba(217, 119, 6, 0.15)',
    description: '探戈是社交舞池中最具戲劇靈魂與神秘張力的舞種。講求低重心的「貓步潛行（Stalking walk）」、斷奏頓點（Staccato）、俐落的轉頭停頓（Head flick）與深邃的心靈聯結。',
    culturalBackground: '誕生於拉普拉塔河畔的酒吧與碼頭，融合移民憂鬱、愛恨糾葛與深沉宿命感。探戈沒有華爾茲的升降擺盪，而是如同在冰面上滑行，每一步都精確無比。',
    musicalityGuide: {
      rhythmStructure: 'Slow, Slow, Quick, Quick, Slow（口訣字母拼讀：T - A - N - G - O，共 8 拍結構）。',
      percussionInstruments: ['班多鈕手風琴 (Bandoneón)', '大提琴重音頓奏', '小提琴掃弦 (Marcato in 4)'],
      countingRule: '步法節奏：「慢（2拍）、慢（2拍）、快（1拍）、快（1拍）、慢（2拍）」。',
      bodyIsolationTip: '水平滑行移動（Flat glide），膝蓋始終保持微彎，嚴禁上下起伏！轉頭動作乾脆如利刃（Staccato）。',
    },
    figures: [
      {
        id: 'tango-walk-progressive',
        name: '探戈走步與側進合步',
        englishName: 'Tango Walks & Progressive Side Step',
        level: '入門入門',
        timeSignature: '4/4',
        bpm: 126,
        description: '探戈的基本核心！男士右側身引導、如同黑豹潛行般的低重心推進，並以標誌性的側進緊湊收步（Tango Close）定格。',
        leadKeypoints: [
          '第 1 步左腳前進慢步（Slow，2拍），右側身體微微領先（CBM 身體對向轉動）',
          '第 2 步右腳前進慢步（Slow，2拍），腳外緣微著地潛行',
          '第 3 步左腳前進快步（Quick，1拍）',
          '第 4 步右腳側跨快步（Quick，1拍）',
          '第 5 步左腳半重心收回併向右腳（Slow，2拍，Tango Close 定格）'
        ],
        followKeypoints: [
          '女士右腳後退慢步，左腳後退慢步，頭部偏向左側 45 度保持傲立姿態',
          '收步時俐落乾脆，呼吸屏息定格'
        ],
        practiceTips: '探戈走路「前腳跟著地，後腳掌緊貼地面拖行」，絕無任何華爾茲的彈跳或升降！',
        steps: [
          {
            id: 't-w-1',
            stepNumber: 1,
            countLabel: 'Slow (慢 - 走步一)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 44, y: 44, angle: -10, contact: 'heel', weight: 1, action: '左腳前進慢步，腳跟著地' },
              actionDetail: '左腳如貓咪潛行般邁出，腳跟先著地平順過渡至全腳掌，膝蓋維持微彎。',
              leadCue: '緊湊閉式舞姿（Compact hold），胸椎左前方挺立引帶。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 56, y: 56, angle: 170, contact: 'ball', weight: 1, action: '右腳後退慢步，腳掌貼地滑行' },
              actionDetail: '右腳掌緊貼地板向後平移，頭頸傲立向左伸展。',
              followCue: '背部維持沉穩支撐感，不主動低頭看腳。'
            },
            bodyMechanics: '水平滑行（Flat gliding movement），頭部高度保持毫無起伏。',
            commonMistake: '像踩高蹺一樣上下顛簸。',
            fixTip: '膝蓋彎曲鎖住高度，想像頭頂頂著一本厚書走步。'
          },
          {
            id: 't-w-2',
            stepNumber: 2,
            countLabel: 'Slow (慢 - 走步二)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 38, angle: -5, contact: 'heel', weight: 1, action: '右腳前進慢步，身體對向微轉' },
              actionDetail: '右腳前進，右肩胛與左髖形成微微絞緊感（CBM）。',
              leadCue: '引領女伴穩定退步。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 62, angle: 175, contact: 'ball', weight: 1, action: '左腳後退慢步' },
              actionDetail: '左腳平滑後退，接應男士走步。',
              followCue: '維持右手搭在男士左臂上的微下壓結構。'
            },
            bodyMechanics: '蓄勢內斂，展現深邃的戲劇力量。',
            commonMistake: '腳步外八散亂。',
            fixTip: '雙腳行進軌跡如同行走在兩條平行窄軌上。'
          },
          {
            id: 't-w-3',
            stepNumber: 3,
            countLabel: 'Quick (快 - 前進切入)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 46, y: 32, angle: 0, contact: 'flat', weight: 1, action: '左腳迅速切入' },
              actionDetail: '節奏轉為快拍！左腳果斷前進一步。',
              leadCue: '核心短促有力地推進。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 54, y: 68, angle: 180, contact: 'flat', weight: 1, action: '右腳迅速後退' },
              actionDetail: '右腳緊湊後退。',
              followCue: '敏銳捕捉快拍節奏切換。'
            },
            bodyMechanics: '斷奏（Staccato）發力，乾淨利落。',
            commonMistake: '慢快不分，節奏混沌。',
            fixTip: '心裡默數：慢——慢——快！'
          },
          {
            id: 't-w-4',
            stepNumber: 4,
            countLabel: 'Quick (快 - 側跨合位)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 56, y: 32, angle: 0, contact: 'flat', weight: 1, action: '右腳果斷側跨' },
              actionDetail: '右腳向右側邁出，準備最後定格收步。',
              leadCue: '雙手框架保持緊湊，不散開。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 44, y: 68, angle: 180, contact: 'flat', weight: 1, action: '左腳果斷側跨' },
              actionDetail: '左腳向左側邁出。',
              followCue: '準備迎接 Tango Close 定格。'
            },
            bodyMechanics: '側向位移，展現橫向張力。',
            commonMistake: '跨步過大導致無法收回。',
            fixTip: '側步適度，保留收腳的靈活性。'
          },
          {
            id: 't-w-5',
            stepNumber: 5,
            countLabel: 'Slow (慢 - 探戈定格 Close)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 50, y: 32, angle: 0, contact: 'brush', weight: 0.5, action: '左腳半重心併步，俐落定格' },
              actionDetail: '左腳刷過地面緊靠右腳內側，重心不完全踩死，雙人如雕塑般定格凝結！',
              leadCue: '胸腔微吸氣屏息，給予女伴完美定格信號。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 50, y: 68, angle: 180, contact: 'brush', weight: 0.5, action: '右腳收齊併步，冷傲定格' },
              actionDetail: '右腳收齊靠攏，下巴傲立，目光銳利。',
              followCue: '完美停止（Stop action）。'
            },
            bodyMechanics: '探戈最迷人的定格剎那（Picture pose）。',
            commonMistake: '定格時身體晃動不穩。',
            fixTip: '收緊腹部核心，雙膝相互微靠鎖定。'
          }
        ]
      },
      {
        id: 'tango-promenade-link',
        name: '側行位與合步 (Promenade Link & Close)',
        englishName: 'Promenade Link & Closed Promenade',
        level: '基礎核心',
        timeSignature: '4/4',
        bpm: 126,
        description: '探戈極具辨識度的男女雙方「甩頭開向側行位（PP, Promenade Position）」的俐落步法，隨後沿舞程線俐落合步收尾。',
        leadKeypoints: [
          '第 1 步左腳前進快步，第 2 步右腳就地轉身開出側行位（PP）',
          '男士頭部維持向左，引領女士頭部自左側向右側瞬間甩頭（Head turn）',
          '雙人身體形成 V 字形夾角，目視舞程線前方'
        ],
        followKeypoints: [
          '女士在男士引帶下，下巴微抬，頭部如同閃電般轉向右側',
          '維持胸骨與男士右側的緊密貼合，不擅自離開舞伴中軸'
        ],
        practiceTips: '轉頭是「斷奏（Sharp & crisp）」，而不是慢吞吞的轉動；雙手框架不可因轉頭而變形拉長。',
        steps: [
          {
            id: 't-pl-1',
            stepNumber: 1,
            countLabel: 'Quick-Quick (甩頭開向側行 PP)',
            durationBeats: 2,
            leaderFoot: {
              foot: 'L',
              pos: { x: 42, y: 50, angle: -15, contact: 'flat', weight: 1, action: '左腳切入，右腳開出 V 字側行' },
              actionDetail: '男士踩出快步，右側背肌微收，將女士引向側行位（PP）。',
              leadCue: '以胸骨微轉帶動，右手掌托穩女伴肩胛。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 58, y: 50, angle: 45, contact: 'flat', weight: 1, action: '右腳側開，頭部瞬間向右俐落甩頭' },
              actionDetail: '女士感受身軀展開，頭頸瞬間俐落轉向右側，目光凌厲！',
              followCue: '享受定格的戲劇力量。'
            },
            bodyMechanics: '雙方骨盆微貼，身體呈 60 度優雅 V 字夾角。',
            commonMistake: '甩頭過猛帶動肩膀歪斜。',
            fixTip: '肩膀紋風不動，純粹由頸椎帶動頭部轉動。'
          },
          {
            id: 't-pl-2',
            stepNumber: 2,
            countLabel: 'Slow-Quick-Quick-Slow (側行合步)',
            durationBeats: 6,
            leaderFoot: {
              foot: 'R',
              pos: { x: 55, y: 40, angle: 0, contact: 'flat', weight: 1, action: '沿側行位前進，最後 Close 定格' },
              actionDetail: '沿著舞程線大步邁出，完成關閉收步。',
              leadCue: '引領女伴轉回閉式舞姿合步。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 45, y: 40, angle: 180, contact: 'flat', weight: 1, action: '側行前進，頭部轉回閉式收步' },
              actionDetail: '前進踏步，頭部順暢轉回左側，合步定格。',
              followCue: '完美呼吸停頓。'
            },
            bodyMechanics: '從奔放的側行完美回到莊嚴的閉式合步。',
            commonMistake: '前進時雙腳踢撞舞伴腳踝。',
            fixTip: '女士走在男士身體外側軌道，互不干擾。'
          }
        ]
      }
    ],
    videoLessons: [
      {
        id: 'tango-vid-1',
        title: '探戈經典走步 (Tango Walks) 與貓步潛行重心技巧',
        instructor: 'Ballroom Guide & World Champions',
        duration: '08:10',
        youtubeId: 'qQ3r32_8v1g',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/qQ3r32_8v1g',
        summary: '剖析探戈低重心走步（Stalking walk）、腳跟著地與腳掌貼地滑行，以及如何徹底消除身體上下浮動。',
        chapters: [
          { time: '00:00', seconds: 0, title: '探戈基本握持舞姿 (Hold) 與貼身框架' },
          { time: '02:00', seconds: 120, title: '慢步 (Slow) 腳跟潛行出步分解' },
          { time: '04:15', seconds: 255, title: '身體對向轉動 (CBM) 應用' },
          { time: '06:30', seconds: 390, title: 'Tango Close 定格的半重心秘訣' }
        ],
        keyTakeaways: [
          '探戈沒有任何升降（No Rise & Fall），維持絕對的水平面滑行',
          '定格時如雕塑般靜止，呼吸內斂屏息'
        ]
      },
      {
        id: 'tango-vid-2',
        title: '探戈側行位 (Promenade Position) 與俐落甩頭動作',
        instructor: 'Dance Vision Ballroom Masters',
        duration: '07:30',
        youtubeId: 'pQ79UjQoQ7s',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/pQ79UjQoQ7s',
        summary: '指導男女舞伴如何乾脆俐落地由閉式舞姿打開至側行位（PP），以及女士甩頭時頸椎與肩膀的精確隔離。',
        chapters: [
          { time: '00:00', seconds: 0, title: '側行位 (PP) 身體 V 字夾角原理' },
          { time: '02:30', seconds: 150, title: '女士斷奏甩頭 (Head Turn) 的核心要訣' },
          { time: '05:00', seconds: 300, title: '前進側行合步步法串聯' }
        ],
        keyTakeaways: [
          '甩頭動作由頸椎主導，雙肩保持水平平靜'
        ]
      }
    ],
    etiquetteTips: [
      '在阿根廷探戈米隆加舞會（Milonga）中，盛行「Cabeceo（眼神邀舞法）」：男士在遠處以眼神注視女士，女士若微笑點頭方可走向前，切忌強行拉扯。',
      '舞池遵循逆時針舞程線（Line of Dance），外圈為行進軌道，嚴禁在高速前進區突然倒退。',
      '探戈舞姿極為貼近，請注意口氣清新、身體儀容整潔，營造舒適專注的共舞體驗。'
    ]
  },
  {
    id: 'waltz',
    name: 'Waltz',
    chineseName: '華爾茲',
    subtitle: '優雅極致 · 3/4 拍宮廷升降與擺盪',
    origin: '歐洲奧地利維也納 / 英國 (Slow Waltz & Viennese)',
    meter: '3/4 拍 (蓬、恰、恰 1-2-3)',
    bpmRange: '84 - 96 BPM (慢華爾茲)',
    defaultBpm: 90,
    heroImage: '/src/assets/images/dance_waltz_elegant_1794290250042.jpg',
    accentColor: '#3B82F6',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    description: '華爾茲被譽為「社交舞之后」，源於 18 世紀歐洲宮廷。以 3/4 拍的優雅三步循環為核心，標誌性的「升與降（Rise & Fall）」、「鐘擺擺盪（Pendulum Swing）」與「身體傾斜（Sway）」，如行雲流水般在舞池滑翔。',
    culturalBackground: '最初在維也納宮廷掀起旋風，是歷史上第一個允許男女雙方正面相擁共舞的革命性舞種。慢華爾茲（Slow Waltz）典雅抒情，講求紳士名媛的挺拔架子與飄逸氣質。',
    musicalityGuide: {
      rhythmStructure: '經典 3/4 拍：「重、弱、弱（蓬、恰、恰，1-2-3）」。',
      percussionInstruments: ['古典交響樂定音鼓 (Timpani)', '大提琴低音撥弦 (Bass Pizzicato)', '鋼琴三連音與華爾茲長笛'],
      countingRule: '第 1 拍（降，向下踏入地板）、第 2 拍（開始上升擺盪）、第 3 拍（升至最高點腳尖併步，拍尾平緩降回）。',
      bodyIsolationTip: '「降在第 1 拍，升在第 2 拍，最高在第 3 拍，降在第 3 拍末尾」。手肘與雙肩構成寬闊拱橋（Top line），永不塌陷。',
    },
    figures: [
      {
        id: 'waltz-closed-changes',
        name: '左右腳前進與後退交換步',
        englishName: 'Closed Changes (Forward & Backward)',
        level: '入門入門',
        timeSignature: '3/4',
        bpm: 90,
        description: '華爾茲最基礎也最考驗功底的核心步！學習第 1 拍降步出腳、第 2 拍擺盪上升、第 3 拍頂峰併步降回的黃金律動。',
        leadKeypoints: [
          '第 1 拍左腳向前邁出，腳跟先著地，膝蓋微屈向下沉（Down, Heel-Toe）',
          '第 2 拍右腳向右側前方擺盪邁出，腳掌開始優雅上升（Rise, Toe）',
          '第 3 拍左腳收回併向右腳，升至最高點（Up on Toes），拍尾膝蓋放鬆平緩下降（Lower at end of 3）',
          '下一個小節以右腳前進重複鏡像交換步'
        ],
        followKeypoints: [
          '第 1 拍右腳向後平滑退步，腳尖先著地滾動至腳跟，膝蓋微彎沉降',
          '第 2 拍左腳側退邁出並隨男士上升',
          '第 3 拍右腳收回併步，升至腳尖最高點，拍尾柔和降回',
          '頭頸向左上方 45 度延伸，保持高貴白天鵝般的儀態'
        ],
        practiceTips: '口訣：「降——升——降（Down, Rise, Lower）」。升降是透過膝蓋與腳踝關節的屈伸實現，而不是挺胸提肩膀。',
        steps: [
          {
            id: 'w-cc-1',
            stepNumber: 1,
            countLabel: '1 (重拍 - 向下邁步 Down)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 44, y: 44, angle: 0, contact: 'heel', weight: 1, action: '左腳前進，腳跟著地向下屈膝 (Down)' },
              actionDetail: '左腳如滑雪般向前滑出，腳跟先觸地，膝蓋微屈沉入地板，為後續擺盪蓄積動能。',
              leadCue: '寬闊框架保持平穩，以重心推動而非手臂拖拽。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 56, y: 56, angle: 180, contact: 'ball', weight: 1, action: '右腳後退，腳尖著地滾動至腳跟' },
              actionDetail: '右腳尖向後滑出，順滑滾動至腳跟，向下沉膝緩衝。',
              followCue: '背肌舒展承接，頭部傲立向上延伸。'
            },
            bodyMechanics: '重心最低點（Lowest point），雙膝微曲彈性儲能。',
            commonMistake: '膝蓋僵硬直挺挺前衝。',
            fixTip: '如同坐上高腳凳，骨盆垂直微沉。'
          },
          {
            id: 'w-cc-2',
            stepNumber: 2,
            countLabel: '2 (弱拍 - 側邁擺盪上升 Rise)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'R',
              pos: { x: 55, y: 38, angle: 0, contact: 'ball', weight: 1, action: '右腳側邁，腳掌開始優雅上升 (Rise)' },
              actionDetail: '右腳如巨大鐘擺般向前側擺盪邁出，腳尖腳掌推動身體優雅上升！',
              leadCue: '引領女伴一同在空中懸浮展翼。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 45, y: 62, angle: 180, contact: 'ball', weight: 1, action: '左腳側退，腳掌同步上升' },
              actionDetail: '左腳側退邁步，身體開始隨男士擺盪上升。',
              followCue: '感受背部被溫柔托舉。'
            },
            bodyMechanics: '鐘擺擺盪運動（Pendulum swing），軀幹微微向左傾斜（Sway）。',
            commonMistake: '用肩膀往上縮。',
            fixTip: '肩膀永遠沉底放鬆，上升力量來自腳掌與小腿推進。'
          },
          {
            id: 'w-cc-3',
            stepNumber: 3,
            countLabel: '3 (弱拍 - 頂峰併步與降回 Up & Lower)',
            durationBeats: 1,
            leaderFoot: {
              foot: 'L',
              pos: { x: 51, y: 38, angle: 0, contact: 'ball', weight: 1, action: '左腳併齊最高點，拍尾降回 (Lower)' },
              actionDetail: '左腳收齊靠攏右腳，雙腳尖站立達到最高點，在第 3 拍末尾膝蓋放鬆柔和下降回中立位。',
              leadCue: '平緩呼吸，平穩降落，準備下一個第 1 拍出右腳。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 49, y: 62, angle: 180, contact: 'ball', weight: 1, action: '右腳併齊最高點，拍尾柔美降回' },
              actionDetail: '雙腳併攏立於腳尖，在拍尾平順放鬆膝蓋沉降。',
              followCue: '優雅收攏，準備迎接下一小節。'
            },
            bodyMechanics: '完成一個完美的拋物線（Parabolic flight curve）。',
            commonMistake: '第 3 拍像電梯墜落般重砸地板。',
            fixTip: '拍尾的下降要像羽毛飄落般溫柔緩衝。'
          }
        ]
      },
      {
        id: 'waltz-natural-turn',
        name: '右轉步 (Natural Turn)',
        englishName: 'Natural Turn (1-2-3, 4-5-6)',
        level: '基礎核心',
        timeSignature: '3/4',
        bpm: 90,
        description: '華爾茲中最華麗、最具標誌性的轉動步法！兩個 3 拍小節（共 6 拍）完成順時針 3/4 圈旋轉，宛如旋轉的宮廷天鵝。',
        leadKeypoints: [
          '第 1 拍右腳前進降步，身體對向微轉（CBM）',
          '第 2 拍左腳向側後方大幅擺盪側步，身體右轉 3/8 圈上升',
          '第 3 拍右腳收攏併步至最高點，拍尾下降',
          '第 4-6 拍由左腳後退開始後半段旋轉（Back half of turn）'
        ],
        followKeypoints: [
          '第 1 拍左腳後退降步，吸收男士前進力量',
          '第 2 拍右腳側邁刷過男士雙腿之間，順暢轉身',
          '第 3 拍左腳併步上升最高點',
          '第 4-6 拍由右腳向前大步邁出引領後半段'
        ],
        practiceTips: '旋轉的力量源於第 1 拍的深蹲推動與第 2 拍的寬廣擺盪，切勿用肩膀去扭轉舞伴。',
        steps: [
          {
            id: 'w-nt-1',
            stepNumber: 1,
            countLabel: '1-3 (前半段前進右轉 3/8)',
            durationBeats: 3,
            leaderFoot: {
              foot: 'R',
              pos: { x: 52, y: 42, angle: 45, contact: 'heel', weight: 1, action: '右腳前進右轉，擺盪上升併步' },
              actionDetail: '右腳前進邁出，順勢帶動身軀向右順時針旋轉，在 2 拍側跨上升，3 拍併步。',
              leadCue: '給出宏偉流暢的旋轉弧線。'
            },
            followerFoot: {
              foot: 'L',
              pos: { x: 48, y: 58, angle: 225, contact: 'ball', weight: 1, action: '左腳後退接應，隨男士擺盪上升' },
              actionDetail: '左腳平順後退，頭頸向左後方展延，如展翅天鵝。',
              followCue: '重心穩固，信任男士的軌跡。'
            },
            bodyMechanics: '離心力與向心力平衡，如陀螺旋轉。',
            commonMistake: '轉向不足導致走位斜斜歪歪。',
            fixTip: '第 1 拍腳尖指向要清晰對準旋轉切線。'
          },
          {
            id: 'w-nt-2',
            stepNumber: 2,
            countLabel: '4-6 (後半段後退右轉 3/8)',
            durationBeats: 3,
            leaderFoot: {
              foot: 'L',
              pos: { x: 42, y: 52, angle: 90, contact: 'ball', weight: 1, action: '左腳後退旋轉，右腳側跨併步' },
              actionDetail: '左腳向後退步，帶動後半圈轉正，6 拍末尾下降回舞程線。',
              leadCue: '引領女伴回到舞程線前進方向。'
            },
            followerFoot: {
              foot: 'R',
              pos: { x: 58, y: 48, angle: 270, contact: 'heel', weight: 1, action: '右腳大步前進，旋轉出圈併步' },
              actionDetail: '右腳大步向前跨出完成旋轉，優雅併齊下降。',
              followCue: '完美落幕，氣定神閒。'
            },
            bodyMechanics: '行雲流水，一氣呵成。',
            commonMistake: '後半段轉不過去卡住。',
            fixTip: '後退時腳跟不拖泥帶水，腳尖清晰引路。'
          }
        ]
      }
    ],
    videoLessons: [
      {
        id: 'waltz-vid-1',
        title: '慢華爾茲 (Slow Waltz) 升降 (Rise & Fall) 與擺盪精華教學',
        instructor: 'Marcus & Karen Hilton (世界大師課)',
        duration: '08:45',
        youtubeId: 'qQ3r32_8v1g',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/qQ3r32_8v1g',
        summary: '世界九屆黑池冠軍大師親自示範華爾茲 1-2-3 拍升降弧度、腳跟到腳尖（Heel to Toe）以及軀幹傾斜（Sway）的極致美學。',
        chapters: [
          { time: '00:00', seconds: 0, title: '華爾茲 3/4 拍宮廷律動本質' },
          { time: '01:45', seconds: 105, title: '第 1 拍降步 (Down) 的深沉力量' },
          { time: '03:30', seconds: 210, title: '第 2-3 拍擺盪上升 (Rise) 與腳尖併步' },
          { time: '05:40', seconds: 340, title: '第 3 拍末尾柔和降回 (Lower) 銜接點' },
          { time: '07:20', seconds: 440, title: '男女高位框架（Topline Frame）建立' }
        ],
        keyTakeaways: [
          '降（Lower）發生在第 1 拍起步與第 3 拍末尾，是華爾茲最關鍵的動能來源',
          '男女舞伴上身高位框架維持如拱橋般開闊，胸腔相互呼應'
        ]
      },
      {
        id: 'waltz-vid-2',
        title: '華爾茲右轉步 (Natural Turn) 與舞程線走位全拆解',
        instructor: 'Ballroom Mastery Academy',
        duration: '09:15',
        youtubeId: 'pQ79UjQoQ7s',
        fallbackEmbedUrl: 'https://www.youtube.com/embed/pQ79UjQoQ7s',
        summary: '系統拆解 6 拍右轉步的腳法走向、身體對向轉動（CBM）技巧，並引導舞者在舞池中沿舞程線優雅前行。',
        chapters: [
          { time: '00:00', seconds: 0, title: '舞程線 (Line of Dance) 導航原則' },
          { time: '02:10', seconds: 130, title: '前 3 拍前進旋轉步法與視線' },
          { time: '04:50', seconds: 290, title: '後 3 拍後退旋轉的腿部空間開闢' },
          { time: '07:30', seconds: 450, title: '常見失衡錯誤與練習修正' }
        ],
        keyTakeaways: [
          '後退旋轉時為舞伴開闢腿部通行空間，切勿緊縮卡住'
        ]
      }
    ],
    etiquetteTips: [
      '摩登社交舞會必須嚴格遵守「舞程線（LOD, Line of Dance）」逆時針環繞舞池前進，外圈為高速巡航區，中央為原地步法區。',
      '華爾茲需要較大的地面位移，領舞者在轉動時務必時刻用餘光掃視前方航道，隨時準備改做交換步避免追撞。',
      '著裝建議：男士著平整西服或合身襯衫，女士著及踝或長款大擺裙，鞋底以翻毛皮底社交舞鞋為佳。'
    ]
  }
];
