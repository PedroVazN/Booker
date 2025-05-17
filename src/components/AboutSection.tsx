
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('opacity-100', 'animate-[fadeIn_1s_ease-out_forwards]');
            } else if (entry.target === textRef.current) {
              entry.target.classList.add('opacity-100', 'animate-[fadeIn_1s_ease-out_0.3s_forwards]');
            } else if (entry.target === sectionRef.current) {
              const index = Number(entry.target.getAttribute('data-index'));
              setTimeout(() => {
                entry.target.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (sectionRef.current) observer.observe(sectionRef.current);

    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      
      statsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-dark-lighter relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-[30%] left-[20%] w-64 h-64 bg-neon/5 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-neon/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20 H80 V80 H20 Z" fill="none" stroke="#39FF14" strokeWidth="1" opacity="0.3" />
                <circle cx="20" cy="20" r="2" fill="#39FF14" opacity="0.5" />
                <circle cx="80" cy="80" r="2" fill="#39FF14" opacity="0.5" />
                <path d="M20 50 H50 V80" fill="none" stroke="#39FF14" strokeWidth="1" opacity="0.3" />
                <circle cx="50" cy="50" r="2" fill="#39FF14" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        {/* Animated dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-neon/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse-glow ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold mb-4 neon-text opacity-0 relative inline-block"
          >
            Sobre a Booker
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-neon/50"></span>
          </h2>
          <p 
            ref={textRef}
            className="text-white/70 mb-8 text-lg opacity-0"
          >
            Nossa missão é democratizar o conhecimento financeiro e ajudar as pessoas a conquistarem 
            independência financeira através de educação de qualidade.
          </p>
          
          <div 
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 stagger-animation"
          >
            {[
              { value: '100+', text: 'Alunos satisfeitos', icon: '👨‍🎓' },
              { value: '3', text: 'Cursos especializados', icon: '📚' },
              { value: '5⭐', text: 'Avaliação média', icon: '⭐' }
            ].map((stat, index) => (
              <div
                key={index}
                ref={el => statsRefs.current[index] = el}
                data-index={index}
                className="p-6 border border-neon/20 rounded-xl bg-dark/80 hover:neon-border transition-all opacity-0 translate-y-10 duration-500 hover:-translate-y-2"
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className="text-neon text-4xl font-bold mb-2 counter-animation">{stat.value}</div>
                <p className="text-white">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
