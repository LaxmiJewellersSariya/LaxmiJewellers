import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  RefreshCw,
  Info,
  ShieldCheck,
  Share2,
  Copy,
  Check,
  MessageCircle,
  Percent,
  Sliders,
  Scale,
  Sparkles,
  Award
} from 'lucide-react';
import { MetalRates, MetalType } from '../types';
import { STORE_INFO, formatINR, INITIAL_METAL_RATES } from '../data/jewelryData';

interface LiveRateBoardProps {
  metalRates: MetalRates;
  onUpdateRates: (updated: Partial<MetalRates>) => void;
}

export const LiveRateBoard: React.FC<LiveRateBoardProps> = ({
  metalRates,
  onUpdateRates,
}) => {
  // Calculator State
  const [selectedMetal, setSelectedMetal] = useState<MetalType>('22K Gold');
  const [weightUnit, setWeightUnit] = useState<'grams' | 'tola'>('grams');
  const [weightInput, setWeightInput] = useState<number>(10);
  const [makingChargeType, setMakingChargeType] = useState<'percent' | 'fixedPerGram'>('percent');
  const [makingChargeValue, setMakingChargeValue] = useState<number>(10); // 10%
  const [includeGst, setIncludeGst] = useState<boolean>(true); // 3% GST
  const [copied, setCopied] = useState(false);

  // Rate Adjustment Modal toggle (if user wants to customize rate)
  const [isEditingRates, setIsEditingRates] = useState(false);
  const [temp24k, setTemp24k] = useState(metalRates.gold24kPer10g);
  const [temp22k, setTemp22k] = useState(metalRates.gold22kPer10g);
  const [tempSilver, setTempSilver] = useState(metalRates.silver999PerKg);

  // Convert to grams
  const actualWeightGrams = weightUnit === 'tola' ? weightInput * 11.6638 : weightInput;

  // Rate per gram computation
  let ratePerGram = 0;
  if (selectedMetal === '24K Gold') {
    ratePerGram = metalRates.gold24kPer10g / 10;
  } else if (selectedMetal === '22K Gold') {
    ratePerGram = metalRates.gold22kPer10g / 10;
  } else if (selectedMetal === '18K Gold') {
    ratePerGram = metalRates.gold18kPer10g / 10;
  } else if (selectedMetal === '999 Pure Silver') {
    ratePerGram = metalRates.silver999Per10g / 10;
  } else if (selectedMetal === '925 Sterling Silver') {
    ratePerGram = metalRates.silver925Per10g / 10;
  }

  // Cost calculations
  const rawMetalCost = Math.round(actualWeightGrams * ratePerGram);
  
  let makingCost = 0;
  if (makingChargeType === 'percent') {
    makingCost = Math.round((rawMetalCost * makingChargeValue) / 100);
  } else {
    makingCost = Math.round(actualWeightGrams * makingChargeValue);
  }

  const subtotal = rawMetalCost + makingCost;
  const gstCost = includeGst ? Math.round((subtotal * 3) / 100) : 0;
  const grandTotal = subtotal + gstCost;

  const handleCopyEstimate = () => {
    const text = `*Laxmi Jewellers Sariya - Price Estimate*\n` +
      `• Metal: ${selectedMetal}\n` +
      `• Weight: ${weightInput} ${weightUnit} (${actualWeightGrams.toFixed(2)}g)\n` +
      `• Current Rate: ${formatINR(ratePerGram * 10)}/10g\n` +
      `• Pure Metal Cost: ${formatINR(rawMetalCost)}\n` +
      `• Making Charges (${makingChargeType === 'percent' ? makingChargeValue + '%' : '₹' + makingChargeValue + '/g'}): ${formatINR(makingCost)}\n` +
      `• 3% GST: ${formatINR(gstCost)}\n` +
      `• *Total Estimated Price: ${formatINR(grandTotal)}*\n` +
      `_Shri Sadhuram Sonar Ji Ki Dukan, Sariya (C.G.)_`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppEstimate = () => {
    const text = encodeURIComponent(
      `Namaste Laxmi Jewellers Sariya! I calculated an estimate on your website:\n\n` +
      `• Item: ${selectedMetal} Jewellery\n` +
      `• Approx Weight: ${weightInput} ${weightUnit} (${actualWeightGrams.toFixed(2)}g)\n` +
      `• Estimated Price: ${formatINR(grandTotal)}\n\n` +
      `Can you please confirm current availability or quote for a customized piece?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const saveCustomRates = () => {
    onUpdateRates({
      gold24kPer10g: Number(temp24k),
      gold22kPer10g: Number(temp22k),
      silver999PerKg: Number(tempSilver),
      silver999Per10g: Math.round(Number(tempSilver) / 100),
      lastUpdated: 'Custom Adjusted Rate (User Session)',
    });
    setIsEditingRates(false);
  };

  return (
    <section id="rates-calculator-section" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#8A6720] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Real-Time Mandi Benchmark</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-3 tracking-tight">
          Live Metal Rates & <span className="text-[#8A6720] font-semibold">Jewellery Estimator</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          Check today's benchmark gold and silver rates in Sariya market. Calculate transparent costs with exact net weight, standard making slabs, and official 3% GST with zero hidden deductions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Live Rates Board */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sober-card p-6 sm:p-7 relative rounded-sm">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(184,147,76,0.18)]">
              <div>
                <h3 className="font-cinzel font-bold text-lg text-[#1C1917] tracking-wider">Daily Rate Card</h3>
                <p className="text-xs text-[#8A6720] font-semibold mt-0.5">{metalRates.lastUpdated}</p>
              </div>

              <button
                id="edit-rates-toggle-btn"
                onClick={() => setIsEditingRates(!isEditingRates)}
                className="text-[10px] uppercase tracking-wider text-[#574F48] hover:text-[#8A6720] flex items-center gap-1 px-2.5 py-1 bg-[#FAF8F5] border border-[rgba(184,147,76,0.3)] transition-colors cursor-pointer rounded-sm"
                title="Adjust base rates for testing"
              >
                <Sliders className="w-3.5 h-3.5 text-[#B8934C]" />
                <span>{isEditingRates ? 'Close' : 'Adjust Rates'}</span>
              </button>
            </div>

            {/* Editing custom rates panel */}
            <AnimatePresence>
              {isEditingRates && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="my-4 p-4 bg-[#FAF6F0] border border-[#B8934C]/30 space-y-3 rounded-sm overflow-hidden"
                >
                  <div className="text-xs font-semibold text-[#8A6720] flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> Set Custom Metal Rates for Calculation
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-[#574F48] block mb-1 font-medium">24K Gold / 10g (₹)</label>
                      <input
                        type="number"
                        value={temp24k}
                        onChange={(e) => setTemp24k(Number(e.target.value))}
                        className="w-full bg-[#FFFFFF] px-2.5 py-1.5 border border-[rgba(184,147,76,0.3)] text-[#1C1917] font-mono focus:border-[#B8934C] focus:outline-none rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="text-[#574F48] block mb-1 font-medium">22K 916 / 10g (₹)</label>
                      <input
                        type="number"
                        value={temp22k}
                        onChange={(e) => setTemp22k(Number(e.target.value))}
                        className="w-full bg-[#FFFFFF] px-2.5 py-1.5 border border-[rgba(184,147,76,0.3)] text-[#1C1917] font-mono focus:border-[#B8934C] focus:outline-none rounded-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-[#574F48] block mb-1 font-medium">Silver 999 / 1kg (₹)</label>
                      <input
                        type="number"
                        value={tempSilver}
                        onChange={(e) => setTempSilver(Number(e.target.value))}
                        className="w-full bg-[#FFFFFF] px-2.5 py-1.5 border border-[rgba(184,147,76,0.3)] text-[#1C1917] font-mono focus:border-[#B8934C] focus:outline-none rounded-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={saveCustomRates}
                      className="flex-1 py-2 bg-[#B8934C] hover:bg-[#9E7728] text-[#FFFFFF] font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer rounded-sm shadow-xs"
                    >
                      Apply Custom
                    </button>
                    <button
                      onClick={() => {
                        onUpdateRates(INITIAL_METAL_RATES);
                        setTemp24k(INITIAL_METAL_RATES.gold24kPer10g);
                        setTemp22k(INITIAL_METAL_RATES.gold22kPer10g);
                        setTempSilver(INITIAL_METAL_RATES.silver999PerKg);
                        setIsEditingRates(false);
                      }}
                      className="px-3 py-2 bg-[#EFE9DF] hover:bg-[#DFC489] text-[#574F48] hover:text-[#1C1917] font-semibold text-xs transition-colors cursor-pointer rounded-sm"
                      title="Reset to today's benchmark market rates"
                    >
                      Reset Today's Benchmark
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Rates Table */}
            <div className="mt-4 space-y-2.5">
              
              {/* 24KT Gold */}
              <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:bg-[#FFFFFF] transition-colors">
                <div>
                  <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B8934C]"></span>
                    Gold 24KT (99.9% Pure)
                  </span>
                  <span className="text-[10px] text-[#78716C] pl-3.5">Standard Pure Bullion</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#8A6720] font-mono text-base">{formatINR(metalRates.gold24kPer10g)}</div>
                  <span className="text-[10px] text-[#78716C] font-mono">₹{(metalRates.gold24kPer10g / 10).toFixed(0)}/g</span>
                </div>
              </div>

              {/* 22KT Gold Hallmark */}
              <div className="p-3 bg-[#FFFDF9] border-2 border-[#B8934C] rounded-sm flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-xs font-bold text-[#8A6720] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8A6720]"></span>
                    Gold 22KT (916 BIS Hallmark)
                  </span>
                  <span className="text-[10px] text-[#574F48] pl-3.5 font-medium">Standard Jewellery Alloy</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#8A6720] font-mono text-lg">{formatINR(metalRates.gold22kPer10g)}</div>
                  <span className="text-[10px] text-[#574F48] font-mono font-medium">₹{(metalRates.gold22kPer10g / 10).toFixed(0)}/g</span>
                </div>
              </div>

              {/* 18KT Gold */}
              <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:bg-[#FFFFFF] transition-colors">
                <div>
                  <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8C8278]"></span>
                    Gold 18KT (750 Purity)
                  </span>
                  <span className="text-[10px] text-[#78716C] pl-3.5">Diamond & Polki Setting</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1C1917] font-mono text-base">{formatINR(metalRates.gold18kPer10g)}</div>
                  <span className="text-[10px] text-[#78716C] font-mono">₹{(metalRates.gold18kPer10g / 10).toFixed(0)}/g</span>
                </div>
              </div>

              {/* 14KT Gold */}
              <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:bg-[#FFFFFF] transition-colors">
                <div>
                  <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A89F91]"></span>
                    Gold 14KT (585 Purity)
                  </span>
                  <span className="text-[10px] text-[#78716C] pl-3.5">Lightweight Daily Wear</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1C1917] font-mono text-base">{formatINR(metalRates.gold14kPer10g)}</div>
                  <span className="text-[10px] text-[#78716C] font-mono">₹{(metalRates.gold14kPer10g / 10).toFixed(0)}/g</span>
                </div>
              </div>

              {/* Silver 999 */}
              <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:bg-[#FFFFFF] transition-colors">
                <div>
                  <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#78716C]"></span>
                    Silver 999 (Fine Pure)
                  </span>
                  <span className="text-[10px] text-[#78716C] pl-3.5">Per 1 KG / 10g</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1C1917] font-mono text-base">{formatINR(metalRates.silver999PerKg)}</div>
                  <span className="text-[10px] text-[#78716C] font-mono">₹{metalRates.silver999Per10g} / 10g</span>
                </div>
              </div>

              {/* Silver 925 */}
              <div className="p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.18)] rounded-sm flex items-center justify-between hover:bg-[#FFFFFF] transition-colors">
                <div>
                  <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#78716C]"></span>
                    Silver 925 (Sterling Ornaments)
                  </span>
                  <span className="text-[10px] text-[#78716C] pl-3.5">Payal, Bichhiya & Ornaments (10g)</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#1C1917] font-mono text-base">{formatINR(metalRates.silver925Per10g)}</div>
                  <span className="text-[10px] text-[#78716C] font-mono">₹{(metalRates.silver925Per10g / 10).toFixed(0)}/g</span>
                </div>
              </div>

            </div>

            {/* Hallmark Assurance note */}
            <div className="mt-5 p-3 bg-[#F0FDF4] border border-[#86EFAC] rounded-sm flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
              <div className="text-xs text-[#166534] leading-snug">
                <span className="font-bold">100% BIS 6-Digit HUID:</span> All gold jewellery at Laxmi Jewellers is hallmarked by the Bureau of Indian Standards with verifiable 6-digit laser alphanumeric code.
              </div>
            </div>

          </div>

          {/* Quick FAQ / Info about rate calculation */}
          <div className="p-5 bg-[#FFFFFF] border border-[rgba(184,147,76,0.2)] rounded-sm text-xs text-[#574F48] space-y-2 shadow-xs">
            <h4 className="font-bold text-[#1C1917] flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#B8934C]" /> How is Jewellery Price Calculated?
            </h4>
            <p className="leading-relaxed">
              <span className="text-[#8A6720] font-mono font-semibold">Final Price = (Net Weight × Today's Metal Rate) + Making Charges + 3% GST.</span>
            </p>
            <p className="leading-relaxed text-[#78716C]">
              Unlike ordinary shops, we ensure <strong className="text-[#1C1917]">Zero Net Weight deduction</strong> for stones or lac resin during buyback & purchase.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Gold Price Calculator */}
        <div className="lg:col-span-7">
          <div className="sober-card p-6 sm:p-8 rounded-sm relative">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(184,147,76,0.18)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FAF6F0] text-[#8A6720] border border-[#B8934C]/30 rounded-sm">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-[#1C1917] tracking-wider">Interactive Price Estimator</h3>
                  <p className="text-xs text-[#78716C]">Transparent billing simulation with making charges & GST</p>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 bg-[#FAF6F0] text-[#8A6720] font-mono border border-[#B8934C]/40 uppercase tracking-wider font-semibold rounded-sm">
                BIS Formula
              </span>
            </div>

            {/* Form Controls */}
            <div className="mt-6 space-y-6">
              
              {/* Metal Selection */}
              <div>
                <label className="block text-xs font-bold text-[#1C1917] uppercase tracking-[2px] mb-2">
                  1. Select Metal & Purity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(['22K Gold', '24K Gold', '18K Gold', '999 Pure Silver', '925 Sterling Silver'] as MetalType[]).map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() => setSelectedMetal(metal)}
                      className={`p-2.5 text-xs font-semibold text-center transition-all cursor-pointer border rounded-sm ${
                        selectedMetal === metal
                          ? 'bg-[#FAF6F0] border-[#B8934C] text-[#8A6720] shadow-xs'
                          : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.2)] text-[#574F48] hover:border-[#B8934C]'
                      }`}
                    >
                      <div>{metal}</div>
                      <div className="text-[9px] text-[#78716C] font-mono mt-0.5 font-normal">
                        {metal === '22K Gold' && '916 BIS Hallmark'}
                        {metal === '24K Gold' && '999 Pure Bullion'}
                        {metal === '18K Gold' && '750 Diamond/Polki'}
                        {metal === '999 Pure Silver' && '99.9% Pooja Silver'}
                        {metal === '925 Sterling Silver' && '92.5% Payal/Ornaments'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Input & Unit Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#1C1917] uppercase tracking-[2px]">
                      2. Weight ({weightUnit})
                    </label>
                    <div className="flex items-center bg-[#FAF8F5] p-0.5 border border-[rgba(184,147,76,0.25)] rounded-sm text-xs">
                      <button
                        type="button"
                        onClick={() => setWeightUnit('grams')}
                        className={`px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-xs ${
                          weightUnit === 'grams' ? 'bg-[#B8934C] text-[#FFFFFF]' : 'text-[#574F48]'
                        }`}
                      >
                        Grams
                      </button>
                      <button
                        type="button"
                        onClick={() => setWeightUnit('tola')}
                        className={`px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-xs ${
                          weightUnit === 'tola' ? 'bg-[#B8934C] text-[#FFFFFF]' : 'text-[#574F48]'
                        }`}
                      >
                        Tola (11.66g)
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      id="calc-weight-input"
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={weightInput}
                      onChange={(e) => setWeightInput(Math.max(0.1, Number(e.target.value)))}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] focus:outline-none px-4 py-2.5 text-[#1C1917] font-mono text-base rounded-sm"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-[#78716C] font-mono">
                      {weightUnit === 'tola' ? `~${actualWeightGrams.toFixed(2)}g` : 'Grams'}
                    </span>
                  </div>
                </div>

                {/* Making Charges Slider & Presets */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-[#1C1917] uppercase tracking-[2px]">
                      3. Making Charges
                    </label>
                    <span className="text-xs font-mono text-[#8A6720] font-bold">
                      {makingChargeValue}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <input
                      id="calc-making-slider"
                      type="range"
                      min="6"
                      max="20"
                      step="1"
                      value={makingChargeValue}
                      onChange={(e) => setMakingChargeValue(Number(e.target.value))}
                      className="w-full accent-[#B8934C] cursor-pointer"
                    />
                    <div className="flex items-center justify-between gap-1 text-[9px] text-[#574F48]">
                      <button
                        type="button"
                        onClick={() => setMakingChargeValue(8)}
                        className={`px-2 py-0.5 border rounded-xs cursor-pointer ${makingChargeValue === 8 ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] font-bold' : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.2)] text-[#574F48]'}`}
                      >
                        8% (Chains)
                      </button>
                      <button
                        type="button"
                        onClick={() => setMakingChargeValue(10)}
                        className={`px-2 py-0.5 border rounded-xs cursor-pointer ${makingChargeValue === 10 ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] font-bold' : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.2)] text-[#574F48]'}`}
                      >
                        10% (Kangan)
                      </button>
                      <button
                        type="button"
                        onClick={() => setMakingChargeValue(12)}
                        className={`px-2 py-0.5 border rounded-xs cursor-pointer ${makingChargeValue === 12 ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] font-bold' : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.2)] text-[#574F48]'}`}
                      >
                        12% (Bridal)
                      </button>
                      <button
                        type="button"
                        onClick={() => setMakingChargeValue(15)}
                        className={`px-2 py-0.5 border rounded-xs cursor-pointer ${makingChargeValue === 15 ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] font-bold' : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.2)] text-[#574F48]'}`}
                      >
                        15% (Kundan)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST 3% Toggle */}
              <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-[#8A6720]" />
                  <div>
                    <span className="text-xs font-bold text-[#1C1917]">Include 3% Standard GST</span>
                    <p className="text-[10px] text-[#78716C]">Official BIS Tax Invoicing with HUID Hallmarking</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeGst}
                    onChange={(e) => setIncludeGst(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#E5E0D8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B8934C]"></div>
                </label>
              </div>

              {/* Itemized Bill Breakdown Card */}
              <div className="p-5 bg-[#FAF8F5] border border-[#B8934C]/30 rounded-sm space-y-3">
                <div className="flex items-center justify-between text-xs text-[#574F48] pb-2 border-b border-[rgba(184,147,76,0.18)]">
                  <span className="uppercase tracking-wider font-bold text-[#8A6720] font-cinzel">Itemized Bill Estimate</span>
                  <span className="font-mono text-[#78716C]">Rate: ₹{(ratePerGram * 10).toFixed(0)}/10g</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#574F48]">
                    <span>Base Metal Value ({actualWeightGrams.toFixed(2)}g @ ₹{ratePerGram.toFixed(1)}/g):</span>
                    <span className="font-mono font-semibold text-[#1C1917]">{formatINR(rawMetalCost)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#574F48]">
                    <span>Making Charges ({makingChargeValue}%):</span>
                    <span className="font-mono font-semibold text-[#1C1917]">{formatINR(makingCost)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#574F48]">
                    <span>Subtotal:</span>
                    <span className="font-mono font-semibold text-[#574F48]">{formatINR(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#574F48]">
                    <span>3% GST (CGST 1.5% + SGST 1.5%):</span>
                    <span className="font-mono font-semibold text-[#8A6720]">{formatINR(gstCost)}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="pt-3 border-t border-[rgba(184,147,76,0.18)] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[2px] font-bold text-[#8A6720] font-cinzel">Total Estimated Cost</span>
                    <p className="text-[10px] text-[#78716C]">100% 6-Digit HUID Hallmarked</p>
                  </div>
                  <div className="text-right">
                    <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8A6720] font-mono">
                      {formatINR(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  id="calc-whatsapp-btn"
                  onClick={handleWhatsAppEstimate}
                  className="py-3 px-4 bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-sm shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  id="calc-copy-btn"
                  onClick={handleCopyEstimate}
                  className="py-3 px-4 bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#574F48] hover:text-[#8A6720] border border-[rgba(184,147,76,0.3)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-sm shadow-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-[#15803D]" /> : <Copy className="w-4 h-4 text-[#B8934C]" />}
                  <span>{copied ? 'Estimate Copied!' : 'Copy Bill Breakdown'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
