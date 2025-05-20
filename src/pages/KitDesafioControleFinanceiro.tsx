import React from 'react';
import CoursePage from '../components/CoursePage';

const KitDesafioControleFinanceiro = () => {
  const courseData = {
    title: "Kit Desafio Controle Financeiro",
    description: "Transforme sua vida financeira em apenas 30 dias com nosso kit completo. Inclui ebooks exclusivos e uma planilha avançada para você organizar suas finanças e alcançar seus objetivos financeiros.",
    price: 19.99,
    duration: "30 dias",
    modules: [
      {
        title: "Ebook: Fundamentos do Controle Financeiro",
        description: "Aprenda os princípios básicos da educação financeira e como aplicá-los no seu dia a dia. Desenvolva uma mentalidade de prosperidade e sucesso financeiro."
      },
      {
        title: "Ebook: Eliminando Dívidas",
        description: "Descubra estratégias eficientes para sair das dívidas e reconstruir sua saúde financeira. Aprenda a negociar com credores e criar um plano de pagamento eficaz."
      },
      {
        title: "Ebook: Investimentos para Iniciantes",
        description: "Conheça as melhores opções de investimento para quem está começando. Aprenda a fazer seu dinheiro trabalhar para você de forma segura e inteligente."
      },
      {
        title: "Planilha de Controle Financeiro",
        description: "Receba uma planilha completa para organizar suas finanças. Monitore receitas, despesas e acompanhe seu progresso rumo à independência financeira."
      }
    ],
    benefits: [
      "Material didático completo",
      "Planilha exclusiva",
      "Suporte por email",
      "Acesso vitalício",
      "Atualizações gratuitas",
      "Certificado de conclusão"
    ],
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=700/IYCgXnHwsKQOGkY/img_builder_13030c96-81cf-4b7e-9f16-4f32b52c26ee_0237cb920ea341879367a0b894bcd57b.png",
    kiwifyLink: "https://pay.kiwify.com.br/NVn43js?afid=KA3qbGkf",
    testimonials: [
      {
        name: "Ana Paula Silva",
        role: "Professora",
        text: "Em apenas 30 dias consegui organizar minhas finanças e começar a investir. O material é super didático e fácil de entender!",
        image: "https://i.pravatar.cc/150?img=5"
      },
      {
        name: "Roberto Santos",
        role: "Médico",
        text: "Mesmo com uma rotina corrida, consegui implementar todas as dicas do kit. Já economizei mais de R$ 3.000 em 2 meses!",
        image: "https://i.pravatar.cc/150?img=2"
      },
      {
        name: "Carla Martins",
        role: "Estudante",
        text: "O kit me ajudou a sair das dívidas e começar a investir. A planilha é incrível e os ebooks são muito bem explicados!",
        image: "https://i.pravatar.cc/150?img=8"
      }
    ],
    features: [
      "3 ebooks exclusivos",
      "Planilha personalizada",
      "Grupo de suporte",
      "Checklist diário",
      "Templates de orçamento",
      "Calculadora de metas"
    ],
    faq: [
      {
        question: "Quanto tempo levo para ver resultados?",
        answer: "A maioria dos alunos começa a ver resultados já nas primeiras semanas, mas o programa completo é de 30 dias para uma transformação completa."
      },
      {
        question: "Preciso ter conhecimento prévio?",
        answer: "Não! O material foi desenvolvido para iniciantes e inclui todos os conceitos básicos necessários."
      },
      {
        question: "Posso acessar em qualquer dispositivo?",
        answer: "Sim! Todo o material é digital e pode ser acessado em computadores, tablets e smartphones."
      }
    ]
  };

  return <CoursePage {...courseData} />;
};

export default KitDesafioControleFinanceiro; 