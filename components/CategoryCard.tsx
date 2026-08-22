import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { renderIcon } from "@/lib/icon-map";
import { ProductCategory } from "@/lib/types";

export default function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900 transition-colors group-hover:bg-accent-600">
        {renderIcon(category.icon, {
          className: "size-6 text-accent-400 group-hover:text-white",
          strokeWidth: 1.6,
        })}
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-navy-900">{category.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {category.description}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-600">
        View products
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
