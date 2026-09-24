// Hardware fittings catalogue data
export const HARDWARE_MRP = 500;

export type HwVariant = {
  brands: string[];
  sizes: string[];
  materials?: string[];
  finishes?: string[];
  image?: string;
  stock?: number;
  sku?: string;
  price?: number;
};

export type HwCategory = {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  variants: HwVariant[];
};

export type HwGroup = {
  id: string;
  name: string;
  categories: HwCategory[];
};

export type HwBrandCard = {
  categoryName: string;
  groupName: string;
  brand: string;
  sizes: string[];
  materials?: string[];
  finishes?: string[];
  image?: string;
  stock: number;
  sku?: string;
  price?: number;
};

export type CategoryCardMeta = {
  id: string;
  name: string;
  code: string;
  badge: string;
  countText: string;
  icon: string;
  description: string;
};

export const CORE_CATEGORIES: CategoryCardMeta[] = [
  {
    id: "All",
    name: "All Hardware",
    code: "CAT-001",
    badge: "FULL RANGE",
    countText: "134 Products",
    icon: "🧰",
    description: "Complete master collection of architectural hardware fixtures and structural fittings.",
  },
  {
    id: "hinges",
    name: "Hinges",
    code: "CAT-002",
    badge: "STAINLESS STEEL",
    countText: "42 Variants",
    icon: "🚪",
    description: "Heavy-duty SS-304 butt hinges, ball-bearing joints, and soft-close door hinges.",
  },
  {
    id: "tower-bolts",
    name: "Tower Bolts",
    code: "CAT-003",
    badge: "HEAVY DUTY",
    countText: "28 Sizes",
    icon: "🔒",
    description: "Surface mount barrel and tower bolts engineered for high-security doors & casements.",
  },
  {
    id: "aldrops",
    name: "Aldrops",
    code: "CAT-004",
    badge: "FORGED BRASS",
    countText: "18 Models",
    icon: "🗝️",
    description: "Classic residential sliding door aldrops featuring solid forged brass and SS construction.",
  },
  {
    id: "latches",
    name: "Latches",
    code: "CAT-005",
    badge: "SMOOTH ACTION",
    countText: "32 Designs",
    icon: "🔐",
    description: "Precision spring latches, night latches, and safety bolt keeps in antique and satin finishes.",
  },
  {
    id: "handles",
    name: "Handles",
    code: "CAT-006",
    badge: "BESTSELLER",
    countText: "50+ Styles",
    icon: "✊",
    description: "Solid forged lever door handles with sleek modern rosettes and heavy entrance pull handles.",
  },
  {
    id: "coat-hooks",
    name: "Coat Hooks",
    code: "CAT-007",
    badge: "ZINC ALLOY",
    countText: "24 Options",
    icon: "🪝",
    description: "Heavy-duty dual prong and single robe hooks cast from premium anti-rust zinc alloys.",
  },
  {
    id: "baby-latches",
    name: "Baby Latches",
    code: "CAT-008",
    badge: "CHILD SAFE",
    countText: "14 Types",
    icon: "🛡️",
    description: "Child-safety multi-purpose cabinet & drawer latches with dual action locks.",
  },
  {
    id: "door-stoppers",
    name: "Door Stoppers",
    code: "CAT-009",
    badge: "SILENT STOP",
    countText: "22 Variants",
    icon: "🛑",
    description: "Magnetic floor-mount and wall-mounted dome door stoppers with heavy rubber buffers.",
  },
  {
    id: "deluxe-window-stays",
    name: "Deluxe Window Stays",
    code: "CAT-010",
    badge: "WINDPROOF",
    countText: "16 Models",
    icon: "🪟",
    description: "Adjustable casement window stay arms & heavy friction hinges built for stormy weather.",
  },
  {
    id: "wardrobe-handles-knobs",
    name: "Wardrobe Handles & Knobs",
    code: "CAT-011",
    badge: "DESIGNER",
    countText: "40+ Styles",
    icon: "✨",
    description: "Cabinet knobs, profile handles & wardrobe pulls in gold, matt black and satin nickel.",
  },
  {
    id: "box-hinges",
    name: "Box Hinges",
    code: "CAT-012",
    badge: "HYDRAULIC",
    countText: "20 Types",
    icon: "📦",
    description: "Concealed box hinges & hydraulic 3D adjustable cabinet soft-close hinges.",
  },
  {
    id: "telescope-channels",
    name: "Telescope Channels",
    code: "CAT-013",
    badge: "BALL BEARING",
    countText: "36 Sizes",
    icon: "🗄️",
    description: "Full extension ball bearing telescopic drawer runners & soft-close channels.",
  },
];

