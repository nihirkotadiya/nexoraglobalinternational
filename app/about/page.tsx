import type { Metadata } from "next";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Handshake,
  Globe2,
  TrendingUp,
  Award,
} from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import TradeIllustration from "@/components/TradeIllustration";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexora Global's mission, vision, values, and 18-year track record connecting quality products to global markets.",
};

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with transparent pricing, honest communication, and documentation you can trust.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every product and shipment is held to rigorous, independently verifiable quality standards.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We treat every client relationship as a long-term partnership, not a one-time transaction.",
  },
  {
    icon: Globe2,
    title: "Global Mindset",
    description:
      "Our team understands the cultural and regulatory nuance of trading across diverse markets.",
  },
];

const TRUST_POINTS = [
  {
    icon: Users,
    title: "Experienced Trade Specialists",
    description:
      "A dedicated team with deep expertise across sourcing, compliance, and logistics.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Track Record",
    description:
      "18 years of on-time deliveries and repeat business across 35+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Supplier Network",
    description:
      "Every supplier is vetted for certifications, capacity, and compliance history.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Nearly Two Decades of Global Trade Expertise"
        description="Nexora Global connects businesses to reliable product sourcing and export solutions across international markets."
      />

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Company Overview"
              title="A Trusted Bridge Between Manufacturers and Global Buyers"
              align="left"
            />
            <p className="text-base leading-relaxed text-slate-600">
              Founded with a commitment to reliable cross-border trade,
              Nexora Global has grown into a full-service import and
              export company serving retailers, distributors, and
              manufacturers across six continents. We manage every stage of
              the trade journey — sourcing, quality inspection, documentation,
              and logistics — so our partners can trade with confidence.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Our team combines local market knowledge in sourcing regions
              with a deep understanding of international compliance and
              freight logistics, giving clients a single accountable partner
              for complex, multi-market supply chains.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <TradeIllustration />
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900">
              <Target className="size-6 text-accent-400" strokeWidth={1.6} />
            </span>
            <h3 className="text-xl font-semibold text-navy-900">Our Mission</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To connect quality products with global markets through
              reliable sourcing, transparent trade practices, and dependable
              logistics — making international trade simple for businesses of
              every size.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-navy-900">
              <Eye className="size-6 text-accent-400" strokeWidth={1.6} />
            </span>
            <h3 className="text-xl font-semibold text-navy-900">Our Vision</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To be the most trusted international trading partner for
              businesses seeking dependable sourcing, export, and supply
              chain solutions across emerging and established markets.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Core Values"
            title="What Guides Every Shipment We Handle"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent-100">
                  <value.icon className="size-6 text-accent-600" strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why clients trust us */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-1 gap-5 lg:order-1">
            {TRUST_POINTS.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                  <point.icon className="size-5 text-accent-400" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-navy-900">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeading
              eyebrow="Why Clients Trust Us"
              title="A Global Business Approach Built on Accountability"
              align="left"
            />
            <p className="text-base leading-relaxed text-slate-600">
              Clients choose Nexora Global because we take ownership of
              outcomes, not just tasks. From the first inquiry to final
              delivery, we communicate proactively, document thoroughly, and
              hold our supplier network to the same standards we hold
              ourselves.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Our global business approach blends regional sourcing expertise
              with a centralized quality and logistics framework, ensuring
              consistency no matter which market you are buying from or
              selling into.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's Build a Reliable Trade Partnership"
        description="Speak with our team about your sourcing or export goals and see how we can support your supply chain."
      />
    </>
  );
}
