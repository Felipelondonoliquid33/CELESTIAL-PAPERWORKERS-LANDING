import React from 'react';
import NosotrosScene from './NosotrosScene';
import CustomNavbar from './CustomNavbar';
import { BentoGrid, BentoCard } from './BentoGrid';
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive } from './NosotrosSkeletons';
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled } from '@tabler/icons-react';
import Footer from './Footer';

interface NosotrosPageProps {
  onNavigate: (page: 'home' | 'contacto' | 'nosotros') => void;
}

const NosotrosPage: React.FC<NosotrosPageProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <NosotrosScene />
      </div>
      <div className="relative z-20 w-full" style={{ minHeight: '200vh' }}>
        <CustomNavbar onNavigate={onNavigate} />
        <div className="relative pt-44 pb-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8" style={{ color: '#ffffff', textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>Nuestra Razón de Ser</h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>Más que un servicio, somos un propósito.</p>
          </div>
        </div>
        <div className="relative pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>Nuestro Proceso</h2>
            <BentoGrid>
              <BentoCard title="Escuchamos" description={<span className="text-base">Todo empezó con algo simple: escuchar.</span>} header={<SkeletonOne />} icon={<IconClipboardCopy className="h-4 w-4 text-[#434F85]" />} className="md:col-span-1" />
              <BentoCard title="Orden en el Caos" description={<span className="text-base">Creamos un sistema humano y claro.</span>} header={<SkeletonTwo />} icon={<IconFileBroken className="h-4 w-4 text-[#434F85]" />} className="md:col-span-1" />
              <BentoCard title="De la Ansiedad a la Calma" description={<span className="text-base">Transformamos el estrés en claridad.</span>} header={<SkeletonThree />} icon={<IconSignature className="h-4 w-4 text-[#434F85]" />} className="md:col-span-1" />
              <BentoCard title="Claridad frente a la confusión" description={<span className="text-lg font-semibold">Solo pasos claros.</span>} header={<SkeletonFour />} icon={<IconTableColumn className="h-4 w-4 text-[#434F85]" />} className="md:col-span-2" />
              <BentoCard title="El Cierre del Ciclo" description={<span className="text-base">Te devolvemos la tranquilidad.</span>} header={<SkeletonFive />} icon={<IconBoxAlignRightFilled className="h-4 w-4 text-[#434F85]" />} className="md:col-span-1" />
            </BentoGrid>
          </div>
        </div>
        <Footer />
        <div className="relative h-screen"></div>
      </div>
    </>
  );
};

export default NosotrosPage;