export const ALL_BRANDS = [
  "Jyothi",
  "KAR",
  "Jai Shankar",
  "Ebco",
  "Simor",
  "Duster",
  "Star",
  "Crane",
  "Plus Point",
  "Door Safe",
  "Ivas",
  "Sleek",
  "Hettich",
  "Kolin",
  "Curio",
];

export const ALL_MATERIALS = [
  "Stainless Steel",
  "Brass",
  "Aluminium",
  "Aluminium/Brass",
];

export const ALL_FINISHES = [
  "SS",
  "Bright",
  "Antique",
  "Satin",
  "Matt",
  "Gold",
  "Gloss",
  "Soft close",
];

export const hardwareGroups: HwGroup[] = [
  {
    id: "hinges-pivots",
    name: "Hinges & Pivots",
    categories: [
      {
        id: "hinges",
        name: "Hinges",
        description: "Heavy duty, soft-close & architectural door hinges",
        variants: [
          { brands: ["Ivas", "KAR"], sizes: ["3\"", "4\"", "5\"", "6\""], materials: ["Stainless Steel"], finishes: ["SS", "Antique"], stock: 15 },
          { brands: ["Jyothi", "KAR"], sizes: ["3\"", "4\"", "5\"", "6\"", "8\""], materials: ["Brass"], finishes: ["Satin", "Antique"], stock: 20 },
        ],
      },
      {
        id: "box-hinges",
        name: "Box Hinges",
        description: "Concealed box hinges & hydraulic cabinet soft-close hinges",
        variants: [
          { brands: ["Sleek", "Simor", "Hettich", "Ebco", "Ivas"], sizes: ["6\"", "8\"", "16\""], materials: ["Stainless Steel"], finishes: ["Soft close", "SS"], stock: 12 },
        ],
      },
    ],
  },
  {
    id: "bolts-latches-aldrops",
    name: "Bolts, Latches & Aldrops",
    categories: [
      {
        id: "tower-bolts",
        name: "Tower Bolts",
        description: "Brass, SS & Aluminium tower bolts for doors & windows",
        variants: [
          { brands: ["Jyothi", "Crane"], sizes: ["3\"", "4\"", "6\"", "8\"", "10\"", "12\"", "18\"", "24\""], materials: ["Aluminium"], finishes: ["SS", "Antique", "Gold", "Bright"], stock: 25 },
          { brands: ["Jyothi", "KAR", "Plus Point"], sizes: ["3\"", "4\"", "6\"", "8\"", "10\"", "12\""], materials: ["Brass"], finishes: ["Satin", "Antique"], stock: 18 },
        ],
      },
      {
        id: "aldrops",
        name: "Aldrops",
        description: "Security aldrops in premium brass, SS & aluminium finishes",
        variants: [
          { brands: ["Jyothi", "Crane"], sizes: ["8\"", "10\"", "12\""], materials: ["Aluminium"], finishes: ["Bright", "SS", "Antique", "Gold"], stock: 14 },
          { brands: ["Jai Shankar"], sizes: ["10\"", "12\""], materials: ["Stainless Steel"], finishes: ["SS"], stock: 16 },
          { brands: ["Jyothi", "Plus Point", "Door Safe"], sizes: ["8\"", "10\"", "12\"", "14\"", "18\""], materials: ["Brass"], finishes: ["Antique", "Satin"], stock: 10 },
        ],
      },
      {
        id: "latches",
        name: "Latches",
        description: "Door & window latch locks for residential & commercial use",
        variants: [
          { brands: ["Jyothi", "Crane", "Jai Shankar", "Plus Point", "Door Safe"], sizes: ["10\"", "12\""], materials: ["Aluminium", "Brass", "Stainless Steel"], finishes: ["Bright", "SS", "Antique", "Gold"], stock: 20 },
        ],
      },
      {
        id: "baby-latches",
        name: "Baby Latches",
        description: "Compact latches for cabinets, windows & light doors",
        variants: [
          { brands: ["Jyothi", "Crane", "KAR"], sizes: ["3\"", "4\""], materials: ["Aluminium", "Brass"], finishes: ["Bright", "SS", "Antique", "Gold"], stock: 22 },
        ],
      },
    ],
  },
  {
    id: "handles-knobs",
    name: "Handles & Knobs",
    categories: [
      {
        id: "handles",
        name: "Handles",
        description: "Designer pull handles, lever handles & entrance door fittings",
        variants: [
          { brands: ["Jyothi", "Crane", "Jai Shankar", "Plus Point", "Door Safe", "Kolin"], sizes: ["4\"", "5\"", "6\"", "7\"", "8\""], materials: ["Aluminium", "Stainless Steel", "Brass"], finishes: ["Bright", "SS", "Antique", "Gold"], stock: 30 },
        ],
      },
      {
        id: "wardrobe-handles-knobs",
        name: "Wardrobe Handles & Knobs",
        description: "Cabinet knobs, profile handles & wardrobe pulls",
        variants: [
          { brands: ["Simor", "Duster", "Star", "Ebco"], sizes: ["96mm", "160mm", "224mm", "256mm", "288mm"], materials: ["Aluminium", "Zinc Alloy"], finishes: ["Matt", "Satin", "Gold", "SS"], stock: 28 },
        ],
      },
    ],
  },
  {
    id: "stoppers-stays-hooks",
    name: "Stoppers, Stays & Hooks",
    categories: [
      {
        id: "door-stoppers",
        name: "Door Stoppers",
        description: "Floor & wall mounted door stoppers and holders",
        variants: [
          { brands: ["Jyothi", "Crane", "Curio", "Door Safe", "Plus Point", "Jai Shankar"], sizes: ["3\"", "4\"", "6\"", "8\""], materials: ["Aluminium", "Brass", "Stainless Steel"], finishes: ["Bright", "SS", "Gold", "Antique"], stock: 25 },
        ],
      },
      {
        id: "deluxe-window-stays",
        name: "Deluxe Window Stays",
        description: "Adjustable casement window stay arms & friction hinges",
        variants: [
          { brands: ["Jyothi", "Crane"], sizes: ["6\""], materials: ["Aluminium", "Brass"], finishes: ["Bright", "SS", "Gold", "Antique"], stock: 15 },
        ],
      },
      {
        id: "coat-hooks",
        name: "Coat Hooks",
        description: "Wall mounted coat & robe hooks in various finishes",
        variants: [
          { brands: ["Jyothi", "Crane"], sizes: ["4\""], materials: ["Aluminium"], finishes: ["Bright", "Antique", "Gold"], stock: 35 },
        ],
      },
    ],
  },
  {
    id: "sliding-channels",
    name: "Sliding Channels",
    categories: [
      {
        id: "telescope-channels",
        name: "Telescope Channels",
        description: "Ball bearing telescopic drawer runners & soft-close channels",
        variants: [
          { brands: ["Ebco"], sizes: ["8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "24\""], materials: ["Cold Rolled Steel"], finishes: ["Regular", "Soft close"], stock: 40 },
        ],
      },
    ],
  },
];

