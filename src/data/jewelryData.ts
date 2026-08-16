import { MetalRates, Product } from '../types';

export const INITIAL_METAL_RATES: MetalRates = {
  gold24kPer10g: 155130,
  gold22kPer10g: 142200,
  gold18kPer10g: 116350,
  gold14kPer10g: 90500,
  silver999PerKg: 249100,
  silver999Per10g: 2491,
  silver925Per10g: 2304,
  lastUpdated: 'Live Today • Sariya & Raigarh Mandi Rates',
  dayChangeGoldPercent: 0.38,
  dayChangeSilverPercent: -0.15,
};

export const STORE_INFO = {
  name: 'Laxmi Jewellers Sariya',
  founder: 'Shri Sadhuram Sonar Ji Ki Dukan',
  tagline: 'Timeless Elegance & Pure Trust Since Generations',
  address: 'Main Sarafa Market, Near Old Bus Stand, Sariya, Dist. Sarangarh-Bilaigarh / Raigarh, Chhattisgarh - 496554',
  phone: '+91 98271 45890',
  alternatePhone: '+91 77718 23419',
  whatsappNumber: '919827145890',
  email: 'contact@laxmijewellerssariya.com',
  workingHours: 'Monday – Sunday: 10:00 AM – 8:30 PM (Open 7 Days)',
  bisRegistration: 'BIS Hallmark License Reg. HM/C-7491028',
  huidCertified: '100% 6-Digit HUID Laser Hallmarked Gold',
  googleMapsUrl: 'https://maps.google.com/?q=Sariya+Chhattisgarh+Sarafa+Market',
};

