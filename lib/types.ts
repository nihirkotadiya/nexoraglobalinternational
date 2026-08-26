export type ProductCategorySlug =
  | "agricultural-products"
  | "food-beverages"
  | "textiles"
  | "industrial-products"
  | "chemicals"
  | "machinery"
  | "handicrafts"
  | "consumer-products";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  icon: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategorySlug;
  image?: string;
  shortDescription: string;
  description: string;
  specifications: { label: string; value: string }[];
  packaging: string;
  minimumOrder: string;
  exportAvailability: string[];
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Country {
  name: string;
  region: string;
  code: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}
