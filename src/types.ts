export type MetalType = '24K Gold' | '22K Gold' | '18K Gold' | '999 Pure Silver' | '925 Sterling Silver';

export type MetalCategory = 'all' | 'gold' | 'silver';

export type BodyPlacement =
  | 'all'
  | 'head'       // Maang Tikka, Borla, Sheesh Patti, Passa (Head)
  | 'ear-nose'   // Jhumka, Bali, Karnphool, Nath, Laung (Ear & Nose)
  | 'neck'       // Rani Haar, Choker, Mangalsutra, Matarmala, Hansuli (Neck)
  | 'hands'      // Kangan, Bracelet (Pahunchi), Hathphool, Bajuband, Kada, Ring (Hands & Wrists)
  | 'waist'      // Kamarband, Kardhani (Waist)
  | 'feet'       // Payal, Ghunghroo, Panjel, Bichhiya, Chutki (Feet)
  | 'silver-special'; // Silver Hansuli, Silver Chhalle, Pooja articles

export type CategoryType =
  | 'all'
  | 'bridal'
  | 'necklaces'
  | 'rings'
  | 'bangles'
  | 'earrings'
  | 'mangalsutra'
  | 'silver'
  | 'mens';

export type OccasionType = 'All' | 'Bridal' | 'Festive' | 'Daily Wear' | 'Antique' | 'Gifting';

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  code: string;
  metalCategory: 'gold' | 'silver';
  bodyPlacement: BodyPlacement;
  ornamentType: string; // e.g. "Maang Tikka", "Kangan", "Bracelet (Pahunchi)", "Payal", etc.
  hindiCategory: string; // e.g. "मांग टीका", "कंगन", "पहुंची ब्रेसलेट", "पायल"
  category: CategoryType;
  metal: MetalType;
  purity: string; // e.g. "916 BIS Hallmark (22KT)", "999 Fine Silver"
  grossWeight: number; // in grams
  netGoldWeight: number; // in grams
  makingChargePercent: number; // e.g. 10%
  image: string;
  gallery?: string[];
  description: string;
  hallmarkCode: string; // e.g. "HUID-916-CG04"
  tags: string[];
  occasion: OccasionType;
  featured?: boolean;
  bestseller?: boolean;
  dimensions?: string;
  gemstoneDetails?: string;
}

export interface MetalRates {
  gold24kPer10g: number;
  gold22kPer10g: number;
  gold18kPer10g: number;
  gold14kPer10g: number;
  silver999PerKg: number;
  silver999Per10g: number;
  silver925Per10g: number;
  lastUpdated: string;
  dayChangeGoldPercent: number;
  dayChangeSilverPercent: number;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  customNote?: string;
}

export interface AppointmentData {
  fullName: string;
  phoneNumber: string;
  city: string;
  serviceType: 'Bridal Jewellery Consultation' | 'Custom Design Request' | 'Old Gold Exchange / Testing' | 'General Store Visit';
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface CustomDesignRequest {
  fullName: string;
  phoneNumber: string;
  metalType: MetalType;
  jewelryCategory: string;
  approxWeightGrams: number;
  budgetRange: string;
  targetDate: string;
  specialInstructions: string;
  referenceDesignUrl?: string;
}
