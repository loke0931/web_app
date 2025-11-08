
import React from 'react';
import Hero from '../components/Hero.tsx';
import Features from '../components/Features.tsx';
import WhyUs from '../components/WhyUs.tsx';

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