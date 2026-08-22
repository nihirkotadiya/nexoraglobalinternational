import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCategorySlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Nexora Global's product catalog spanning agricultural products, textiles, machinery, chemicals, handicrafts, and more.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategorySlug | undefined;
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title="Quality Products Ready for Global Export"
        description="Explore our catalog across eight core product categories, each backed by verified suppliers and rigorous quality checks."
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-navy-900 text-white"
                  : "border border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-navy-900 text-white"
                    : "border border-slate-300 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
              No products found in this category yet. Contact us — we can
              likely still source it for you.
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
