import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  PenTool,
  CheckCircle2,
  Calendar,
  DollarSign,
  Upload,
  MessageCircle,
  ShieldCheck,
  Send,
  Gem,
  Award
} from 'lucide-react';
import { MetalType, CustomDesignRequest } from '../types';
import { STORE_INFO } from '../data/jewelryData';

export const BespokeStudio: React.FC = () => {
  const [formData, setFormData] = useState<CustomDesignRequest>({
    fullName: '',
    phoneNumber: '',
    metalType: '22K Gold',
    jewelryCategory: 'Bridal Set / Choker',
    approxWeightGrams: 30,
    budgetRange: '₹1,50,000 – ₹3,00,000',
    targetDate: '',
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) return;

    const message = encodeURIComponent(
      `*Namaste Laxmi Jewellers Sariya - Custom Jewellery Order Request*\n\n` +
      `• *Client Name*: ${formData.fullName}\n` +
      `• *Contact Phone*: ${formData.phoneNumber}\n` +
      `• *Jewellery Type*: ${formData.jewelryCategory}\n` +
      `• *Metal Purity*: ${formData.metalType}\n` +
      `• *Approx Target Weight*: ~${formData.approxWeightGrams} Grams\n` +
      `• *Budget Range*: ${formData.budgetRange}\n` +
      `• *Occasion / Delivery Date*: ${formData.targetDate || 'Flexible'}\n` +
      `• *Customization Details*: ${formData.specialInstructions || 'N/A'}\n\n` +
      `_Submitted via Website Bespoke Design Studio (Shri Sadhuram Sonar Ji Ki Dukan)_`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="bespoke-section" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#8A6720] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Bespoke Artisan Studio</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-3 tracking-tight">
          Bring Your Dream <span className="text-[#8A6720] font-semibold">Design to Life</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          Whether you want to recreate a cherished family heirloom, craft a one-of-a-kind royal bridal set, or design a custom diamond ring, our master goldsmiths in Sariya handcraft your vision with 100% 6-Digit HUID Hallmarking.
        </p>
      </div>

      {/* 4-Step Process Guide */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
        {[
          {
            step: '01',
            title: 'Design Consultation',
            desc: 'Share your photo reference, sketch, or discuss motifs with our master jeweler.',
          },
          {
            step: '02',
            title: 'CAD & Weight Lock',
            desc: 'We finalize precise gold net weight, making charges, and 3D design render.',
          },
          {
            step: '03',
            title: 'Artisan Handcrafting',
            desc: 'Handcrafted in our workshop with pure 916 gold or fine silver alloy.',
          },
          {
            step: '04',
            title: 'BIS Laser Hallmarking',
            desc: 'Certified with official 6-digit HUID code and delivered in luxury velvet box.',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="sober-card p-6 rounded-sm relative"
          >
            <span className="font-cinzel text-2xl font-bold text-[#8A6720] block mb-2 font-mono">
              {item.step}
            </span>
            <h4 className="font-cinzel font-bold text-base text-[#1C1917] mb-1.5">{item.title}</h4>
            <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Custom Order Request Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Form */}
        <div className="lg:col-span-7">
          <div className="sober-card p-6 sm:p-8 rounded-sm relative shadow-md">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            
            <div className="pb-4 mb-6 border-b border-[rgba(184,147,76,0.18)]">
              <h3 className="font-cinzel text-xl font-bold text-[#1C1917] tracking-wider">Custom Order Request Form</h3>
              <p className="text-xs text-[#78716C]">Fill in your specifications for an immediate estimate and craft timeline.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-[#F0FDF4] border border-[#86EFAC] rounded-sm space-y-4">
                <div className="w-14 h-14 bg-[#FFFFFF] text-[#15803D] border border-[#86EFAC] rounded-full mx-auto flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-[#166534]">Inquiry Forwarded via WhatsApp!</h4>
                <p className="text-xs text-[#166534] max-w-md mx-auto leading-relaxed font-sans">
                  Our master artisan at Laxmi Jewellers Sariya has received your custom inquiry. We will contact you shortly with sketches, net weight estimations, and making charge slabs.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-sober-outline rounded-sm text-xs py-2 px-5 bg-[#FFFFFF]"
                >
                  Submit Another Design
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98271 XXXXX"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none font-mono rounded-sm"
                    />
                  </div>
                </div>

                {/* Metal & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Preferred Metal & Purity
                    </label>
                    <select
                      value={formData.metalType}
                      onChange={(e) => setFormData({ ...formData, metalType: e.target.value as MetalType })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none cursor-pointer rounded-sm"
                    >
                      <option value="22K Gold">22KT Gold (916 BIS Hallmark)</option>
                      <option value="24K Gold">24KT Gold (99.9% Pure Gold)</option>
                      <option value="18K Gold">18KT Gold (Diamond/Polki Setting)</option>
                      <option value="999 Pure Silver">999 Fine Silver (Pooja / Idols)</option>
                      <option value="925 Sterling Silver">925 Sterling Silver (Payal/Ornaments)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Jewellery Category
                    </label>
                    <select
                      value={formData.jewelryCategory}
                      onChange={(e) => setFormData({ ...formData, jewelryCategory: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none cursor-pointer rounded-sm"
                    >
                      <option value="Bridal Set / Choker">Bridal Set / Grand Choker</option>
                      <option value="Antique Haar / Rani Haar">Antique Haar / Rani Haar</option>
                      <option value="Bangles / Pacheli Kada">Bangles / Pacheli Kada (Pair)</option>
                      <option value="Engagement / Solitaire Ring">Engagement / Solitaire Ring</option>
                      <option value="Jhumkas / Chandbali">Jhumkas / Chandbali Earrings</option>
                      <option value="Mangalsutra / Pendant">Custom Mangalsutra / Pendant</option>
                      <option value="Men's Gold Chain / Kada">Men's Gold Chain / Sher Kada</option>
                      <option value="Silver Pooja Article / Idol">Silver Pooja Article / Idol</option>
                    </select>
                  </div>
                </div>

                {/* Approx Weight & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Approximate Target Weight (Grams)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 25"
                      value={formData.approxWeightGrams}
                      onChange={(e) => setFormData({ ...formData, approxWeightGrams: Number(e.target.value) })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none font-mono rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none cursor-pointer rounded-sm"
                    >
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                      <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000</option>
                      <option value="₹3,00,000 – ₹6,00,000">₹3,00,000 – ₹6,00,000</option>
                      <option value="₹6,00,000+ (Grand Bridal Ensemble)">₹6,00,000+ (Grand Bridal Ensemble)</option>
                    </select>
                  </div>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                    Target Delivery / Wedding Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none rounded-sm"
                  />
                </div>

                {/* Special Instructions / Notes */}
                <div>
                  <label className="block font-bold text-[#1C1917] mb-1.5 uppercase tracking-wider text-[11px]">
                    Custom Motifs, Sizing, Gemstone Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific peacock, temple carvings, polki uncut stones, size requirements, or old gold exchange details..."
                    value={formData.specialInstructions}
                    onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] focus:border-[#B8934C] px-3.5 py-2.5 text-[#1C1917] focus:outline-none font-sans rounded-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 btn-sober-gold rounded-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Custom Order to Master Goldsmith on WhatsApp</span>
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Right Side: Guarantees & Showroom Consultation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="sober-card p-6 rounded-sm space-y-4">
            <h4 className="font-cinzel text-lg font-bold text-[#1C1917] flex items-center gap-2">
              <Gem className="w-5 h-5 text-[#8A6720]" /> Why Order Custom at Laxmi Jewellers?
            </h4>
            
            <ul className="space-y-3 text-xs text-[#574F48] font-normal font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C1917]">Zero Wax / Lac Deductions:</strong> Transparent net gold billing with no hidden fillers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C1917]">Old Gold Exchange Benefit:</strong> Bring your old family jewelry for 100% accurate karatmeter testing and top exchange value.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C1917]">Direct Artisan Access:</strong> Speak directly with Shri Sadhuram Sonar Ji’s seasoned master karigars in Sariya.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span><strong className="text-[#1C1917]">Fixed Timeline Guarantee:</strong> On-time delivery guaranteed ahead of wedding mahurats and festive occasions.</span>
              </li>
            </ul>
          </div>

          {/* Quick Call Box */}
          <div className="sober-card p-6 rounded-sm text-center space-y-3 relative">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
            <h5 className="font-cinzel font-bold text-[#1C1917] text-sm tracking-wide">Need Direct Phone Assistance?</h5>
            <p className="text-xs text-[#574F48] font-sans">
              Call our Sariya showroom directly to schedule an in-person design consultation.
            </p>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="btn-sober-gold inline-flex rounded-sm py-2 px-5"
            >
              📞 Call: {STORE_INFO.phone}
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
