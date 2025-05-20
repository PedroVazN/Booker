import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import logo from '../../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-graphite/90 backdrop-blur-lg border-b border-green/30 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-2">
            {/* Main Navigation */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-30 w-40" />
              </div>

              {/* Desktop Navigation */}
              
              <div className="hidden md:flex gap-8 items-center">
                {['Home', 'Cursos', 'Sobre'].map((item, index) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white hover:text-green transition-colors relative group overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                ))}
                <a 
                  href="#courses" 
                  className="bg-transparent border-2 border-green text-green hover:bg-green hover:text-graphite-lighter px-4 py-2 rounded-md relative overflow-hidden group transition-all duration-300"
                >
                  <span className="relative z-10 font-medium">Explorar Cursos</span>
                  <span className="absolute inset-0 bg-green/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="text-white hover:text-gold p-2 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-graphite-lighter/90 backdrop-blur-lg border-b border-green/30 shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4 stagger-animation">
              <a 
                href="#home" 
                className="text-white hover:text-gold transition-all p-2 border-b border-green/10" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#courses" 
                className="text-white hover:text-gold transition-all p-2 border-b border-green/10" 
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-gold transition-all p-2 border-b border-green/10" 
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#courses" 
                className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-graphite py-2 px-4 rounded-md flex justify-center items-center transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Explorar Cursos
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Countdown Timer posicionado abaixo da navbar */}
      <div className="fixed left-0 right-0 z-40 flex justify-center mt-6" style={{ top: 'calc(88px + 12px)' }}>
        <CountdownTimer />
      </div>
    </>
  );
};

export default Navbar;
