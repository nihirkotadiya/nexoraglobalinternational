import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe2,
  HeartHandshake,
  Award,
} from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import CountryCard from "@/components/CountryCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import StatisticsSection from "@/components/StatisticsSection";
import ProcessSteps from "@/components/ProcessSteps";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { countries } from "@/data/countries";
import { testimonials } from "@/data/testimonials";

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    description:
      "Every shipment is pre-inspected and, where needed, lab tested against agreed specifications.",
  },
  {
    icon: Globe2,
    title: "True Global Reach",
    description:
      "Active trade relationships across 35+ countries spanning six continents.",
  },
  {
    icon: Clock,
    title: "On-Time Logistics",
    description:
      "Multimodal freight coordination keeps your shipments moving predictably, every time.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Partnerships",
    description:
      "Clear documentation, honest pricing, and responsive communication at every stage.",
  },
  {
    icon: Award,
    title: "7 Years of Experience",
    description:
      "Nearly two decades sourcing and moving goods across borders for businesses of every size.",
  },
  {
    icon: ArrowRight,
    title: "Scalable Sourcing",
    description:
      "From a single container to ongoing multi-category supply programs, we scale with you.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company Introduction */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Who We Are"
                title="An International Trading Partner You Can Rely On"
                align="left"
              />
              <p className="text-base leading-relaxed text-slate-600">
                For over 18 years, Nexora Global has helped businesses
                source, import, and export high-quality products across
                agriculture, textiles, industrial goods, and consumer
                categories. We combine deep supplier networks with rigorous
                quality control and logistics expertise to make cross-border
                trade simple and dependable.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Whether you need a single container shipped reliably or an
                ongoing multi-category supply program, our team manages
                sourcing, compliance, and delivery so you can focus on
                growing your business.
              </p>
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 pt-2 text-sm font-semibold text-accent-600"
              >
                Learn more about us
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Years of Experience", value: "7+" },
                { label: "Product ", value: "4" },
                { label: "Countries Served", value: "8+" },
                { label: "Containers / Year", value: "100+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-3xl font-bold text-navy-900">
                    {item.value}
                  </span>
                  <span className="text-sm text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Product Categories */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Trade"
            title="Product Categories We Specialize In"
            description="From farm to factory, we source and export across a diverse range of product categories tailored to global demand."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust, Quality, and Reliability"
            description="We combine local sourcing expertise with global logistics know-how to deliver a trading experience businesses can depend on."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900">
                  <item.icon className="size-6 text-accent-400" strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured Products"
              title="Trusted Products, Ready for Export"
              align="left"
            />
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-100"
            >
              View All Products
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services preview */}
      {/* <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Full-Service Trade Support, End to End"
            description="From sourcing to final delivery, our services cover every step of your import and export journey."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section> */}

      {/* Import/Export process */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Import & Export Process"
            description="A structured, transparent process that keeps your shipments moving with confidence from inquiry to delivery."
          />
          <ProcessSteps />
        </Container>
      </section>

      <StatisticsSection />

      {/* Global Presence */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Global Presence"
              title="Trading Across Continents"
              align="left"
            />
            <Link
              href="/global-presence"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-100"
            >
              View All Markets
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {countries.slice(0, 8).map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>
        </Container>
      </section>

      

      {/* Testimonials */}
      {/* <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Partners Say"
            description="Long-term relationships built on consistent quality, communication, and delivery."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section> */}

      <CTASection />
    </>
  );
}
