import { MapPin, Calendar, Instagram } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import SectionLabel from './SectionLabel';

function ContactCard({ children, index, isVisible, className = '' }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#e8e8e8] p-8 contact-card ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="bg-[#f7f7f5] py-24 md:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel>Najdi nás</SectionLabel>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-[#1a1a1a] leading-none mb-12">
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address — mobile: order 3, desktop: order 1 */}
          <ContactCard index={0} isVisible={isVisible} className="order-3 md:order-1">
            <div className="w-12 h-12 rounded-xl bg-[#fdf5f5] flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5 text-[#c0392b]" />
            </div>
            <h3 className="font-bebas text-2xl text-[#1a1a1a] mb-2">Adresa</h3>
            <p className="font-inter text-base font-medium text-[#444] mb-5 leading-relaxed">
              Náměstí Míru 5,<br />Šumperk 1
            </p>
            <div className="rounded-xl overflow-hidden border border-[#e8e8e8] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5!2d16.9711!3d49.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713c5a0a4a0a0a1%3A0x0!2zTsOhbcSbc3TDrSBNw61ydSA1LCDFoHVtcGVyaw!5e0!3m2!1scs!2scz!4v1700000000000"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anarchy Cutclub location"
              />
            </div>
          </ContactCard>

          {/* Booking — mobile: order 1, desktop: order 2 */}
          <ContactCard index={1} isVisible={isVisible} className="order-2 md:order-2">
            <div className="w-12 h-12 rounded-xl bg-[#fdf5f5] flex items-center justify-center mb-5">
              <Calendar className="w-5 h-5 text-[#c0392b]" />
            </div>
            <h3 className="font-bebas text-2xl text-[#1a1a1a] mb-2">Rezervace</h3>
            <p className="font-inter text-base font-medium text-[#444] mb-6 leading-relaxed">
              Objednej se přes Noona
            </p>
            <div className="mt-auto">
              <a
                href="https://noona.app/cs/anarchycutclub#about"
                target="_blank"
                rel="noopener noreferrer"
                className="noona-pulse inline-block bg-[#c0392b] text-white font-inter text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#a5311f] transition-all duration-300 w-full text-center hover:scale-[1.03]"
              >
                Rezervovat
              </a>
            </div>
          </ContactCard>

          {/* Social — mobile: order 2, desktop: order 3 */}
          <ContactCard index={2} isVisible={isVisible} className="order-1 md:order-3">
            <div className="w-12 h-12 rounded-xl bg-[#fdf5f5] flex items-center justify-center mb-5">
              <Instagram className="w-5 h-5 text-[#c0392b]" />
            </div>
            <h3 className="font-bebas text-2xl text-[#1a1a1a] mb-2">Sociální sítě</h3>
            <p className="font-inter text-base font-medium text-[#444] mb-5 leading-relaxed">
              Sleduj nás na Instagramu
            </p>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/sanys_cuts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="instagram-pill inline-flex items-center gap-2 text-[#1a1a1a] font-inter text-sm px-4 py-2 rounded-full overflow-hidden relative hover:text-white">
                  <Instagram className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">@sanys_cuts</span>
                </span>
                <span className="text-sm text-[#999] font-inter">Denis</span>
              </a>
              <a
                href="https://www.instagram.com/maci_the_barber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="instagram-pill inline-flex items-center gap-2 text-[#1a1a1a] font-inter text-sm px-4 py-2 rounded-full overflow-hidden relative hover:text-white">
                  <Instagram className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">@maci_the_barber</span>
                </span>
                <span className="text-sm text-[#999] font-inter">Maci</span>
              </a>
            </div>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}