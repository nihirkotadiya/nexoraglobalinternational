import type { Metadata } from "next";
import { MapPin, Ship, Plane } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";
import { countries } from "@/data/countries";
import { statistics } from "@/data/statistics";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Nexora Global serves partners across 35+ countries spanning North America, Europe, the Middle East, Asia, Africa, and Oceania.",
};

const regions = Array.from(new Set(countries.map((c) => c.region)));

export default function GlobalPresencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Presence"
        title="Trading Partners Across Six Continents"
        description="From origin markets to final delivery, our network spans key trade hubs around the world."
      />

      {/* Abstract global reach visual */}
      <section className="relative overflow-hidden bg-navy-950 py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <Container className="relative">
          <div className="relative mx-auto flex h-64 max-w-3xl items-center justify-center sm:h-80">
            <svg viewBox="0 0 600 260" className="h-full w-full" aria-hidden="true">
              <ellipse cx="300" cy="130" rx="280" ry="105" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
              <ellipse cx="300" cy="130" rx="220" ry="80" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
              <ellipse cx="300" cy="130" rx="150" ry="55" fill="none" stroke="#ffffff" strokeOpacity="0.09" strokeWidth="1" />
              <line x1="20" y1="130" x2="580" y2="130" stroke="#ffffff" strokeOpacity="0.1" />
              <line x1="300" y1="25" x2="300" y2="235" stroke="#ffffff" strokeOpacity="0.1" />
              {[
                [90, 90], [150, 180], [260, 60], [340, 190],
                [420, 100], [500, 150], [230, 130], [470, 60],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="5" fill="#d9ae55" opacity="0.9" />
              ))}
            </svg>
            <div className="absolute flex size-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <MapPin className="size-8 text-accent-400" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Ship className="size-4 text-accent-400" /> Ocean Freight Network
            </span>
            <span className="flex items-center gap-2">
              <Plane className="size-4 text-accent-400" /> Air Freight Network
            </span>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="bg-navy-900 py-10">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
                <span className="text-accent-400">{stat.suffix}</span>
              </span>
              <span className="text-xs text-slate-400">{stat.label}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* Markets grid by region */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Markets We Serve"
            title="Key Import & Export Markets"
            description="We maintain active trade relationships across the following regions and continue expanding into new markets."
          />
          {regions.map((region) => (
            <div key={region} className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                {region}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {countries
                  .filter((c) => c.region === region)
                  .map((country) => (
                    <CountryCard key={country.code} country={country} />
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTASection
        title="Looking to Trade in a New Market?"
        description="Tell us your target country and product category — our team can advise on feasibility, compliance, and logistics."
      />
    </>
  );
}
