import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Grid,
  MessageCircle,
  PhoneCall,
  MapPin,
  Flame
} from 'lucide-react';
import { InquiryItem, MetalRates } from '../types';
import { STORE_INFO, formatINR } from '../data/jewelryData';

interface MobileBottomDockProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  inquiryItems: InquiryItem[];
  setIsInquiryOpen: (open: boolean) => void;
  metalRates: MetalRates;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({
  activeTab,
  setActiveTab,
  inquiryItems,
  setIsInquiryOpen,
  metalRates,
}) => {
  const totalInquiryCount = inquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const dockItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      action: () => {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'collections',
      label: 'Jewellery',
      icon: Grid,
      action: () => {
        setActiveTab('collections');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'rates',
      label: 'Live Rates',
      icon: TrendingUp,
      badge: 'LIVE',
      action: () => {
        setActiveTab('rates');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'bespoke',
      label: 'Bespoke',
      icon: Sparkles,
      action: () => {
        setActiveTab('bespoke');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'inquiry',
      label: 'My Bag',
      icon: ShoppingBag,
      count: totalInquiryCount,
      action: () => {
        setIsInquiryOpen(true);
      },
    },
  ];

  return (
    <aside aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
      {/* Mini Gold Pulse Ticker Ribbon on Mobile Dock Header */}
      <div className="bg-[#211D1A]/95 backdrop-blur-md px-3 py-1 text-[10px] text-[#DFC489] flex items-center justify-between border-t border-[#3D352E]/80 border-b border-[#B8934C]/20 shadow-inner">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFC489] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8934C]"></span>
          </span>
          <span className="text-[#F5EDE4] font-semibold">24K Gold:</span>
          <span className="text-[#FFDF99] font-bold">{formatINR(metalRates.gold24kPer10g)}</span>
          <span className="text-[#A89F91] text-[9px]">/10g</span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya,%20I%20have%20an%20inquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#4ADE80] font-semibold text-[10px] tracking-wide"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>Chat</span>
          </a>
          <span className="text-[#4E443B]">|</span>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-1 text-[#DFC489] font-semibold text-[10px] tracking-wide"
            aria-label="Call Store"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphism Bottom Dock */}
      <nav
        aria-label="Quick Actions Dock"
        className="bg-[#FFFFFF]/95 backdrop-blur-lg border-t border-[rgba(184,147,76,0.25)] shadow-[0_-10px_35px_rgba(40,30,20,0.12)] px-2 py-1.5 pb-safe"
      >
        <div className="grid grid-cols-5 items-center justify-between gap-1 max-w-md mx-auto">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && item.id !== 'inquiry';

            return (
              <button
                key={item.id}
                id={`mobile-dock-${item.id}`}
                onClick={item.action}
                className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#8A6720] font-bold bg-[#FAF6F0]'
                    : 'text-[#6B635B] hover:text-[#8A6720] hover:bg-[#FAF8F5]'
                }`}
              >
                {/* Active Indicator Top Pill */}
                {isActive && (
                  <motion.span
                    layoutId="mobileActiveDockPill"
                    className="absolute -top-1 w-6 h-0.5 bg-[#B8934C] rounded-full shadow-xs"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}

                {/* Icon with Counter / Live Badge */}
                <div className="relative mb-0.5 flex items-center justify-center">
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? 'scale-110 text-[#8A6720]' : 'text-[#6B635B]'
                    }`}
                  />

                  {/* Quantity Badge for Bag */}
                  {item.count !== undefined && item.count > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 bg-[#800020] text-[#FFFFFF] text-[9px] font-bold font-mono h-4 min-w-4 px-1 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                      {item.count}
                    </span>
                  )}

                  {/* LIVE Pulsing Badge for Rates */}
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-3 bg-[#15803D] text-[#FFFFFF] text-[7px] font-bold tracking-tighter px-1 py-0.2 rounded-full uppercase scale-85 shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] tracking-tight leading-tight uppercase font-medium ${
                    isActive ? 'text-[#8A6720] font-bold' : 'text-[#78716C]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};
