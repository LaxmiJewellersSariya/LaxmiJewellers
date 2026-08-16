import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Search,
  Filter,
  Eye,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Check,
  Tag,
  ArrowUpDown,
  X,
  Layers,
  Gem,
  SlidersHorizontal
} from 'lucide-react';
import { Product, CategoryType, MetalRates, InquiryItem, MetalCategory, BodyPlacement } from '../types';
import { JEWELRY_PRODUCTS, calculateItemPrice, formatINR, STORE_INFO } from '../data/jewelryData';

interface CollectionsProps {
  metalRates: MetalRates;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToInquiry: (product: Product) => void;
  inquiryItems: InquiryItem[];
  initialMetalCategory?: MetalCategory;
  initialPlacement?: BodyPlacement;
  initialOrnamentType?: string;
}

export const Collections: React.FC<CollectionsProps> = ({
  metalRates,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onAddToInquiry,
  inquiryItems,
  initialMetalCategory = 'all',
  initialPlacement = 'all',
  initialOrnamentType = '',
}) => {
  // Main Top-Level Metal Filter: Sone Ke Gehne (Gold) vs Chandi Ke Gehne (Silver) vs All
  const [metalCategory, setMetalCategory] = useState<MetalCategory>(initialMetalCategory);
  
  // Body Placement Sub-Category Filter: Head, Ear & Nose, Neck, Hands & Wrists, Waist, Feet, Silver Specials
  const [selectedPlacement, setSelectedPlacement] = useState<BodyPlacement>(initialPlacement);
  
  // Specific Ornament Filter (e.g. Kangan, Bracelet (Pahunchi), Payal, Rani Haar)
  const [selectedOrnament, setSelectedOrnament] = useState<string>(initialOrnamentType);
  
  const [selectedOccasionFilter, setSelectedOccasionFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'priceLow' | 'priceHigh' | 'weightLow' | 'weightHigh'>('featured');
  const [addedNoticeId, setAddedNoticeId] = useState<string | null>(null);

  // Sync state if initial props change
  useEffect(() => {
    if (initialMetalCategory) setMetalCategory(initialMetalCategory);
    if (initialPlacement) setSelectedPlacement(initialPlacement);
    if (initialOrnamentType) setSelectedOrnament(initialOrnamentType);
  }, [initialMetalCategory, initialPlacement, initialOrnamentType]);

  // Main Section Tabs
  const metalTabs: { id: MetalCategory; label: string; hindiLabel: string; count: number }[] = [
    {
      id: 'all',
      label: 'All Ornaments',
      hindiLabel: 'सम्पूर्ण आभूषण',
      count: JEWELRY_PRODUCTS.length,
    },
    {
      id: 'gold',
      label: 'Sone Ke Gehne (Gold)',
      hindiLabel: 'सोने के गहने (22KT/18KT)',
      count: JEWELRY_PRODUCTS.filter((p) => p.metalCategory === 'gold').length,
    },
    {
      id: 'silver',
      label: 'Chandi Ke Gehne (Silver)',
      hindiLabel: 'चांदी के गहने (925/999)',
      count: JEWELRY_PRODUCTS.filter((p) => p.metalCategory === 'silver').length,
    },
  ];

  // Sub-Category Placement Pills
  const placementPills: { id: BodyPlacement; label: string; hindiLabel: string }[] = [
    { id: 'all', label: 'All Body Categories', hindiLabel: 'सभी अंग' },
    { id: 'head', label: 'Head (शीश व मांग)', hindiLabel: 'मांग टीका, बोरला, शीश पट्टी, पासा' },
    { id: 'ear-nose', label: 'Ear & Nose (कान व नाक)', hindiLabel: 'झुमका, बाली, कर्णफूल, नथ, लौंग' },
    { id: 'neck', label: 'Neck (गला)', hindiLabel: 'रानी हार, चोकर, मंगलसूत्र, मटरमाला, हँसुली' },
    { id: 'hands', label: 'Hands & Wrists (हाथ व बाजू)', hindiLabel: 'कंगन, पहुंची ब्रेसलेट, हथफूल, बाजूबंद, कड़ा' },
    { id: 'waist', label: 'Waist (कमर)', hindiLabel: 'कमरबंद, करधनी, तगड़ी' },
    { id: 'feet', label: 'Feet (पैर)', hindiLabel: 'पायल, घुंघरू, पंजेल, बिछिया, चुटकी' },
    { id: 'silver-special', label: 'Silver Specials (चांदी विशेष)', hindiLabel: 'चांदी हँसुली, चांदी छल्ले' },
  ];

  // Filtered list of unique ornament types available based on current filters
  const availableOrnaments = useMemo(() => {
    const subset = JEWELRY_PRODUCTS.filter((p) => {
      if (metalCategory !== 'all' && p.metalCategory !== metalCategory) return false;
      if (selectedPlacement !== 'all' && p.bodyPlacement !== selectedPlacement) return false;
      return true;
    });
    const types = Array.from(new Set(subset.map((p) => p.ornamentType)));
    return types;
  }, [metalCategory, selectedPlacement]);

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToInquiry(product);
    setAddedNoticeId(product.id);
    setTimeout(() => setAddedNoticeId(null), 2000);
  };

  const handleWhatsAppInquire = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const { totalEstimatedPrice } = calculateItemPrice(product, metalRates);
    const text = encodeURIComponent(
      `Namaste Laxmi Jewellers Sariya!\n\n` +
      `I am inquiring about this item from your website:\n` +
      `• *${product.name}* (${product.hindiName || ''})\n` +
      `• Category: ${product.ornamentType} (${product.hindiCategory})\n` +
      `• Item Code: ${product.code}\n` +
      `• Metal: ${product.metal} (${product.purity})\n` +
      `• Net Weight: ${product.netGoldWeight > 0 ? product.netGoldWeight + 'g' : product.grossWeight + 'g'}\n` +
      `• Est. Price: ${formatINR(totalEstimatedPrice)}\n\n` +
      `Is this in stock or can it be crafted for my order?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return JEWELRY_PRODUCTS.filter((product) => {
      // Metal Category (Gold vs Silver)
      if (metalCategory !== 'all' && product.metalCategory !== metalCategory) {
        return false;
      }
      // Body Placement Sub-Category (Head, Ear/Nose, Neck, Hands, Waist, Feet, etc.)
      if (selectedPlacement !== 'all' && product.bodyPlacement !== selectedPlacement) {
        return false;
      }
      // Specific Ornament filter (e.g. Kangan, Pahunchi, Payal)
      if (selectedOrnament && product.ornamentType !== selectedOrnament) {
        return false;
      }
      // Occasion filter
      if (selectedOccasionFilter !== 'All' && product.occasion !== selectedOccasionFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesHindi = product.hindiName?.toLowerCase().includes(q) || false;
        const matchesCode = product.code.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        const matchesOrnament = product.ornamentType.toLowerCase().includes(q);
        const matchesHindiCat = product.hindiCategory.toLowerCase().includes(q);
        return matchesName || matchesHindi || matchesCode || matchesDesc || matchesTags || matchesOrnament || matchesHindiCat;
      }
      return true;
    }).sort((a, b) => {
      const priceA = calculateItemPrice(a, metalRates).totalEstimatedPrice;
      const priceB = calculateItemPrice(b, metalRates).totalEstimatedPrice;

      if (sortBy === 'priceLow') return priceA - priceB;
      if (sortBy === 'priceHigh') return priceB - priceA;
      if (sortBy === 'weightLow') return a.grossWeight - b.grossWeight;
      if (sortBy === 'weightHigh') return b.grossWeight - a.grossWeight;
      // Default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [metalCategory, selectedPlacement, selectedOrnament, selectedOccasionFilter, searchQuery, sortBy, metalRates]);

  const isInInquiry = (productId: string) => {
    return inquiryItems.some((item) => item.product.id === productId);
  };

  const handleResetFilters = () => {
    setMetalCategory('all');
    setSelectedPlacement('all');
    setSelectedOrnament('');
    setSelectedOccasionFilter('All');
    setSearchQuery('');
  };

  return (
    <section id="collections-section" className="py-12 md:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#B8934C]/30 text-[#800020] text-[10px] uppercase tracking-[3px] font-bold shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B8934C]" />
          <span>Category-Wise Traditional Showcase</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] mb-2.5 tracking-tight">
          Sone & Chandi <span className="text-[#800020] font-semibold">Ke Gehne</span>
        </h2>
        <p className="text-[#574F48] text-sm sm:text-base leading-relaxed font-normal font-sans">
          Accurately categorized from head to toe: Maang Tikka, Jhumka, Rani Haar, Kangan, Pahunchi Bracelet, Kamarband, and Pure Silver Payal.
        </p>
      </div>

      {/* 1. PRIMARY SECTION TABS: Sone Ke Gehne (Gold) vs Chandi Ke Gehne (Silver) */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-[#FAF6F0] border border-[rgba(184,147,76,0.3)] rounded-sm">
          {metalTabs.map((tab) => {
            const isSelected = metalCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`metal-tab-${tab.id}`}
                onClick={() => {
                  setMetalCategory(tab.id);
                  setSelectedOrnament('');
                }}
                className={`py-3.5 px-4 text-center rounded-sm transition-all cursor-pointer flex flex-col items-center justify-center relative ${
                  isSelected
                    ? 'bg-[#800020] text-[#FFFFFF] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#574F48] hover:bg-[#FFFDF9] hover:text-[#800020] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider">
                    {tab.label}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isSelected ? 'bg-[#FFFFFF]/20 text-[#FFFFFF]' : 'bg-[#FAF6F0] text-[#800020]'
                  }`}>
                    {tab.count}
                  </span>
                </div>
                <span className={`text-[11px] font-medium mt-0.5 ${
                  isSelected ? 'text-[#DFC489]' : 'text-[#8A6720]'
                }`}>
                  {tab.hindiLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. BODY PLACEMENT SUB-CATEGORY TABS (Head, Ear/Nose, Neck, Hands, Waist, Feet) */}
      <div className="mb-6">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[rgba(184,147,76,0.18)]">
          <span className="text-[11px] uppercase tracking-[2px] font-bold text-[#800020] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#B8934C]" />
            <span>Select Ornament Placement (अंग अनुसार आभूषण):</span>
          </span>
          {selectedPlacement !== 'all' && (
            <button
              onClick={() => {
                setSelectedPlacement('all');
                setSelectedOrnament('');
              }}
              className="text-[10px] text-[#8A6720] hover:underline cursor-pointer font-semibold"
            >
              Show All Placements
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {placementPills.map((pill) => {
            const isSelected = selectedPlacement === pill.id;
            return (
              <button
                key={pill.id}
                id={`placement-pill-${pill.id}`}
                onClick={() => {
                  setSelectedPlacement(pill.id);
                  setSelectedOrnament('');
                }}
                className={`px-3.5 py-2 text-[11px] font-semibold whitespace-nowrap uppercase tracking-[1.5px] transition-all cursor-pointer border rounded-sm ${
                  isSelected
                    ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] shadow-xs font-bold'
                    : 'bg-[#FFFFFF] text-[#574F48] border-[rgba(184,147,76,0.25)] hover:border-[#800020] hover:text-[#800020]'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. SPECIFIC ORNAMENT TYPE CHIPS (e.g. Kangan, Bracelet Pahunchi, Payal, Maang Tikka) */}
      {availableOrnaments.length > 1 && (
        <div className="mb-6 p-3 bg-[#FFFFFF] border border-[rgba(184,147,76,0.2)] rounded-sm flex flex-wrap items-center gap-2 shadow-xs">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#78716C] mr-1">
            Quick Ornament Filter:
          </span>
          <button
            onClick={() => setSelectedOrnament('')}
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
              selectedOrnament === ''
                ? 'bg-[#800020] text-[#FFFFFF]'
                : 'bg-[#FAF6F0] text-[#574F48] hover:bg-[#EFE6DB]'
            }`}
          >
            All Specific Types ({filteredProducts.length})
          </button>
          {availableOrnaments.map((ornament) => {
            const isSelected = selectedOrnament === ornament;
            const count = JEWELRY_PRODUCTS.filter(
              (p) =>
                p.ornamentType === ornament &&
                (metalCategory === 'all' || p.metalCategory === metalCategory) &&
                (selectedPlacement === 'all' || p.bodyPlacement === selectedPlacement)
            ).length;

            return (
              <button
                key={ornament}
                onClick={() => setSelectedOrnament(isSelected ? '' : ornament)}
                className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-xs cursor-pointer transition-colors border ${
                  isSelected
                    ? 'bg-[#B8934C] text-[#FFFFFF] border-[#B8934C] font-bold'
                    : 'bg-[#FFFFFF] text-[#574F48] border-[rgba(184,147,76,0.25)] hover:border-[#800020] hover:text-[#800020]'
                }`}
              >
                {ornament} <span className="font-mono text-[9px] opacity-80">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* 4. TOOLBAR: Search, Occasion, Sort & Reset */}
      <div className="p-4 bg-[#FFFFFF] border border-[rgba(184,147,76,0.2)] rounded-sm mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        
        {/* Left: Filters */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Occasion Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#574F48]">
            <span className="font-semibold text-[#1C1917]">Occasion:</span>
            <select
              id="filter-occasion-select"
              value={selectedOccasionFilter}
              onChange={(e) => setSelectedOccasionFilter(e.target.value)}
              className="bg-[#FAF8F5] border border-[rgba(184,147,76,0.3)] text-xs text-[#1C1917] px-2.5 py-1.5 focus:outline-none focus:border-[#800020] cursor-pointer rounded-sm"
            >
              <option value="All">All Occasions</option>
              <option value="Bridal">Bridal / Wedding (शादी-विवाह)</option>
              <option value="Festive">Festive / Traditional (त्यौहार)</option>
              <option value="Daily Wear">Daily Wear (दैनिक)</option>
              <option value="Gifting">Auspicious Gifting (उपहार)</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#574F48]">
            <span className="font-semibold text-[#1C1917]">Sort:</span>
            <select
              id="filter-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[rgba(184,147,76,0.3)] text-xs text-[#1C1917] px-2.5 py-1.5 focus:outline-none focus:border-[#800020] cursor-pointer rounded-sm"
            >
              <option value="featured">Featured Masterpieces</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="weightLow">Weight: Light to Heavy</option>
              <option value="weightHigh">Weight: Heavy to Light</option>
            </select>
          </div>

          {/* Active Filter Clear Button */}
          {(metalCategory !== 'all' || selectedPlacement !== 'all' || selectedOrnament !== '' || selectedOccasionFilter !== 'All' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="text-[11px] text-[#800020] hover:text-[#1C1917] flex items-center gap-1 px-2.5 py-1 bg-[#FAF6F0] border border-[#800020]/30 rounded-sm font-semibold cursor-pointer"
            >
              <X className="w-3 h-3" /> Reset All Filters
            </button>
          )}
        </div>

        {/* Right: Showing Count */}
        <div className="text-xs text-[#574F48]">
          Displaying <span className="text-[#800020] font-bold">{filteredProducts.length}</span> authentic ornaments
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center rounded-sm bg-[#FFFFFF] border border-[rgba(184,147,76,0.2)] max-w-lg mx-auto shadow-xs">
          <Sparkles className="w-8 h-8 text-[#800020] mx-auto mb-3 opacity-80" />
          <h3 className="font-cinzel text-lg text-[#1C1917] font-bold mb-1">No Jewellery Matches Found</h3>
          <p className="text-xs text-[#78716C] mb-4">
            Try resetting your placement or metal category filter to see our complete catalogue.
          </p>
          <button
            onClick={handleResetFilters}
            className="btn-sober-gold rounded-sm text-xs py-2 px-4"
          >
            Show All 28+ Products
          </button>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProducts.map((product) => {
            const { totalEstimatedPrice } = calculateItemPrice(product, metalRates);
            const inInquiry = isInInquiry(product.id);
            const justAdded = addedNoticeId === product.id;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                id={`product-card-${product.id}`}
                onClick={() => onSelectProduct(product)}
                className="group sober-card rounded-sm flex flex-col justify-between cursor-pointer overflow-hidden relative"
              >
                {/* Top Subtle Crimson Highlight */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-[#800020] opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                {/* Image & Badges Container */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 via-transparent to-transparent opacity-60" />

                  {/* Top Left Placement & Bestseller Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-0.5 bg-[#800020] text-[#FFFFFF] text-[9px] font-bold uppercase tracking-[1.5px] shadow-xs rounded-xs">
                      {product.ornamentType}
                    </span>
                    {product.bestseller && (
                      <span className="px-2.5 py-0.5 bg-[#B8934C] text-[#FFFFFF] text-[9px] font-bold uppercase tracking-[1.5px] shadow-xs rounded-xs">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Top Right Hallmark Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FFFFFF]/95 text-[#1C1917] border border-[#B8934C]/40 text-[9px] font-mono shadow-xs rounded-xs font-semibold">
                      <ShieldCheck className="w-3 h-3 text-[#15803D]" />
                      <span>{product.metal}</span>
                    </span>
                  </div>

                  {/* Quick View Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#1C1917]/40 backdrop-blur-xs">
                    <span className="px-4 py-2 border border-[#800020] bg-[#FFFFFF] text-[#800020] font-bold text-[11px] uppercase tracking-[2px] flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform rounded-xs">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details & Hallmark</span>
                    </span>
                  </div>

                  {/* Bottom Image Tag Bar */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#FFFFFF] font-mono">
                    <span className="px-2 py-0.5 bg-[#1C1917]/80 text-[#FAF8F5] text-[10px] rounded-xs">
                      {product.code}
                    </span>
                    <span className="px-2 py-0.5 bg-[#1C1917]/80 text-[#DFC489] font-bold text-[10px] rounded-xs">
                      Gross: {product.grossWeight}g
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-[2px] text-[#800020] font-bold">
                        {product.hindiCategory}
                      </div>
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#800020] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      {product.hindiName && (
                        <p className="text-xs text-[#8A6720] font-semibold">
                          {product.hindiName}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-[#574F48] line-clamp-2 leading-relaxed font-normal font-sans">
                      {product.description}
                    </p>

                    {/* Weight & Purity Grid */}
                    <div className="pt-2.5 grid grid-cols-2 gap-2 text-[11px] text-[#574F48] border-t border-[rgba(184,147,76,0.18)] font-mono">
                      <div>
                        <span className="text-[#78716C] block text-[10px]">Net Purity Wt:</span>
                        <span className="font-bold text-[#1C1917]">
                          {product.netGoldWeight > 0 ? `${product.netGoldWeight}g Pure Gold` : `${product.grossWeight}g Solid Silver`}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#78716C] block text-[10px]">Hallmark Cert:</span>
                        <span className="text-[#800020] font-bold truncate block">
                          {product.purity.split(' ')[0]} {product.purity.split(' ')[1] || ''}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Bar */}
                  <div className="pt-4 mt-3 border-t border-[rgba(184,147,76,0.18)] flex items-end justify-between">
                    <div>
                      <span className="text-[9px] text-[#78716C] uppercase tracking-[2px] block font-semibold">
                        Estimated Value
                      </span>
                      <div className="font-cinzel text-lg sm:text-xl font-bold text-[#800020] font-mono">
                        {formatINR(totalEstimatedPrice)}
                      </div>
                      <span className="text-[9px] text-[#78716C] block">
                        ({product.makingChargePercent}% making + 3% GST)
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        id={`btn-whatsapp-${product.id}`}
                        onClick={(e) => handleWhatsAppInquire(product, e)}
                        className="p-2 bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#86EFAC] text-[#15803D] transition-colors rounded-sm shadow-xs"
                        title="Inquire Price on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>

                      <button
                        id={`btn-inquiry-add-${product.id}`}
                        onClick={(e) => handleAdd(product, e)}
                        className={`px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer border rounded-sm ${
                          inInquiry || justAdded
                            ? 'bg-[#800020] text-[#FFFFFF] border-[#800020]'
                            : 'bg-[#FFFFFF] border-[rgba(184,147,76,0.3)] hover:bg-[#800020] hover:text-[#FFFFFF] text-[#800020]'
                        }`}
                        title="Add to Inquiry Bag"
                      >
                        {justAdded || inInquiry ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Inquire</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

    </section>
  );
};
