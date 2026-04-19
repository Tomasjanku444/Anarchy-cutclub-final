import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import BarberToolsSVG from './BarberToolsSVG';

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#aaa]">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        className="w-[1px] h-8 bg-gradient-to-b from-[#c0392b] to-transparent"
      />
    </motion.div>
  );
}

export default function Hero() {
  const scrollToSluzby = () => {
    document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headingWords = ["Anarchy", "Cutclub"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Photo background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Thin decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ scaleX: [1, 0.6, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>


      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.15em] text-[#c0392b] font-inter font-medium mb-6"
        >
          Barber Shop · Šumperk
        </motion.p>

        {/* Letter-by-letter heading */}
        <h1 className="font-bebas text-[72px] sm:text-[90px] md:text-[110px] leading-[0.9] text-white tracking-[0.02em]">
          {headingWords.map((word, wi) => (
            <span key={wi} className="block md:inline-block">
              {word.split("").map((char, ci) => {
                const globalIndex = wi === 0 ? ci : headingWords[0].length + 1 + ci;
                return (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + globalIndex * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wi === 0 && <span className="hidden md:inline">&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-1 mt-4 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f5c518" className="w-6 h-6 drop-shadow-sm">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://noona.app/cs/anarchycutclub#about"
            target="_blank"
            rel="noopener noreferrer"
            className="noona-pulse bg-[#c0392b] text-white font-inter text-base font-medium px-8 py-4 rounded-lg hover:bg-[#a5311f] transition-all duration-300 hover:shadow-lg hover:shadow-[#c0392b]/40 hover:scale-[1.03]"
          >
            Rezervovat termín
          </a>
          <button
            onClick={scrollToSluzby}
            className="border-2 border-white text-white font-inter text-base font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 hover:scale-[1.03]"
          >
            Naše služby
          </button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}