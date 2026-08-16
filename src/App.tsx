import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Collections } from './components/Collections';
import { LiveRateBoard } from './components/LiveRateBoard';
import { Heritage } from './components/Heritage';
import { BespokeStudio } from './components/BespokeStudio';
import { StoreVisit } from './components/StoreVisit';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import {
  MetalRates,
  Product,
  InquiryItem,
  MetalCategory,
  BodyPlacement
} from './types';
import {
  INITIAL_METAL_RATES,
  JEWELRY_PRODUCTS,
  STORE_INFO
} from './data/jewelryData';
import {
  MessageCircle,
  Calculator,
  ArrowUp,
  ShieldCheck,
  Phone,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [metalRates, setMetalRates] = useState<MetalRates>(() => {
    const saved = localStorage.getItem('laxmi_metal_rates');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If saved rate is from outdated market pricing (e.g. < 1,00,000 for 24K), auto-upgrade to current live rates
        if (!parsed.gold24kPer10g || parsed.gold24kPer10g < 100000) {
          localStorage.setItem('laxmi_metal_rates', JSON.stringify(INITIAL_METAL_RATES));
          return INITIAL_METAL_RATES;
        }
        return { ...INITIAL_METAL_RATES, ...parsed };
      } catch (e) {
        return INITIAL_METAL_RATES;
      }
    }
    return INITIAL_METAL_RATES;
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Category filter states for Collections page
  const [selectedMetalCategory, setSelectedMetalCategory] = useState<MetalCategory>('all');
  const [selectedPlacement, setSelectedPlacement] = useState<BodyPlacement>('all');
  const [selectedOrnamentType, setSelectedOrnamentType] = useState<string>('');

  // Inquiry items (Wishlist / Trousseau bag)
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>(() => {
    const saved = localStorage.getItem('laxmi_inquiry_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Save rates to local storage
  const handleUpdateRates = (updated: Partial<MetalRates>) => {
    setMetalRates((prev) => {
      const next = { ...prev, ...updated };
      localStorage.setItem('laxmi_metal_rates', JSON.stringify(next));
      return next;
    });
  };

  // Add / Remove from inquiry bag
  const handleAddToInquiry = (product: Product) => {
    setInquiryItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      let updated: InquiryItem[];
      if (existing) {
        updated = prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updated = [...prev, { product, quantity: 1 }];
      }
      localStorage.setItem('laxmi_inquiry_items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryItems((prev) => {
      const updated = prev.filter((item) => item.product.id !== productId);
      localStorage.setItem('laxmi_inquiry_items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setInquiryItems((prev) => {
      const updated = prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('laxmi_inquiry_items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearInquiry = () => {
    setInquiryItems([]);
    localStorage.removeItem('laxmi_inquiry_items');
  };

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isInInquiry = (productId: string) => {
    return inquiryItems.some((item) => item.product.id === productId);
  };

  // Handler for category showcase navigation
  const handleSelectShowcaseCategory = (
    metalCat: MetalCategory,
    placement: BodyPlacement,
    ornamentType?: string
  ) => {
    setSelectedMetalCategory(metalCat);
    setSelectedPlacement(placement);
    setSelectedOrnamentType(ornamentType || '');
    setActiveTab('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-montserrat antialiased selection:bg-[#B8934C] selection:text-[#FFFFFF]">
      
      {/* Header with Live Ticker & Navigation */}
      <Header
        metalRates={metalRates}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        inquiryItems={inquiryItems}
        setIsInquiryOpen={setIsInquiryOpen}
        onOpenCalculator={() => {
          setActiveTab('rates');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Cinematic Hero */}
            <Hero
              metalRates={metalRates}
              onExploreClick={() => {
                setSelectedMetalCategory('all');
                setSelectedPlacement('all');
                setSelectedOrnamentType('');
                setActiveTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRatesClick={() => {
                setActiveTab('rates');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onBespokeClick={() => {
                setActiveTab('bespoke');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Shop by Category Showcase Section (At least 1 item from each main category) */}
            <CategoryShowcase
              metalRates={metalRates}
              onSelectCategory={handleSelectShowcaseCategory}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />

            {/* Featured Collections Showcase */}
            <Collections
              metalRates={metalRates}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToInquiry={handleAddToInquiry}
              inquiryItems={inquiryItems}
              initialMetalCategory={selectedMetalCategory}
              initialPlacement={selectedPlacement}
              initialOrnamentType={selectedOrnamentType}
            />

            {/* Live Mandi Rate Board & Interactive Calculator */}
            <LiveRateBoard
              metalRates={metalRates}
              onUpdateRates={handleUpdateRates}
            />

            {/* Heritage & Legacy Section */}
            <Heritage />

            {/* Bespoke Custom Design Studio */}
            <BespokeStudio />

            {/* Showroom Visit & Appointment Booking */}
            <StoreVisit />
          </>
        )}

        {activeTab === 'collections' && (
          <Collections
            metalRates={metalRates}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToInquiry={handleAddToInquiry}
            inquiryItems={inquiryItems}
            initialMetalCategory={selectedMetalCategory}
            initialPlacement={selectedPlacement}
            initialOrnamentType={selectedOrnamentType}
          />
        )}

        {activeTab === 'rates' && (
          <LiveRateBoard
            metalRates={metalRates}
            onUpdateRates={handleUpdateRates}
          />
        )}

        {activeTab === 'heritage' && (
          <Heritage />
        )}

        {activeTab === 'bespoke' && (
          <BespokeStudio />
        )}

        {activeTab === 'visit' && (
          <StoreVisit />
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          metalRates={metalRates}
          onAddToInquiry={handleAddToInquiry}
          isInInquiry={isInInquiry(selectedProduct.id)}
        />
      )}

      {/* Wishlist / Inquiry Slide-over Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        inquiryItems={inquiryItems}
        onRemoveItem={handleRemoveInquiryItem}
        onUpdateQuantity={handleUpdateQuantity}
        onClearAll={handleClearInquiry}
        metalRates={metalRates}
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp Direct Chat Float */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Namaste%20Laxmi%20Jewellers%20Sariya,%20I%20have%20an%20inquiry%20regarding%20jewellery%20and%20rates.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-[#FFFFFF] shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border border-[#86EFAC]/40"
          title="Direct WhatsApp with Laxmi Jewellers Sariya"
          aria-label="Direct WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#FFFFFF] hover:bg-[#FAF6F0] text-[#1C1917] hover:text-[#800020] border border-[rgba(184,147,76,0.3)] shadow-xl transition-all cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
