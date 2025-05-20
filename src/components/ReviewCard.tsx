import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

const ReviewCard = ({ name, rating, date, text, avatar }: ReviewCardProps) => {
  return (
    <div className="bg-graphite-lighter/10 p-6 rounded-lg hover:bg-graphite-lighter/20 transition-all duration-300">
      <div className="flex items-start gap-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-white">{name}</h3>
            <span className="text-white/50 text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-gold fill-gold" : "text-white/20"}
              />
            ))}
          </div>
          <p className="text-white/80 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard; 