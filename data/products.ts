import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "premium-basmati-rice",
    name: "Premium Basmati Rice",
    category: "agricultural-products",
    shortDescription:
      "Long-grain aromatic basmati rice sourced from trusted growers.",
    description:
      "Our Premium Basmati Rice is cultivated in the fertile foothills of Northern India and aged to develop its signature long grain, aroma, and fluffy texture. Every batch is cleaned, sorted, and quality-checked before export to meet the demands of international retailers, distributors, and food service operators.",
    specifications: [
      { label: "Grain Length", value: "8.3mm and above" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Broken Grains", value: "Max 1%" },
      { label: "Shelf Life", value: "24 months" },
    ],
    packaging: "5kg, 10kg, 25kg PP bags or as per buyer specification",
    minimumOrder: "1 x 20ft container (approx. 25 metric tons)",
    exportAvailability: ["UAE", "Saudi Arabia", "UK", "USA", "Singapore"],
    icon: "Wheat",
  },
  {
    slug: "organic-turmeric-powder",
    name: "Organic Turmeric Powder",
    category: "agricultural-products",
    shortDescription:
      "High-curcumin turmeric powder ground from farm-fresh rhizomes.",
    description:
      "Sourced from organic farms and processed in FSSAI-certified facilities, our turmeric powder retains a high curcumin content, rich color, and natural aroma. Suitable for food manufacturing, spice blending, and nutraceutical applications.",
    specifications: [
      { label: "Curcumin Content", value: "3.5% - 5%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Mesh Size", value: "60-80 mesh" },
      { label: "Certification", value: "Organic, FSSAI" },
    ],
    packaging: "25kg multi-wall paper bags with inner liner",
    minimumOrder: "5 metric tons",
    exportAvailability: ["USA", "Germany", "UK", "Australia"],
    icon: "Wheat",
  },
  {
    slug: "specialty-coffee-beans",
    name: "Specialty Coffee Beans",
    category: "food-beverages",
    shortDescription:
      "Single-origin arabica beans roasted to order for global buyers.",
    description:
      "Grown at high altitude and hand-picked for quality, our specialty coffee beans are available green or roasted to your specification. We work with estate partners to ensure traceability from farm to shipment.",
    specifications: [
      { label: "Variety", value: "Arabica, Robusta blends available" },
      { label: "Processing", value: "Washed, natural, honey" },
      { label: "Screen Size", value: "15-18" },
      { label: "Moisture", value: "10-12%" },
    ],
    packaging: "60kg jute bags with GrainPro liner, or custom retail packs",
    minimumOrder: "1 x 20ft container",
    exportAvailability: ["Germany", "USA", "UK", "UAE"],
    icon: "Coffee",
  },
  {
    slug: "cotton-yarn",
    name: "Combed Cotton Yarn",
    category: "textiles",
    shortDescription:
      "Ring-spun combed cotton yarn for knitting and weaving mills.",
    description:
      "Manufactured on modern spinning frames, our combed cotton yarn offers consistent strength, evenness, and finish for knitwear and woven fabric production. Custom counts and twist levels available on request.",
    specifications: [
      { label: "Count Range", value: "20s - 40s" },
      { label: "Type", value: "Combed, Ring-spun" },
      { label: "Packing", value: "Cones, 1.5kg - 2kg" },
      { label: "Standard", value: "OEKO-TEX certified" },
    ],
    packaging: "Cartons of 20 cones, palletized for export",
    minimumOrder: "3 metric tons",
    exportAvailability: ["Bangladesh", "Turkey", "UAE", "Germany"],
    icon: "Shirt",
  },
  {
    slug: "denim-fabric",
    name: "Premium Denim Fabric",
    category: "textiles",
    shortDescription:
      "Durable, colorfast denim fabric rolls for apparel manufacturers.",
    description:
      "Woven from quality cotton blends, our denim fabric is available in a range of weights and finishes for jeanswear, jackets, and accessories. All fabric is tested for colorfastness and shrinkage before dispatch.",
    specifications: [
      { label: "Weight", value: "9oz - 14oz" },
      { label: "Width", value: "58/60 inches" },
      { label: "Composition", value: "100% cotton, cotton-stretch blends" },
      { label: "Finish", value: "Sanforized" },
    ],
    packaging: "Rolls wrapped in poly, packed in export cartons",
    minimumOrder: "2,000 meters",
    exportAvailability: ["USA", "UK", "UAE", "Australia"],
    icon: "Shirt",
  },
  {
    slug: "steel-fasteners",
    name: "Stainless Steel Fasteners",
    category: "industrial-products",
    shortDescription: "Precision-engineered bolts, nuts, and washers.",
    description:
      "Our fastener range is manufactured to ISO and DIN standards for construction, automotive, and industrial applications. Each batch undergoes tensile and corrosion testing before packing.",
    specifications: [
      { label: "Grade", value: "SS304, SS316" },
      { label: "Standard", value: "ISO, DIN, ANSI" },
      { label: "Sizes", value: "M3 - M36" },
      { label: "Finish", value: "Passivated, plain" },
    ],
    packaging: "Bulk cartons or retail blister packs",
    minimumOrder: "1 metric ton",
    exportAvailability: ["Germany", "USA", "Saudi Arabia", "Singapore"],
    icon: "Factory",
  },
  {
    slug: "industrial-chemicals",
    name: "Industrial Solvents",
    category: "chemicals",
    shortDescription: "High-purity solvents for manufacturing applications.",
    description:
      "Manufactured under strict quality control, our industrial solvents serve paint, coating, and cleaning applications. Full SDS documentation and compliant packaging are provided with every shipment.",
    specifications: [
      { label: "Purity", value: "99%+" },
      { label: "Packaging Options", value: "Drums, IBC tanks" },
      { label: "Compliance", value: "REACH, GHS labeling" },
      { label: "Handling", value: "UN-certified containers" },
    ],
    packaging: "200L steel drums or 1000L IBC totes",
    minimumOrder: "1 x 20ft container",
    exportAvailability: ["UAE", "Germany", "Singapore"],
    icon: "FlaskConical",
  },
  {
    slug: "cnc-machine-tools",
    name: "CNC Machine Tools",
    category: "machinery",
    shortDescription: "Precision CNC machines for industrial production.",
    description:
      "Sourced from certified manufacturers, our CNC machine tools deliver high-precision output for metalworking and fabrication industries. Installation guidance and spare parts support are available.",
    specifications: [
      { label: "Control System", value: "Fanuc, Siemens compatible" },
      { label: "Axis Configuration", value: "3-axis, 5-axis" },
      { label: "Power Supply", value: "380V / 415V, 50-60Hz" },
      { label: "Warranty", value: "12 months" },
    ],
    packaging: "Export-grade wooden crating with shock indicators",
    minimumOrder: "1 unit",
    exportAvailability: ["UAE", "Saudi Arabia", "Australia"],
    icon: "Cog",
  },
  {
    slug: "handwoven-décor",
    name: "Handwoven Home Décor",
    category: "handicrafts",
    shortDescription: "Artisan-made baskets, rugs, and décor pieces.",
    description:
      "Handcrafted by skilled artisans using natural fibers, our décor collection brings authentic craftsmanship to global home and lifestyle retailers. Custom designs and private labeling are available.",
    specifications: [
      { label: "Materials", value: "Jute, seagrass, rattan" },
      { label: "Customization", value: "Size, color, private label" },
      { label: "Finish", value: "Natural, dyed" },
      { label: "Quality Check", value: "100% pre-shipment inspection" },
    ],
    packaging: "Individually wrapped, master cartons",
    minimumOrder: "500 pieces per design",
    exportAvailability: ["USA", "UK", "Germany", "Australia"],
    icon: "Hammer",
  },
  {
    slug: "personal-care-range",
    name: "Personal Care Range",
    category: "consumer-products",
    shortDescription: "Private-label personal care and wellness products.",
    description:
      "From skincare to grooming essentials, our personal care range is manufactured in GMP-certified facilities with flexible private-label and formulation options for retail brands worldwide.",
    specifications: [
      { label: "Certification", value: "GMP, ISO 22716" },
      { label: "Formulation", value: "Custom or standard" },
      { label: "Packaging Sizes", value: "50ml - 1L" },
      { label: "Shelf Life", value: "24-36 months" },
    ],
    packaging: "Retail-ready cartons with barcode and labeling",
    minimumOrder: "5,000 units per SKU",
    exportAvailability: ["UAE", "UK", "Singapore", "Australia"],
    icon: "ShoppingBag",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
