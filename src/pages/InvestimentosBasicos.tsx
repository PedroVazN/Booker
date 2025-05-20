import React from 'react';
import CoursePage from '../components/CoursePage';

const InvestimentosBasicos = () => {
  const courseData = {
    title: "Investimentos Básicos",
    description: "Aprenda os fundamentos dos investimentos e comece a fazer seu dinheiro trabalhar para você. Um curso completo para iniciantes que desejam construir riqueza de forma inteligente e segura.",
    price: 197.00,
    duration: "Acesso Vitalício",
    modules: [
      {
        title: "Fundamentos dos Investimentos",
        description: "Entenda os conceitos básicos do mercado financeiro, tipos de investimentos e como começar a investir com segurança. Aprenda a avaliar riscos e retornos."
      },
      {
        title: "Renda Fixa",
        description: "Conheça as principais opções de investimentos em renda fixa, como Tesouro Direto, CDBs e LCIs. Aprenda a escolher os melhores títulos para seu perfil."
      },
      {
        title: "Renda Variável",
        description: "Descubra como investir em ações, ETFs e fundos imobiliários. Aprenda análise fundamentalista básica e estratégias de longo prazo."
      },
      {
        title: "Planejamento Financeiro",
        description: "Desenvolva seu plano de investimentos personalizado. Aprenda a diversificar sua carteira e alcançar seus objetivos financeiros."
      }
    ],
    benefits: [
      "Conteúdo atualizado mensalmente",
      "Suporte exclusivo",
      "Material em PDF",
      "Acesso vitalício",
      "Certificado de conclusão",
      "Grupo de alunos"
    ],
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=700/speKigpg0cHiJoe/img_builder_925fa093-0526-4745-a5c5-1e2f4bfc38fa_8a1347b851f34feaa82f2d47989274e7.png",
    testimonials: [
      {
        name: "Pedro Almeida",
        role: "Engenheiro",
        text: "Comecei do zero e hoje já tenho uma carteira diversificada. O curso me deu a base que precisava para investir com confiança!",
        image: "https://i.pravatar.cc/150?img=1"
      },
      {
        name: "Fernanda Lima",
        role: "Advogada",
        text: "O material é super didático e as atualizações mensais mantêm o conteúdo sempre relevante. Recomendo para todos que querem começar a investir!",
        image: "https://i.pravatar.cc/150?img=4"
      },
      {
        name: "Ricardo Oliveira",
        role: "Professor",
        text: "Mesmo com pouco dinheiro para investir, consegui aplicar as estratégias do curso e já estou vendo resultados. O suporte é excelente!",
        image: "https://i.pravatar.cc/150?img=7"
      }
    ],
    features: [
      "Atualizações mensais",
      "Planilhas de análise",
      "Calculadora de investimentos",
      "Biblioteca de materiais",
      "Webinars exclusivos",
      "Comunidade ativa"
    ],
    faq: [
      {
        question: "Quanto preciso para começar?",
        answer: "Você pode começar com qualquer valor! O curso ensina estratégias para diferentes perfis de investidor e diferentes quantias iniciais."
      },
      {
        question: "O conteúdo fica desatualizado?",
        answer: "Não! O curso é atualizado mensalmente com as últimas tendências e oportunidades do mercado financeiro."
      },
      {
        question: "Preciso ter conhecimento prévio?",
        answer: "Não! O curso foi desenvolvido para iniciantes e começa do zero, explicando todos os conceitos básicos necessários."
      }
    ]
  };

  return <CoursePage {...courseData} />;
};

export default InvestimentosBasicos; 