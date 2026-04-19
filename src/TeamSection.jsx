import { Instagram } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69d51a2755f8e427b0240743/c88270f50_image.png";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <img src={LOGO_URL} alt="Anarchy Cutclub" className="h-14 w-auto mx-auto mb-6" />
        <p className="font-inter text-sm text-white/30 mb-6">© 2026 Anarchy Cutclub

        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/sanys_cuts"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c0392b] flex items-center justify-center transition-all duration-300">
            
            <Instagram className="w-4 h-4 text-white/60 hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/maci_the_barber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c0392b] flex items-center justify-center transition-all duration-300">
            
            <Instagram className="w-4 h-4 text-white/60 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>);

}