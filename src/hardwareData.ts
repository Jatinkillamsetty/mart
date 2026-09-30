// Hardware fittings catalogue data
export const HARDWARE_MRP = 500;

import karGurjanSilverImg from "../Plywood_images/KAR_Gurjan_Silver.png";
import karGurjanGoldImg from "../Plywood_images/KAR_Gurjan_Gold.png";
import karGurjanPlatinumImg from "../Plywood_images/KAR_Gurjan_Platinum.png";
import austinClubStructuralImg from "../Plywood_images/Austin_Club_Structural.png";
import austinGoldImg from "../Plywood_images/Austin_Gold_Plywood.png";
import austinPlatinumPlusImg from "../Plywood_images/Austin_Platinum_Plus_Product.png";
import wigwamContenderImg from "../Plywood_images/Wigwam_Contender.png";
import wigwamClubPlusImg from "../Plywood_images/Wigwam_Club_Plus.png";
import wigwamExcelImg from "../Plywood_images/Wigwam_Excel.png";
import wigwamFabricateGoldImg from "../Plywood_images/Wigwam_Fabricate_Gold.png";
import wigwamFabricateGoldMdpImg from "../Plywood_images/Wigwam_Fabricate_Gold_MDP_MR.png";
import royaleTouchePerformanceImg from "../Plywood_images/Royal_Touche_Performance_Ply.png";
import raintreeSuprimoImg from "../Plywood_images/Raintree_Suprimo_Plywood.png";
import raintreeUltimoImg from "../Plywood_images/Raintree_Ultimo_Plywood_Only.png";
import austinMarineImg from "../Plywood_images/Austin_Marine_BWP_Plywood.png";
import austinFlexiPlyImg from "../Plywood_images/Austin_Flexi_Ply.png";
import austinRoyaleImg from "../Plywood_images/Austin_Royale.png";
import austinLincolnWaterproofImg from "../Plywood_images/Austin_Lincoln_Waterproof_Ply.png";
import austinDefender2xImg from "../Plywood_images/Austin_Defender_2X.png";
import austinLincolnMrImg from "../Plywood_images/Austin_Lincoln_MR_Plywood.png";
import svWoodsNfcImg from "../Plywood_images/SV_Woods_NFC_Board.png";

// SEPARATE BRAND LOGO PNG IMPORTS
import wigwamLogo from "../separate_brand_logos_png/Wigwam.png";
import royaleToucheLogo from "../separate_brand_logos_png/Royale_Touche.png";
import austinLogo from "../separate_brand_logos_png/Austin_Plywood.png";
import raintreeLogo from "../separate_brand_logos_png/Raintree_Plywood.png";
import saintGobainLogo from "../separate_brand_logos_png/Saint_Gobain.png";
import godrejLogo from "../separate_brand_logos_png/Godrej_Locks.png";
import hettichLogo from "../separate_brand_logos_png/Hettich.png";
import simorLogo from "../separate_brand_logos_png/Simor_Hardware_Fittings.png";
import nimmiLogo from "../separate_brand_logos_png/Nimmi_Hardware.png";
import jyotiLogo from "../separate_brand_logos_png/Jyoti_Brass_Metals.png";
import yaleLogo from "../separate_brand_logos_png/Yale.png";
import taitonLogo from "../separate_brand_logos_png/Taiton_Architectural_Hardware.png";
import sleekLogo from "../separate_brand_logos_png/Sleek_Kitchens.png";
import neolaxeLogo from "../separate_brand_logos_png/Neolaxe_Laminate.png";
import treelamLogo from "../separate_brand_logos_png/Treelam.png";
import newMikaLogo from "../separate_brand_logos_png/New_Mika.png";

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
  "Saint-Gobain",
  "Godrej",
  "Hettich",
  "Simor",
  "Yale",
  "Nimmi",
  "Jyothi",
  "Taiton",
  "Sleek",
  "Neolaxe",
  "Treelam",
  "New Mika",
  "Ebco",
  "Ozone",
  "Dorma",
  "Jai Shankar",
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
    sku: "KAR-SLV-PLY",
    image: karGurjanSilverImg
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
    sku: "KAR-GLD-PLY",
    image: karGurjanGoldImg
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
    sku: "KAR-PLT-PLY",
    image: karGurjanPlatinumImg
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
    sku: "AUS-STR-PLY",
    image: austinClubStructuralImg
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
    sku: "AUS-GLD-MAR",
    image: austinGoldImg
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
    sku: "AUS-PLT-PLS",
    image: austinPlatinumPlusImg
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
    sku: "WIG-CON-FR",
    image: wigwamContenderImg
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
    sku: "WIG-CLB-PLS",
    image: wigwamClubPlusImg
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
    sku: "WIG-EXC-MAR",
    image: wigwamExcelImg
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
    sku: "WIG-FAB-BB",
    image: wigwamFabricateGoldImg
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
    sku: "WIG-FAB-MDP",
    image: wigwamFabricateGoldMdpImg
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
    sku: "RTL-PRF-PLY",
    image: royaleTouchePerformanceImg
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
    sku: "RNT-SUP-PLY",
    image: raintreeSuprimoImg
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
    sku: "RNT-ULT-PLY",
    image: raintreeUltimoImg
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
    sku: "AUS-MAR-BWP",
    image: austinMarineImg
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
    sku: "AUS-WPC-DOR",
    image: austinRoyaleImg
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
    sku: "AUS-FLX-PLY",
    image: austinFlexiPlyImg
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
    sku: "AUS-ROY-PREM",
    image: austinRoyaleImg
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
    sku: "AUS-LNC-710",
    image: austinLincolnWaterproofImg
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
    sku: "AUS-DEF-2X",
    image: austinDefender2xImg
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
    sku: "AUS-LNC-MR",
    image: austinLincolnMrImg
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
    sku: "SVW-NFC-BRD",
    image: svWoodsNfcImg
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
  logoImg?: string;
};

