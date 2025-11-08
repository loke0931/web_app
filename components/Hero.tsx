
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-primary text-sm font-medium">
            На базе GPT-4 и Бесшовной Интеграции
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter mb-6">
            Автоматизируйте Ваш Салон, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Восхищайте Клиентов.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Bot-Codex — это универсальный AI-ассистент для барбершопов и салонов красоты. Управляйте записями в Telegram, WhatsApp и VK, синхронизируйте данные с YClients и предоставляйте пятизвездочный сервис 24/7 без лишних усилий.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
            >
              Запросить Демо
            </button>
            <a
              href="#/guide"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Узнать Больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;