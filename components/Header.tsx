
import React from 'react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-3 cursor-pointer">
          <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xl font-bold text-white tracking-wider">Bot-Codex</span>
        </a>
        <nav>
          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 bg-brand-primary text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
          >
            Получить Бота
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;