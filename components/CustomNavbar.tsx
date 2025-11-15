import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface CustomNavbarProps {
  className?: string;
  onNavigate?: (page: 'home' | 'contacto' | 'nosotros' | 'servicios') => void;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ className = '', onNavigate }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial animation for navbar
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          delay: 0.2 
        }
      );
    }

    // Animate logo letters
    if (logoRef.current) {
      const letters = logoRef.current.querySelectorAll('.letter');
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );
    }

    // Animate nav links
    if (linksRef.current) {
      const links = linksRef.current.querySelectorAll('a');
      gsap.fromTo(
        links,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.8
        }
      );
    }
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: target, offsetY: 100 },
      ease: 'power3.inOut'
    });
  };

  const handleLogoHover = (isHovering: boolean) => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: isHovering ? 1.05 : 1,
        duration: 0.4,
        ease: 'power2.out'
      });

      const letters = logoRef.current.querySelectorAll('.letter');
      if (isHovering) {
        gsap.to(letters, {
          y: -5,
          duration: 0.3,
          stagger: 0.02,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1
        });
      }
    }
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isHovering: boolean) => {
    const link = e.currentTarget;
    
    gsap.to(link, {
      scale: isHovering ? 1.1 : 1,
      y: isHovering ? -3 : 0,
      duration: 0.3,
      ease: 'power2.out'
    });

    if (isHovering) {
      gsap.to(link, {
        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(135, 167, 197, 0.6)',
        duration: 0.3
      });
    } else {
      gsap.to(link, {
        textShadow: '0 0 0px rgba(255, 255, 255, 0)',
        duration: 0.3
      });
    }
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className="letter inline-block"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const handleMobileLinkClick = (page: 'servicios' | 'nosotros' | 'contacto') => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
      <div className="mx-auto px-3 sm:px-6 py-2 sm:py-4">
        <div 
          ref={navRef}
          className="flex items-center justify-between px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          {/* Logo/Brand with Gradient */}
          <div 
            className="flex items-center cursor-pointer relative z-10"
            onClick={() => {
              onNavigate && onNavigate('home');
              setIsMobileMenuOpen(false);
            }}
            onMouseEnter={() => handleLogoHover(true)}
            onMouseLeave={() => handleLogoHover(false)}
            style={{
              filter: 'none',
              WebkitFilter: 'none'
            }}
          >
            <h1 
              ref={logoRef}
              className="font-bold text-xs sm:text-sm md:text-lg leading-tight text-[#003366]"
              style={{
                filter: 'none',
                WebkitFilter: 'none',
                textShadow: 'none',
              }}
            >
              <div className="hidden sm:block">{splitText('Celestial')}</div>
              <div className="hidden sm:block">{splitText('Paperworkers')}</div>
              <div className="sm:hidden">{splitText('CP')}</div>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div ref={linksRef} className="hidden md:flex items-center gap-8 lg:gap-12">
            <a 
              href="#servicios" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('servicios');
                }
              }}
              onMouseEnter={(e) => {
                handleLinkHover(e, true);
                setHoveredLink('servicios');
              }}
              onMouseLeave={(e) => {
                handleLinkHover(e, false);
                setHoveredLink(null);
              }}
              className="text-[#003366] font-semibold relative transition-all duration-300 cursor-pointer text-sm lg:text-base"
              style={{
                textShadow: hoveredLink === 'servicios' ? '0 0 10px rgba(79, 151, 163, 0.5)' : 'none',
                filter: 'none',
                WebkitFilter: 'none'
              }}
            >
              Servicios
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4F97A3] to-transparent transform origin-center transition-transform duration-300"
                style={{
                  transform: hoveredLink === 'servicios' ? 'scaleX(1)' : 'scaleX(0)'
                }}
              />
            </a>
            <a 
              href="#nosotros" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('nosotros');
                }
              }}
              onMouseEnter={(e) => {
                handleLinkHover(e, true);
                setHoveredLink('nosotros');
              }}
              onMouseLeave={(e) => {
                handleLinkHover(e, false);
                setHoveredLink(null);
              }}
              className="text-[#003366] font-semibold relative transition-all duration-300 cursor-pointer text-sm lg:text-base"
              style={{
                textShadow: hoveredLink === 'nosotros' ? '0 0 10px rgba(79, 151, 163, 0.5)' : 'none',
                filter: 'none',
                WebkitFilter: 'none'
              }}
            >
              Nosotros
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4F97A3] to-transparent transform origin-center transition-transform duration-300"
                style={{
                  transform: hoveredLink === 'nosotros' ? 'scaleX(1)' : 'scaleX(0)'
                }}
              />
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('contacto');
                }
              }}
              onMouseEnter={(e) => {
                handleLinkHover(e, true);
                setHoveredLink('contacto');
              }}
              onMouseLeave={(e) => {
                handleLinkHover(e, false);
                setHoveredLink(null);
              }}
              className="text-[#003366] font-semibold relative transition-all duration-300 cursor-pointer text-sm lg:text-base"
              style={{
                textShadow: hoveredLink === 'contacto' ? '0 0 10px rgba(79, 151, 163, 0.5)' : 'none',
                filter: 'none',
                WebkitFilter: 'none'
              }}
            >
              Contacto
              <span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#4F97A3] to-transparent transform origin-center transition-transform duration-300"
                style={{
                  transform: hoveredLink === 'contacto' ? 'scaleX(1)' : 'scaleX(0)'
                }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-20"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-[#003366] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-[#003366] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span 
              className={`block w-6 h-0.5 bg-[#003366] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 mx-3 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          <div className="flex flex-col py-4">
            <button
              onClick={() => handleMobileLinkClick('servicios')}
              className="px-6 py-3 text-[#003366] font-semibold text-left hover:bg-[#4F97A3]/10 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => handleMobileLinkClick('nosotros')}
              className="px-6 py-3 text-[#003366] font-semibold text-left hover:bg-[#4F97A3]/10 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleMobileLinkClick('contacto')}
              className="px-6 py-3 text-[#003366] font-semibold text-left hover:bg-[#4F97A3]/10 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
