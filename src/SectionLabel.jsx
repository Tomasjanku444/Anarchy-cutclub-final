import { Instagram } from 'lucide-react';
import useScrollAnimation from './useScrollAnimation';
import SectionLabel from './SectionLabel';

const TEAM = [
  {
    name: 'Denis',
    photo: 'https://media.base44.com/images/public/user_69d51a2755f8e427b0240743/669d8eb8f_image.png',
    instagram: '@sanys_cuts',
    instagramUrl: 'https://www.instagram.com/sanys_cuts',
  },
  {
    name: 'Maci',
    photo: 'https://media.base44.com/images/public/user_69d51a2755f8e427b0240743/f4e58dc96_image.png',
    instagram: '@maci_the_barber',
    instagramUrl: 'https://www.instagram.com/maci_the_barber',
  },
];

function TeamCard({ member, index, sectionVisible }) {
  return (
    <div
      className="group bg-white rounded-2xl border border-[#e8e8e8] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10"
      style={{
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="font-bebas text-[32px] text-[#1a1a1a] leading-none">{member.name}</h3>
        <p className="text-[#999] font-inter text-sm mt-1 mb-4">Barber</p>
        <a
          href={member.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-pill inline-flex items-center gap-2 bg-[#f7f7f5] text-[#1a1a1a] font-inter text-sm px-4 py-2 rounded-full transition-all duration-300 overflow-hidden relative hover:text-white"
        >
          <Instagram className="w-4 h-4 relative z-10" />
          <span className="relative z-10">{member.instagram}</span>
        </a>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tym" className="bg-[#f7f7f5] py-24 md:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <SectionLabel>Naši kluci</SectionLabel>
          <h2 className="font-bebas text-[56px] md:text-[72px] text-[#1a1a1a] leading-none mb-12">
            Tým
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} sectionVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}