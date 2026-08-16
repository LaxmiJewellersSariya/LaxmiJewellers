import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Phone,
  Clock,
  MapPin,
  Search,
  ShoppingBag,
  Menu,
  X,
  Calculator,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Gem
} from 'lucide-react';
import { MetalRates, InquiryItem } from '../types';
import { STORE_INFO, formatINR } from '../data/jewelryData';

interface HeaderProps {
  metalRates: MetalRates;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  inquiryItems: InquiryItem[];
  setIsInquiryOpen: (open: boolean) => void;
  onOpenCalculator: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  metalRates,
  activeTab,
  setActiveTab,
  inquiryItems,
  setIsInquiryOpen,
  onOpenCalculator,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalInquiryCount = inquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'rates', label: 'Live Rates & Calculator' },
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'bespoke', label: 'Custom Design' },
    { id: 'visit', label: 'Store & Visit' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-[0_4px_25px_-5px_rgba(80,60,40,0.06)]">
      {/* Live Metal Rates Ticker Bar - Peaceful Sober Theme */}
      <div id="metal-ticker" className="bg-[#211D1A] text-[#FDF8EE] text-[11px] py-2 overflow-hidden relative tracking-[2px] uppercase font-sans border-b border-[#3D352E]">
        <div className="flex items-center">
          {/* Static badge on desktop */}
          <div className="hidden lg:flex items-center gap-2 px-5 bg-[#2A2420] text-[#DFC489] font-semibold border-r border-[#3D352E] z-10 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFC489] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8934C]"></span>
            </span>
            <span className="tracking-[3px] text-[10px] uppercase font-bold text-[#FFFFFF]">Sariya Mandi</span>
          </div>

          {/* Marquee Scroller */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="animate-sober-marquee inline-flex items-center gap-8 text-[11px]">
              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">✨ GOLD 24KT (99.9%):</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.gold24kPer10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">👑 GOLD 22KT (916 BIS):</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.gold22kPer10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">💎 GOLD 18KT (750):</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.gold18kPer10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">🥈 SILVER 999:</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.silver999PerKg)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 1KG</span>
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">✨ SILVER 925:</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.silver925Per10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="flex items-center gap-1.5 text-[#6EE7B7] font-semibold tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% 6-Digit HUID Laser Hallmarked
              </span>
              <span className="text-[#5C5248]">✦</span>

              <span className="text-[#DFC489] font-medium tracking-[2px]">
                🏛️ Shri Sadhuram Sonar Ji Ki Dukan • Sarafa Market, Sariya
              </span>
              <span className="text-[#5C5248]">✦</span>

              {/* Duplicate for infinite seamless scroll */}
              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">✨ GOLD 24KT:</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.gold24kPer10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
              <span className="text-[#5C5248]">✦</span>
              <span className="flex items-center gap-2 text-[#E7DFD5]">
                <span className="text-[#DFC489] font-bold">👑 GOLD 22KT:</span>
                <span className="font-semibold text-[#FFFFFF] font-mono">{formatINR(metalRates.gold22kPer10g)}</span>
                <span className="text-[#A89F91] text-[10px]">/ 10G</span>
              </span>
            </div>
          </div>

          {/* Quick Rate Tool button on right */}
          <button
            id="header-rate-calc-btn"
            onClick={onOpenCalculator}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#2A2420] hover:bg-[#3D352E] text-[#DFC489] hover:text-[#FFFFFF] rounded border border-[rgba(223,196,137,0.3)] transition-all ml-2 mr-4 whitespace-nowrap cursor-pointer text-[10px] tracking-wider uppercase font-semibold"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Price Estimator</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar - Peaceful Sober Ivory/White */}
      <nav className="sober-glass border-b border-[rgba(184,147,76,0.18)] px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo & Heritage Title */}
          <button
            id="brand-home-link"
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3.5 cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-sm border border-[#B8934C] p-1 flex items-center justify-center bg-[#FAF8F5] shadow-[0_2px_10px_rgba(184,147,76,0.15)] group-hover:border-[#8F6D29] group-hover:bg-[#FFFFFF] transition-all">
              <svg className="w-6 h-6 text-[#B8934C] group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3h12l3 6-9 12L3 9l3-6z" />
                <path d="M3 9h18" />
                <path d="M9 3l3 6 3-6" />
                <path d="M12 9v12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[3px] text-[#1C1917]">
                  LAXMI <span className="text-[#B8934C]">JEWELLERS</span>
                </span>
                <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded border border-[#B8934C]/40 text-[#8A6720] font-mono tracking-widest bg-[#FAF6F0] font-semibold">
                  BIS 916
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[4px] text-[#8A6720] font-semibold mt-0.5">
                SARIYA · CHHATTISGARH · ESTD 1968
              </span>
            </div>
          </button>

          {/* Desktop Nav Links with Animated Active Indicator */}
          <div className="hidden lg:flex items-center gap-7 uppercase text-[11px] tracking-[2px] font-semibold text-[#574F48]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1.5 transition-all cursor-pointer ${
                  activeTab === link.id
                    ? 'text-[#8A6720] font-bold'
                    : 'text-[#574F48] hover:text-[#8A6720]'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8934C]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input on Desktop */}
            <div className="relative hidden md:block">
              <input
                id="search-input-header"
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'collections') setActiveTab('collections');
                }}
                placeholder="Search bridal, kadas, 22K..."
                className="w-44 lg:w-52 bg-[#FAF8F5] text-[#1C1917] text-xs px-3 py-2 pl-8 border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] focus:bg-[#FFFFFF] focus:outline-none placeholder-[#8C8278] rounded-sm transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-[#8C8278] absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-[#8C8278] hover:text-[#1C1917]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              id="mobile-search-toggle"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-[#574F48] hover:text-[#8A6720] hover:bg-[#FAF8F5] rounded-sm"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Inquiry / Wishlist Drawer Trigger */}
            <button
              id="open-inquiry-bag-btn"
              onClick={() => setIsInquiryOpen(true)}
              className="relative p-2 text-[#574F48] hover:text-[#8A6720] border border-[rgba(184,147,76,0.25)] hover:border-[#B8934C] bg-[#FAF8F5] hover:bg-[#FFFFFF] transition-colors cursor-pointer rounded-sm"
              title="View Inquiry List"
              aria-label="View Inquiry List"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalInquiryCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#B8934C] text-[#FFFFFF] font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {totalInquiryCount}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Inquiry Button */}
            <a
              id="header-whatsapp-btn"
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya,%20I%20am%20interested%20in%20inquiring%20about%20current%20gold%20rates%20and%20jewellery%20collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] text-[11px] uppercase tracking-wider px-3 py-2 transition-all font-semibold rounded-sm shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book Visit Button - Peaceful Sober Gold Button */}
            <button
              id="header-book-visit-btn"
              onClick={() => handleNavClick('visit')}
              className="hidden xl:inline-flex items-center gap-1.5 bg-[#B8934C] hover:bg-[#9E7728] text-[#FFFFFF] font-semibold text-[11px] px-4 py-2 uppercase tracking-[2px] transition-all cursor-pointer shadow-sm rounded-sm"
            >
              <span>Visit Showroom</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#574F48] hover:text-[#8A6720]"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-[rgba(184,147,76,0.2)] overflow-hidden"
            >
              <div className="relative">
                <input
                  id="search-input-mobile"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeTab !== 'collections') setActiveTab('collections');
                  }}
                  placeholder="Search bridal set, bangles, diamond ring..."
                  className="w-full bg-[#FAF8F5] text-[#1C1917] text-sm px-3.5 py-2.5 pl-9 border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] focus:outline-none rounded-sm"
                  autoFocus
                />
                <Search className="w-4 h-4 text-[#8C8278] absolute left-3 top-3" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-[#8C8278] hover:text-[#1C1917]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-0 top-[95px] bottom-0 bg-[#FAF8F5]/98 backdrop-blur-xl z-50 p-6 flex flex-col justify-between border-b border-[rgba(184,147,76,0.2)] overflow-y-auto shadow-2xl"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[4px] text-[#8A6720] pb-2 border-b border-[rgba(184,147,76,0.2)] font-semibold">
                Showroom Navigation
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-2.5 text-base font-cinzel tracking-wider flex items-center justify-between transition-colors ${
                    activeTab === link.id
                      ? 'text-[#8A6720] font-bold border-l-2 border-[#B8934C] pl-3 bg-[#F4EFEB]/50'
                      : 'text-[#44403C] hover:text-[#8A6720]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#8C8278]">→</span>
                </button>
              ))}

              <div className="pt-4 border-t border-[rgba(184,147,76,0.2)] space-y-3">
                <button
                  id="mobile-menu-calc-btn"
                  onClick={() => {
                    onOpenCalculator();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFFFFF] border border-[rgba(184,147,76,0.35)] text-[#8A6720] font-semibold text-xs uppercase tracking-widest rounded-sm shadow-xs"
                >
                  <Calculator className="w-4 h-4" />
                  Live Price Calculator
                </button>

                <a
                  id="mobile-menu-call-btn"
                  href={`tel:${STORE_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFFFFF] border border-[rgba(184,147,76,0.25)] text-[#44403C] font-semibold text-xs uppercase tracking-wider rounded-sm"
                >
                  <Phone className="w-4 h-4 text-[#B8934C]" />
                  Call Showroom: {STORE_INFO.phone}
                </a>

                <a
                  id="mobile-menu-whatsapp-btn"
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya,%20I%20would%20like%20to%20inquire%20about%20jewellery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#B8934C] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest rounded-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(184,147,76,0.2)] text-center text-xs text-[#78716C]">
              <p className="font-cinzel text-sm font-semibold text-[#1C1917] tracking-wider">{STORE_INFO.name}</p>
              <p className="mt-1 text-[10px] text-[#8A6720] uppercase tracking-widest">{STORE_INFO.founder}</p>
              <p className="text-[11px] text-[#78716C] mt-1">{STORE_INFO.address}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
