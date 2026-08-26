import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "aritha-powder",
    name: "Aritha Powder",
    category: "agricultural-products",
    image: "/aritha-powder.jpeg",
    shortDescription:
      "Natural soapnut powder processed for personal care, herbal cleansing, and bulk ingredient applications.",
    description:
      "Our Aritha Powder is produced from mature soapnuts (Sapindus mukorossi) that are carefully cleaned, shade-dried, and finely milled in hygienic processing units. Widely used in herbal hair care, natural cleansing blends, and ayurvedic formulations, this product is supplied with consistent mesh size, controlled moisture, and export-ready documentation. Each lot is quality checked before dispatch to ensure purity, appearance, and stable shelf performance for importers, private-label brands, and bulk distributors.",
    specifications: [
      { label: "Botanical Name", value: "Sapindus mukorossi" },
      { label: "Mesh Size", value: "80 - 100 mesh (custom available)" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Shelf Life", value: "24 months" },
    ],
    packaging: "10kg / 25kg food-grade liner bags in export cartons or PP sacks",
    minimumOrder: "1 metric ton",
    exportAvailability: ["UAE", "Saudi Arabia", "USA", "UK", "Germany"],
    icon: "Wheat",
  },
  {
    slug: "banana-powder",
    name: "Banana Powder",
    category: "agricultural-products",
    image: "/banana-powder.jpeg",
    shortDescription:
      "Spray-dried and fine-milled banana powder for food processing, nutraceutical, and bakery applications.",
    description:
      "Our Banana Powder is manufactured from carefully selected ripe bananas that are peeled, processed, and dried under controlled conditions to preserve natural flavor, color, and nutritional value. The powder is suitable for infant food blends, bakery premixes, beverage formulations, health supplements, and confectionery applications. Each production lot is tested for moisture, microbiological safety, and particle consistency, and supplied with export documentation to support smooth international clearance and reliable commercial distribution.",
    specifications: [
      { label: "Raw Material", value: "Mature Cavendish bananas" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Mesh Size", value: "80 - 100 mesh" },
      { label: "Shelf Life", value: "18 - 24 months" },
    ],
    packaging: "20kg / 25kg multi-layer kraft bags with food-grade inner liner",
    minimumOrder: "1 metric ton",
    exportAvailability: ["UAE", "Saudi Arabia", "UK", "USA", "Malaysia"],
    icon: "Wheat",
  },
  {
    slug: "amla-powder",
    name: "Amla Powder",
    category: "agricultural-products",
    image: "/Amla-powder.jpeg",
    shortDescription:
      "Fine-milled Indian gooseberry powder for nutraceutical, food, and herbal wellness formulations.",
    description:
      "Our Amla Powder is produced from premium-quality Indian gooseberries (Emblica officinalis) sourced from verified farms and processed under controlled hygienic conditions. The fruit is cleaned, carefully dehydrated, and finely milled to preserve its natural profile, making it suitable for functional foods, dietary supplements, herbal blends, and personal care applications. Each batch is evaluated for moisture, mesh consistency, and microbiological parameters, and shipped with complete export documentation to support dependable international trade and regulatory compliance.",
    specifications: [
      { label: "Botanical Name", value: "Emblica officinalis" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Mesh Size", value: "80 - 100 mesh" },
      { label: "Shelf Life", value: "24 months" },
    ],
    packaging: "20kg / 25kg kraft paper bags with food-grade inner liner",
    minimumOrder: "1 metric ton",
    exportAvailability: ["UAE", "Saudi Arabia", "USA", "UK", "Canada"],
    icon: "Wheat",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    category: "agricultural-products",
    image: "/moringa-powder.jpeg",
    shortDescription:
      "Nutrient-rich moringa leaf powder processed for food, nutraceutical, and herbal product manufacturers.",
    description:
      "Our Moringa Powder is produced from carefully selected Moringa oleifera leaves sourced from monitored cultivation zones and processed in hygienic facilities. Leaves are shade-dried and finely milled to retain natural color, aroma, and nutrient profile, making the powder suitable for dietary supplements, functional food blends, tea formulations, and wellness products. Each batch undergoes quality checks for moisture, mesh uniformity, and microbiological parameters, and is supplied with export-ready documentation to support consistent international shipments and buyer compliance requirements.",
    specifications: [
      { label: "Botanical Name", value: "Moringa oleifera" },
      { label: "Moisture", value: "Max 7%" },
      { label: "Mesh Size", value: "80 - 100 mesh" },
      { label: "Shelf Life", value: "24 months" },
    ],
    packaging: "20kg / 25kg food-grade kraft bags with inner poly liner",
    minimumOrder: "1 metric ton",
    exportAvailability: ["UAE", "Saudi Arabia", "USA", "UK", "Netherlands"],
    icon: "Wheat",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
