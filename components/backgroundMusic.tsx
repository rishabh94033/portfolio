"use client";
import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/Pufino - Awake (freetouse.com).mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
  
    // Try to auto-play
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay blocked. Waiting for user interaction.");
      }
    };
  
    document.addEventListener("click", playAudio);
    
    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
    };
  }, []);
  

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => console.warn("Playback error"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button onClick={toggleMusic} className="fixed top-0 right-7 lg:top-5 lg:right-5 text-sm lg:text-lg">
      {isPlaying ? "🔇 Mute" : "🔊 Play"}
    </button>
  );
};

export default BackgroundMusic;
