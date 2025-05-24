import React from 'react';
import LogoBooker from './LogoBooker';

const Header = () => {
  return (
    <header className="w-full bg-graphite-dark py-4 px-6 flex items-center justify-between shadow-md">
      {/* Logo e nome */}
      <div className="flex items-center gap-3">
        {/* Ícone do livro */}
        <LogoBooker size={40} />
        <span className="text-white text-2xl font-bold tracking-wide">BOOKER</span>
      </div>
      {/* Texto à direita */}
      <div className="text-right">
        <div className="text-green text-lg md:text-xl font-semibold leading-tight">INVISTA NO QUE<br />REALMENTE IMPORTA:</div>
        <div className="text-green text-2xl md:text-3xl font-bold underline underline-offset-4 mt-1">SEU FUTURO!</div>
      </div>
    </header>
  );
};

export default Header; 