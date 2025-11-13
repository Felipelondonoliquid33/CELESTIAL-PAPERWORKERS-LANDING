
import React from 'react';
import { IconMail, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h1
          className="text-6xl md:text-7xl font-black leading-tight text-[#003366]"
        >
          Contacto
        </h1>
        <p
          className="mt-4 text-xl text-[#212842] max-w-3xl mx-auto"
        >
          Envíanos una señal. Estamos aquí para escuchar y despejar tu camino.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
        {/* Form Section */}
        <div
          className="lg:col-span-3 bg-[#BBC6CC]/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg"
        >
          <ContactForm />
        </div>

        {/* Info Section */}
        <div
          className="lg:col-span-2 bg-[#BBC6CC]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-6">Otras Vías de Contacto</h3>
          <div className="space-y-6">
            <a href="mailto:flondonohumar@gmail.com" className="flex items-center gap-4 group">
              <IconMail className="w-8 h-8 text-[#4F97A3] shrink-0" />
              <div>
                <p className="font-bold text-[#003366] group-hover:text-[#4F97A3] transition-colors">Correo Electrónico</p>
                <p className="text-[#434F85]">flondonohumar@gmail.com</p>
              </div>
            </a>
             <a href="tel:+573112704276" className="flex items-center gap-4 group">
              <IconPhone className="w-8 h-8 text-[#4F97A3] shrink-0" />
              <div>
                <p className="font-bold text-[#003366] group-hover:text-[#4F97A3] transition-colors">Teléfono</p>
                <p className="text-[#434F85]">(+57) 311 270 4276</p>
              </div>
            </a>
             <a href="https://wa.me/573112704276" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <IconBrandWhatsapp className="w-8 h-8 text-[#4F97A3] shrink-0" />
              <div>
                <p className="font-bold text-[#003366] group-hover:text-[#4F97A3] transition-colors">WhatsApp</p>
                <p className="text-[#434F85]">Inicia una conversación</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
