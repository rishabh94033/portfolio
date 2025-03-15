"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const targetDate = new Date("2025-06-01T00:00:00"); // Set your launch date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-4">
      <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">🚀 Coming Soon</h1>
      <p className="text-lg text-gray-400 animate-fade-in delay-200">
        I'm working on something awesome. Stay tuned!
      </p>

      {/* Countdown Timer */}
      <div className="mt-8 flex space-x-6 text-center">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className="text-4xl font-semibold">{value}</span>
            <span className="text-gray-400 uppercase text-sm">{key}</span>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex space-x-4 animate-fade-in delay-500">
        <a href="https://x.com/Rishabh94033" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
          Twitter
        </a>
        <a href="https://github.com/rishabh94033" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          GitHub
        </a>
        <a href="mailto:Rishabh94033@gmail.com" className="text-gray-400 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  );
}
