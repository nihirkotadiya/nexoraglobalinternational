import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, XIcon, LinkedInIcon, InstagramIcon } from "./SocialIcons";
import Logo from "./Logo";
import { categories } from "@/data/categories";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/global-presence", label: "Global Presence" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "Twitter" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Connecting quality products to global markets through reliable
            sourcing, rigorous quality control, and efficient logistics.
          </p>
          <div className="flex items-center gap-2 pt-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-accent-600 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Categories
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {categories.slice(0, 5).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" />
              <span>402 Meridian Trade Tower, Ahmedabad, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-accent-400" />
              <span>+91 92 6577 6703</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent-400" />
              <span>nexoraglobal007@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent-400" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Nexora Global. All rights
            reserved.
          </p>
          <p>Trusted trading partner across 35+ countries.</p>
        </div>
      </div>
    </footer>
  );
}
