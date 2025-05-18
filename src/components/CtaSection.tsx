import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-transparent opacity-40"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-graphite-lighter"></div>
        <div className="absolute top-[20%] right-[20%] w-96 h-96 bg-green/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-gold/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Animated background lines */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 40 20 M 20 0 L 20 40" fill="none" stroke="#27AE60" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated particles */}
        <div className="absolute w-2 h-2 bg-green/30 rounded-full top-[30%] left-[20%] animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute w-3 h-3 bg-gold/20 rounded-full top-[20%] right-[30%] animate-[float_20s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-2 h-2 bg-green/20 rounded-full bottom-[25%] right-[15%] animate-[float_18s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Additional floating elements */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-green/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-glow ${3 + Math.random() * 5}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={ctaRef}
          className="max-w-4xl mx-auto p-8 md:p-12 border border-green/30 rounded-2xl green-border backdrop-blur-sm opacity-0 scale-95 transition-all duration-1000 glass-effect"
        >
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-bold mb-4">AÇÃO LIMITADA</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Pronto para transformar sua vida financeira?
            </h2>
            <p className="text-white/70 mb-8 md:text-lg">
              Nossos cursos já ajudaram centenas de pessoas a conquistar independência financeira. 
              Você será o próximo?
            </p>
            
            <a 
              href="#courses" 
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-graphite py-3 px-8 rounded-md text-lg inline-flex items-center gap-2 group relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(241,196,15,0.3)]"
            >
              <span className="relative z-10 font-medium">Comece Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-gold/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
            
            <div className="mt-8 text-sm text-white/50 flex flex-wrap justify-center gap-3">
              <span className="flex items-center"><span className="w-1 h-1 bg-gold rounded-full mr-2"></span>Acesso imediato</span>
              <span className="flex items-center"><span className="w-1 h-1 bg-gold rounded-full mr-2"></span>Garantia de 7 dias</span>
              <span className="flex items-center"><span className="w-1 h-1 bg-gold rounded-full mr-2"></span>Suporte contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
