import React from 'react';
import Navbar from '@/components/Navbar';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Cursos = () => {
  return (
    <div className="min-h-screen bg-graphite text-white overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      
      {/* Hero Section para Cursos */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 green-text">
              Transforme sua Vida Financeira
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Conheça nossa seleção completa de cursos para transformar sua vida financeira
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Cursos */}
      <CoursesSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-graphite-lighter/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 green-text">Comece sua jornada hoje mesmo</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Escolha o curso ideal para você e comece sua transformação financeira
          </p>
          <a 
            href="#courses" 
            className="bg-green hover:bg-green/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 inline-block"
          >
            Ver Todos os Cursos
          </a>
        </div>
      </section>

      <Footer />
      
      {/* Countdown Timer */}
      <div className="fixed bottom-4 left-4 z-50">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Cursos; 