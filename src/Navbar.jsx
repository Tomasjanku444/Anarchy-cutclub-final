import useScrollAnimation from './useScrollAnimation';
import SectionLabel from './SectionLabel';

const SERVICES = [
  {
    title: 'Střih',
    items: [
      { name: 'Jenom střih', duration: '60 min', price: '450 Kč' },
      { name: 'Střih + depilace voskem', duration: '60 min', price: '500 Kč' },
      { name: 'Střih + opalování chloupků', duration: '60 min', price: '500 Kč' },
      { name: 'Střih + depilace + opalování', duration: '60 min', price: '550 Kč' },
    ],
  },
  {
    title: 'Střih + Úprava vousů',
    items: [
      { name: 'Jenom střih a úprava', duration: '90 min', price: '650 Kč' },
      { name: 'Střih a úprava + depilace voskem', duration: '90 min', price: '700 Kč' },
      { name: 'Střih a úprava + opalování chloupků', duration: '90 min', price: '700 Kč' },
      { name: 'Střih a úprava + depilace + opalování', duration: '90 min', price: '750 Kč' },
    ],
  },
];

const BEARD = {
  title: 'Úprava vousů',
  items: [{ name: 'Jenom úprava', duration: '30 min', price: '350 Kč' }],
};

function ServiceRow({ item, isLast }) {
  return (
    <div
      className={`grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_100px_100px] gap-4 items-center py-4 px-2 rounded-lg transition-colors duration-200 hover:bg-[#fdf5f5] ${
        !isLast ? 'border-b border-[#f0f0f0]' : ''
      }`}
    >
      <span className="font-inter text-[15px] text-[#1a1a1a]">{item.name}</span>
      <span className="font-inter text-[14px] text-[#999] text-right md:text-center">{item.duration}</span>
      <span className="font-inter text-[15px] text-[#1a1a1a] font-medium text-right">{item.price}</span>
    </div>
  );
}

function ServiceCard({ category, index, isVisible }) {
  return (
    <div
      className="bg-white rounded-2xl border border-[#e8e8e8] p-8 transition-all duration-300 hover:border-[#c0392b] hover:shadow-xl hover:shadow-[#c0392b]/10 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
      }}
    >
      <h3 className="font-bebas text-[28px] text-[#c0392b] uppercase tracking-wide pb-3 border-b-2 border-[#c0392b] mb-2">
        {category.title}
      </h3>
      <div>
        {category.items.map((item, i) => (
          <ServiceRow key={i} item={item} isLast={i === category.items.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sluzby" className="bg-white py-24 md:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel>Co nabízíme</SectionLabel>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-[#1a1a1a] leading-none mb-12">
            Služby
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {SERVICES.map((cat, i) => (
            <ServiceCard key={cat.title} category={cat} index={i} isVisible={isVisible} />
          ))}
        </div>
        <ServiceCard category={BEARD} index={2} isVisible={isVisible} />
      </div>
    </section>
  );
}