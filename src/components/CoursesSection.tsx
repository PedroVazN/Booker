import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: "investidor-em-uma-hora",
    title: "Investidor em uma hora",
    description: "Aprenda a investir de forma inteligente e comece sua jornada para a liberdade financeira mesmo com pouco tempo disponível.",
    regularPrice: "441,00",
    salePrice: "97,90",
    link: "https://pay.kiwify.com.br/cTh1aoy?afid=vHib36ed",
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/fPC2EqvXuzZwSWA/img_builder_44679afb-66ea-44ae-83d9-15afbb957a68_871022d88af74ceeb21f168e427072fe.png"
  },
  {
    id: "planilha-controle-financeiro",
    title: "Planilha de Controle Financeiro Pessoal 2.0",
    description: "Organize suas finanças com nossa planilha avançada. Monitore gastos, economias e investimentos em um só lugar.",
    regularPrice: "397,00",
    salePrice: "97,00",
    link: "https://pay.kiwify.com.br/vTO5aL1?afid=cLHt9Aoe",
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=700/speKigpg0cHiJoe/img_builder_925fa093-0526-4745-a5c5-1e2f4bfc38fa_8a1347b851f34feaa82f2d47989274e7.png"
  },
  {
    id: "kit-desafio-controle-financeiro",
    title: "Kit Desafio Controle Financeiro",
    description: "Conjunto completo com ebooks e planilha para transformar sua vida financeira em apenas 30 dias.",
    regularPrice: "49,99",
    salePrice: "19,99",
    link: "https://pay.kiwify.com.br/NVn43js?afid=KA3qbGkf",
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=700/IYCgXnHwsKQOGkY/img_builder_13030c96-81cf-4b7e-9f16-4f32b52c26ee_0237cb920ea341879367a0b894bcd57b.png"
  }
];

const CoursesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-[fadeIn_1s_ease-out_forwards]');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="courses" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-[40%] right-[30%] w-80 h-80 bg-green/5 rounded-full blur-[90px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-gold/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute w-3 h-3 bg-green/30 rounded-full top-[10%] left-[10%] animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute w-2 h-2 bg-gold/20 rounded-full top-[30%] right-[15%] animate-[float_20s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-4 h-4 bg-green/20 rounded-full bottom-[20%] right-[25%] animate-[float_18s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(rgba(39,174,96,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(39,174,96,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 green-text relative inline-block">
            Nossos Cursos
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green/50"></span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mt-6">
            Transforme sua relação com o dinheiro através dos nossos cursos especializados em finanças pessoais e investimentos.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              courseId={course.id}
              title={course.title}
              description={course.description}
              regularPrice={course.regularPrice}
              salePrice={course.salePrice}
              link={course.link}
              imageUrl={course.imageUrl}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
