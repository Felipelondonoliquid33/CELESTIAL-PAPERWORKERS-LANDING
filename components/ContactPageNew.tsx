import React from 'react';
import ContactSceneNew from './ContactSceneNew';
import CustomNavbar from './CustomNavbar';
import ContactPage from './ContactPage';
import Footer from './Footer';

interface ContactPageNewProps {
  onNavigate: (page: 'home' | 'contacto' | 'nosotros') => void;
}

const ContactPageNew: React.FC<ContactPageNewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-[#E0E5EC]">
      {/* 3D Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <ContactSceneNew />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navbar */}
        <CustomNavbar onNavigate={onNavigate} />
        
        {/* Contact Content */}
        <div className="relative min-h-screen pt-44 px-6 pb-20">
          <ContactPage />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ContactPageNew;
