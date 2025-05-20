import React from 'react';
import Navbar from './Navbar';
import CountdownTimer from './CountdownTimer';

interface CoursePageProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  modules: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  imageUrl: string;
  kiwifyLink: string;
}

const CoursePage: React.FC<CoursePageProps> = ({
  title,
  description,
  price,
  duration,
  modules,
  benefits,
  imageUrl,
  kiwifyLink
}) => {
  const handleKiwifyClick = () => {
    window.open(kiwifyLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-graphite-darker text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 green-text">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-graphite-lighter/10 p-4 rounded-lg">
                <span className="text-gold font-medium">Duração:</span> {duration}
              </div>
              <div className="bg-graphite-lighter/10 p-4 rounded-lg">
                <span className="text-gold font-medium">Investimento:</span> R$ {price.toLocaleString('pt-BR')}
              </div>
            </div>
            <button 
              onClick={handleKiwifyClick}
              className="bg-green hover:bg-green/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
            >
              Matricule-se Agora
            </button>
          </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 green-text">Módulos do Curso</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <div key={index} className="bg-graphite-lighter/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">{module.title}</h3>
                <p className="text-white/80">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 green-text">O que você vai aprender</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-graphite-lighter/10 p-6 rounded-lg text-center">
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-graphite-lighter/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 green-text">Comece sua jornada hoje mesmo</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Invista em seu futuro financeiro com um dos cursos mais completos do mercado
          </p>
          <button 
            onClick={handleKiwifyClick}
            className="bg-green hover:bg-green/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300"
          >
            Garantir minha vaga
          </button>
        </div>
      </section>

      {/* Countdown Timer */}
      <div className="fixed bottom-4 left-4 z-50">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default CoursePage; 