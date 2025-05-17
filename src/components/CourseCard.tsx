
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  regularPrice: string;
  salePrice: string;
  link: string;
  imageUrl: string;
  delay?: number;
}

const CourseCard = ({ 
  title, 
  description, 
  regularPrice, 
  salePrice, 
  link,
  imageUrl,
  delay = 0
}: CourseCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-dark-card rounded-xl overflow-hidden border border-neon/20 hover:neon-border transition-all duration-500 flex flex-col h-full opacity-0 translate-y-10 transform hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Overlay effect on hover */}
        <div 
          className={`absolute inset-0 bg-neon/10 opacity-0 transition-opacity duration-300 z-5 ${
            isHovered ? 'opacity-100' : ''
          }`}
        ></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-neon transition-colors">{title}</h3>
        <p className="text-white/70 mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center">
            <span className="text-white/50 line-through text-sm mr-2">R$ {regularPrice}</span>
            <span className="bg-neon/10 text-neon px-2 py-1 rounded text-xs font-bold animate-pulse">DESCONTO</span>
          </div>
          <div className="text-2xl font-orbitron font-bold text-white">
            R$ <span className="text-neon">{salePrice}</span>
          </div>
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="neon-button rounded-md py-3 px-4 flex items-center justify-center gap-2 group relative overflow-hidden"
        >
          <span className="relative z-10">Comprar Agora</span> 
          <ArrowRight 
            size={18} 
            className="group-hover:translate-x-1 transition-transform relative z-10" 
          />
          <span className="absolute inset-0 bg-neon/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
