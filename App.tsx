import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResourceSection from './components/ResourceSection';
import InviteSection from './components/InviteSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ResourceSection />
        <InviteSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingControls />
    </div>
  );
};

export default App;