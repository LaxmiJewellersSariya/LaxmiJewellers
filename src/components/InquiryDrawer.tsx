import React from 'react';
import {
  X,
  Trash2,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Scale,
  Sparkles
} from 'lucide-react';
import { InquiryItem, MetalRates } from '../types';
import { calculateItemPrice, formatINR, STORE_INFO } from '../data/jewelryData';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryItems: InquiryItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearAll: () => void;
  metalRates: MetalRates;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  inquiryItems,
  onRemoveItem,
  onUpdateQuantity,
  onClearAll,
  metalRates,
}) => {
  if (!isOpen) return null;

  // Aggregate stats
  let totalGrossWeight = 0;
  let totalNetGoldWeight = 0;
  let totalCost = 0;

  inquiryItems.forEach((item) => {
    const { totalEstimatedPrice } = calculateItemPrice(item.product, metalRates);
    totalCost += totalEstimatedPrice * item.quantity;
    totalGrossWeight += item.product.grossWeight * item.quantity;
    totalNetGoldWeight += (item.product.netGoldWeight || item.product.grossWeight) * item.quantity;
  });

  const handleWhatsAppSend = () => {
    let itemsText = '';
    inquiryItems.forEach((item, index) => {
      const { totalEstimatedPrice } = calculateItemPrice(item.product, metalRates);
      itemsText += `${index + 1}. *${item.product.name}* (Code: ${item.product.code})\n` +
        `   • Metal: ${item.product.metal} (${item.product.purity})\n` +
        `   • Weight: ${item.product.grossWeight}g (Qty: ${item.quantity})\n` +
        `   • Est. Value: ${formatINR(totalEstimatedPrice * item.quantity)}\n\n`;
    });

    const fullMessage = encodeURIComponent(
      `*Namaste Laxmi Jewellers Sariya - Bridal Trousseau / Wishlist Inquiry*\n\n` +
      `I have selected the following hallmarked pieces on your website:\n\n` +
      `${itemsText}` +
      `📊 *Aggregate Summary:*\n` +
      `• Total Items: ${inquiryItems.length} design(s)\n` +
      `• Approx Total Weight: ~${totalGrossWeight.toFixed(2)} Grams\n` +
      `• Total Estimated Price: ${formatINR(totalCost)}\n\n` +
      `Could you please check availability at your Sariya showroom or schedule a preview?`
    );

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${fullMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end">
      
      {/* Click outside backdrop */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Container */}
      <div className="w-full max-w-md bg-[#FFFFFF] border-l border-[#B8934C]/30 h-full flex flex-col justify-between shadow-2xl relative">
        <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#8A6720] via-[#B8934C] to-[#8A6720]" />
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[rgba(184,147,76,0.18)] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#FFFFFF] text-[#8A6720] border border-[#B8934C]/30 rounded-sm shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-base text-[#1C1917] tracking-wide">Bridal Trousseau Inquiry</h3>
              <p className="text-[11px] text-[#78716C] font-sans">
                {inquiryItems.length} selected design(s)
              </p>
            </div>
          </div>

          <button
            id="close-inquiry-drawer-btn"
            onClick={onClose}
            className="p-2 text-[#78716C] hover:text-[#8A6720] hover:bg-[#FFFFFF] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3.5 bg-[#FAF8F5]">
          {inquiryItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#78716C] py-12">
              <ShoppingBag className="w-12 h-12 text-[#D9CFC4] mb-3" />
              <h4 className="font-cinzel text-base text-[#1C1917] font-bold mb-1">Your Inquiry Bag is Empty</h4>
              <p className="text-xs max-w-xs leading-relaxed font-sans text-[#78716C]">
                Browse our collections of 22K bridal sets, rings, kadas, and fine silver ornaments to add items for inquiry.
              </p>
            </div>
          ) : (
            inquiryItems.map(({ product, quantity }) => {
              const { totalEstimatedPrice } = calculateItemPrice(product, metalRates);
              return (
                <div
                  key={product.id}
                  className="p-3.5 bg-[#FFFFFF] border border-[rgba(184,147,76,0.22)] rounded-sm flex items-center gap-3.5 relative group shadow-xs"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover border border-[rgba(184,147,76,0.18)] rounded-sm shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel text-xs font-bold text-[#1C1917] truncate">
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-[#8A6720] font-mono font-semibold block">
                      Code: {product.code} • {product.grossWeight}g
                    </span>
                    <div className="font-mono text-xs font-bold text-[#1C1917] mt-1">
                      {formatINR(totalEstimatedPrice * quantity)}
                    </div>
                  </div>

                  {/* Quantity and delete */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-stone-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center bg-[#FAF8F5] border border-[rgba(184,147,76,0.25)] rounded-sm text-xs font-mono">
                      <button
                        onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                        className="px-2 py-0.5 text-[#574F48] hover:text-[#8A6720] font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-1.5 font-bold text-[#1C1917]">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="px-2 py-0.5 text-[#574F48] hover:text-[#8A6720] font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer Summary */}
        {inquiryItems.length > 0 && (
          <div className="p-5 border-t border-[rgba(184,147,76,0.18)] bg-[#FFFFFF] space-y-4">
            
            {/* Weight & Total Cost Preview */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#574F48]">
                <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-medium">
                  <Scale className="w-3.5 h-3.5 text-[#8A6720]" /> Total Estimated Weight:
                </span>
                <span className="font-mono text-[#1C1917] font-bold">{totalGrossWeight.toFixed(2)} Grams</span>
              </div>

              <div className="flex items-center justify-between text-[#574F48]">
                <span className="uppercase tracking-wider text-[11px] font-medium">Total Estimated Price:</span>
                <span className="font-mono text-lg font-bold text-[#8A6720]">
                  {formatINR(totalCost)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                id="drawer-whatsapp-submit-btn"
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 btn-sober-gold rounded-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Wishlist Quote via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-1 text-[11px] font-sans">
                <button
                  onClick={onClearAll}
                  className="text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  Clear all items
                </button>
                <span className="text-[#8A6720] font-medium">
                  100% 6-Digit HUID Guaranteed
                </span>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
