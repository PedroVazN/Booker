import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-graphite-dark overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center p-0 md:p-0 z-10 relative min-h-[60vh]">
        {/* Imagem ocupando metade da tela */}
        <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center overflow-hidden">
          <img 
            src="/pessoasegurandoipad.jpg" 
            alt="Pessoa segurando iPad Booker" 
            className="object-cover w-full h-full md:h-[60vh] md:rounded-none rounded-b-2xl shadow-xl"
            style={{objectPosition: 'center'}}
          />
        </div>
        {/* Texto e CTA com degradê */}
        <div className="w-full md:w-1/2 flex flex-col items-end justify-center text-right px-6 md:px-12 py-8 md:py-0 bg-gradient-to-l from-[#23272A] via-[#23272A]/90 to-[#27AE60]/10">
          <div className="flex flex-col items-end justify-center gap-2 md:gap-4 max-w-xl mx-auto">
            <div className="text-[#27AE60] text-2xl md:text-4xl font-extrabold leading-tight" style={{textShadow: '0 2px 12px #23272A'}}>INVISTA NO QUE<br />REALMENTE IMPORTA:</div>
            <div className="text-[#27AE60] text-3xl md:text-5xl font-black underline underline-offset-4" style={{textShadow: '0 2px 12px #23272A'}}>SEU FUTURO!</div>
            <div className="text-white/90 text-base md:text-lg mt-2 md:mt-4 max-w-xs md:max-w-sm" style={{textShadow: '0 2px 8px #23272A'}}>Aprenda a investir, economizar e conquistar sua liberdade financeira com os melhores cursos do mercado.</div>
            <a href="#courses" className="mt-4 md:mt-6 px-8 py-3 bg-gradient-to-r from-[#27AE60] to-[#43e97b] text-graphite-dark font-bold text-lg md:text-xl rounded-full shadow-lg hover:scale-105 hover:from-[#43e97b] hover:to-[#27AE60] transition-all duration-300">Quero Aprender!</a>
          </div>
        </div>
      </div>
      {/* Faixa inferior com linhas diagonais */}
      <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-transparent flex items-end overflow-hidden z-20">
        <svg width="100%" height="100%" viewBox="0 0 100 12" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="4" height="12" patternTransform="rotate(20)">
              <rect x="0" y="0" width="1.5" height="12" fill="#27AE60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
