import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Scale,
  RefreshCw,
  Sparkles,
  History,
  CheckCircle2,
  Users,
  MapPin,
  Quote,
  Star,
  Check
} from 'lucide-react';
import { HERITAGE_TIMELINE, TRUST_PILLARS, REVIEWS, STORE_INFO } from '../data/jewelryData';

export const Heritage: React.FC = () => {
  return (
    <section id="heritage-section" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#8A6720] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Established 1968 in Sariya (C.G.)</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-3 tracking-tight">
          The Legacy of <span className="text-[#8A6720] font-semibold">Shri Sadhuram Sonar Ji</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          A timeless journey of golden trust, generational craftsmanship, and unyielding commitment to 100% hallmarked purity in the heart of Sariya, Chhattisgarh.
        </p>
      </div>

      {/* Story Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        
        {/* Left: Vintage & Artisan Image Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative overflow-hidden border border-[#B8934C]/40 shadow-xl bg-[#FAF8F5] rounded-sm aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200"
              alt="Traditional Goldsmith Craftsmanship"
              className="w-full h-full object-cover filter brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#B8934C]/30 shadow-lg rounded-sm">
              <span className="text-[9px] text-[#8A6720] uppercase tracking-[3px] font-bold block mb-1">
                The Sacred Foundation
              </span>
              <h4 className="font-cinzel text-base font-bold text-[#1C1917] mb-1">
                Shri Sadhuram Sonar Ji
              </h4>
              <p className="text-xs text-[#574F48] font-normal leading-relaxed font-sans">
                "Purity in gold is not merely a business standard; it is a sacred trust between the goldsmith and the family celebrating life's most precious milestones."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Story Narratives & Pillars */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Over Five Decades of <span className="text-[#8A6720]">Pure Gold Excellence</span>
            </h3>
            <p className="text-[#574F48] text-sm leading-relaxed font-normal font-sans">
              In 1968, in the bustling lanes of Sariya's Sarafa Market, <strong className="text-[#8A6720]">Shri Sadhuram Sonar Ji</strong> set up a humble goldsmith workshop with a singular founding philosophy: <span className="italic text-[#1C1917] font-medium">"Never weigh a grain less, never mix a carat lower."</span>
            </p>
            <p className="text-[#574F48] text-sm leading-relaxed font-normal font-sans">
              Over the decades, as Sariya grew, <strong className="text-[#1C1917]">Laxmi Jewellers (Shri Sadhuram Sonar Ji Ki Dukan)</strong> became synonymous with wedding jewelry and auspicious ceremonies across Chhattisgarh and neighboring Odisha regions. Today, guided by the third generation of master jewelers, we combine heritage hand-carving techniques with laser-precision 6-Digit HUID hallmarking and live rate transparency.
            </p>
          </div>

          {/* 4 Pillars of Trust */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="sober-card p-4 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-[#FAF6F0] text-[#8A6720] border border-[#B8934C]/30 rounded-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#1C1917]">{pillar.title}</h5>
                    <span className="text-[10px] text-[#8A6720] font-semibold">{pillar.subtitle}</span>
                  </div>
                </div>
                <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>

      {/* Historic Timeline */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2 tracking-wide">
            The Golden Timeline
          </h3>
          <p className="text-xs text-[#78716C]">Milestones in our 55+ year journey of trust in Sariya</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {HERITAGE_TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="sober-card p-6 rounded-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-cinzel text-3xl font-bold text-[#8A6720] block mb-2 font-mono">
                  {item.year}
                </span>
                <h4 className="font-cinzel text-sm font-bold text-[#1C1917] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
                  {item.description}
                </p>
              </div>
              <div className="w-full h-[2px] bg-[#FAF6F0] overflow-hidden rounded-full">
                <div className="w-1/2 h-full bg-[#B8934C]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hallmark Verification Educational Guide */}
      <div className="sober-card p-8 rounded-sm shadow-md mb-16 relative">
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
        
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-[10px] font-bold text-[#8A6720] uppercase tracking-[3px] block mb-1">
            Consumer Purity Awareness
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2">
            How to Verify BIS Hallmarked Jewellery
          </h3>
          <p className="text-xs sm:text-sm text-[#574F48] font-normal font-sans">
            Every piece at Laxmi Jewellers Sariya comes with the mandatory 3-part BIS Hallmark laser inscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* Symbol 1 */}
          <div className="p-5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm space-y-2">
            <div className="w-12 h-12 bg-[#FFFFFF] border border-[#B8934C]/40 text-[#8A6720] font-bold font-mono text-xl mx-auto flex items-center justify-center rounded-sm shadow-xs">
              ▲
            </div>
            <h4 className="font-bold text-sm text-[#1C1917]">1. BIS Triangle Logo</h4>
            <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
              Official stamp of the Bureau of Indian Standards certifying authentic testing at licensed AHC centers.
            </p>
          </div>

          {/* Symbol 2 */}
          <div className="p-5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm space-y-2">
            <div className="w-12 h-12 bg-[#FFFFFF] border border-[#B8934C]/40 text-[#8A6720] font-bold font-mono text-base mx-auto flex items-center justify-center rounded-sm shadow-xs">
              22K916
            </div>
            <h4 className="font-bold text-sm text-[#1C1917]">2. Purity & Carat Mark</h4>
            <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
              Clear indication of gold purity: 22K916 (91.6% Pure), 18K750 (75.0% Pure), or 14K585.
            </p>
          </div>

          {/* Symbol 3 */}
          <div className="p-5 bg-[#FAF8F5] border border-[rgba(184,147,76,0.2)] rounded-sm space-y-2">
            <div className="w-12 h-12 bg-[#FFFFFF] border border-[#B8934C]/40 text-[#8A6720] font-bold font-mono text-xs mx-auto flex items-center justify-center rounded-sm shadow-xs">
              6-HUID
            </div>
            <h4 className="font-bold text-sm text-[#1C1917]">3. 6-Digit Alphanumeric HUID</h4>
            <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
              Unique laser-etched tracking code verifiable on the central BIS Care mobile application.
            </p>
          </div>

        </div>
      </div>

      {/* Customer Trust Testimonials */}
      <div>
        <div className="text-center mb-10">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2 tracking-wide">
            Trusted by Families Across Generations
          </h3>
          <p className="text-xs sm:text-sm text-[#78716C] font-normal font-sans">
            Real stories from our patrons in Sariya, Sarangarh, Raigarh, and surrounding districts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="sober-card p-6 rounded-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B8934C]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B8934C]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#574F48] leading-relaxed italic font-normal font-sans">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(184,147,76,0.18)]">
                <h5 className="font-bold text-sm text-[#1C1917]">{rev.name}</h5>
                <span className="text-xs text-[#8A6720] font-semibold block">{rev.location}</span>
                <span className="text-[10px] text-[#78716C] mt-1 block font-mono">
                  Purchased: {rev.item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
