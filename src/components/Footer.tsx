import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-green/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-orbitron text-xl text-white font-bold mb-4">Booker</h3>
            <p className="text-white/60 mb-4">
              Transformando vidas através da educação financeira de qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-green transition-colors">Home</a></li>
              <li><a href="#courses" className="text-white/60 hover:text-green transition-colors">Cursos</a></li>
              <li><a href="#about" className="text-white/60 hover:text-green transition-colors">Sobre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Cursos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://pay.kiwify.com.br/cTh1aoy?afid=vHib36ed" 
                  className="text-white/60 hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Investidor em uma hora
                </a>
              </li>
              <li>
                <a 
                  href="https://pay.kiwify.com.br/vTO5aL1?afid=cLHt9Aoe" 
                  className="text-white/60 hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Planilha de Controle Financeiro
                </a>
              </li>
              <li>
                <a 
                  href="https://pay.kiwify.com.br/NVn43js?afid=KA3qbGkf" 
                  className="text-white/60 hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kit Desafio Controle Financeiro
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <p className="text-white/60 mb-2">Entre em contato conosco para saber mais sobre nossos cursos.</p>
            <a href="mailto:booker.net@outlook.com" className="text-green hover:text-green/80 transition-colors">
              contato@booker.com.br
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Booker. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
