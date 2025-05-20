import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="bg-graphite-lighter/80 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 gold-border animate-pulse">
      <Clock size={16} className="text-gold" />
      <div className="text-white text-sm font-medium">
        <span className="font-orbitron text-gold">{formatTime(timeLeft.hours)}</span>
        <span className="text-white/70">:</span>
        <span className="font-orbitron text-gold">{formatTime(timeLeft.minutes)}</span>
        <span className="text-white/70">:</span>
        <span className="font-orbitron text-gold">{formatTime(timeLeft.seconds)}</span>
        <span className="ml-2 text-xs font-medium text-white/80">restantes para o fim da promoção</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
