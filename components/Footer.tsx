
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="text-center md:text-left text-gray-400 text-sm">
            <h3 className="font-semibold text-white text-base mb-2">BAIT Bot Proprietary License v1.0</h3>
            <p className="mb-2">
              ПО является собственностью Жиздюк Никиты Романовича. Использование возможно только по действующему соглашению.
            </p>
            <p>
              Запрещено распространять, модифицировать или декомпилировать код без письменного разрешения.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
             <a href="https://t.me/Ch0rtic" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 shadow-lg w-full sm:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
                <span>Написать в Telegram</span>
            </a>
            <div className="text-center md:text-right text-sm">
                <p>Телефон: <a href="tel:+79873025113" className="hover:text-white transition-colors duration-300">+7 987 302 5113</a></p>
                <p>Telegram: <a href="https://t.me/Ch0rtic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">@Ch0rtic</a></p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
