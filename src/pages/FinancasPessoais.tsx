import React from 'react';
import CoursePage from '../components/CoursePage';

const FinancasPessoais = () => {
  const courseData = {
    title: "Finanças Pessoais",
    description: "Domine suas finanças pessoais e aprenda a gerenciar seu dinheiro de forma eficiente. Este curso vai te ensinar a criar um orçamento, eliminar dívidas e construir riqueza a longo prazo.",
    price: 797,
    duration: "6 semanas",
    modules: [
      {
        title: "Fundamentos das Finanças Pessoais",
        description: "Aprenda os princípios básicos de gestão financeira e como aplicá-los no seu dia a dia."
      },
      {
        title: "Orçamento e Controle Financeiro",
        description: "Desenvolva um sistema eficiente de controle de gastos e aprenda a criar um orçamento realista."
      },
      {
        title: "Eliminação de Dívidas",
        description: "Estratégias práticas para sair das dívidas e construir um futuro financeiro saudável."
      },
      {
        title: "Construção de Riqueza",
        description: "Aprenda a criar múltiplas fontes de renda e a investir para o seu futuro."
      }
    ],
    benefits: [
      "Controle total das suas finanças",
      "Eliminação de dívidas",
      "Criação de reserva de emergência",
      "Desenvolvimento de hábitos financeiros saudáveis",
      "Planejamento para aposentadoria",
      "Independência financeira"
    ],
    imageUrl: "/curso-financas-pessoais.jpg"
  };

  return <CoursePage {...courseData} />;
};

export default FinancasPessoais; 