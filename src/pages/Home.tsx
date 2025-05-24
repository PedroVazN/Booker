import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import AboutSection from '@/components/AboutSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import ReviewCard from '@/components/ReviewCard';

const reviews = [
  {
    name: "Ana Silva",
    rating: 5,
    date: "há 2 dias",
    text: "Os cursos da Booker transformaram completamente minha relação com o dinheiro. A didática é excelente e o conteúdo é muito prático. Recomendo demais!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carlos Oliveira",
    rating: 5,
    date: "há 1 semana",
    text: "Comecei do zero e agora já consigo investir com confiança. O suporte é incrível e o material é muito bem estruturado. Vale cada centavo investido!",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mariana Santos",
    rating: 5,
    date: "há 2 semanas",
    text: "A planilha de controle financeiro é sensacional! Nunca imaginei que conseguiria organizar minhas finanças de forma tão simples e eficiente.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Pedro Costa",
    rating: 5,
    date: "há 1 mês",
    text: "O curso de investimentos básicos é perfeito para quem está começando. Explicações claras e exemplos práticos que fazem toda a diferença.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-graphite text-white overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutSection />

      {/* Avaliações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 green-text">O que nossos alunos dizem</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white/80">4.9 de 5 estrelas</span>
              </div>
              <p className="text-white/60">Baseado em mais de 50 avaliações</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  rating={review.rating}
                  date={review.date}
                  text={review.text}
                  avatar={review.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      
      {/* Countdown Timer */}
      <div className="fixed bottom-4 left-4 z-50">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Home; 