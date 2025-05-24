import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-graphite-dark overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-center p-0 md:p-0 z-10 relative min-h-[60vh]">
        {/* Imagem ocupando metade da tela */}
        <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center overflow-hidden relative">
          <img 
            src="/pessoasegurandoipad.jpg" 
            alt="Pessoa segurando iPad Booker" 
            className="object-cover w-full h-full md:h-[60vh] md:rounded-none rounded-b-2xl shadow-xl"
            style={{objectPosition: 'center'}}
          />
          {/* Degradê responsivo */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent via-[#23272A]/30 to-[#23272A] md:from-transparent md:via-[#23272A]/30 md:to-[#23272A] opacity-90"></div>
        </div>
        {/* Texto e CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center text-center md:text-right px-4 sm:px-6 md:px-12 py-8 md:py-0 bg-[#23272A]">
          <div className="flex flex-col items-center md:items-end justify-center gap-2 md:gap-4 max-w-xl mx-auto">
            <div className="text-[#27AE60] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight" style={{textShadow: '0 2px 12px #23272A'}}>
              INVISTA NO QUE<br />REALMENTE IMPORTA:
            </div>
            <div className="text-[#27AE60] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black underline underline-offset-4" style={{textShadow: '0 2px 12px #23272A'}}>
              SEU FUTURO!
            </div>
            <div className="text-white/90 text-sm sm:text-base md:text-lg mt-2 md:mt-4 max-w-xs md:max-w-sm" style={{textShadow: '0 2px 8px #23272A'}}>
              Aprenda a investir, economizar e conquistar sua liberdade financeira com os melhores cursos do mercado.
            </div>
            <a 
              href="#courses" 
              className="mt-4 md:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#27AE60] to-[#43e97b] text-graphite-dark font-bold text-base sm:text-lg md:text-xl rounded-full shadow-lg hover:scale-105 hover:from-[#43e97b] hover:to-[#27AE60] transition-all duration-300"
            >
              Quero Aprender!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
