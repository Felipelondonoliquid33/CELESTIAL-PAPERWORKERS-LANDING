import React from 'react';
import Scene from './Scene';
import CustomNavbar from './CustomNavbar';
import ServicesPage from './ServicesPage';
import Footer from './Footer';

interface ServicesPageNewProps {
  onNavigate: (page: 'home' | 'contacto' | 'nosotros' | 'servicios') => void;
}

const ServicesPageNew: React.FC<ServicesPageNewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-[#E0E5EC]">
      {/* 3D Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navbar */}
        <CustomNavbar onNavigate={onNavigate} />
        
        {/* Services Content */}
        <div className="relative min-h-screen pt-20 sm:pt-32 md:pt-44 px-4 sm:px-6 pb-12 sm:pb-20">
          <ServicesPage />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPageNew;
