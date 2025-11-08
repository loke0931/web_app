
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyUs from '../components/WhyUs';

interface HomePageProps {
  onOpenModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <Features />
      <WhyUs />
    </>
  );
};

export default HomePage;
