import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LOGO_URL = "https://media.base44.com/images/public/user_69d51a2755f8e427b0240743/c88270f50_image.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#111111] ${scrolled ? 'shadow-md shadow-black/40' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <img src={LOGO_URL} alt="Anarchy Cutclub" className="h-20 md:h-24 w-auto py-1" style={{ mixBlendMode: 'screen' }} />

        <div className="flex items-center gap-6 md:gap-8">
          {['Tým', 'Služby', 'Kontakt'].map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(['tym', 'sluzby', 'kontakt'][i])}
              className="nav-link font-inter font-medium tracking-wide transition-colors duration-300" style={{ fontSize: '17px', color: '#FFFFFF' }}
            >
              {label}
            </button>
          ))}
          <a
            href="https://noona.app/cs/anarchycutclub#about"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex noona-pulse bg-[#c0392b] text-white font-inter rounded-lg hover:bg-[#a5311f] transition-all duration-300 hover:scale-[1.03] mr-4"
            style={{ fontSize: '16px', padding: '12px 28px' }}
          >
            Rezervovat
          </a>
        </div>
      </div>
    </motion.nav>
  );
}