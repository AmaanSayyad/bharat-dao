
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>Vision</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Why Bharat DAO
            </h2>
          </div>
          
          <div
            ref={cardsContainerRef}
            className="relative flex-1 perspective-1000"
          >
            {/* Card Data */}
            {[
              {
                key: "vision",
                visible: isFirstCardVisible,
                zIndex: 10,
                translateY: isFirstCardVisible ? "70px" : "200px",
                scale: 0.93,
                opacity: isFirstCardVisible ? 1 : 0,
                bg: "/background-section1.png",
                bgPos: "top center",
                label: "The Vision",
                labelIcon: (
                  <svg className="w-4 h-4 mr-2 text-pulse-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
                heading: (
                  <>
                    We're building a <span className="text-pulse-400">gateway</span> for global blockchains to enter India
                  </>
                ),
                headingClass: "text-white"
              },
              {
                key: "mission",
                visible: isSecondCardVisible,
                zIndex: 20,
                translateY: isSecondCardVisible
                  ? activeCardIndex === 1
                    ? "35px"
                    : "25px"
                  : "200px",
                scale: 0.97,
                opacity: isSecondCardVisible ? 1 : 0,
                bg: "/background-section2.png",
                bgPos: "center",
                label: "The Mission",
                labelIcon: (
                  <svg className="w-4 h-4 mr-2 text-pulse-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 19V5" />
                    <path d="M5 12l7-7 7 7" />
                  </svg>
                ),
                heading: (
                  <>
                    We're <span className="text-pulse-400">empowering</span> Indian talent to access global opportunities
                  </>
                ),
                headingClass: "text-white"
              },
              {
                key: "values",
                visible: isThirdCardVisible,
                zIndex: 30,
                translateY: isThirdCardVisible
                  ? activeCardIndex === 2
                    ? "0"
                    : "-10px"
                  : "200px",
                scale: 1,
                opacity: isThirdCardVisible ? 1 : 0,
                bg: "/background-section3.png",
                bgPos: "bottom center",
                label: "The Values",
                labelIcon: (
                  <svg className="w-4 h-4 mr-2 text-pulse-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 20l9-5-9-5-9 5 9 5z" />
                    <path d="M12 12V4" />
                  </svg>
                ),
                heading: (
                  <>
                    We're creating a <span className="text-[#FC4D0A]">community</span>, <span className="text-pulse-400">not just a platform</span>
                  </>
                ),
                headingClass: "text-white"
              }
            ].map(
              (
                {
                  key,
                  visible,
                  zIndex,
                  translateY,
                  scale,
                  opacity,
                  bg,
                  bgPos,
                  label,
                  labelIcon,
                  heading,
                  headingClass
                },
                idx
              ) => (
                <div
                  key={key}
                  className={`absolute inset-0 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)] ${
                    visible ? "animate-card-enter" : ""
                  }`}
                  style={{
                    ...cardStyle,
                    zIndex,
                    transform: `translateY(${translateY}) scale(${scale})`,
                    opacity,
                    pointerEvents: visible ? "auto" : "none",
                    boxShadow:
                      visible && idx === 2
                        ? "0 12px 48px 0 rgba(252,77,10,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)"
                        : "0 6px 32px 0 rgba(0,0,0,0.10)"
                  }}
                >
                  {/* Card Background */}
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                    style={{
                      backgroundImage: `url('${bg}')`,
                      backgroundSize: "cover",
                      backgroundPosition: bgPos,
                      backgroundBlendMode: "overlay",
                      borderRadius: "inherit"
                    }}
                  ></div>

                  {/* Card Label */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold shadow-md">
                      {labelIcon}
                      <span className="text-sm font-medium tracking-wide">{label}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
                    <div className="max-w-lg">
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight mb-4 drop-shadow-lg ${headingClass}`}
                      >
                        {heading}
                      </h3>
                      {idx === 2 && (
                        <p className="text-lg text-white/80 font-medium">
                          Our values: <span className="font-semibold text-pulse-400">Openness</span>,{" "}
                          <span className="font-semibold text-pulse-400">Collaboration</span>,{" "}
                          <span className="font-semibold text-pulse-400">Empowerment</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
