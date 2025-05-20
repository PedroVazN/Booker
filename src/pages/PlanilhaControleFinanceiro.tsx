import React from 'react';
import CoursePage from '../components/CoursePage';

const PlanilhaControleFinanceiro = () => {
  const courseData = {
    title: "Planilha de Controle Financeiro Pessoal 2.0",
    description: "Organize suas finanças com nossa planilha avançada. Monitore gastos, economias e investimentos em um só lugar. A ferramenta mais completa do mercado para transformar sua relação com o dinheiro.",
    price: 97.00,
    duration: "Acesso Vitalício",
    modules: [
      {
        title: "Controle de Receitas",
        description: "Acompanhe todas as suas entradas de dinheiro e organize suas fontes de renda. Categorize diferentes tipos de receitas e projete ganhos futuros com precisão."
      },
      {
        title: "Gestão de Despesas",
        description: "Categorize e monitore todos os seus gastos para identificar oportunidades de economia. Receba alertas automáticos quando ultrapassar limites estabelecidos."
      },
      {
        title: "Metas Financeiras",
        description: "Estabeleça e acompanhe suas metas de economia e investimento. Visualize seu progresso em tempo real e receba sugestões personalizadas para alcançar seus objetivos."
      },
      {
        title: "Relatórios Avançados",
        description: "Visualize gráficos e relatórios detalhados do seu comportamento financeiro. Identifique padrões de gastos e receitas com análises profundas e insights valiosos."
      }
    ],
    benefits: [
      "Controle total das suas finanças",
      "Interface intuitiva e fácil de usar",
      "Atualizações gratuitas",
      "Suporte técnico",
      "Templates personalizáveis",
      "Acesso vitalício"
    ],
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=700/speKigpg0cHiJoe/img_builder_925fa093-0526-4745-a5c5-1e2f4bfc38fa_8a1347b851f34feaa82f2d47989274e7.png",
    kiwifyLink: "https://pay.kiwify.com.br/vTO5aL1?afid=cLHt9Aoe",
    testimonials: [
      {
        name: "Mariana Costa",
        role: "Designer",
        text: "Nunca mais perdi o controle das minhas finanças. A planilha é tão completa que me ajudou a economizar mais de R$ 2.000 em apenas 3 meses!",
        image: "https://i.pravatar.cc/150?img=9"
      },
      {
        name: "Lucas Mendes",
        role: "Empresário",
        text: "Como dono de empresa, precisava de uma ferramenta robusta para controlar minhas finanças pessoais. Esta planilha superou todas as minhas expectativas.",
        image: "https://i.pravatar.cc/150?img=3"
      },
      {
        name: "Juliana Oliveira",
        role: "Estudante",
        text: "Mesmo com orçamento limitado, consegui organizar minhas finanças e começar a economizar. A planilha é perfeita para quem está começando!",
        image: "https://i.pravatar.cc/150?img=6"
      }
    ],
    features: [
      "Mais de 20 categorias de gastos",
      "Dashboard personalizado",
      "Exportação para PDF e Excel",
      "Backup automático na nuvem",
      "Suporte por email",
      "Tutoriais em vídeo"
    ],
    faq: [
      {
        question: "Preciso saber usar Excel?",
        answer: "Não! A planilha é super intuitiva e vem com um guia completo de uso. Qualquer pessoa consegue usar, mesmo sem experiência com Excel."
      },
      {
        question: "Posso usar em diferentes dispositivos?",
        answer: "Sim! A planilha funciona perfeitamente em computadores, tablets e smartphones, mantendo seus dados sincronizados."
      },
      {
        question: "Recebo atualizações?",
        answer: "Sim! Você recebe todas as atualizações gratuitamente e tem acesso vitalício ao conteúdo."
      }
    ]
  };

  return <CoursePage {...courseData} />;
};

export default PlanilhaControleFinanceiro; 