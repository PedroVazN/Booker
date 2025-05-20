import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvestidorEmUmaHora from './pages/InvestidorEmUmaHora';
import PlanilhaControleFinanceiro from './pages/PlanilhaControleFinanceiro';
import KitDesafioControleFinanceiro from './pages/KitDesafioControleFinanceiro';

const queryClient = new QueryClient();

const App = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
    
    // Add class to body for global styles
    document.body.classList.add('smooth-scroll');
    
    return () => {
      document.body.classList.remove('smooth-scroll');
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/curso/investidor-em-uma-hora" element={<InvestidorEmUmaHora />} />
            <Route path="/curso/planilha-controle-financeiro" element={<PlanilhaControleFinanceiro />} />
            <Route path="/curso/kit-desafio-controle-financeiro" element={<KitDesafioControleFinanceiro />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
