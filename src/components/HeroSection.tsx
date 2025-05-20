import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const buttonsElement = buttonsRef.current;

    if (titleElement) {
      titleElement.classList.add('opacity-100', 'translate-y-0');
    }

    if (descriptionElement) {
      setTimeout(() => {
        descriptionElement.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }

    if (buttonsElement) {
      setTimeout(() => {
        buttonsElement.classList.add('opacity-100', 'translate-y-0');
      }, 600);
    }
    
    // Add mouse move effect for parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.querySelectorAll('.parallax-element').forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.05');
        const moveX = (x * 100 - 50) * speed;
        const moveY = (y * 100 - 50) * speed;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[100vh] flex items-center">
      {/* Sem efeitos de fundo */}
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Texto à esquerda */}
          <div className="w-full lg:w-2/5 flex flex-col items-center text-center z-10">
            <h1 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 green-text tracking-tight opacity-0 translate-y-10 transition-all duration-700"
            >
              Invista no seu futuro financeiro
            </h1>
            <p 
              ref={descriptionRef}
              className="text-white/80 text-base md:text-lg mb-6 leading-relaxed opacity-0 translate-y-10 transition-all duration-700"
            >
              Cursos desenvolvidos para transformar sua relação com dinheiro. <br className="hidden md:block" />
              Domine investimentos e finanças pessoais com as melhores ferramentas do mercado.
            </p>
            <div 
              ref={buttonsRef}
              className="flex flex-wrap justify-center gap-3 opacity-0 translate-y-10 transition-all duration-700"
            >
              <a 
                href="#courses" 
                className="bg-transparent border-2 border-green text-green hover:bg-green hover:text-graphite-lighter px-6 py-2 rounded-md text-base relative overflow-hidden group shadow-[0_0_12px_rgba(39,174,96,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 font-medium">Ver Cursos</span>
                <span className="absolute inset-0 bg-green/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </a>
              <a 
                href="#about" 
                className="bg-transparent border-2 border-gold text-gold hover:bg-gold/10 hover:border-gold hover:text-gold px-6 py-2 rounded-md text-base transition-all duration-300 font-medium"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="hidden lg:flex w-full lg:w-3/5 justify-end items-center mb-10 lg:mb-0 pl-0 lg:pl-16 xl:pl-32 relative">
            <img 
              src="/pessoasbooker.png" 
              alt="Equipe Booker" 
              className="w-full max-w-[1000px] h-auto rounded-2xl object-contain animate-fadeIn shadow-2xl"
              style={{ minWidth: '320px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
