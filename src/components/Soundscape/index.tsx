import { useState, useRef, useEffect } from 'react';
import './Soundscape.scss';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      startSound();
    } else {
      stopSound();
    }
  };

  const startSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 3); // Soft ambient volume
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Meditative Root Drone (432Hz harmonic base - A 108Hz)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, ctx.currentTime);

      // Warm Fifth (E 162Hz)
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(162, ctx.currentTime);

      // Low Grounding Sub (54Hz)
      const osc3 = ctx.createOscillator();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(54, ctx.currentTime);

      // Slow organic LFO vibrato
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1, ctx.currentTime); // Slow 10-second breath cycle
      lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
      lfoGain.connect(osc2.frequency);

      // Filter for warm forest tone
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
      osc3.start();
      lfo.start();

      setIsPlaying(true);
    } catch (e) {
      console.error("Audio Context initialization failed:", e);
    }
  };

  const stopSound = () => {
    if (audioCtxRef.current && masterGainRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1);
      setTimeout(() => {
        ctx.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="soundscape-control">
      <button 
        className={`sound-btn ${isPlaying ? 'active' : ''}`}
        onClick={toggleSound}
        data-cursor-view={isPlaying ? "MUTE" : "SOUND"}
        aria-label="Toggle ambient atmospheric sound"
      >
        <span className="sound-pulse" />
        <span className="sound-text">
          ATMOSPHERE: {isPlaying ? '432Hz ON' : 'OFF'}
        </span>
      </button>
    </div>
  );
}
