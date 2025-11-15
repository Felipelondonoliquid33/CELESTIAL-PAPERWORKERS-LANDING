import React from 'react';
import { ContainerTextFlip } from './ui/container-text-flip';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

// --- Icon Components ---
const IconProps = {
  className: "w-full h-full",
  strokeWidth: 0,
  fill: "currentColor",
  viewBox: "0 0 24 24",
};

const OrganicIcon1 = () => <svg {...IconProps}><path d="M19.7,12.8c-0.3,3.9-3.2,7.1-6.9,7.1c-3.2,0-5.9-2.5-6.6-5.6c-2.4-0.4-4.2-2.5-4.2-5C2,5.9,4.7,3.2,8,3.2 c1.7,0,3.2,0.7,4.3,1.8C13.2,3.9,14.6,3,16.2,3c3,0,5.5,2.5,5.5,5.5C21.7,10.3,20.9,11.8,19.7,12.8z"/></svg>;
const OrganicIcon2 = () => <svg {...IconProps}><path d="M17.1,3.4C14.7,2.1,11.7,2.4,9,4.2C5.4,6.6,4,11.2,5.6,15.2c1.4,3.5,5,5.5,8.5,4.7c3.9-0.9,6.5-4.4,6.5-8.4 C20.6,8.2,19.2,5.1,17.1,3.4z"/></svg>;
const OrganicIcon3 = () => <svg {...IconProps}><path d="M6.3,20.3c-4-2.8-5-8.4-2.9-12.7c2.3-4.7,7.8-6.6,12.5-4.4c4.3,2,6.3,6.8,4.9,11.2c-1.3,4-5.1,6.6-9.3,6.6 C9.6,21,7.9,20.7,6.3,20.3z"/></svg>;
const OrganicIcon4 = () => <svg {...IconProps}><path d="M20.2,9.3c0.1,3.5-2.2,6.6-5.3,7.5c-3.5,1-6.9-1.1-8.1-4.4C5.1,8.3,7.4,4,11.1,3.2c3.9-0.8,7.5,1.5,8.5,5.1 C19.9,8.7,20.1,9,20.2,9.3z"/></svg>;
const OrganicIcon5 = () => <svg {...IconProps}><path d="M15.8,20.8C10.2,22,5,18.7,3.8,13.2C2.6,7.6,5.9,2.5,11.4,1.2C17-0.1,22.1,3.2,23.4,8.8 C24.6,14.3,21.3,19.5,15.8,20.8z"/></svg>;
const OrganicIcon6 = () => <svg {...IconProps}><path d="M4.5,9.9C3.1,6.5,5.2,2.8,8.6,1.4C12-0.1,16.1,1,18.2,4.3c2.4,3.7,1,8.6-2.6,10.7c-3.6,2.1-8,0.9-10.1-2.4 C5,11.8,4.7,10.9,4.5,9.9z"/></svg>;


const icons: { [key: string]: React.FC } = {
  OrganicIcon1, OrganicIcon2, OrganicIcon3, OrganicIcon4, OrganicIcon5, OrganicIcon6
};

// --- Data ---
const servicesData = [
  { title: "Document Checklist", icon: "OrganicIcon1", text: "Te guiamos paso a paso con la lista de documentos que necesitas — sin tecnicismos ni confusión. Deja que nosotros organicemos el caos, mientras tú respiras.", color: "#87CEFA" },
  { title: "Legal Guidance", icon: "OrganicIcon2", text: "Traducción humana del lenguaje notarial. Te explicamos qué firmas, por qué y dónde. Con abogados aliados que no hablan en latín (ni en siglas).", color: "#FFD700" },
  { title: "Administrative Support", icon: "OrganicIcon3", text: "Trámites, filas, certificados y sellos. Nosotros los hacemos. Tú descansas. Literalmente, cargamos tus papeles al cielo (digital).", color: "#4169E1" },
  { title: "Progress Tracker", icon: "OrganicIcon4", text: "Cada trámite tiene su propio cielo: sigue el avance en tiempo real y recibe notificaciones celestiales cuando algo se completa.", color: "#FF69B4" },
  { title: "Digital Afterlife", icon: "OrganicIcon5", text: "Cerramos redes sociales, correos y suscripciones con el mismo respeto con el que se cierran historias. Tu legado digital, bien cuidado.", color: "#C0C0C0" },
  { title: "Peace of Mind Pack", icon: "OrganicIcon6", text: "El combo completo: documentos, legal, digital y acompañamiento. Todo resuelto, sin drama. Solo paz administrativa.", color: "#FFA500" },
];

interface ServiceCardProps {
  icon: string;
  title: string;
  text: string;
  color: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, text, color, index }) => {
  const IconComponent = icons[icon];
  
  const shapes = [
    'rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]',
    'rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]',
    'rounded-[70%_30%_80%_20%_/_50%_60%_40%_50%]',
    'rounded-[40%_60%_60%_40%_/_60%_40%_60%_40%]',
    'rounded-[55%_45%_40%_60%_/_65%_40%_60%_35%]',
    'rounded-[45%_55%_70%_30%_/_30%_70%_30%_70%]',
  ];
  const shapeClass = shapes[index % shapes.length];

  return (
    <CardContainer containerClassName="py-0 h-full">
      <CardBody
        className={`relative group/card bg-gradient-to-br from-[#dde3eb]/70 to-[#dde3eb]/50 backdrop-blur-xl p-4 sm:p-6 md:p-8 ${shapeClass} border-2 flex flex-col items-center text-center h-full w-full transition-all duration-300 hover:shadow-xl hover:shadow-[--card-color]/40`}
        style={{ borderColor: color, '--card-color': color } as React.CSSProperties}
      >
        <CardItem
          translateZ="100"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 sm:mb-4 md:mb-6"
          style={{ color: color, filter: `drop-shadow(0 6px 8px ${color}80)` }}
        >
          {IconComponent && <IconComponent />}
        </CardItem>
        <CardItem
          as="h3"
          translateZ="80"
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#003366] mb-2 sm:mb-3 md:mb-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#003366] leading-relaxed text-sm sm:text-base"
        >
          {text}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};


const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-[#003366] px-2">
          Nuestros Servicios<br/>
          <ContainerTextFlip
            words={["Celestiales", "Administrativos", "Terrenales"]}
          />
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#212842] max-w-3xl mx-auto px-2">
          Estamos aquí para despejar las nubes de la burocracia, ofreciéndole tranquilidad en cada paso del camino.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ServiceCard 
              {...service}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
