import React from 'react';
import CoursePage from '@/components/CoursePage';

const courseData = {
  title: "Investimento em 1 Hora",
  description: "Aprenda a investir de forma simples e eficiente em apenas 1 hora. Comece sua jornada para a liberdade financeira hoje mesmo.",
  price: 97.00,
  duration: "Acesso Vitalício",
  modules: [
    {
      title: "Fundamentos do Investimento",
      description: "Aprenda os conceitos básicos e essenciais para começar a investir"
    },
    {
      title: "Análise de Investimentos",
      description: "Descubra como analisar e escolher os melhores investimentos"
    },
    {
      title: "Estratégias Práticas",
      description: "Aplique estratégias testadas e aprovadas para maximizar seus resultados"
    }
  ],
  benefits: [
    "Aprenda a investir em apenas 1 hora",
    "Conteúdo prático e objetivo",
    "Estratégias testadas e aprovadas",
    "Suporte exclusivo",
    "Acesso vitalício",
    "Atualizações gratuitas",
    "Garantia de 7 dias",
    "Certificado de conclusão"
  ],
  requirements: [
    "Computador ou smartphone com acesso à internet",
    "Desejo de aprender e melhorar suas finanças"
  ],
  imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/fPC2EqvXuzZwSWA/img_builder_44679afb-66ea-44ae-83d9-15afbb957a68_871022d88af74ceeb21f168e427072fe.png",
  kiwifyLink: "https://pay.kiwify.com.br/cTh1aoy?afid=vHib36ed",
  videoUrl: "https://youtu.be/HeANxPxj3cE",
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

const InvestimentoEm1Hora = () => {
  return <CoursePage {...courseData} />;
};

export default InvestimentoEm1Hora; 