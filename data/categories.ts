import { ProductCategory } from "@/lib/types";

export const categories: ProductCategory[] = [
  {
    slug: "agricultural-products",
    name: "Agricultural Products",
    description:
      "Grains, pulses, spices, and fresh produce sourced directly from certified farms.",
    icon: "Wheat",
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    description:
      "Packaged foods, beverages, and specialty ingredients for global retail and food service.",
    icon: "Coffee",
  },
  {
    slug: "textiles",
    name: "Textiles",
    description:
      "Yarns, fabrics, and finished garments manufactured to international quality standards.",
    icon: "Shirt",
  },
  {
    slug: "industrial-products",
    name: "Industrial Products",
    description:
      "Metals, fasteners, and engineered components for manufacturing and construction.",
    icon: "Factory",
  },
  {
    slug: "chemicals",
    name: "Chemicals",
    description:
      "Industrial and specialty chemicals handled under strict safety and compliance protocols.",
    icon: "FlaskConical",
  },
  {
    slug: "machinery",
    name: "Machinery",
    description:
      "Heavy equipment and precision machinery sourced from vetted global manufacturers.",
    icon: "Cog",
  },
  {
    slug: "handicrafts",
    name: "Handicrafts",
    description:
      "Artisan-made décor, furnishings, and giftware crafted by skilled regional artisans.",
    icon: "Hammer",
  },
  {
    slug: "consumer-products",
    name: "Consumer Products",
    description:
      "Everyday household, personal care, and lifestyle goods ready for retail distribution.",
    icon: "ShoppingBag",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
