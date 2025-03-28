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

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        document.removeEventListener("click", playAudio); // Remove listener after first interaction
      } catch (err) {
        console.error("Autoplay blocked:", err);
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => console.warn("Playback error"));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button onClick={toggleMusic} className="fixed top-1 right-5 lg:top-5 lg:right-5 text-sm lg:text-lg">
      {isPlaying ? "🔇 Mute" : "🔊 Play"}
    </button>
  );
};

export default BackgroundMusic;
