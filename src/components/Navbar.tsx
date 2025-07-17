
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Bharat Dao ($BDAO)"
        >
          <img 
            src="/logo.png" 
            alt="Bharat Dao ($BDAO) Logo" 
            className="h-7 sm:h-8" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-6">
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#token" className="nav-link">$BDAO Token</a>
            <a href="#staking" className="nav-link">Staking</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
            <a href="#careers" className="nav-link">Careers</a>
            <a href="#ama" className="nav-link">AMAs</a>
          </nav>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://discord.gg/F3pHyeP3wq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
              aria-label="Discord"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
            </a>
            <a 
              href="https://x.com/bharat_dao_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a 
              href="https://t.me/daobharat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
            </a>
            <a 
              href="https://chat.whatsapp.com/HLLdthucrWOAOq7ylUtkVJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pulse-500 transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </a>
          </div>
        </div>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Close button positioned at the top right */}
        <div className="sticky top-0 w-full bg-white z-10 flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Bharat Dao ($BDAO)"
          >
            <img 
              src="/logo.png" 
              alt="Bharat Dao ($BDAO) Logo" 
              className="h-7" 
            />
          </a>
          <button 
            className="text-gray-700 p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable menu content */}
        <div className="overflow-y-auto h-[calc(100%-70px)] pb-6">
          <nav className="flex flex-col space-y-4 items-center mt-6 px-6">
            <a 
              href="#" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Features
            </a>
            <a 
              href="#token" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              $BDAO Token
            </a>
            <a 
              href="#staking" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Staking
            </a>
            <a 
              href="#roadmap" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Roadmap
            </a>
            <a 
              href="#careers" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Careers
            </a>
            <a 
              href="#ama" 
              className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              AMAs
            </a>
            
            {/* Social Media Icons for Mobile */}
            <div className="flex items-center justify-center space-x-6 w-full py-4 border-t border-gray-100 mt-4">
              <a 
                href="https://discord.gg/F3pHyeP3wq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
                aria-label="Discord"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
              </a>
              <a 
                href="https://x.com/bharat_dao_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a 
                href="https://t.me/daobharat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
                aria-label="Telegram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </a>
              <a 
                href="https://chat.whatsapp.com/HLLdthucrWOAOq7ylUtkVJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pulse-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
