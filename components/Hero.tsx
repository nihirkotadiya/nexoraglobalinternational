import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import TradeIllustration from "./TradeIllustration";

const HIGHLIGHTS = [
  "Verified global suppliers",
  "End-to-end logistics",
  "Quality-inspected shipments",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute -top-40 right-0 size-[28rem] rounded-full bg-accent-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-navy-600/40 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="flex animate-fade-up flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 ring-1 ring-white/10">
            International Import &amp; Export
          </span>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Connecting Quality Products to Global Markets
          </h1>
          <p className="max-w-xl text-balance text-lg leading-relaxed text-slate-300">
            Nexora Global sources, imports, and exports high-quality
            products across 35+ countries, backed by rigorous quality control
            and dependable logistics from origin to destination.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-500"
            >
              Explore Products
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 className="size-4 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex animate-fade-in justify-center lg:justify-end">
          <TradeIllustration />
        </div>
      </div>
    </section>
  );
}
