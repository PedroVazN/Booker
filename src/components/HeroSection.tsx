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
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-green/5 rounded-full blur-[80px] animate-pulse parallax-element" data-speed="0.02"></div>
        <div className="absolute top-[60%] right-[10%] w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse parallax-element" data-speed="0.03" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-green/5 rounded-full blur-[90px] animate-pulse parallax-element" data-speed="0.04" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Floating code particles */}
        <div className="absolute top-[15%] left-[20%] text-green/10 text-xs font-mono animate-[float_25s_ease-in-out_infinite] parallax-element" data-speed="0.05">
          {'{invest()}'}
        </div>
        <div className="absolute top-[25%] right-[25%] text-gold/10 text-xs font-mono animate-[float_20s_ease-in-out_infinite] parallax-element" data-speed="0.07" style={{ animationDelay: '2s' }}>
          {'const future = invest(money)'}
        </div>
        <div className="absolute bottom-[30%] left-[15%] text-green/10 text-xs font-mono animate-[float_30s_ease-in-out_infinite] parallax-element" data-speed="0.06" style={{ animationDelay: '1s' }}>
          {'if(knowledge) { success = true }'}
        </div>
        
        {/* Digital particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-green/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-glow ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(39,174,96,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(39,174,96,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 green-text tracking-tight opacity-0 translate-y-10 transition-all duration-700"
          >
            Invista no seu futuro financeiro
          </h1>
          <p 
            ref={descriptionRef}
            className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed opacity-0 translate-y-10 transition-all duration-700"
          >
            Cursos desenvolvidos para transformar sua relação com dinheiro. 
            Domine investimentos e finanças pessoais com as melhores ferramentas do mercado.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 opacity-0 translate-y-10 transition-all duration-700"
          >
            <a 
              href="#courses" 
              className="bg-transparent border-2 border-green text-green hover:bg-green hover:text-graphite-lighter px-8 py-3 rounded-md text-lg relative overflow-hidden group shadow-[0_0_12px_rgba(39,174,96,0.3)] transition-all duration-300"
            >
              <span className="relative z-10 font-medium">Ver Cursos</span>
              <span className="absolute inset-0 bg-green/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold/10 hover:border-gold hover:text-gold px-8 py-3 rounded-md text-lg transition-all duration-300 font-medium"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
