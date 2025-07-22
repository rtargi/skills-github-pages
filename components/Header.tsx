
import React from 'react';

interface HeaderProps {
    onRsvpClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRsvpClick }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <header className="bg-stone-50/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
             <a href="#chamado" onClick={(e) => handleNavClick(e, '#chamado')} className="flex items-center space-x-3" title="CLIMAX 2025 - O Chamado">
                <img src="https://i.ibb.co/NnQ0Vjjr/avatar-climax-jequitinhonha.png" alt="CLIMAX 2025 Logo" className="h-12 w-12 rounded-full" />
                <span className="text-xl font-black text-stone-800 hidden sm:block">CLIMAX 2025</span>
            </a>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-stone-600 items-center">
                <a href="#chamado" onClick={(e) => handleNavClick(e, '#chamado')} className="hover:text-amber-600 transition-colors">O Chamado</a>
                <a href="#estrategia" onClick={(e) => handleNavClick(e, '#estrategia')} className="hover:text-amber-600 transition-colors">Estratégia</a>
                <a href="#dossie" onClick={(e) => handleNavClick(e, '#dossie')} className="hover:text-amber-600 transition-colors">Dossiê</a>
                <a href="#logistica" onClick={(e) => handleNavClick(e, '#logistica')} className="hover:text-amber-600 transition-colors">Logística</a>
                <button onClick={onRsvpClick} className="bg-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-700 transition-colors shadow-sm">Confirmar Presença</button>
            </nav>
            <div className="md:hidden">
                 <button onClick={onRsvpClick} className="bg-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-700 transition-colors text-sm shadow-sm">RSVP</button>
            </div>
        </div>
    </header>
  );
};

export default Header;
