import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { hotjar } from 'react-hotjar';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';
import InvestimentosBasicos from './pages/InvestimentosBasicos';
import FinancasPessoais from './pages/FinancasPessoais';
import InvestidorEmUmaHora from './pages/InvestidorEmUmaHora';
import PlanilhaControleFinanceiro from './pages/PlanilhaControleFinanceiro';
import NotFound from './pages/NotFound';
import { Analytics } from "@vercel/analytics/react"

// Estilo global para scroll suave
const globalStyles = `
  html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const HOTJAR_ID = 6413670;

const App = () => {
  React.useEffect(() => {
    hotjar.initialize({
      id: HOTJAR_ID,
      sv: 6
    });
  }, []);

  return (
    <Router>
      <style>{globalStyles}</style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/curso/investimentos-basicos" element={<InvestimentosBasicos />} />
        <Route path="/curso/financas-pessoais" element={<FinancasPessoais />} />
        <Route path="/curso/investidor-em-uma-hora" element={<InvestidorEmUmaHora />} />
        <Route path="/curso/planilha-controle-financeiro" element={<PlanilhaControleFinanceiro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
