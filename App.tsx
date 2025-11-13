


import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Scene from './components/Scene';
import CustomNavbar from './components/CustomNavbar';
import HeroSection from './components/HeroSection';
import ContactPageNew from './components/ContactPageNew';
import NosotrosPage from './components/NosotrosPage';
import ServicesPageNew from './components/ServicesPageNew';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'contacto' | 'nosotros' | 'servicios'>('home');

  if (currentPage === 'contacto') {
    return (
      <>
        <ContactPageNew onNavigate={setCurrentPage} />
        <Analytics />
      </>
    );
  }

  if (currentPage === 'nosotros') {
    return (
      <>
        <NosotrosPage onNavigate={setCurrentPage} />
        <Analytics />
      </>
    );
  }

  if (currentPage === 'servicios') {
    return (
      <>
        <ServicesPageNew onNavigate={setCurrentPage} />
        <Analytics />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-[#E0E5EC]">
      {/* 3D Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navbar */}
        <CustomNavbar onNavigate={setCurrentPage} />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Footer */}
        <Footer />
      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;