export const JEWELRY_PRODUCTS: Product[] = [
  // ==========================================
  // GOLD JEWELRY - HEAD (मांग व शीश आभूषण)
  // ==========================================
  {
    id: 'LJ-GD-HD-01',
    name: 'Kundan & Pearl Royal Maang Tikka',
    hindiName: 'कुंदन व मोती राजसी मांग टीका',
    code: 'LJ-MT-916-01',
    metalCategory: 'gold',
    bodyPlacement: 'head',
    ornamentType: 'Maang Tikka',
    hindiCategory: 'मांग टीका',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked with HUID',
    grossWeight: 14.5,
    netGoldWeight: 13.8,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'An exquisite 22KT gold Maang Tikka with handcrafted kundan center, micro-pearl hangings, and a delicate gold link chain. Designed for regal Indian brides.',
    hallmarkCode: 'HUID-916-SRY-101',
    tags: ['Maang Tikka', 'Bridal', 'Head', 'Kundan', 'Bestseller'],
    occasion: 'Bridal',
    featured: true,
    bestseller: true,
    dimensions: 'Tikka center: 3.5 cm diameter, Chain length: 12 cm',
    gemstoneDetails: 'Hydro Polki Stones, Natural Seed Pearls',
  },
  {
    id: 'LJ-GD-HD-02',
    name: 'Rajputi Royal Gold Borla with Meenakari',
    hindiName: 'राजपूती पारंपरिक स्वर्ण बोरला',
    code: 'LJ-BR-916-02',
    metalCategory: 'gold',
    bodyPlacement: 'head',
    ornamentType: 'Borla',
    hindiCategory: 'बोरला',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 16.2,
    netGoldWeight: 15.4,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Spherical Rajasthani Borla crafted in pure 22K gold with ruby-red meenakari accents and a cluster of fresh water pearl drops. Fastens securely onto bridal hairstyles.',
    hallmarkCode: 'HUID-916-SRY-102',
    tags: ['Borla', 'Rajputi', 'Head', 'Antique', 'Heritage'],
    occasion: 'Bridal',
    featured: false,
    dimensions: 'Dome: 2.8 cm diameter, Adjustable Pearl String',
    gemstoneDetails: 'Red Meenakari Enamel, Cultured Seed Pearls',
  },
  {
    id: 'LJ-GD-HD-03',
    name: 'Imperial Bridal Sheesh Patti (Matha Patti)',
    hindiName: 'शाही ब्राइडल शीश पट्टी (माथा पट्टी)',
    code: 'LJ-SP-916-03',
    metalCategory: 'gold',
    bodyPlacement: 'head',
    ornamentType: 'Sheesh Patti',
    hindiCategory: 'शीश पट्टी',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 38.5,
    netGoldWeight: 36.0,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Double-tier grand Matha Patti and Sheesh Patti headband crafted with intricate gold filigree, floral motifs, and emerald drops framing the forehead with sheer royal elegance.',
    hallmarkCode: 'HUID-916-SRY-103',
    tags: ['Sheesh Patti', 'Matha Patti', 'Bridal', 'Head', 'Royal'],
    occasion: 'Bridal',
    featured: true,
    dimensions: 'Length: 28 cm flexible arch with hook locks',
    gemstoneDetails: 'Emerald Beads, Polki Crystals in 22K Gold Prongs',
  },
  {
    id: 'LJ-GD-HD-04',
    name: 'Mughlai Polki Gold Passa (Jhoomar)',
    hindiName: 'मुगलई पोल्की स्वर्ण पासा (झूमर)',
    code: 'LJ-PS-916-04',
    metalCategory: 'gold',
    bodyPlacement: 'head',
    ornamentType: 'Passa',
    hindiCategory: 'पासा / झूमर',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 22.8,
    netGoldWeight: 21.5,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Traditional fan-shaped side head ornament (Passa/Jhoomar) featuring cascading pearl strands and filigree gold arches with ruby centerpiece.',
    hallmarkCode: 'HUID-916-SRY-104',
    tags: ['Passa', 'Jhoomar', 'Head', 'Bridal', 'Mughal'],
    occasion: 'Bridal',
    dimensions: 'Length: 14 cm, Fan width: 8.5 cm',
    gemstoneDetails: 'Natural Pearls, Semi-precious Ruby inlays',
  },

  // ==========================================
  // GOLD JEWELRY - EAR & NOSE (कान व नाक)
  // ==========================================
  {
    id: 'LJ-GD-EN-05',
    name: 'Chandramukhi Grand 3-Tier Gold Jhumka',
    hindiName: 'चंद्रमुखी भव्य त्रि-स्तरीय स्वर्ण झुमका',
    code: 'LJ-ER-916-05',
    metalCategory: 'gold',
    bodyPlacement: 'ear-nose',
    ornamentType: 'Jhumka',
    hindiCategory: 'झुमका',
    category: 'earrings',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 24.6,
    netGoldWeight: 24.0,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Three-tiered cascading grand jhumkas featuring delicate filigree domes, ruby-accented tops, and pearl hangings. Designed for effortless glamour at Indian weddings.',
    hallmarkCode: 'HUID-916-SRY-105',
    tags: ['Jhumka', 'Earrings', 'Heirloom', 'Bridal', 'Bestseller'],
    occasion: 'Festive',
    featured: true,
    bestseller: true,
    dimensions: 'Length: 7.2 cm, Width: 3.0 cm',
    gemstoneDetails: 'Synthetic Rubies & Natural Freshwater Pearls',
  },
  {
    id: 'LJ-GD-EN-06',
    name: 'Suryavanshi Royal Gold Chandbali',
    hindiName: 'सूर्यवंशी कुंदन व मोती चांदबाली',
    code: 'LJ-ER-916-06',
    metalCategory: 'gold',
    bodyPlacement: 'ear-nose',
    ornamentType: 'Bali',
    hindiCategory: 'बाली / चांदबाली',
    category: 'earrings',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 19.8,
    netGoldWeight: 18.5,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Crescent moon shaped Chandbali earrings with micro-pearl edging and handcrafted Kundan gemstones that frame the face with regal grace.',
    hallmarkCode: 'HUID-916-SRY-106',
    tags: ['Bali', 'Chandbali', 'Earrings', 'Bridal', 'Bestseller'],
    occasion: 'Bridal',
    featured: true,
    bestseller: true,
    dimensions: 'Length: 6.5 cm, Width: 4.2 cm',
    gemstoneDetails: 'Seed pearls, uncut polki crystals in 22K gold',
  },
  {
    id: 'LJ-GD-EN-07',
    name: 'Pushpa Blossom Antique Gold Karnphool',
    hindiName: 'पुष्प नक्काशीदार स्वर्ण कर्णफूल',
    code: 'LJ-KP-916-07',
    metalCategory: 'gold',
    bodyPlacement: 'ear-nose',
    ornamentType: 'Karnphool',
    hindiCategory: 'कर्णफूल',
    category: 'earrings',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 15.6,
    netGoldWeight: 15.6,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Traditional large floral ear studs (Karnphool) covering the earlobe with layered petal die-casting, granulation, and antique matte gold polish.',
    hallmarkCode: 'HUID-916-SRY-107',
    tags: ['Karnphool', 'Earrings', 'Antique', 'Temple', 'Pure Gold'],
    occasion: 'Festive',
    dimensions: 'Diameter: 3.2 cm (Screw back with support disc)',
    gemstoneDetails: '100% Solid 22K Gold (Zero wax filler)',
  },
  {
    id: 'LJ-GD-EN-08',
    name: 'Rajwada Bridal Kundan & Pearl Nath',
    hindiName: 'रजवाड़ा ब्राइडल कुंदन व नथनी',
    code: 'LJ-NT-916-08',
    metalCategory: 'gold',
    bodyPlacement: 'ear-nose',
    ornamentType: 'Nath',
    hindiCategory: 'नथ / नथनी',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 8.8,
    netGoldWeight: 8.2,
    makingChargePercent: 13,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Iconic bridal circular nose ring (Nath) embellished with red-green meenakari, kundan stones, and a fine pearl string chain connecting to hair.',
    hallmarkCode: 'HUID-916-SRY-108',
    tags: ['Nath', 'Nose', 'Bridal', 'Kundan', 'Bestseller'],
    occasion: 'Bridal',
    featured: true,
    dimensions: 'Ring diameter: 4.5 cm, Pearl chain: 18 cm',
    gemstoneDetails: 'Uncut Kundan Stones, Basra Seed Pearls',
  },
  {
    id: 'LJ-GD-EN-09',
    name: 'Heera-Kanti Sparkling Gold Laung (Nose Pin)',
    hindiName: 'हीरा-कांति सोने की लौंग (नोज पिन)',
    code: 'LJ-LG-916-09',
    metalCategory: 'gold',
    bodyPlacement: 'ear-nose',
    ornamentType: 'Laung',
    hindiCategory: 'लौंग / नोजपिन',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 1.8,
    netGoldWeight: 1.6,
    makingChargePercent: 14,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Classic auspicious gold Laung (Clove-shaped Nose Stud) with 7-stone diamond-cut floral cluster. Comfortable screw fitting for daily or festive wear.',
    hallmarkCode: 'HUID-916-SRY-109',
    tags: ['Laung', 'Nose Pin', 'Daily Wear', 'Auspicious'],
    occasion: 'Daily Wear',
    dimensions: 'Front diameter: 5.5 mm, South-Indian style screw stem',
    gemstoneDetails: 'Zirconia / Diamond-cut sparkling stones in 22K Gold',
  },

  // ==========================================
  // GOLD JEWELRY - NECK (गले के आभूषण)
  // ==========================================
  {
    id: 'LJ-GD-NK-10',
    name: 'Navratna & Kundan Royal Rani Haar',
    hindiName: 'नवरत्न व कुंदन राजसी रानी हार',
    code: 'LJ-NC-916-10',
    metalCategory: 'gold',
    bodyPlacement: 'neck',
    ornamentType: 'Rani Haar',
    hindiCategory: 'रानी हार',
    category: 'necklaces',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 65.2,
    netGoldWeight: 58.0,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Long traditional Rani Haar featuring 9 Vedic certified planetary gemstones set in pure gold filigree panels with antique finish and pearl side strands.',
    hallmarkCode: 'HUID-916-SRY-110',
    tags: ['Rani Haar', 'Necklaces', 'Navratna', 'Heirloom', 'Bridal'],
    occasion: 'Bridal',
    featured: true,
    bestseller: true,
    dimensions: 'Length: 26 inches with adjustable gold bullion tassel',
    gemstoneDetails: "Certified Ruby, Emerald, Pearl, Blue Sapphire, Yellow Sapphire, Coral, Hessonite, Cat's eye",
  },
  {
    id: 'LJ-GD-NK-11',
    name: 'Padmavati Royal Temple 22K Gold Choker',
    hindiName: 'पद्मावती मंदिर नक्काशी स्वर्ण चोकर',
    code: 'LJ-NC-916-11',
    metalCategory: 'gold',
    bodyPlacement: 'neck',
    ornamentType: 'Choker',
    hindiCategory: 'चोकर',
    category: 'necklaces',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 44.5,
    netGoldWeight: 44.5,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Intricate temple work choker featuring peacock motif carvings and ghungroo drop filigree. Zero wax filler guaranteed, crafted with pure 916 yellow gold.',
    hallmarkCode: 'HUID-916-SRY-111',
    tags: ['Choker', 'Necklaces', 'Antique', 'Temple', 'Pure Gold'],
    occasion: 'Festive',
    featured: true,
    dimensions: 'Choker width 2.8 inches, Adjustable Velvet Back Dori',
    gemstoneDetails: '100% Solid 22K Gold with Antique Matte Finish',
  },
  {
    id: 'LJ-GD-NK-12',
    name: 'Shree Laxmi Vilas Pure Gold Mangalsutra',
    hindiName: 'श्री लक्ष्मी विलास स्वर्ण मंगलसूत्र',
    code: 'LJ-MS-916-12',
    metalCategory: 'gold',
    bodyPlacement: 'neck',
    ornamentType: 'Mangalsutra',
    hindiCategory: 'मंगलसूत्र',
    category: 'mangalsutra',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 18.5,
    netGoldWeight: 16.8,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'A divine Goddess Laxmi motif gold pendant strung on a hand-knotted auspicious double-layer black bead chain with pure gold spacer beads.',
    hallmarkCode: 'HUID-916-SRY-112',
    tags: ['Mangalsutra', 'Necklaces', 'Auspicious', 'Laxmi', 'Daily Wear'],
    occasion: 'Daily Wear',
    featured: true,
    bestseller: true,
    dimensions: 'Chain Length: 22 inches, Pendant: 1.5 x 1.2 inches',
    gemstoneDetails: 'Auspicious Black Onyx Beads & 22KT Gold Wire work',
  },
  {
    id: 'LJ-GD-NK-13',
    name: 'Traditional 3-Line Solid Gold Matarmala',
    hindiName: 'पारंपरिक ३-लड़ी ठोस सोने की मटरमाला',
    code: 'LJ-MM-916-13',
    metalCategory: 'gold',
    bodyPlacement: 'neck',
    ornamentType: 'Matarmala',
    hindiCategory: 'मटरमाला',
    category: 'necklaces',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 32.4,
    netGoldWeight: 32.4,
    makingChargePercent: 9,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Traditional hollow/solid crafted gold beaded Matarmala with alternating diamond-cut polished beads strung on flexible gold wire. A timeless heirloom of Chhattisgarh.',
    hallmarkCode: 'HUID-916-SRY-113',
    tags: ['Matarmala', 'Necklaces', 'Heirloom', 'Pure Gold'],
    occasion: 'Festive',
    dimensions: 'Length: 20 inches with "S" hook closure',
    gemstoneDetails: '100% Solid 22K Gold Beads (Zero stones)',
  },
  {
    id: 'LJ-GD-NK-14',
    name: 'Heritage Chhattisgarh Antique Gold Hansuli',
    hindiName: 'हेरिटेज छत्तीसगढ़ी एंटीक स्वर्ण हँसुली',
    code: 'LJ-HN-916-14',
    metalCategory: 'gold',
    bodyPlacement: 'neck',
    ornamentType: 'Hansuli',
    hindiCategory: 'हँसुली / हंसली',
    category: 'necklaces',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 52.0,
    netGoldWeight: 52.0,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Rigid torque neckpiece (Hansuli) with tapered ends, hand-carved ethnic motifs, and central floral medallion. A signature jewel cherished across generations in Sariya.',
    hallmarkCode: 'HUID-916-SRY-114',
    tags: ['Hansuli', 'Necklaces', 'Antique', 'Heritage', 'Solid Gold'],
    occasion: 'Bridal',
    dimensions: 'Circumference: 16 inches with hinge opening',
    gemstoneDetails: 'Solid 22KT Hallmark Yellow Gold',
  },

  // ==========================================
  // GOLD JEWELRY - HANDS & ARMS (हाथ व बाजू)
  // ==========================================
  {
    id: 'LJ-GD-HN-15',
    name: 'Mayur Pankh Royal Gold Bajuband (Armlet)',
    hindiName: 'मयूर पंख राजसी स्वर्ण बाजूबंद',
    code: 'LJ-BB-916-15',
    metalCategory: 'gold',
    bodyPlacement: 'hands',
    ornamentType: 'Bajuband',
    hindiCategory: 'बाजूबंद',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 28.5,
    netGoldWeight: 26.8,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Traditional armlet (Bajuband) featuring peacock meenakari work, kundan stone clusters, and red silk dori tie-backs for brides.',
    hallmarkCode: 'HUID-916-SRY-115',
    tags: ['Bajuband', 'Hands', 'Armlet', 'Bridal', 'Kundan'],
    occasion: 'Bridal',
    dimensions: 'Central plate: 7.5 x 3.5 cm, Adjustable gold bullion dori',
    gemstoneDetails: 'Polki Stones, Green & Red Meenakari Enamel',
  },
  {
    id: 'LJ-GD-HN-16',
    name: 'Rajwada Nakkashidar Solid Gold Kangan (Pair)',
    hindiName: 'रजवाड़ा नक्काशीदार सोने का कंगन (जोड़ी)',
    code: 'LJ-KG-916-16',
    metalCategory: 'gold',
    bodyPlacement: 'hands',
    ornamentType: 'Kangan',
    hindiCategory: 'कंगन (जोड़ी)',
    category: 'bangles',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 54.2,
    netGoldWeight: 54.2,
    makingChargePercent: 9,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'A majestic pair of screw-lock heavy traditional bangles (Kangan / Pacheli Kada) with handcrafted micro-granulation and floral die work. Perfect for weddings and auspicious ceremonies.',
    hallmarkCode: 'HUID-916-SRY-116',
    tags: ['Kangan', 'Hands', 'Bangles', 'Solid Gold', 'Bestseller'],
    occasion: 'Bridal',
    featured: true,
    bestseller: true,
    dimensions: 'Size 2.4, 2.6, 2.8 with safety screw clasp',
    gemstoneDetails: 'Solid 22KT Hallmark Yellow Gold (Pair of 2)',
  },
  {
    id: 'LJ-GD-HN-17',
    name: 'Royal Rajasthani Gold Bracelet (Pahunchi)',
    hindiName: 'राजसी राजस्थानी स्वर्ण पहुंची ब्रेसलेट',
    code: 'LJ-PC-916-17',
    metalCategory: 'gold',
    bodyPlacement: 'hands',
    ornamentType: 'Bracelet (Pahunchi)',
    hindiCategory: 'पहुंची / ब्रेसलेट',
    category: 'bangles',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 26.8,
    netGoldWeight: 25.5,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Flexible royal Pahunchi bracelet featuring linked gold pods, micro-pearl border edging, and a velvet lining. Adorns wrists with aristocratic grandeur.',
    hallmarkCode: 'HUID-916-SRY-117',
    tags: ['Bracelet', 'Pahunchi', 'Hands', 'Wrists', 'Bridal'],
    occasion: 'Festive',
    featured: true,
    dimensions: 'Length: 7.5 inches with adjustable cord lock',
    gemstoneDetails: '22K Gold Links, Cultured Seed Pearls',
  },
  {
    id: 'LJ-GD-HN-18',
    name: 'Kalyani Bridal Kundan & Gold Hathphool',
    hindiName: 'कल्याणी ब्राइडल कुंदन स्वर्ण हथफूल',
    code: 'LJ-HP-916-18',
    metalCategory: 'gold',
    bodyPlacement: 'hands',
    ornamentType: 'Hathphool',
    hindiCategory: 'हथफूल',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 31.0,
    netGoldWeight: 29.2,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Hand harness (Hathphool) connecting a kundan wristlet to 3 finger rings via delicate golden pearl chain webs. The ultimate bridal hand adornment.',
    hallmarkCode: 'HUID-916-SRY-118',
    tags: ['Hathphool', 'Hands', 'Bridal', 'Kundan', 'Royal'],
    occasion: 'Bridal',
    dimensions: 'Wrist: 6.5-8 inches adjustable, Ring sizes: Universal adjustable',
    gemstoneDetails: 'Polki Stones, Natural Freshwater Pearls in 22K Gold',
  },

  // ==========================================
  // GOLD JEWELRY - WAIST (कमर के आभूषण)
  // ==========================================
  {
    id: 'LJ-GD-WS-19',
    name: 'Rajwadi Shahi Gold Kamarband (Tagdi)',
    hindiName: 'रजवाड़ी शाही स्वर्ण कमरबंद (तगड़ी)',
    code: 'LJ-KB-916-19',
    metalCategory: 'gold',
    bodyPlacement: 'waist',
    ornamentType: 'Kamarband',
    hindiCategory: 'कमरबंद / तगड़ी',
    category: 'bridal',
    metal: '22K Gold',
    purity: '22KT (916) BIS Hallmarked',
    grossWeight: 72.5,
    netGoldWeight: 72.5,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a18b5ce7377?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Solid 22KT gold Kamarband (Waistband / Tagdi) crafted with temple-engraved links, hanging golden ghungroo bells, and adjustable hook chain.',
    hallmarkCode: 'HUID-916-SRY-119',
    tags: ['Kamarband', 'Waist', 'Tagdi', 'Bridal', 'Solid Gold'],
    occasion: 'Bridal',
    featured: true,
    dimensions: 'Belt Length: 32 inches + 6 inches extension chain',
    gemstoneDetails: '100% Solid 22K Gold (Zero lac/wax filler)',
  },

  // ==========================================
  // SILVER JEWELRY - FEET (पैरों के चांदी आभूषण)
  // ==========================================
  {
    id: 'LJ-SL-FT-20',
    name: 'Shahi 925 Pure Silver Bridal Payal',
    hindiName: 'शाही 925 शुद्ध चांदी ब्राइडल पायल',
    code: 'LJ-PY-925-20',
    metalCategory: 'silver',
    bodyPlacement: 'feet',
    ornamentType: 'Payal',
    hindiCategory: 'चांदी पायल',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Sterling Silver with Anti-Tarnish Rhodium Polish',
    grossWeight: 180.0,
    netGoldWeight: 0,
    makingChargePercent: 14,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Heavily decorated bridal silver anklets with musical jingle bells (ghungroo) and matching embossed design. Highly coveted for Chhattisgarh wedding traditions.',
    hallmarkCode: 'HUID-SIL-925-120',
    tags: ['Payal', 'Silver', 'Feet', 'Bridal', 'Bestseller'],
    occasion: 'Bridal',
    featured: true,
    bestseller: true,
    dimensions: 'Length: 10.5 inches (Standard Bridal fit with "S" clasp)',
    gemstoneDetails: 'Pure 925 Sterling Silver, Anti-Tarnish Treated',
  },
  {
    id: 'LJ-SL-FT-21',
    name: 'Traditional Chandi Ghunghroo Anklet',
    hindiName: 'पारंपरिक संगीतमय चांदी घुंघरू पायल',
    code: 'LJ-GH-925-21',
    metalCategory: 'silver',
    bodyPlacement: 'feet',
    ornamentType: 'Ghunghroo',
    hindiCategory: 'घुंघरू पायल',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Fine Sterling Silver',
    grossWeight: 120.0,
    netGoldWeight: 0,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Multi-cluster musical sounding Ghunghroo payal in solid sterling silver that produces a soothing, melodious chham-chham sound with every step.',
    hallmarkCode: 'HUID-SIL-925-121',
    tags: ['Ghunghroo', 'Silver', 'Feet', 'Traditional'],
    occasion: 'Festive',
    dimensions: 'Length: 10 inches with reinforced screw pin',
    gemstoneDetails: 'Solid Sounding Silver Ghunghroo Bells',
  },
  {
    id: 'LJ-SL-HN-22',
    name: 'Solid 925 Silver Hand Kada (Men & Women)',
    hindiName: 'ठोस ९२५ चांदी हाथ कड़ा (पुरुष व महिला)',
    code: 'LJ-KD-925-22',
    metalCategory: 'silver',
    bodyPlacement: 'hands',
    ornamentType: 'Kada',
    hindiCategory: 'चांदी कड़ा',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Solid Sterling Silver',
    grossWeight: 65.0,
    netGoldWeight: 0,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Heavy solid silver kada featuring engraved trishul / lion motifs with mirror polish finish. Worn for spiritual energy, prosperity, and timeless style.',
    hallmarkCode: 'HUID-SIL-925-122',
    tags: ['Kada', 'Silver', 'Hands', 'Solid Silver', 'Mens'],
    occasion: 'Daily Wear',
    featured: true,
    dimensions: 'Inner Diameter: 62mm to 68mm',
    gemstoneDetails: '100% Solid 925 Sterling Silver (No hollow space)',
  },
  {
    id: 'LJ-SL-FT-23',
    name: 'Chhattisgarhi Antique Tribal Silver Panjel',
    hindiName: 'पारंपरिक छत्तीसगढ़ी एंटीक चांदी पंजेल',
    code: 'LJ-PJ-925-23',
    metalCategory: 'silver',
    bodyPlacement: 'feet',
    ornamentType: 'Panjel',
    hindiCategory: 'पंजेल',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Antique Oxidized Silver',
    grossWeight: 220.0,
    netGoldWeight: 0,
    makingChargePercent: 15,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Heavy traditional Chhattisgarhi foot ornament (Panjel) with antique tribal motifs, casted solid bells, and secure key-pin lock.',
    hallmarkCode: 'HUID-SIL-925-123',
    tags: ['Panjel', 'Silver', 'Feet', 'Antique', 'Heritage'],
    occasion: 'Bridal',
    dimensions: 'Anklet band width: 2.2 inches, Weight: 220g pair',
    gemstoneDetails: 'Solid Antique Hallmarked Silver',
  },
  {
    id: 'LJ-SL-FT-24',
    name: 'Embossed Pure Silver Bridal Bichhiya (Pair)',
    hindiName: 'नक्काशीदार शुद्ध चांदी बिछिया (जोड़ी)',
    code: 'LJ-BC-925-24',
    metalCategory: 'silver',
    bodyPlacement: 'feet',
    ornamentType: 'Bichhiya',
    hindiCategory: 'बिछिया (जोड़ी)',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Pure Sterling Silver',
    grossWeight: 14.5,
    netGoldWeight: 0,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Auspicious pair of traditional bridal toe rings (Bichhiya) with peacock and lotus embossing. Free-size openable ring for comfortable wear.',
    hallmarkCode: 'HUID-SIL-925-124',
    tags: ['Bichhiya', 'Silver', 'Feet', 'Toe Rings', 'Auspicious'],
    occasion: 'Daily Wear',
    featured: true,
    dimensions: 'Universal adjustable band',
    gemstoneDetails: '925 Sterling Silver with Rhodium Coating',
  },
  {
    id: 'LJ-SL-FT-25',
    name: 'Delicate Floral Silver Chutki (Toe Ring)',
    hindiName: 'नाजुक फ्लोरल चांदी चुटकी (टो रिंग)',
    code: 'LJ-CK-925-25',
    metalCategory: 'silver',
    bodyPlacement: 'feet',
    ornamentType: 'Chutki',
    hindiCategory: 'चुटकी',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Sterling Silver',
    grossWeight: 8.2,
    netGoldWeight: 0,
    makingChargePercent: 12,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Dainty lightweight silver Chutki toe ring set with sparkling CZ accents, ideal for daily wear and festive gifting.',
    hallmarkCode: 'HUID-SIL-925-125',
    tags: ['Chutki', 'Silver', 'Feet', 'Daily Wear'],
    occasion: 'Daily Wear',
    dimensions: 'Adjustable size',
    gemstoneDetails: 'Cubic Zirconia crystals in 925 Silver Prongs',
  },

  // ==========================================
  // SILVER JEWELRY - WAIST (कमर के चांदी आभूषण)
  // ==========================================
  {
    id: 'LJ-SL-WS-26',
    name: 'Shahi Chandi Kamar Kardhani (Waist Belt)',
    hindiName: 'शाही चांदी कमर करधनी (कमरबंद)',
    code: 'LJ-KD-925-26',
    metalCategory: 'silver',
    bodyPlacement: 'waist',
    ornamentType: 'Kardhani',
    hindiCategory: 'करधनी',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Solid Sterling Silver',
    grossWeight: 280.0,
    netGoldWeight: 0,
    makingChargePercent: 14,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Heavy multi-strand solid silver Kardhani featuring handcrafted chains, floral center buckles, and hanging ghungroo bells for brides and festive celebrations.',
    hallmarkCode: 'HUID-SIL-925-126',
    tags: ['Kardhani', 'Silver', 'Waist', 'Bridal', 'Heritage'],
    occasion: 'Bridal',
    featured: true,
    dimensions: 'Length: 34 inches + 4 inches extension chain',
    gemstoneDetails: 'Solid 925 Sterling Silver (Zero wax filler)',
  },

  // ==========================================
  // SILVER JEWELRY - SPECIALS (हँसुली व छल्ले)
  // ==========================================
  {
    id: 'LJ-SL-SP-27',
    name: 'Antique Solid Silver Hansuli (Neck Torque)',
    hindiName: 'एंटीक ठोस चांदी हँसुली (नेक टॉर्क)',
    code: 'LJ-SH-925-27',
    metalCategory: 'silver',
    bodyPlacement: 'silver-special',
    ornamentType: 'Silver Hansuli',
    hindiCategory: 'चांदी हँसुली',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Solid Antique Silver',
    grossWeight: 95.0,
    netGoldWeight: 0,
    makingChargePercent: 11,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Authentic Chhattisgarhi solid silver Hansuli torque neckpiece with tapered engraved terminals and mirror polish finish.',
    hallmarkCode: 'HUID-SIL-925-127',
    tags: ['Silver Hansuli', 'Silver', 'Neck', 'Antique', 'Heritage'],
    occasion: 'Festive',
    dimensions: 'Diameter: 14 cm flexible neck torque',
    gemstoneDetails: '100% Solid 925 Silver',
  },
  {
    id: 'LJ-SL-SP-28',
    name: 'Handcrafted 925 Silver Chhalle (Rings Set)',
    hindiName: 'हस्तनिर्मित ९२५ चांदी छल्ले (अंगूठी सेट)',
    code: 'LJ-CH-925-28',
    metalCategory: 'silver',
    bodyPlacement: 'silver-special',
    ornamentType: 'Silver Chhalle',
    hindiCategory: 'चांदी छल्ले',
    category: 'silver',
    metal: '925 Sterling Silver',
    purity: '92.5% Fine Sterling Silver',
    grossWeight: 12.0,
    netGoldWeight: 0,
    makingChargePercent: 10,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Set of 3 auspicious plain & diamond-cut silver chhalle (thumb and finger rings) believed to bring peace, prosperity, and cooling wellness.',
    hallmarkCode: 'HUID-SIL-925-128',
    tags: ['Silver Chhalle', 'Silver', 'Hands', 'Rings', 'Auspicious'],
    occasion: 'Daily Wear',
    dimensions: 'Assorted ring sizes 14, 16, 18',
    gemstoneDetails: 'Solid 925 Sterling Silver',
  }
];

