export type DanceId = 'bachata' | 'salsa' | 'jitterbug' | 'tango' | 'waltz';

export type Foot = 'L' | 'R';
export type Role = 'leader' | 'follower' | 'both';
export type FootContact = 'flat' | 'ball' | 'heel' | 'tap' | 'brush';

export interface FootPosition {
  x: number; // 0 to 100 percentage on floor
  y: number; // 0 to 100 percentage on floor
  angle: number; // degrees, 0 = facing up
  contact: FootContact;
  weight: number; // 0 (no weight/tap) to 1 (full weight)
  action: string; // e.g. "左腳橫跨", "右腳前進踏步", "左腳提臀輕點"
}

export interface StepItem {
  id: string;
  stepNumber: number;
  countLabel: string; // "1", "2", "3", "4 (Tap)", "5-6 (Rock)", "Slow", "Quick"
  durationBeats: number;
  leaderFoot: {
    foot: Foot;
    pos: FootPosition;
    actionDetail: string;
    leadCue: string;
  };
  followerFoot: {
    foot: Foot;
    pos: FootPosition;
    actionDetail: string;
    followCue: string;
  };
  bodyMechanics: string; // 身體軀幹律動、骨盆動態或升降 (Rise & Fall)
  commonMistake: string; // 常見錯誤
  fixTip: string; // 改進建議
}

export interface DanceFigure {
  id: string;
  name: string;
  englishName: string;
  level: '入門入門' | '基礎核心' | '進階風格';
  timeSignature: string; // "4/4", "3/4"
  bpm: number;
  description: string;
  leadKeypoints: string[];
  followKeypoints: string[];
  steps: StepItem[];
  practiceTips: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  youtubeId: string;
  fallbackEmbedUrl?: string;
  summary: string;
  chapters: {
    time: string;
    seconds: number;
    title: string;
  }[];
  keyTakeaways: string[];
}

export interface DanceStyle {
  id: DanceId;
  name: string;
  chineseName: string;
  subtitle: string;
  origin: string;
  meter: string; // "4/4 拍", "3/4 拍"
  bpmRange: string;
  defaultBpm: number;
  heroImage: string;
  accentColor: string;
  badgeBg: string;
  description: string;
  culturalBackground: string;
  musicalityGuide: {
    rhythmStructure: string;
    percussionInstruments: string[];
    countingRule: string;
    bodyIsolationTip: string;
  };
  figures: DanceFigure[];
  videoLessons: VideoLesson[];
  etiquetteTips: string[];
}
