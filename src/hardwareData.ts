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
  name?: string;
  categoryName: string;
  subcategory?: string;
  groupName: string;
  brand: string;
  description?: string;
  bestFor?: string[];
  features?: string[];
  warranty?: string;
  guarantee?: string;
  density?: string;
  sizes?: string[];
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
    name: "All Products",
    code: "CAT-001",
    badge: "FULL RANGE",
    countText: "156 Products",
    icon: "🧰",
    description: "Complete master collection of architectural hardware, plywood, doors, and structural boards.",
  },
  {
    id: "plywood",
    name: "Plywood",
    code: "CAT-014",
    badge: "BOILING WATERPROOF",
    countText: "14 Items",
    icon: "🪵",
    description: "BWP, Marine Grade, Fire Retardant & Premium Plywood panels.",
  },
  {
    id: "block-board",
    name: "Block Board",
    code: "CAT-015",
    badge: "HARDWOOD CORE",
    countText: "1 Item",
    icon: "🪵",
    description: "Solid hardwood-core block boards for durable furniture & doors.",
  },
  {
    id: "mdp-boards",
    name: "MDP / Boards",
    code: "CAT-016",
    badge: "CALIBRATED",
    countText: "1 Item",
    icon: "📐",
    description: "Medium-density moisture-resistant grade panels and boards.",
  },
  {
    id: "doors",
    name: "Doors",
    code: "CAT-017",
    badge: "WPC SOLID",
    countText: "1 Item",
    icon: "🚪",
    description: "Termite & UV resistant solid WPC doors for interior & main entry.",
  },
  {
    id: "flexible-plywood",
    name: "Flexible Plywood",
    code: "CAT-018",
    badge: "FLEXIBLE",
    countText: "1 Item",
    icon: "🔄",
    description: "Bendable flexi ply for curved furniture, rounded panels & columns.",
  },
  {
    id: "nfc-boards",
    name: "NFC Boards",
    code: "CAT-019",
    badge: "100% WATERPROOF",
    countText: "1 Item",
    icon: "🛡️",
    description: "High-density NFC boards with lifetime 200% waterproof guarantee.",
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
  "KAR",
  "Austin",
  "Wigwam",
  "Royale Touche",
  "Raintree",
  "SV Woods",
  "Jyothi",
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

export const PLYWOOD_BOARDS_PRODUCTS: HwBrandCard[] = [
  {
    name: "KAR Gurjan Silver",
    brand: "KAR",
    categoryName: "Plywood",
    subcategory: "Quality Plywood",
    groupName: "Plywood & Panels",
    description: "Quality plywood suitable for furniture, interior projects, and everyday woodworking applications.",
    bestFor: ["Furniture", "Cabinets", "Shelves", "Wardrobes", "Interior Work"],
    stock: 25,
    sku: "KAR-SLV-PLY"
  },
  {
    name: "KAR Gurjan Gold",
    brand: "KAR",
    categoryName: "Plywood",
    subcategory: "Premium Plywood",
    groupName: "Plywood & Panels",
    description: "Premium plywood designed for furniture, interiors, and general woodworking applications.",
    bestFor: ["Furniture", "Wardrobes", "Kitchen Cabinets", "Interior Work", "Doors"],
    stock: 20,
    sku: "KAR-GLD-PLY"
  },
  {
    name: "KAR Gurjan Platinum",
    brand: "KAR",
    categoryName: "Plywood",
    subcategory: "Waterproof Hardwood Plywood",
    groupName: "Plywood & Panels",
    description: "Waterproof hardwood plywood designed for durable furniture, interiors, and applications where moisture resistance is important.",
    bestFor: ["Kitchen Cabinets", "Wardrobes", "Furniture", "Doors", "Interior Work", "Moisture-prone Areas"],
    features: ["Waterproof Hardwood", "Moisture Resistance"],
    stock: 18,
    sku: "KAR-PLT-PLY"
  },
  {
    name: "Austin Club Structural",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "BWP Structural Plywood",
    groupName: "Plywood & Panels",
    description: "BWP structural plywood designed for strong and reliable furniture, interior, and construction applications.",
    bestFor: ["Furniture", "Construction", "Interiors", "Doors"],
    features: ["BWP Structural Grade"],
    stock: 15,
    sku: "AUS-STR-PLY"
  },
  {
    name: "Austin Gold",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Marine Grade Plywood",
    groupName: "Plywood & Panels",
    description: "Marine-grade plywood designed for durable furniture and interior applications, with a 30-year warranty. A practical choice where long-term durability and moisture resistance are important.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors"],
    warranty: "30 Years",
    stock: 30,
    sku: "AUS-GLD-MAR"
  },
  {
    name: "Austin Platinum Plus",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Premium BWP Plywood",
    groupName: "Plywood & Panels",
    description: "Premium BWP plywood with double-side calibrated construction, quadruple pressing, E0 emission level, and anti-termite & borer protection.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors"],
    features: [
      "Double-side Calibrated Construction",
      "Quadruple Pressing",
      "E0 Emission Level",
      "Anti-termite & Borer Protection"
    ],
    stock: 22,
    sku: "AUS-PLT-PLS"
  },
  {
    name: "Wigwam Contender",
    brand: "Wigwam",
    categoryName: "Plywood",
    subcategory: "Fire Retardant BWP Grade Plywood",
    groupName: "Plywood & Panels",
    description: "Fire-retardant BWP plywood made with 100% hardwood, designed for durable furniture, interiors, and applications requiring enhanced fire resistance.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors", "Commercial Spaces"],
    features: ["Fire-Retardant BWP Grade", "100% Hardwood Core"],
    stock: 16,
    sku: "WIG-CON-FR"
  },
  {
    name: "Wigwam Club Plus",
    brand: "Wigwam",
    categoryName: "Plywood",
    subcategory: "Marine Grade BWP Plywood",
    groupName: "Plywood & Panels",
    description: "Marine-grade BWP plywood with both-side calibrated construction, designed for durable furniture and interior applications with moisture resistance and protection against termites and microbes.",
    bestFor: ["Kitchens", "Furniture", "Wardrobes", "Doors", "Interiors", "Moisture-prone Areas"],
    features: [
      "Both-side Calibrated Construction",
      "Marine Grade BWP",
      "Termite & Microbe Protection"
    ],
    stock: 20,
    sku: "WIG-CLB-PLS"
  },
  {
    name: "Wigwam Excel",
    brand: "Wigwam",
    categoryName: "Plywood",
    subcategory: "Marine Grade BWP Plywood",
    groupName: "Plywood & Panels",
    description: "Marine-grade BWP plywood with calibrated construction, designed for durable furniture and interior applications with moisture resistance and protection against termites and microbes.",
    bestFor: ["Kitchens", "Furniture", "Wardrobes", "Doors", "Interiors", "Moisture-prone Areas"],
    features: [
      "Calibrated Construction",
      "Marine Grade BWP",
      "Termite & Microbe Protection"
    ],
    stock: 25,
    sku: "WIG-EXC-MAR"
  },
  {
    name: "Wigwam Fabricate Gold",
    brand: "Wigwam",
    categoryName: "Block Board",
    subcategory: "Hardwood-Core Block Board",
    groupName: "Block Boards & Wood Panels",
    description: "Hardwood-core block board designed for furniture and interior applications, offering a stable and durable panel for everyday woodworking needs.",
    bestFor: ["Furniture", "Wardrobes", "Cabinets", "Doors", "Interiors"],
    features: ["Hardwood Core"],
    stock: 18,
    sku: "WIG-FAB-BB"
  },
  {
    name: "Wigwam Fabricate Gold (MDP) MR",
    brand: "Wigwam",
    categoryName: "MDP / Boards",
    subcategory: "MR Grade MDP Plywood",
    groupName: "Boards & MDP Panels",
    description: "Medium-density MR grade plywood made with a calibrated panel, designed for furniture and interior applications where a smooth and reliable panel is required.",
    bestFor: ["Furniture", "Cabinets", "Wardrobes", "Shelves", "Interior Work"],
    features: ["MR Grade", "Calibrated Panel", "Medium-Density"],
    stock: 14,
    sku: "WIG-FAB-MDP"
  },
  {
    name: "Royale Touche Performance Ply",
    brand: "Royale Touche",
    categoryName: "Plywood",
    subcategory: "Fire Retardant / BWP Plywood",
    groupName: "Plywood & Panels",
    description: "High-performance plywood designed for durable furniture and interior applications, offering fire-retardant properties and boiling-water resistance.",
    bestFor: ["Kitchens", "Furniture", "Wardrobes", "Doors", "Interiors", "Moisture-prone Areas"],
    features: ["Fire Retardant", "Lifetime Warranty", "Boiling Waterproof"],
    warranty: "Lifetime",
    stock: 28,
    sku: "RTL-PRF-PLY"
  },
  {
    name: "Raintree Suprimo",
    brand: "Raintree",
    categoryName: "Plywood",
    subcategory: "Ultra High Performance Plywood",
    groupName: "Plywood & Panels",
    description: "High-performance plywood featuring a Gurjan face, designed for durable furniture, doors, and interior applications.",
    bestFor: ["Furniture", "Doors", "Wardrobes", "Interiors", "Premium Applications"],
    features: ["Gurjan Face Veneer", "Ultra High Performance"],
    stock: 15,
    sku: "RNT-SUP-PLY"
  },
  {
    name: "Raintree Ultimo",
    brand: "Raintree",
    categoryName: "Plywood",
    subcategory: "Fire-Retardant BWP Plywood",
    groupName: "Plywood & Panels",
    description: "Premium plywood designed for demanding interior and exterior applications, offering fire-retardant performance, water resistance, and long-lasting durability.",
    bestFor: ["Furniture", "Kitchens", "Doors", "Wardrobes", "Interiors", "Exterior Applications"],
    features: ["Fire-Retardant BWP", "Water Resistance", "Exterior & Interior Grade"],
    stock: 12,
    sku: "RNT-ULT-PLY"
  },
  {
    name: "Austin Marine",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Marine Grade BWP Plywood",
    groupName: "Plywood & Panels",
    description: "Marine-grade BWP plywood designed for durable furniture and interior applications, featuring E0 emission level, double-side calibration, quadruple pressing, and protection against termites and borers.",
    bestFor: ["Kitchens", "Furniture", "Wardrobes", "Doors", "Interiors", "Moisture-prone Areas"],
    features: [
      "E0 Emission Level",
      "Double-side Calibration",
      "Quadruple Pressing",
      "Anti-termite Protection",
      "Anti-borer Protection"
    ],
    stock: 30,
    sku: "AUS-MAR-BWP"
  },
  {
    name: "Austin WPC Solid Door",
    brand: "Austin",
    categoryName: "Doors",
    subcategory: "WPC Solid Door",
    groupName: "Doors & Shutters",
    description: "High-durability WPC solid door designed for easy installation and low maintenance, with termite resistance, UV resistance, and high screw-holding capacity.",
    bestFor: ["Main Doors", "Interior Doors", "Bathrooms", "Commercial Spaces", "Residential Projects"],
    features: [
      "Termite Resistant",
      "UV Resistant",
      "High Screw-holding Capacity",
      "Low Maintenance",
      "Easy Installation"
    ],
    stock: 10,
    sku: "AUS-WPC-DOR"
  },
  {
    name: "Austin Flexi Ply",
    brand: "Austin",
    categoryName: "Flexible Plywood",
    subcategory: "Flexible Plywood",
    groupName: "Flexible Panels",
    description: "Flexible plywood designed to bend and curve easily, making it ideal for curved furniture, rounded surfaces, columns, partitions, and creative interior designs.",
    bestFor: ["Curved Furniture", "Rounded Panels", "Columns", "Partitions", "Interior Designs"],
    features: ["Flexible & Bendable"],
    stock: 16,
    sku: "AUS-FLX-PLY"
  },
  {
    name: "Austin Royale",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Premium Plywood",
    groupName: "Plywood & Panels",
    description: "Premium plywood designed for durable furniture and interior applications, featuring E0 emission level, quadruple pressing, double-side calibration, anti-termite & borer protection, and a 30-year warranty.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors"],
    features: [
      "E0 Emission Level",
      "Quadruple Pressing",
      "Double-side Calibration",
      "Anti-termite Protection",
      "Anti-borer Protection"
    ],
    warranty: "30 Years",
    stock: 24,
    sku: "AUS-ROY-PREM"
  },
  {
    name: "Austin Lincoln 710",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Waterproof Plywood",
    groupName: "Plywood & Panels",
    description: "Waterproof plywood designed for durable furniture and interior applications, featuring E0 emission level, water and borer protection, and double-side calibration.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors", "Moisture-prone Areas"],
    features: [
      "E0 Emission Level",
      "Water Protection",
      "Borer Protection",
      "Double-side Calibration"
    ],
    warranty: "15 Years",
    stock: 20,
    sku: "AUS-LNC-710"
  },
  {
    name: "Austin Defender 2X",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "Premium Plywood",
    groupName: "Plywood & Panels",
    description: "High-performance plywood designed for durable furniture and interior applications, featuring E0 emission level, quadruple pressing, double-side calibration, and anti-termite & borer protection.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interiors"],
    features: [
      "E0 Emission Level",
      "Quadruple Pressing",
      "Double-side Calibration",
      "Anti-termite Protection",
      "Anti-borer Protection"
    ],
    stock: 18,
    sku: "AUS-DEF-2X"
  },
  {
    name: "Austin Lincoln MR",
    brand: "Austin",
    categoryName: "Plywood",
    subcategory: "MR Grade Plywood",
    groupName: "Plywood & Panels",
    description: "MR grade plywood designed for reliable furniture and interior applications, featuring E0 emission level, quadruple pressing, double-side calibration, and anti-termite & borer protection.",
    bestFor: ["Furniture", "Kitchens", "Wardrobes", "Doors", "Interior Work"],
    features: [
      "E0 Emission Level",
      "Quadruple Pressing",
      "Double-side Calibration",
      "Anti-termite Protection",
      "Anti-borer Protection"
    ],
    stock: 22,
    sku: "AUS-LNC-MR"
  },
  {
    name: "SV Woods NFC Board",
    brand: "SV Woods",
    categoryName: "NFC Boards",
    subcategory: "High Density NFC Board",
    groupName: "NFC Boards & Frames",
    description: "High-density NFC board designed for frames, boards, doors, and interior applications. It offers 100% waterproof performance, termite resistance, fire-retardant properties, high screw-holding capacity, and a paintable, polishable, and pastable surface.",
    bestFor: ["Door Frames", "Doors", "Furniture", "Interior Applications", "Boards"],
    features: [
      "100% Waterproof",
      "Termite Resistant",
      "Fire Retardant",
      "High Screw-holding Capacity",
      "Paintable",
      "Polishable",
      "Pastable"
    ],
    density: "600 kg/m³",
    guarantee: "Lifetime 200% Guarantee",
    stock: 15,
    sku: "SVW-NFC-BRD"
  }
];

export function getAllHardwareCards(): HwBrandCard[] {
  const cards: HwBrandCard[] = [...PLYWOOD_BOARDS_PRODUCTS];
  hardwareGroups.forEach(group => {
    group.categories.forEach(category => {
      category.variants.forEach(variant => {
        variant.brands.forEach(brand => {
          cards.push({
            name: `${brand} ${category.name}`,
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


