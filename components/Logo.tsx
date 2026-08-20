import Image from "next/image";
import Link from "next/link";
import emblem from "@/public/brand/nexora-emblem.webp";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative size-11 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={emblem}
          alt="Nexora Global"
          fill
          sizes="44px"
          className="object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            variant === "light" ? "text-white" : "text-navy-900"
          }`}
        >
          Nexora
        </span>
        <span
          className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
            variant === "light" ? "text-accent-400" : "text-accent-600"
          }`}
        >
          Global
        </span>
      </span>
    </Link>
  );
}
