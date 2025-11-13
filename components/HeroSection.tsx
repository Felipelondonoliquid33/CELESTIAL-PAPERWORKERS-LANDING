import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          delay: 0.3 
        }
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          delay: 0.5 
        }
      );
    }

    // Animate description
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          delay: 0.7 
        }
      );
    }

    // Animate button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          ease: 'back.out(1.7)',
          delay: 0.9 
        }
      );
    }

    // Animate cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.step-card');
      gsap.fromTo(
        cards,
        { opacity: 0, x: 100, rotateY: -30 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1.1
        }
      );
    }
  }, []);

  const handleButtonHover = (isHovering: boolean) => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: isHovering ? 1.05 : 1,
        boxShadow: isHovering 
          ? '0 10px 30px rgba(79, 147, 163, 0.4)' 
          : '0 4px 15px rgba(79, 147, 163, 0.2)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    const card = e.currentTarget;
    gsap.to(card, {
      scale: isHovering ? 1.02 : 1,
      y: isHovering ? -5 : 0,
      rotateZ: isHovering ? -1 : 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div ref={heroRef} className="relative min-h-screen pt-44 px-6 pb-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Title - Left Side, Large */}
        <div className="mb-20">
          <h1 
            ref={titleRef}
            className="text-[80px] md:text-[100px] lg:text-[120px] font-black leading-none max-w-[600px]"
            style={{
              color: '#1e3a5f',
              textShadow: '0 4px 20px rgba(30, 58, 95, 0.2)'
            }}
          >
            Celestial
            <br />
            <span 
              style={{
                background: 'linear-gradient(135deg, #4F97A3 0%, #87CEBB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Paperworkers
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8"
>

            {/* Subtitle */}
            <h2 
              ref={subtitleRef}
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#1e3a5f' }}
            >
              Aparecemos cuando la burocracia se vuelve más compleja
            </h2>

            {/* Description */}
            <p 
              ref={descriptionRef}
              className="text-base md:text-lg max-w-md"
              style={{ color: '#434F85' }}
            >
              Nuestro equipo le ayudará a gestionar tareas administrativas y papeleos incómodos, en un momento donde usted solo tiene que sanar.
            </p>

            {/* Button */}
            <button
              ref={buttonRef}
              onMouseEnter={() => handleButtonHover(true)}
              onMouseLeave={() => handleButtonHover(false)}
              className="px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #4F97A3 0%, #87CEBB 100%)',
                boxShadow: '0 4px 15px rgba(79, 147, 163, 0.3)'
              }}
            >
              Saber Más
            </button>
          </div>

          {/* Right Column - Step Cards */}
          <div ref={cardsRef} className="space-y-8">
            {/* Card 1 */}
            <div 
              className="step-card relative p-8 rounded-3xl transform transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(224, 229, 236, 0.9) 0%, rgba(188, 198, 204, 0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div 
                className="absolute -right-6 -top-12 text-[100px] font-black opacity-60"
                style={{ 
                  color: '#4F97A3',
                  WebkitTextStroke: '3px #003366',
                  textShadow: '0 4px 8px rgba(0, 51, 102, 0.3)'
                }}
              >
                1
              </div>
              <div className="relative z-10">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ color: '#1e3a5f' }}
                >
                  Nos cuentas qué necesitas.
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#434F85' }}
                >
                  Un mensaje, una llamada o una señal celestial: entendemos tu situación y los trámites pendientes.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="step-card relative p-8 rounded-3xl transform transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(224, 229, 236, 0.9) 0%, rgba(188, 198, 204, 0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div 
                className="absolute -right-6 -top-12 text-[100px] font-black opacity-60"
                style={{ 
                  color: '#4F97A3',
                  WebkitTextStroke: '3px #003366',
                  textShadow: '0 4px 8px rgba(0, 51, 102, 0.3)'
                }}
              >
                2
              </div>
              <div className="relative z-10">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ color: '#1e3a5f' }}
                >
                  Nosotros nos encargamos del papeleo.
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#434F85' }}
                >
                  Coordinamos documentos, bancos y registros, mientras tú te enfocas en sanar.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="step-card relative p-8 rounded-3xl transform transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(224, 229, 236, 0.9) 0%, rgba(188, 198, 204, 0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div 
                className="absolute -right-6 -top-12 text-[100px] font-black opacity-60"
                style={{ 
                  color: '#4F97A3',
                  WebkitTextStroke: '3px #003366',
                  textShadow: '0 4px 8px rgba(0, 51, 102, 0.3)'
                }}
              >
                3
              </div>
              <div className="relative z-10">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ color: '#1e3a5f' }}
                >
                  Recibes todo resuelto.
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#434F85' }}
                >
                  Te entregamos un resumen claro y todos los documentos en orden, cerrando el ciclo para que puedas avanzar con tranquilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