export const HERITAGE_TIMELINE = [
  {
    year: '1968',
    title: 'The Inception by Shri Sadhuram Sonar Ji',
    description: 'Founded with a simple yet unshakeable vow: to provide every family in Sariya and surrounding villages with genuine, unadulterated gold and handcrafted silver ornaments with complete honest purity.',
  },
  {
    year: '1985',
    title: 'Mastery of Traditional Filigree & Bridal Sets',
    description: 'Expanded workshop with seasoned karigars specializing in authentic Chhattisgarhi and Rajasthani wedding jewelry, making Laxmi Jewellers the trusted destination for bridal trousseaus.',
  },
  {
    year: '2001',
    title: 'Pioneering BIS Hallmarking in the Region',
    description: 'Among the earliest showrooms in the Sarangarh-Raigarh belt to adopt government-certified BIS 916 hallmarking standards and computerized karatmeter testing.',
  },
  {
    year: 'Today',
    title: '3rd Generation Modern Craftsmanship with 100% HUID',
    description: 'Continuing the sacred legacy of Shri Sadhuram Sonar Ji, blending traditional artisan mastery with modern 3D CAD bespoke design, live rate transparency, and digital customer service.',
  }
];

export const TRUST_PILLARS = [
  {
    title: '100% 6-Digit HUID Hallmarked',
    subtitle: 'Government Verified Purity',
    description: 'Every gold ornament carries the laser-etched BIS logo and 6-digit HUID code, verifiable on the BIS Care App.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Zero Deduction on Weight',
    subtitle: 'Transparent Net Weight Billing',
    description: 'We weigh every piece in front of you. Gemstones and threads are deducted to calculate pure gold net weight accurately.',
    icon: 'Scale',
  },
  {
    title: 'Generational Goldsmith Mastery',
    subtitle: 'Crafted by Master Karigars',
    description: 'Over 5 decades of artisan excellence founded by Shri Sadhuram Sonar Ji, passed down through master jewelers.',
    icon: 'Award',
  },
  {
    title: 'Lifetime Exchange & Buyback',
    subtitle: 'Guaranteed Resale Value',
    description: 'Lifetime exchange guarantee on all hallmarked gold and silver jewelry with current market rate calculation.',
    icon: 'RefreshCw',
  }
];

