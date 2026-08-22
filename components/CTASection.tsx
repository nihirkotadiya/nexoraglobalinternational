import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection({
  title = "Ready to Source or Export with Confidence?",
  description = "Tell us what you need, and our trade specialists will get back to you with a tailored plan within one business day.",
  primaryHref = "/contact",
  primaryLabel = "Get a Quote",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute -right-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-accent-600/20 blur-3xl" />

      <div className="container-page relative flex flex-col items-center gap-7 py-16 text-center sm:py-20">
        <h2 className="text-balance max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-balance max-w-xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-500"
          >
            {primaryLabel}
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="tel:+917940001234"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <PhoneCall className="size-4" />
            +91 79 4000 1234
          </a>
        </div>
      </div>
    </section>
  );
}
