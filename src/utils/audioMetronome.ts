import { DanceId } from '../types/dance';

class RhythmSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  public getMuted() {
    return this.isMuted;
  }

  public getVolume() {
    return this.volume;
  }

  // Play beat according to dance style and beat count
  public playBeat(danceId: DanceId, beatNumber: number, totalBeats: number = 4) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      switch (danceId) {
        case 'bachata':
          this.playBachataBeat(beatNumber, now);
          break;
        case 'salsa':
          this.playSalsaBeat(beatNumber, now);
          break;
        case 'jitterbug':
          this.playJitterbugBeat(beatNumber, now);
          break;
        case 'tango':
          this.playTangoBeat(beatNumber, now);
          break;
        case 'waltz':
          this.playWaltzBeat(beatNumber, now);
          break;
        default:
          this.playStandardClick(beatNumber === 1, now);
      }
    } catch {
      // Audio autoplay policy fallback
    }
  }

  private playStandardClick(isDownbeat: boolean, time: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isDownbeat ? 1000 : 700, time);

    gain.gain.setValueAtTime(this.volume * (isDownbeat ? 0.8 : 0.4), time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.06);
  }

  // Bachata: 1-2-3 (Bongo) and 4 (Crisp Tap Rim click)
  private playBachataBeat(beat: number, time: number) {
    if (!this.ctx) return;
    const isTapBeat = beat === 4 || beat === 8;
    const isDownbeat = beat === 1 || beat === 5;

    // Güira Scraper effect (noise buffer)
    this.playGuiraScrape(time, isTapBeat ? 0.08 : 0.04);

    if (isTapBeat) {
      // High crisp wood rim click for the Tap/Pop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, time);
      osc.frequency.exponentialRampToValueAtTime(300, time + 0.04);

      gain.gain.setValueAtTime(this.volume * 0.9, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.06);
    } else {
      // Bongo tone
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isDownbeat ? 240 : 380, time);
      osc.frequency.exponentialRampToValueAtTime(120, time + 0.08);

      gain.gain.setValueAtTime(this.volume * (isDownbeat ? 0.8 : 0.5), time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.1);
    }
  }

  // Salsa: Clave woodblock + Conga slap on 1, 2, 3 (pause 4), 5, 6, 7 (pause 8)
  private playSalsaBeat(beat: number, time: number) {
    if (!this.ctx) return;
    const isPause = beat === 4 || beat === 8;
    const isDownbeat = beat === 1 || beat === 5;

    if (isPause) {
      // Subtle shaker whisper during pause
      this.playGuiraScrape(time, 0.03, 0.2);
      return;
    }

    // Clave sound (resonant wood block)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(isDownbeat ? 950 : 820, time);

    gain.gain.setValueAtTime(this.volume * (isDownbeat ? 0.9 : 0.6), time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.045);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(time);
    osc.stop(time + 0.05);

    // Conga low resonant tone
    const conga = this.ctx.createOscillator();
    const congaGain = this.ctx.createGain();
    conga.type = 'triangle';
    conga.frequency.setValueAtTime(190, time);
    conga.frequency.exponentialRampToValueAtTime(70, time + 0.08);

    congaGain.gain.setValueAtTime(this.volume * 0.4, time);
    congaGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    conga.connect(congaGain);
    congaGain.connect(this.ctx.destination);
    conga.start(time);
    conga.stop(time + 0.09);
  }

  // Jitterbug: 6-count swing shuffle (Slow 1-2, Slow 3-4, Quick 5, Quick 6)
  private playJitterbugBeat(beat: number, time: number) {
    if (!this.ctx) return;
    const isRockStep = beat === 5 || beat === 6;

    // Swing Ride Cymbal sound (filtered noise)
    this.playCymbal(time, isRockStep ? 0.09 : 0.06);

    // Snare slap on backbeats
    if (beat === 2 || beat === 4 || beat === 6) {
      const snare = this.ctx.createOscillator();
      const sGain = this.ctx.createGain();
      snare.type = 'triangle';
      snare.frequency.setValueAtTime(220, time);
      snare.frequency.exponentialRampToValueAtTime(80, time + 0.06);

      sGain.gain.setValueAtTime(this.volume * 0.6, time);
      sGain.gain.exponentialRampToValueAtTime(0.001, time + 0.07);

      snare.connect(sGain);
      sGain.connect(this.ctx.destination);
      snare.start(time);
      snare.stop(time + 0.08);
    } else {
      // Bass walk kick
      const kick = this.ctx.createOscillator();
      const kGain = this.ctx.createGain();
      kick.type = 'sine';
      kick.frequency.setValueAtTime(120, time);
      kick.frequency.exponentialRampToValueAtTime(45, time + 0.09);

      kGain.gain.setValueAtTime(this.volume * 0.8, time);
      kGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

      kick.connect(kGain);
      kGain.connect(this.ctx.destination);
      kick.start(time);
      kick.stop(time + 0.11);
    }
  }

  // Tango: Argentine Marcato Staccato beat (DUM... ta-DUM... DUM)
  private playTangoBeat(beat: number, time: number) {
    if (!this.ctx) return;
    const isHeavy = beat === 1 || beat === 5;

    // Deep Bandoneon low bass note + sharp accent
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';

    // Warm filter for tango accordion tone
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, time);

    osc.frequency.setValueAtTime(isHeavy ? 110 : 165, time);

    gain.gain.setValueAtTime(this.volume * (isHeavy ? 0.9 : 0.6), time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (isHeavy ? 0.14 : 0.08));

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.15);
  }

  // Waltz: 3/4 Time (BOOM - tik - tik)
  private playWaltzBeat(beat: number, time: number) {
    if (!this.ctx) return;
    const isDownbeat = (beat - 1) % 3 === 0;

    if (isDownbeat) {
      // Rich deep ballroom downbeat bell (BOOM)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, time);
      osc.frequency.exponentialRampToValueAtTime(65, time + 0.25);

      gain.gain.setValueAtTime(this.volume * 0.9, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.3);
    } else {
      // Light crystal upbeats (tik, tik)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620, time);

      gain.gain.setValueAtTime(this.volume * 0.45, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + 0.08);
    }
  }

  private playGuiraScrape(time: number, duration: number, volMultiplier: number = 0.5) {
    if (!this.ctx) return;
    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(3200, time);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.volume * volMultiplier, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(time);
      noise.stop(time + duration);
    } catch {
      // Ignore
    }
  }

  private playCymbal(time: number, duration: number) {
    if (!this.ctx) return;
    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.7;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(6500, time);
      filter.Q.setValueAtTime(2.5, time);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.volume * 0.4, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(time);
      noise.stop(time + duration);
    } catch {
      // Ignore
    }
  }
}

export const rhythmAudio = new RhythmSynthesizer();