export function getAllHardwareCards(): HwBrandCard[] {
  const cards: HwBrandCard[] = [];
  hardwareGroups.forEach(group => {
    group.categories.forEach(category => {
      category.variants.forEach(variant => {
        variant.brands.forEach(brand => {
          cards.push({
            categoryName: category.name,
            groupName: group.name,
            brand,
            sizes: variant.sizes,
            materials: variant.materials,
            finishes: variant.finishes,
            image: variant.image,
            stock: variant.stock ?? 10,
            sku: `GM-${brand.substring(0, 3).toUpperCase()}-${category.id.substring(0, 3).toUpperCase()}`,
            price: HARDWARE_MRP,
          });
        });
      });
    });
  });
  return cards;
}

export function getBrandCards(category: HwCategory, groupName: string = "Hardware"): HwBrandCard[] {
  const cards: HwBrandCard[] = [];
  category.variants.forEach(variant =>
    variant.brands.forEach(brand =>
      cards.push({
        categoryName: category.name,
        groupName: groupName,
        brand,
        sizes: variant.sizes,
        materials: variant.materials,
        finishes: variant.finishes,
        image: variant.image || undefined,
        stock: variant.stock ?? 10,
        sku: `GM-${brand.substring(0, 3).toUpperCase()}-${category.id.substring(0, 3).toUpperCase()}`,
        price: HARDWARE_MRP,
      })
    )
  );
  return cards;
}