export const REVIEWS = [
  {
    name: 'Rajesh Agrawal',
    location: 'Sariya, Chhattisgarh',
    rating: 5,
    text: "Shri Sadhuram Sonar Ji ki dukan has been our family jeweller for 3 generations. For my daughter's wedding, the bridal set, kangan, and kamarband were crafted with unmatched perfection and 916 purity.",
    item: 'Padmavati Bridal Set & Kangan',
  },
  {
    name: 'Sunita Sharma',
    location: 'Sarangarh',
    rating: 5,
    text: 'The gold rate transparency and making charge breakdown is the best in Sariya market. The Pahunchi bracelet and silver payal are gorgeous.',
    item: 'Pahunchi Bracelet & Silver Payal',
  },
  {
    name: 'Manoj Patel',
    location: 'Raigarh',
    rating: 5,
    text: 'Purchased 925 silver payal, kardhani, and silver kada. Excellent quality, heavy solid silver, and polite customer service.',
    item: 'Silver Kardhani & Payal Set',
  }
];

// Helper calculation function for live estimate with safe fallbacks
export function calculateItemPrice(
  product: Product,
  rates: MetalRates
): {
  baseGoldCost: number;
  makingChargeCost: number;
  gstCost: number;
  totalEstimatedPrice: number;
} {
  const safeRates = rates || INITIAL_METAL_RATES;
  let ratePerGram = 0;

  if (product.metal === '24K Gold') {
    ratePerGram = (safeRates.gold24kPer10g || 155130) / 10;
  } else if (product.metal === '22K Gold') {
    ratePerGram = (safeRates.gold22kPer10g || 142200) / 10;
  } else if (product.metal === '18K Gold') {
    ratePerGram = (safeRates.gold18kPer10g || 116350) / 10;
  } else if (product.metal === '999 Pure Silver') {
    ratePerGram = (safeRates.silver999Per10g || 2491) / 10;
  } else if (product.metal === '925 Sterling Silver') {
    ratePerGram = (safeRates.silver925Per10g || 2304) / 10;
  } else {
    ratePerGram = product.metalCategory === 'gold' 
      ? (safeRates.gold22kPer10g || 142200) / 10 
      : (safeRates.silver925Per10g || 2304) / 10;
  }

  const weight = product.netGoldWeight > 0 ? product.netGoldWeight : product.grossWeight;
  const safeWeight = Number(weight) || 10;
  const baseGoldCost = Math.round(safeWeight * ratePerGram);
  const makingChargePercent = Number(product.makingChargePercent) || 10;
  const makingChargeCost = Math.round((baseGoldCost * makingChargePercent) / 100);
  const subtotal = baseGoldCost + makingChargeCost;
  const gstCost = Math.round((subtotal * 3) / 100); // 3% standard jewellery GST
  const totalEstimatedPrice = subtotal + gstCost;

  return {
    baseGoldCost,
    makingChargeCost,
    gstCost,
    totalEstimatedPrice,
  };
}

export function formatINR(amount: number): string {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return '₹0';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
