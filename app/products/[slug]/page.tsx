import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Boxes,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/Container";
import ProductVisual from "@/components/ProductVisual";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-navy-900"
          >
            <ArrowLeft className="size-4" />
            Back to Products
          </Link>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ProductVisual
            icon={product.icon}
            category={product.category}
            size="lg"
            className="aspect-square w-full rounded-3xl"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-600">
                {category?.name}
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-base leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <Package className="mt-0.5 size-5 shrink-0 text-accent-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Packaging
                  </span>
                  <span className="text-sm text-slate-700">
                    {product.packaging}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <Boxes className="mt-0.5 size-5 shrink-0 text-accent-600" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Minimum Order
                  </span>
                  <span className="text-sm text-slate-700">
                    {product.minimumOrder}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <Globe2 className="mt-0.5 size-5 shrink-0 text-accent-600" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Export Availability
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.exportAvailability.map((country) => (
                      <span
                        key={country}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-accent-600/30 transition-colors hover:bg-accent-500"
            >
              Send Inquiry
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="bg-slate-50 py-16">
        <Container className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
            Key Specifications
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <CheckCircle2 className="size-4 text-accent-600" />
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-navy-900">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.slug} product={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title={`Interested in ${product.name}?`}
        description="Send us your requirements and our team will respond with pricing, lead time, and shipping options."
        primaryLabel="Send Inquiry"
      />
    </>
  );
}
