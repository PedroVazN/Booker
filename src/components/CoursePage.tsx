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
  offers?: {
    title: string;
    description: string;
    price: string;
  }[];
  securityInfo?: string;
  requirements?: string[];
  videoUrl?: string;
}

const CoursePage: React.FC<CoursePageProps> = ({
  title,
  description,
  price,
  duration,
  modules,
  benefits,
  imageUrl,
  kiwifyLink,
  offers,
  securityInfo,
  requirements,
  videoUrl
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
            {/* Vídeo do YouTube */}
            {videoUrl && (
              <div className="mb-8">
                <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoUrl.replace('youtu.be', 'youtube.com/embed')}
                    title="Vídeo de apresentação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            
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

      {/* Preço e CTA */}
      <section className="py-16 bg-graphite-lighter/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 green-text">Invista em seu Futuro</h2>
            <p className="text-xl text-white/80 mb-8">
              Comece sua jornada para a liberdade financeira hoje mesmo
            </p>
            
            {/* Ofertas Especiais */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {offers?.map((offer, index) => (
                <div key={index} className="bg-graphite-lighter/10 p-6 rounded-lg hover:bg-graphite-lighter/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-gold">{offer.title}</h3>
                  <p className="text-white/80 mb-4">{offer.description}</p>
                  <p className="text-2xl font-bold text-green mb-4">{offer.price}</p>
                  <a 
                    href={kiwifyLink}
                    className="bg-green hover:bg-green/90 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 inline-block w-full text-center"
                  >
                    QUERO ESTA OFERTA
                  </a>
                </div>
              ))}
            </div>

            {/* Informação de Segurança */}
            {securityInfo && (
              <div className="bg-graphite-lighter/10 p-6 rounded-lg mb-8">
                <p className="text-white/80 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {securityInfo}
                </p>
              </div>
            )}

            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl font-bold text-white">
                Acesso Vitalício por Apenas
              </p>
              <p className="text-4xl font-bold text-green">
                R$ {price.toLocaleString('pt-BR')}
              </p>
              <a 
                href={kiwifyLink}
                className="bg-green hover:bg-green/90 text-white px-8 py-4 rounded-md text-xl font-medium transition-all duration-300 inline-block"
              >
                Matricule-se Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos do Sistema */}
      {requirements && requirements.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 green-text">Requisitos do Sistema</h2>
              <div className="bg-graphite-lighter/10 p-6 rounded-lg">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

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