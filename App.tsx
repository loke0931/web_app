
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';
import ContactForm from './components/ContactForm.tsx';
import HomePage from './pages/HomePage.tsx';
import GuidePage from './pages/GuidePage.tsx';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Функция для получения текущего пути из URL-хэша
  const getCurrentPath = () => window.location.hash.substring(1) || '/';
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  // Эффект для отслеживания изменений хэша (например, при использовании кнопок "назад/вперед")
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(getCurrentPath());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);
  
  // Простой роутер для отображения страниц на основе URL-хэша
  const renderPage = () => {
    if (currentPath.startsWith('/guide')) {
        return <GuidePage />;
    }
    return <HomePage onOpenModal={handleOpenModal} />;
  };

  return (
    <div className="bg-brand-dark overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onOpenModal={handleOpenModal} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ContactForm isModal={true} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default App;