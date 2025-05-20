import React from 'react';
import CoursePage from '../components/CoursePage';

const InvestidorEmUmaHora = () => {
  const courseData = {
    title: "Investidor em uma hora",
    description: "Aprenda a investir de forma inteligente e comece sua jornada para a liberdade financeira mesmo com pouco tempo disponível. Transforme seu dinheiro em uma máquina de gerar riqueza com estratégias práticas e comprovadas.",
    price: 97.90,
    duration: "1 hora",
    modules: [
      {
        title: "Fundamentos do Investimento",
        description: "Aprenda os conceitos básicos do mercado financeiro e como começar a investir com pouco dinheiro. Entenda a diferença entre renda fixa e variável, e como escolher os melhores investimentos para seu perfil."
      },
      {
        title: "Estratégias Rápidas",
        description: "Descubra estratégias práticas e eficientes para multiplicar seu dinheiro em pouco tempo. Aprenda a identificar oportunidades e a tomar decisões assertivas no mercado."
      },
      {
        title: "Gestão de Risco",
        description: "Aprenda a proteger seu capital e minimizar riscos em seus investimentos. Desenvolva um plano de contingência e saiba como diversificar seus investimentos de forma inteligente."
      },
      {
        title: "Plano de Ação",
        description: "Desenvolva seu plano de investimentos personalizado e comece a aplicar hoje mesmo. Receba um template exclusivo para acompanhar seus investimentos e resultados."
      }
    ],
    benefits: [
      "Comece a investir em apenas 1 hora",
      "Estratégias práticas e aplicáveis",
      "Conteúdo direto ao ponto",
      "Acesso imediato ao curso",
      "Suporte contínuo",
      "Garantia de satisfação"
    ],
    imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/fPC2EqvXuzZwSWA/img_builder_44679afb-66ea-44ae-83d9-15afbb957a68_871022d88af74ceeb21f168e427072fe.png",
    kiwifyLink: "https://pay.kiwify.com.br/cTh1aoy?afid=vHib36ed",
    testimonials: [
      {
        name: "Carlos Silva",
        role: "Engenheiro",
        text: "Nunca imaginei que poderia começar a investir com tão pouco conhecimento. O curso é direto e prático, exatamente o que eu precisava para dar o primeiro passo.",
        image: "https://i.pravatar.cc/150?img=1"
      },
      {
        name: "Ana Paula Santos",
        role: "Médica",
        text: "Como profissional da saúde, sempre tive dificuldade com finanças. Este curso me mostrou que investir pode ser simples e acessível para qualquer pessoa.",
        image: "https://i.pravatar.cc/150?img=5"
      },
      {
        name: "Roberto Almeida",
        role: "Professor",
        text: "O melhor investimento que fiz foi neste curso. Em apenas uma hora, aprendi mais sobre investimentos do que em anos tentando estudar por conta própria.",
        image: "https://i.pravatar.cc/150?img=8"
      }
    ],
    features: [
      "Acesso vitalício ao conteúdo",
      "Atualizações gratuitas",
      "Certificado de conclusão",
      "Grupo exclusivo de alunos",
      "Suporte por WhatsApp",
      "Garantia de 7 dias"
    ],
    faq: [
      {
        question: "Preciso ter conhecimento prévio?",
        answer: "Não! O curso foi desenvolvido para iniciantes e não requer nenhum conhecimento prévio sobre investimentos."
      },
      {
        question: "Quanto preciso investir para começar?",
        answer: "Você pode começar com qualquer valor! O curso ensina estratégias para diferentes perfis de investidor e diferentes quantias."
      },
      {
        question: "O curso é atualizado?",
        answer: "Sim! O conteúdo é atualizado regularmente para refletir as mudanças do mercado financeiro."
      }
    ]
  };

  return <CoursePage {...courseData} />;
};

export default InvestidorEmUmaHora; 