import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From global sourcing to export documentation, Nexora Global offers full-service import, export, and logistics support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Full-Service Import & Export Support"
        description="We manage every stage of your international trade journey, from sourcing to final delivery."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Every Service"
            description="A consistent, transparent process runs behind every service we offer, whatever the product category or destination market."
          />
          <ProcessSteps />
        </Container>
      </section>

      <CTASection
        title="Need Help With Your Next Shipment?"
        description="Tell us which services you need and our team will scope a plan tailored to your timeline and budget."
      />
    </>
  );
}
