import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductVisual from "./ProductVisual";
import { getCategoryBySlug } from "@/data/categories";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <ProductVisual
        icon={product.icon}
        category={product.category}
        imageSrc={product.image}
        imageAlt={product.name}
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="w-fit rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-600">
          {category?.name}
        </span>
        <h3 className="font-semibold text-navy-900">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent-600"
        >
          View Details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
