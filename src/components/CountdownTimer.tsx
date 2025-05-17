
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when timer reaches zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="bg-dark-lighter/80 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 neon-border animate-pulse">
      <Clock size={16} className="text-neon" />
      <div className="text-white text-sm font-medium">
        <span className="font-orbitron text-neon">{formatTime(timeLeft.hours)}</span>
        <span className="text-white/70">:</span>
        <span className="font-orbitron text-neon">{formatTime(timeLeft.minutes)}</span>
        <span className="text-white/70">:</span>
        <span className="font-orbitron text-neon">{formatTime(timeLeft.seconds)}</span>
        <span className="ml-2 text-xs font-medium text-white/80">restantes para o fim da promoção</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