export const BRAND_DETAILS: BrandDetail[] = [
  {
    id: "wigwam",
    name: "Wigwam Plywood",
    tagline: "Ply As It Should Be",
    story: "100% hardwood BWP marine plywood, fire-retardant panels, and microbe-resistant boards for premium interior and structural applications.",
    specialty: "Fire Retardant & Marine BWP Plywood",
    country: "India",
    badge: "Authorized Display Partner",
    color: "#b91c1c",
    logoImg: wigwamLogo
  },
  {
    id: "royale-touche",
    name: "Royale Touche",
    tagline: "Luxury Laminates | Plywood | Wooden Floors",
    story: "India's premier luxury surface decor brand featuring high-pressure laminates, boiling waterproof performance ply, and designer wooden flooring.",
    specialty: "High-Performance BWP Ply & Laminates",
    country: "India",
    badge: "Authorized Stockist",
    color: "#1e3a8a",
    logoImg: royaleToucheLogo
  },
  {
    id: "austin",
    name: "Austin Plywood",
    tagline: "Marine Grade & BWP Structural Plywood",
    story: "Pioneers in double-side calibrated, quadruple-pressed BWP structural plywood, WPC solid doors, and flexi-ply with up to 30-year warranties.",
    specialty: "Marine BWP Plywood & WPC Doors",
    country: "India",
    badge: "Direct Distributor",
    color: "#c2410c",
    logoImg: austinLogo
  },
  {
    id: "raintree",
    name: "Raintree Plywood",
    tagline: "Sirf Shandaar!",
    story: "Ultra-high performance Gurjan face plywood engineered for moisture resistance, high screw-holding capacity, and demanding architectural projects.",
    specialty: "Gurjan Face BWP & Fire-Retardant Ply",
    country: "India",
    badge: "Certified Dealer",
    color: "#15803d",
    logoImg: raintreeLogo
  },
  {
    id: "saint-gobain",
    name: "Saint-Gobain",
    tagline: "World Leader in Architectural & Tough Glass",
    story: "Global pioneer in high-clarity tough glass, acoustic laminated glass, sun-ban solar control glass, and architectural glazing solutions.",
    specialty: "Tough Glass & Architectural Glazing",
    country: "France",
    badge: "Authorized Partner",
    color: "#0284c7",
    logoImg: saintGobainLogo
  },
  {
    id: "godrej",
    name: "Godrej Locks",
    tagline: "Think Safety, Think Godrej",
    story: "India's most trusted name in high-security door locks, digital rim locks, mortise handles, and main entrance security systems.",
    specialty: "Digital & Security Door Locks",
    country: "India",
    badge: "Authorized Retailer",
    color: "#d97706",
    logoImg: godrejLogo
  },
  {
    id: "hettich",
    name: "Hettich",
    tagline: "Technik für Möbel - German Furniture Fittings",
    story: "German engineered silent soft-close hydraulic cabinet hinges, Quadro telescopic runners, and premium wardrobe sliding door systems.",
    specialty: "Concealed Hinges & Soft-Close Runners",
    country: "Germany",
    badge: "Authorized Stockist",
    color: "#047857",
    logoImg: hettichLogo
  },
  {
    id: "simor",
    name: "Simor Hardware",
    tagline: "Hardware Fittings (ISO 9001:2015 Certified)",
    story: "ISO certified modern architectural pull handles, profile wardrobe pulls, glass knob locks, and decorative brass hardware fittings.",
    specialty: "Designer Pull Handles & Profiles",
    country: "India",
    badge: "Certified Distributor",
    color: "#6b21a8",
    logoImg: simorLogo
  },
  {
    id: "nimmi",
    name: "Nimmi Hardware",
    tagline: "The Art of Hardware",
    story: "Precision crafted furniture hardware, zinc alloy cabinet handles, profile handles, and decorative interior fitting accessories.",
    specialty: "Cabinet Handles & Profile Pulls",
    country: "India",
    badge: "Authorized Stockist",
    color: "#a16207",
    logoImg: nimmiLogo
  },
  {
    id: "jyoti",
    name: "Jyothi Brass Metals",
    tagline: "Solid Brass & SS Architectural Fittings",
    story: "Mastery in solid brass aldrops, decorative entrance door handles, heavy barrel tower bolts, and classical architectural door hardware.",
    specialty: "Solid Brass Aldrops & Tower Bolts",
    country: "India",
    badge: "Direct Factory Partner",
    color: "#854d0e",
    logoImg: jyotiLogo
  },
  {
    id: "yale",
    name: "Yale Security",
    tagline: "The World's Favorite Lock Since 1840",
    story: "Global leader in digital smart door locks, biometric fingerprint handles, high-security padlocks, and electronic safe lockers.",
    specialty: "Biometric & Digital Smart Locks",
    country: "USA",
    badge: "Authorized Dealer",
    color: "#eab308",
    logoImg: yaleLogo
  },
  {
    id: "taiton",
    name: "Taiton Hardware",
    tagline: "Architectural Hardware Excellence",
    story: "Heavy-duty stainless steel spider fittings, glass patch fittings, hydraulic floor springs, and frameless glass partition hardware.",
    specialty: "Spider Glazing & Glass Patch Fittings",
    country: "India",
    badge: "Certified Partner",
    color: "#0369a1",
    logoImg: taitonLogo
  },
  {
    id: "sleek",
    name: "Sleek Kitchens by Asian Paints",
    tagline: "Complete Modular Kitchen & Chimneys Solutions",
    story: "Modern modular kitchen baskets, corner pull-out systems, chimneys, hobs, and built-in kitchen appliances.",
    specialty: "Modular Kitchen Baskets & Hardware",
    country: "India",
    badge: "Authorized Display Center",
    color: "#b91c1c",
    logoImg: sleekLogo
  },
  {
    id: "neolaxe",
    name: "Neolaxe Laminate",
    tagline: "High-End Decorative Laminates & Surfaces",
    story: "Exclusive 1mm acrylic finish laminates, textured woodgrain laminates, and anti-fingerprint surface boards for luxury furniture.",
    specialty: "1mm Acrylic & Textured Laminates",
    country: "India",
    badge: "Authorized Stockist",
    color: "#475569",
    logoImg: neolaxeLogo
  },
  {
    id: "treelam",
    name: "Treelam",
    tagline: "Elegantly Classy Surface Laminates",
    story: "Premium decorative laminate sheets, synchronised wood finishes, metallic laminates, and exterior wall cladding panels.",
    specialty: "Synchronised & Exterior Laminates",
    country: "India",
    badge: "Certified Stockist",
    color: "#166534",
    logoImg: treelamLogo
  },
  {
    id: "new-mika",
    name: "New Mika",
    tagline: "Decorative Laminates by Greenlam",
    story: "Trendy collection of solid colors, wood grains, and abstract pattern decorative laminates for residential and commercial interiors.",
    specialty: "Decorative Interior Laminate Sheets",
    country: "India",
    badge: "Authorized Retailer",
    color: "#d97706",
    logoImg: newMikaLogo
  }
];