export type BrandDetail = {
  id: string;
  name: string;
  tagline: string;
  story: string;
  specialty: string;
  country: string;
  badge: string;
  color: string;
};

export const BRAND_DETAILS: BrandDetail[] = [
  {
    id: "ozone",
    name: "Ozone",
    tagline: "Architectural Glass & Fittings Specialist",
    story: "India's market leader in architectural glass hardware, point-fixed spider glazing, patch fittings, and frameless glass partition systems.",
    specialty: "Spider Glazing & Patch Fittings",
    country: "India",
    badge: "Authorized Distributor",
    color: "#0284c7"
  },
  {
    id: "dorma",
    name: "Dorma / Dormakaba",
    tagline: "German Engineering for Glass Controls",
    story: "Global benchmark for heavy-duty hydraulic floor springs, door closers, automatic sliding glass doors, and high-security access controls.",
    specialty: "Hydraulic Floor Springs & Controls",
    country: "Germany",
    badge: "Premium Partner",
    color: "#1e3a8a"
  },
  {
    id: "hafele",
    name: "Häfele",
    tagline: "German Architectural Hardware & Fittings",
    story: "Renowned worldwide for precision door handles, electronic locks, sliding partition hardware, and architectural glass fittings.",
    specialty: "Architectural Hardware & Locks",
    country: "Germany",
    badge: "Authorized Dealer",
    color: "#b91c1c"
  },
  {
    id: "hettich",
    name: "Hettich",
    tagline: "Technik für Möbel - German Furniture Fittings",
    story: "Pioneers in silent soft-close hydraulic cabinet hinges, Quadro telescopic runners, and premium sliding door systems for wardrobes and kitchens.",
    specialty: "Concealed Hinges & Soft-Close Runners",
    country: "Germany",
    badge: "Authorized Stockist",
    color: "#047857"
  },
  {
    id: "ebco",
    name: "Ebco",
    tagline: "India's Premier Furniture & Window Hardware",
    story: "Over 50 years of manufacturing excellence in heavy-duty telescopic drawer slides, window friction stays, and smart storage fittings.",
    specialty: "Telescopic Channels & Window Stays",
    country: "India",
    badge: "Direct Distributor",
    color: "#c2410c"
  },
  {
    id: "jyothi",
    name: "Jyothi",
    tagline: "Solid Brass & SS Architectural Fittings",
    story: "Craftsmanship in solid brass aldrops, decorative entrance handles, heavy tower bolts, and classic architectural door hardware.",
    specialty: "Solid Brass Aldrops & Tower Bolts",
    country: "India",
    badge: "Certified Retailer",
    color: "#854d0e"
  },
  {
    id: "jai-shankar",
    name: "Jai Shankar",
    tagline: "Heavy-Duty Stainless Steel Hardware",
    story: "Grade 304 stainless steel hinges, security latches, and rugged hardware designed for maximum corrosion resistance and longevity.",
    specialty: "Grade 304 SS Hinges & Latches",
    country: "India",
    badge: "Factory Direct",
    color: "#475569"
  },
  {
    id: "simor",
    name: "Simor",
    tagline: "Modern Architectural Pull Handles & Knobs",
    story: "Designer entrance door handles, profile wardrobe pulls, and glass knob locks with satin, antique, and PVD gold finishes.",
    specialty: "Designer Pull Handles & Profiles",
    country: "India",
    badge: "Authorized Stockist",
    color: "#6b21a8"
  }
];


