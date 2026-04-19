import useScrollAnimation from './useScrollAnimation';

const BARBER_IMAGE = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#0d0d0d] overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row min-h-[520px] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left – text */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-16 md:py-24">
          <h2 className="font-bebas text-[52px] md:text-[68px] text-white leading-[1] mb-5">
            Přijďte se přesvědčit<br />na vlastní kůži.
          </h2>
          <p className="font-inter text-base text-white/50 mb-10 max-w-sm">
            Zarezervujte si čas u jednoho z našich špičkových barberů.
          </p>
          <a
            href="https://noona.app/cs/anarchycutclub#about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start bg-[#c0392b] text-white font-inter text-sm font-medium px-8 py-4 rounded-lg hover:bg-[#a5311f] transition-all duration-300 hover:shadow-lg hover:shadow-[#c0392b]/30 uppercase tracking-widest"
          >
            Rezervujte svůj termín
          </a>
        </div>

        {/* Right – image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0 overflow-hidden">
          <img
            src={BARBER_IMAGE}
            alt="Barber at work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}