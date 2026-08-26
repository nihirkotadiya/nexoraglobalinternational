import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { FacebookIcon, XIcon, LinkedInIcon, InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nexora Global for sourcing, import, export, and logistics inquiries. Our team responds within one business day.",
};

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Office Location",
    value: "402 Meridian Trade Tower, Ahmedabad, Gujarat, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 92 6577 6703",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nexoraglobal007@gmail.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Saturday, 9:00 AM - 7:00 PM IST",
  },
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "Twitter" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Talk About Your Sourcing or Export Needs"
        description="Share your requirements and our trade specialists will respond within one business day with next steps."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-semibold text-navy-900">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-5">
                {CONTACT_DETAILS.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                      <detail.icon className="size-4 text-accent-400" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {detail.label}
                      </span>
                      <span className="text-sm text-slate-700">
                        {detail.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 border-t border-slate-100 pt-5">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-accent-600 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-navy-950">
              <div className="flex h-56 items-center justify-center bg-grid-pattern">
                <div className="flex flex-col items-center gap-2 text-center">
                  <MapPin className="size-8 text-accent-400" />
                  <span className="text-sm text-slate-300">
                    Bhesan, Junagadh, Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
