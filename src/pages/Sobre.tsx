import React from 'react';
import Navbar from '@/components/Navbar';
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
  },
  {
    name: "Juliana Lima",
    rating: 5,
    date: "há 1 mês",
    text: "O Kit Desafio me ajudou a criar uma rotina financeira saudável. Em 30 dias já vi resultados significativos. Super recomendo!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Rafael Mendes",
    rating: 5,
    date: "há 2 meses",
    text: "A qualidade dos cursos é impressionante. O conteúdo é atualizado e as estratégias são realmente aplicáveis no dia a dia.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-graphite text-white overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 green-text">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Transformando vidas através da educação financeira
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-graphite-lighter/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gold">Nossa Missão</h2>
              <p className="text-white/80">
                Democratizar o acesso à educação financeira de qualidade, 
                ajudando pessoas a alcançarem sua independência financeira 
                através de cursos práticos e acessíveis.
              </p>
            </div>
            <div className="bg-graphite-lighter/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gold">Nossa Visão</h2>
              <p className="text-white/80">
                Ser referência em educação financeira no Brasil, 
                impactando positivamente a vida de milhares de pessoas 
                através de conteúdo de alta qualidade e suporte personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-graphite-lighter/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 green-text">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gold">Excelência</h3>
              <p className="text-white/80">
                Comprometimento com a qualidade em tudo o que fazemos
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gold">Transparência</h3>
              <p className="text-white/80">
                Clareza e honestidade em todas as nossas relações
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-gold">Inovação</h3>
              <p className="text-white/80">
                Busca constante por melhorias e novas soluções
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-white/60">Baseado em mais de 1.000 avaliações</p>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 green-text">Faça parte da nossa história</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas financeiras com nossos cursos
          </p>
          <a 
            href="/cursos" 
            className="bg-green hover:bg-green/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 inline-block"
          >
            Conheça Nossos Cursos
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

export default Sobre; 