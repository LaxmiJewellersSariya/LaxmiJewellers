import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Award,
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Check,
  Scale,
  Percent,
  Layers,
  Tag,
  PhoneCall,
  Info
} from 'lucide-react';
import { Product, MetalRates } from '../types';
import { calculateItemPrice, formatINR, STORE_INFO } from '../data/jewelryData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  metalRates: MetalRates;
  onAddToInquiry: (product: Product) => void;
  isInInquiry: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  metalRates,
  onAddToInquiry,
  isInInquiry,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [justAdded, setJustAdded] = useState(false);

  const { baseGoldCost, makingChargeCost, gstCost, totalEstimatedPrice } = calculateItemPrice(
    product,
    metalRates
  );

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAdd = () => {
    onAddToInquiry(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Namaste Laxmi Jewellers Sariya!\n\n` +
      `I would like to inquire about this piece:\n` +
      `• *${product.name}* (${product.hindiName || ''})\n` +
      `• Category: ${product.ornamentType} (${product.hindiCategory})\n` +
      `• Item Code: ${product.code}\n` +
      `• Metal Purity: ${product.metal} (${product.purity})\n` +
      `• Net Weight: ${product.netGoldWeight > 0 ? product.netGoldWeight + 'g' : product.grossWeight + 'g'}\n` +
      `• HUID Hallmark: ${product.hallmarkCode}\n` +
      `• Est. Price: ${formatINR(totalEstimatedPrice)}\n\n` +
      `Please let me know if this is currently available in the Sariya showroom or if I can customize it.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#B8934C]/30 overflow-hidden shadow-2xl rounded-sm my-8">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#800020] via-[#B8934C] to-[#800020]" />
        
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FFFFFF]/90 hover:bg-[#FAF6F0] text-[#574F48] hover:text-[#800020] border border-[rgba(184,147,76,0.3)] rounded-full transition-colors cursor-pointer shadow-xs"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 bg-[#FAF8F5] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[rgba(184,147,76,0.18)]">
            <div>
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden bg-[#FFFFFF] border border-[rgba(184,147,76,0.25)] rounded-sm shadow-xs">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 bg-[#800020] text-[#FFFFFF] text-[10px] font-mono font-bold rounded-xs shadow-xs">
                    {product.ornamentType}
                  </span>
                  <span className="px-2.5 py-1 bg-[#FFFFFF]/95 text-[#1C1917] border border-[#B8934C]/40 text-[10px] font-mono font-bold rounded-xs shadow-xs">
                    {product.code}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 overflow-hidden border-2 rounded-sm transition-all shrink-0 cursor-pointer ${
                        activeImage === img ? 'border-[#800020] scale-105 shadow-xs' : 'border-[rgba(184,147,76,0.25)] opacity-60'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hallmarking Trust Box */}
            <div className="mt-6 p-4 bg-[#FFFFFF] border border-[rgba(184,147,76,0.3)] rounded-sm text-xs space-y-1.5 font-sans">
              <div className="flex items-center gap-1.5 text-[#800020] font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                <span>BIS 6-Digit HUID Laser Verified</span>
              </div>
              <p className="text-[#574F48] text-[11px]">
                Laser Hallmark ID: <span className="text-[#1C1917] font-mono font-bold">{product.hallmarkCode}</span>
              </p>
              <p className="text-[#78716C] text-[11px] leading-relaxed">
                Guaranteed genuine 22KT 916 gold / 925 sterling silver with zero wax filler and 100% buyback assurance in Sariya showroom.
              </p>
            </div>
          </div>

          {/* Right Column: Specifications & Billing */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#FFFFFF]">
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 bg-[#FAF6F0] text-[#800020] text-[10px] font-bold uppercase tracking-wider border border-[#800020]/20 rounded-sm">
                    {product.hindiCategory}
                  </span>
                  <span className="text-stone-300 text-xs">•</span>
                  <span className="text-xs text-[#78716C] font-normal font-sans">{product.occasion} Occasion</span>
                </div>
                
                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                  {product.name}
                </h2>
                {product.hindiName && (
                  <p className="text-sm text-[#8A6720] font-sans font-semibold">{product.hindiName}</p>
                )}
              </div>

              <p className="text-xs text-[#574F48] leading-relaxed font-normal font-sans">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="bg-[#FAF8F5] p-4 border border-[rgba(184,147,76,0.22)] rounded-sm text-xs space-y-2.5">
                <h4 className="font-cinzel font-bold text-[#1C1917] text-xs uppercase tracking-wider border-b border-[rgba(184,147,76,0.18)] pb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#800020]" /> Technical Details
                </h4>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] font-mono">
                  <div>
                    <span className="text-[#78716C] block text-[10px] uppercase font-sans">Ornament Category:</span>
                    <span className="font-bold text-[#800020]">{product.ornamentType}</span>
                  </div>

                  <div>
                    <span className="text-[#78716C] block text-[10px] uppercase font-sans">Net Purity Weight:</span>
                    <span className="font-bold text-[#1C1917]">
                      {product.netGoldWeight > 0 ? `${product.netGoldWeight}g Pure Gold` : `${product.grossWeight}g Solid Silver`}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#78716C] block text-[10px] uppercase font-sans">Gross Total Weight:</span>
                    <span className="font-bold text-[#1C1917]">{product.grossWeight} Grams</span>
                  </div>

                  <div>
                    <span className="text-[#78716C] block text-[10px] uppercase font-sans">Purity Standard:</span>
                    <span className="font-bold text-[#1C1917]">{product.purity}</span>
                  </div>

                  <div>
                    <span className="text-[#78716C] block text-[10px] uppercase font-sans">Making Charge Slab:</span>
                    <span className="font-bold text-[#1C1917]">{product.makingChargePercent}% on Net Value</span>
                  </div>

                  {product.dimensions && (
                    <div className="col-span-2">
                      <span className="text-[#78716C] block text-[10px] uppercase font-sans">Dimensions / Sizing:</span>
                      <span className="text-[#574F48] font-sans">{product.dimensions}</span>
                    </div>
                  )}

                  {product.gemstoneDetails && (
                    <div className="col-span-2">
                      <span className="text-[#78716C] block text-[10px] uppercase font-sans">Inlay / Gemstones:</span>
                      <span className="text-[#574F48] font-sans">{product.gemstoneDetails}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Live Price Calculation Breakdown */}
              <div className="bg-[#FAF8F5] p-4 border border-[#B8934C]/35 rounded-sm text-xs space-y-2">
                <div className="flex items-center justify-between text-[#78716C] text-[11px] pb-1.5 border-b border-[rgba(184,147,76,0.18)]">
                  <span className="font-bold text-[#800020] uppercase tracking-wider font-cinzel">Live Itemized Bill Estimate</span>
                  <span className="font-mono text-[#78716C]">Today's Sariya Rate</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-[#574F48] font-mono">
                    <span>Base Metal Value ({product.netGoldWeight || product.grossWeight}g):</span>
                    <span className="text-[#1C1917] font-bold">{formatINR(baseGoldCost)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#574F48] font-mono">
                    <span>Making Charges ({product.makingChargePercent}%):</span>
                    <span className="text-[#1C1917] font-bold">{formatINR(makingChargeCost)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#574F48] font-mono">
                    <span>GST (3% BIS Tax Invoice):</span>
                    <span className="text-[#1C1917] font-bold">{formatINR(gstCost)}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(184,147,76,0.18)] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider font-cinzel">
                    Total Estimated Amount
                  </span>
                  <span className="font-mono text-xl font-bold text-[#800020]">
                    {formatINR(totalEstimatedPrice)}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="modal-whatsapp-inquire-btn"
                  onClick={handleWhatsApp}
                  className="py-3 px-4 bg-[#800020] hover:bg-[#6B1D2F] text-[#FFFFFF] rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  id="modal-add-inquiry-btn"
                  onClick={handleAdd}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-sm cursor-pointer ${
                    isInInquiry || justAdded
                      ? 'bg-[#15803D] text-[#FFFFFF]'
                      : 'btn-sober-outline bg-[#FFFFFF]'
                  }`}
                >
                  {isInInquiry || justAdded ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Trousseau Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#800020]" />
                      <span>Add to Inquiry Bag</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="text-xs text-[#574F48] hover:text-[#800020] inline-flex items-center gap-1.5 font-sans transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#800020]" /> Call Showroom for immediate booking: {STORE_INFO.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
