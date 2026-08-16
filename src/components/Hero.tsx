import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  Calculator,
  Gem,
  Scale,
  CheckCircle2
} from 'lucide-react';
import { MetalRates } from '../types';
import { STORE_INFO, formatINR } from '../data/jewelryData';

interface HeroProps {
  metalRates: MetalRates;
  onExploreClick: () => void;
  onRatesClick: () => void;
  onBespokeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  metalRates,
  onExploreClick,
  onRatesClick,
  onBespokeClick,
}) => {
  return (
    <div className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] py-10 lg:py-16">
      {/* Subtle Peaceful Silk & Gold Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Warm Radial Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(184,147,76,0.12)_0%,transparent_70%)] rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(223,196,137,0.15)_0%,transparent_70%)] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(184,147,76,0.08)_0%,transparent_70%)] rounded-full blur-2xl" />

        {/* Decorative Handcrafted Vector Filigree Graphics (Inline SVG) */}
        <svg className="absolute -top-10 right-10 w-96 h-96 text-[#B8934C]/10 animate-[spin_120s_linear_infinite]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 C120,40 140,40 160,20 C140,45 155,65 180,60 C155,80 155,100 180,120 C155,115 140,135 160,160 C140,140 120,140 100,170 C80,140 60,140 40,160 C60,135 45,115 20,120 C45,100 45,80 20,60 C45,65 60,45 40,20 C60,40 80,40 100,10 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <svg className="absolute bottom-10 left-5 w-72 h-72 text-[#B8934C]/8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="45" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeWidth="0.25" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Heritage Badge with Ornate Graphic Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#8A6720] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
              <span className="text-[10px] uppercase tracking-[3px] font-bold">
                Shri Sadhuram Sonar Ji Ki Dukan · Sariya (C.G.)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1917] tracking-tight leading-[1.12]">
                Purity of Tradition,<br />
                <span className="text-[#8A6720] font-semibold italic">Timeless Elegance</span>
              </h1>
              <p className="font-playfair italic text-lg sm:text-xl text-[#574F48] font-normal pt-1">
                Generational mastery in 22KT (916) BIS Hallmarked Gold & Pure 925 Silver.
              </p>
            </div>

            {/* Description */}
            <p className="text-[#574F48] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal font-sans">
              Welcome to Sariya’s most trusted family jeweller since 1968. Explore bespoke bridal haar sets, antique pacheli kadas, solitaire diamond rings, and pure silver pooja articles with 100% transparent pricing and 6-digit HUID certification.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-collection-btn"
                onClick={onExploreClick}
                className="btn-sober-gold rounded-sm shadow-md"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-check-rates-btn"
                onClick={onRatesClick}
                className="btn-sober-outline rounded-sm bg-[#FFFFFF]"
              >
                <Calculator className="w-3.5 h-3.5 text-[#8A6720]" />
                <span>Price & Rate Calculator</span>
              </button>
            </div>

            {/* Trust Highlights Checklist with Sober Graphics */}
            <div className="pt-6 border-t border-[rgba(184,147,76,0.2)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 bg-[#FFFFFF] rounded-sm border border-[rgba(184,147,76,0.18)] shadow-xs">
                <div className="flex items-center gap-1.5 text-[#15803D] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[11px] font-bold text-[#1C1917]">100% 6-Digit HUID</span>
                </div>
                <p className="text-[10px] text-[#78716C] leading-tight font-sans">Verifiable on BIS App</p>
              </div>

              <div className="p-3 bg-[#FFFFFF] rounded-sm border border-[rgba(184,147,76,0.18)] shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8A6720] mb-1">
                  <Scale className="w-4 h-4" />
                  <span className="text-[11px] font-bold text-[#1C1917]">0% Wax Deduct</span>
                </div>
                <p className="text-[10px] text-[#78716C] leading-tight font-sans">Transparent Net Weight</p>
              </div>

              <div className="p-3 bg-[#FFFFFF] rounded-sm border border-[rgba(184,147,76,0.18)] shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8A6720] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-bold text-[#1C1917]">55+ Yrs Legacy</span>
                </div>
                <p className="text-[10px] text-[#78716C] leading-tight font-sans">Shri Sadhuram Ji</p>
              </div>

              <div className="p-3 bg-[#FFFFFF] rounded-sm border border-[rgba(184,147,76,0.18)] shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8A6720] mb-1">
                  <Gem className="w-4 h-4" />
                  <span className="text-[11px] font-bold text-[#1C1917]">100% Buyback</span>
                </div>
                <p className="text-[10px] text-[#78716C] leading-tight font-sans">Live Market Valuation</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Live Rate Board Container with Peaceful Sober Styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="sober-card p-6 sm:p-7 relative overflow-hidden rounded-sm">
              
              {/* Subtle top gold foil accent border */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
              
              {/* Header with Live Pulsing Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(184,147,76,0.18)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-sm bg-[#FAF6F0] border border-[#B8934C]/30 text-[#8A6720]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-[#1C1917] text-base tracking-wider">
                      Sariya Live Metal Board
                    </h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#78716C]">
                      Benchmark Rates Today
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F0FDF4] border border-[#86EFAC] text-[#15803D] text-[9px] font-bold uppercase tracking-[2px] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping" />
                  Live
                </span>
              </div>

              {/* Rate Items Grid */}
              <div className="mt-4 space-y-2.5">
                {/* 24KT Gold */}
                <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:border-[#B8934C] hover:bg-[#FFFFFF] transition-all">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B8934C]"></span>
                      <span className="text-xs font-bold text-[#1C1917]">Gold 24KT (99.9% Pure)</span>
                    </div>
                    <span className="text-[10px] text-[#78716C] pl-3.5">Standard 10 Grams</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#8A6720] text-base font-mono">{formatINR(metalRates.gold24kPer10g)}</div>
                    <span className="text-[9px] text-[#15803D] font-semibold">+{metalRates.dayChangeGoldPercent}% today</span>
                  </div>
                </div>

                {/* 22KT Gold (Hallmark 916) - Highlighted */}
                <div className="p-3 bg-[#FFFDF9] border-2 border-[#B8934C] rounded-sm flex items-center justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8A6720]"></span>
                      <span className="text-xs font-bold text-[#8A6720]">Gold 22KT (916 BIS Hallmark)</span>
                    </div>
                    <span className="text-[10px] text-[#574F48] pl-3.5 font-medium">Jewellery Standard (10g)</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#8A6720] text-lg font-mono">{formatINR(metalRates.gold22kPer10g)}</div>
                    <span className="text-[10px] text-[#574F48] font-mono">₹{(metalRates.gold22kPer10g / 10).toFixed(0)}/g</span>
                  </div>
                </div>

                {/* 18KT Gold */}
                <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:border-[#B8934C] hover:bg-[#FFFFFF] transition-all">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8C8278]"></span>
                      <span className="text-xs font-bold text-[#1C1917]">Gold 18KT (750 Diamond)</span>
                    </div>
                    <span className="text-[10px] text-[#78716C] pl-3.5">Per 10 Grams</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1C1917] text-base font-mono">{formatINR(metalRates.gold18kPer10g)}</div>
                    <span className="text-[10px] text-[#78716C] font-mono">₹{(metalRates.gold18kPer10g / 10).toFixed(0)}/g</span>
                  </div>
                </div>

                {/* Silver 999 Fine */}
                <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:border-[#B8934C] hover:bg-[#FFFFFF] transition-all">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#78716C]"></span>
                      <span className="text-xs font-bold text-[#1C1917]">Silver 999 Fine</span>
                    </div>
                    <span className="text-[10px] text-[#78716C] pl-3.5">1 Kilogram / 10g</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1C1917] text-base font-mono">{formatINR(metalRates.silver999PerKg)}</div>
                    <span className="text-[10px] text-[#78716C] font-mono">₹{metalRates.silver999Per10g}/10g</span>
                  </div>
                </div>
              </div>

              {/* Calculator Quick Action Footer */}
              <div className="mt-5 pt-4 border-t border-[rgba(184,147,76,0.18)] flex items-center justify-between">
                <span className="text-xs text-[#574F48] font-sans">Itemized bill breakdown with GST</span>
                <button
                  id="hero-board-calc-trigger"
                  onClick={onRatesClick}
                  className="px-3.5 py-1.5 bg-[#FAF6F0] hover:bg-[#B8934C] text-[#8A6720] hover:text-[#FFFFFF] border border-[#B8934C]/40 text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer rounded-sm"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Open Estimator</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
