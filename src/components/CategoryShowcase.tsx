import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Gem,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BodyPlacement, MetalCategory, Product, MetalRates } from '../types';
import { JEWELRY_PRODUCTS, calculateItemPrice, formatINR } from '../data/jewelryData';

interface CategoryShowcaseProps {
  metalRates: MetalRates;
  onSelectCategory: (metalCat: MetalCategory, placement: BodyPlacement, ornamentType?: string) => void;
  onSelectProduct: (product: Product) => void;
}

interface ShowcaseCategoryItem {
  placement: BodyPlacement;
  metalCat: MetalCategory;
  ornamentType: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  bodyRegion: string;
  badge: string;
  sampleProductId: string;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  metalRates,
  onSelectCategory,
  onSelectProduct,
}) => {
  // Showcase at least 1 item from each main category:
  // Maang Tikka (Head), Jhumka (Ear), Rani Haar (Neck), Kangan (Hands),
  // Bracelet / Pahunchi (Wrists), Payal (Feet), Kamarband (Waist), Nath (Nose)
  const showcaseCategories: ShowcaseCategoryItem[] = [
    {
      placement: 'head',
      metalCat: 'gold',
      ornamentType: 'Maang Tikka',
      title: 'Maang Tikka & Sheesh Patti',
      hindiTitle: 'मांग टीका व शीश पट्टी',
      subtitle: 'Borla, Passa & Bridal Matha Patti',
      bodyRegion: 'Head / शीश व मांग',
      badge: 'Royal Headwear',
      sampleProductId: 'LJ-GD-HD-01',
    },
    {
      placement: 'ear-nose',
      metalCat: 'gold',
      ornamentType: 'Jhumka',
      title: 'Grand Jhumkas & Chandbali',
      hindiTitle: 'भव्य झुमका, बाली व कर्णफूल',
      subtitle: '3-Tier Filigree & Kundan Tops',
      bodyRegion: 'Ears / कान',
      badge: 'Heritage Earrings',
      sampleProductId: 'LJ-GD-EN-05',
    },
    {
      placement: 'neck',
      metalCat: 'gold',
      ornamentType: 'Rani Haar',
      title: 'Rani Haar, Choker & Hansuli',
      hindiTitle: 'रानी हार, चोकर व मंगलसूत्र',
      subtitle: 'Navratna, Matarmala & Auspicious Sets',
      bodyRegion: 'Neck / गले के हार',
      badge: 'Bridal Grandeur',
      sampleProductId: 'LJ-GD-NK-10',
    },
    {
      placement: 'hands',
      metalCat: 'gold',
      ornamentType: 'Kangan',
      title: 'Solid Gold Kangan (Pair)',
      hindiTitle: 'रजवाड़ा नक्काशीदार कंगन',
      subtitle: 'Pacheli Kada & Handcrafted Bangles',
      bodyRegion: 'Hands / हाथ',
      badge: 'Solid 22KT Gold',
      sampleProductId: 'LJ-GD-HN-16',
    },
    {
      placement: 'hands',
      metalCat: 'gold',
      ornamentType: 'Bracelet (Pahunchi)',
      title: 'Gold Bracelet (Pahunchi)',
      hindiTitle: 'शाही पहुंची व ब्रेसलेट',
      subtitle: 'Hathphool, Bajuband & Flexible Links',
      bodyRegion: 'Wrists / कलाई व बाजू',
      badge: 'Artisanal Pahunchi',
      sampleProductId: 'LJ-GD-HN-17',
    },
    {
      placement: 'feet',
      metalCat: 'silver',
      ornamentType: 'Payal',
      title: '925 Silver Bridal Payal',
      hindiTitle: 'शाही चांदी पायल व घुंघरू',
      subtitle: 'Ghunghroo, Panjel, Bichhiya & Chutki',
      bodyRegion: 'Feet / पैरों के आभूषण',
      badge: 'Pure 925 Silver',
      sampleProductId: 'LJ-SL-FT-20',
    },
    {
      placement: 'waist',
      metalCat: 'gold',
      ornamentType: 'Kamarband',
      title: 'Royal Kamarband & Kardhani',
      hindiTitle: 'शाही कमरबंद व चांदी करधनी',
      subtitle: 'Traditional Tagdi & Ghungroo Belts',
      bodyRegion: 'Waist / कमर',
      badge: 'Waist Adornment',
      sampleProductId: 'LJ-GD-WS-19',
    },
    {
      placement: 'ear-nose',
      metalCat: 'gold',
      ornamentType: 'Nath',
      title: 'Bridal Nath & Gold Laung',
      hindiTitle: 'ब्राइडल नथनी व स्वर्ण लौंग',
      subtitle: 'Kundan Nath with Pearl Chain & Studs',
      bodyRegion: 'Nose / नाक',
      badge: 'Auspicious Adornment',
      sampleProductId: 'LJ-GD-EN-08',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FAF8F5] border-t border-[rgba(184,147,76,0.18)]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#800020] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Complete Traditional Shringar</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-3 tracking-tight">
          Shop by <span className="text-[#800020] font-semibold">Category</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          Explore head-to-toe traditional Indian gold & silver jewellery handcrafted for weddings, auspicious pujas, and generational heirlooms.
        </p>
      </div>

      {/* Grid of Showcase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {showcaseCategories.map((item, index) => {
          const product = JEWELRY_PRODUCTS.find((p) => p.id === item.sampleProductId);
          const priceInfo = product ? calculateItemPrice(product, metalRates) : null;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => onSelectCategory(item.metalCat, item.placement, item.ornamentType)}
              className="group bg-[#FFFFFF] border border-[rgba(184,147,76,0.25)] hover:border-[#800020] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#B8934C] via-[#800020] to-[#B8934C] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF6F0]">
                {product && (
                  <img
                    src={product.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-100"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Body Region Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#FFFFFF]/95 text-[#800020] border border-[#800020]/30 text-[9px] font-bold uppercase tracking-[2px] rounded-xs shadow-xs">
                    {item.bodyRegion}
                  </span>
                </div>

                {/* Metal Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 bg-[#800020] text-[#FFFFFF] text-[9px] font-mono tracking-wider font-semibold rounded-xs shadow-xs">
                    {item.metalCat === 'gold' ? '22K Gold' : '925 Silver'}
                  </span>
                </div>

                {/* Sample product quick price tag */}
                {priceInfo && (
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-[#FFFFFF]">
                    <span className="text-[10px] text-[#DFC489] font-mono font-medium drop-shadow-xs truncate max-w-[140px]">
                      {item.ornamentType}
                    </span>
                    <span className="text-[11px] font-bold font-mono bg-[#1C1917]/80 px-2 py-0.5 rounded-xs text-[#FFFFFF]">
                      From {formatINR(priceInfo.totalEstimatedPrice)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-cinzel text-base font-bold text-[#1C1917] group-hover:text-[#800020] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8A6720] font-semibold">
                    {item.hindiTitle}
                  </p>
                  <p className="text-[11px] text-[#574F48] leading-relaxed font-sans line-clamp-2 pt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 mt-3 border-t border-[rgba(184,147,76,0.18)] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-[#800020] group-hover:text-[#B8934C] transition-colors uppercase tracking-[2px] flex items-center gap-1">
                    Explore Collection
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF6F0] group-hover:bg-[#800020] group-hover:text-[#FFFFFF] text-[#800020] flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Category Quick Bar (Gold vs Silver) */}
      <div className="mt-12 p-6 bg-[#FFFFFF] border border-[rgba(184,147,76,0.25)] rounded-sm shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-left">
          <div className="w-12 h-12 rounded-sm bg-[#FAF6F0] border border-[#B8934C] flex items-center justify-center text-[#800020] shrink-0">
            <Gem className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-cinzel text-base font-bold text-[#1C1917]">
              Looking for full Bridal Trousseau or Silver Pooja Articles?
            </h4>
            <p className="text-xs text-[#574F48] font-sans mt-0.5">
              Browse 100% 6-Digit HUID Hallmarked Gold and certified 925 / 999 Fine Silver directly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onSelectCategory('gold', 'all')}
            className="px-5 py-2.5 bg-[#800020] hover:bg-[#6B1D2F] text-[#FFFFFF] text-xs font-bold uppercase tracking-[2px] rounded-sm transition-colors cursor-pointer shadow-xs"
          >
            Sone Ke Gehne (Gold)
          </button>
          <button
            onClick={() => onSelectCategory('silver', 'all')}
            className="px-5 py-2.5 bg-[#FAF6F0] hover:bg-[#F3EBE1] text-[#1C1917] border border-[rgba(184,147,76,0.4)] text-xs font-bold uppercase tracking-[2px] rounded-sm transition-colors cursor-pointer"
          >
            Chandi Ke Gehne (Silver)
          </button>
        </div>
      </div>

    </section>
  );
};
