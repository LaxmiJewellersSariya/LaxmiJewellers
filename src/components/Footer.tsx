import React from 'react';
import {
  Gem,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Heart,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/jewelryData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6F0] text-[#574F48] border-t border-[rgba(184,147,76,0.25)] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[rgba(184,147,76,0.18)]">
        
        {/* Brand & Heritage Overview */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#B8934C] p-0.5 flex items-center justify-center bg-[#FFFFFF] rounded-sm shadow-xs">
              <Gem className="w-5 h-5 text-[#8A6720]" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] tracking-wider">
                LAXMI <span className="text-[#8A6720]">JEWELLERS</span>
              </h3>
              <p className="text-[10px] uppercase tracking-[3px] text-[#8A6720] font-bold">
                {STORE_INFO.founder} • Sariya (C.G.)
              </p>
            </div>
          </div>

          <p className="text-xs text-[#574F48] leading-relaxed max-w-md font-normal font-sans">
            Founded in 1968 by Shri Sadhuram Sonar Ji, Laxmi Jewellers is Sariya’s premier destination for certified 22KT/24KT BIS Hallmarked gold jewellery, bespoke bridal sets, and handcrafted fine silver ornaments.
          </p>

          <div className="p-3.5 bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] rounded-sm flex items-start gap-2.5 max-w-md text-xs shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#8A6720] shrink-0 mt-0.5" />
            <div className="text-[11px] text-[#574F48] font-sans">
              <span className="font-bold text-[#1C1917] block mb-0.5 uppercase tracking-wider">{STORE_INFO.bisRegistration}</span>
              <span>100% 6-Digit HUID Laser Hallmarked • Verifiable on BIS Care App</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-cinzel text-sm uppercase tracking-wider font-bold text-[#1C1917] mb-4">
            Showroom Navigation
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <button
                onClick={() => handleNav('home')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Home & Hero Showcase
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('collections')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Bridal & Signature Collections
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('rates')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Live Metal Rates & Price Estimator
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('heritage')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Legacy of Shri Sadhuram Sonar Ji
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('bespoke')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Bespoke Design Studio & Custom Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('visit')}
                className="text-[#574F48] hover:text-[#8A6720] font-medium transition-colors cursor-pointer"
              >
                Store Location & Appointment Booking
              </button>
            </li>
          </ul>
        </div>

        {/* Store Address & Contact */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="font-cinzel text-sm uppercase tracking-wider font-bold text-[#1C1917] mb-4">
            Visit & Contact
          </h4>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8A6720] shrink-0 mt-0.5" />
              <p className="text-[#574F48] font-normal leading-relaxed font-sans">
                {STORE_INFO.address}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#8A6720] shrink-0" />
              <span className="text-[#574F48] font-normal font-sans">{STORE_INFO.workingHours}</span>
            </div>

            <div className="flex items-center gap-2.5 font-mono">
              <Phone className="w-4 h-4 text-[#8A6720] shrink-0" />
              <a href={`tel:${STORE_INFO.phone}`} className="text-[#8A6720] font-bold hover:underline">
                {STORE_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sober-gold inline-flex rounded-sm py-2 px-4 text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Support</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4 font-sans">
        <div>
          © {new Date().getFullYear()} {STORE_INFO.name} ({STORE_INFO.founder}). All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 text-[11px] font-medium">
          <span>100% 6-Digit HUID Hallmarked</span>
          <span>•</span>
          <span>Zero Wax Deductions</span>
          <span>•</span>
          <span>Sariya, Chhattisgarh</span>
        </div>
      </div>
    </footer>
  );
};
