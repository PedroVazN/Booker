import React from 'react';
import CoursePage from '@/components/CoursePage';

const courseData = {
  title: "Investidor em Uma Hora",
  description: "Aprenda a investir com segurança e gerar renda passiva em apenas uma hora. Curso completo com estratégias práticas para iniciantes.",
  price: 19.99,
  duration: "1 hora",
  modules: [
    {
      title: "Fundamentos do Investimento",
      description: "Entenda os conceitos básicos e comece a investir com confiança"
    },
    {
      title: "Estratégias Práticas",
      description: "Aprenda estratégias testadas e aprovadas para gerar renda passiva"
    },
    {
      title: "Gestão de Riscos",
      description: "Proteja seu patrimônio e invista com segurança"
    }
  ],
  benefits: [
    "Acesso vitalício ao conteúdo",
    "Suporte personalizado",
    "Certificado de conclusão",
    "Atualizações gratuitas"
  ],
  imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/fPC2EqvXuzZwSWA/img_builder_44679afb-66ea-44ae-83d9-15afbb957a68_871022d88af74ceeb21f168e427072fe.png",
  kiwifyLink: "https://booker.kiwify.com.br/investidor-em-uma-hora",
  securityInfo: "Protegemos seus dados de pagamento com criptografia para garantir segurança bancária.",
  offers: [
    {
      title: "EBOOK COM 35% DE DESCONTO",
      description: "SIM, EU QUERO RENDA AUTOMÁTICA: Crie 6 Fontes de Renda Sem Tirar a Bunda do Sofá",
      price: "12x de R$ 2,89"
    },
    {
      title: "ACESSO VITALÍCIO",
      description: "Sim, eu quero ter acesso vitalício ao Investidor em 1 Hora por Apenas",
      price: "12x de R$ 1,02"
    },
    {
      title: "PLANILHA CONTROLE DE GASTOS",
      description: "Nunca mais feche o mês no vermelho por apenas",
      price: "12x de R$ 1,54"
    },
    {
      title: "5 MELHORES OPORTUNIDADES",
      description: "Revelei as 5 melhores ações para ganhar dinheiro em 2024",
      price: "12x de R$ 2,89"
    }
  ]
};

const InvestidorEmUmaHora = () => {
  return <CoursePage {...courseData} />;
};

export default InvestidorEmUmaHora; 