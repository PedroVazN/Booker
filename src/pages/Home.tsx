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
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Carlos Oliveira",
    rating: 5,
    date: "há 1 semana",
    text: "Comecei do zero e agora já consigo investir com confiança. O suporte é incrível e o material é muito bem estruturado. Vale cada centavo investido!",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Mariana Santos",
    rating: 5,
    date: "há 2 semanas",
    text: "A planilha de controle financeiro é sensacional! Nunca imaginei que conseguiria organizar minhas finanças de forma tão simples e eficiente.",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Pedro Costa",
    rating: 5,
    date: "há 1 mês",
    text: "O curso de investimentos básicos é perfeito para quem está começando. Explicações claras e exemplos práticos que fazem toda a diferença.",
    avatar: "https://i.pravatar.cc/150?img=4"
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