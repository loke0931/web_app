
import React from 'react';

const advantages = [
  'Единая кодовая база для Telegram, WhatsApp и VK — непревзойденная согласованность.',
  'Мгновенные ответы — никаких искусственных задержек для естественного диалога.',
  'Проактивная проверка записи — предотвращение двойного бронирования благодаря проверке слотов в YClients.',
  'Надежное восстановление состояния — бот мгновенно восстанавливает диалоги после перезапуска.',
  'Полностью настраиваемый — адаптируйте расписания, услуги и шаблоны сообщений под ваш бренд.',
  'Система мониторинга — автоматическое логирование и мониторинг всех интеграций для обеспечения надежности.'
];

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);


const WhyUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Почему Выбирают Bot-Codex?</h2>
            <p className="text-lg text-gray-400 mb-8">
              В то время как другие боты предлагают базовую запись, Bot-Codex предоставляет комплексную платформу корпоративного уровня, созданную для надежности и роста. Мы берем на себя сложность, чтобы вы могли сосредоточиться на своем деле.
            </p>
            <ul className="space-y-5">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-gray-300">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-8 bg-brand-dark rounded-xl border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Аналитическая панель Bot-Codex" className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
