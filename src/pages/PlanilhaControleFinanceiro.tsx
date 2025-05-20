import React from 'react';
import CoursePage from '@/components/CoursePage';

const courseData = {
  title: "Planilha de Controle Financeiro",
  description: "Controle suas finanças de forma simples e eficiente com nossa planilha completa. Organize suas receitas, despesas e investimentos em um só lugar.",
  price: 97.00,
  duration: "Acesso Vitalício",
  modules: [
    {
      title: "Dashboard Completo",
      description: "Visualize todos os seus dados financeiros em um único lugar com gráficos dinâmicos e personalizáveis"
    },
    {
      title: "Importação Automática",
      description: "Importe automaticamente seus extratos bancários e faturas de cartão de crédito"
    },
    {
      title: "Controle Detalhado",
      description: "Acompanhe suas contas fixas, parceladas e investimentos com precisão"
    }
  ],
  benefits: [
    "Dashboard completo e intuitivo",
    "Fácil de usar e personalizar",
    "Importação automática de extratos",
    "Importação de faturas de cartão",
    "Detalhamento de contas fixas",
    "Controle de contas parceladas",
    "Acompanhamento de investimentos",
    "Gráficos dinâmicos",
    "Comparativo mensal de despesas",
    "Vídeos explicativos detalhados",
    "Nova versão disponível",
    "7 dias de garantia"
  ],
  requirements: [
    "Sistema operacional Windows ou MacOS"
  ],
  imageUrl: "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=1000/fPC2EqvXuzZwSWA/img_builder_44679afb-66ea-44ae-83d9-15afbb957a68_871022d88af74ceeb21f168e427072fe.png",
  kiwifyLink: "https://pay.kiwify.com.br/vTO5aL1?afid=cLHt9Aoe",
  videoUrl: "https://youtu.be/HeANxPxj3cE",
  securityInfo: "Protegemos seus dados de pagamento com criptografia para garantir segurança bancária.",
  offers: [
    {
      title: "PLANILHA COMPLETA",
      description: "Tenha acesso a todas as funcionalidades da planilha mais completa do mercado",
      price: "12x de R$ 10,03"
    },
    {
      title: "7 DIAS DE GARANTIA",
      description: "Satisfação garantida ou seu dinheiro de volta",
      price: "Garantia Incondicional"
    },
    {
      title: "SUPORTE EXCLUSIVO",
      description: "Acesso a vídeos explicativos detalhados e suporte personalizado",
      price: "Incluso"
    }
  ]
};

const PlanilhaControleFinanceiro = () => {
  return <CoursePage {...courseData} />;
};

export default PlanilhaControleFinanceiro; 