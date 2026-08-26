import Image from "next/image";

export default function TradeIllustration() {
  return (
    <div className="group relative w-full max-w-xl overflow-hidden rounded-4xl border border-white/10 bg-navy-900/70 p-2 shadow-2xl shadow-navy-950/40 backdrop-blur-sm">
      <Image
        src="/hero-nexora.jpeg"
        alt="Global import export logistics with cargo ship, airplane, and freight truck"
        width={1024}
        height={512}
        priority
        className="h-auto w-full rounded-[1.35rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 36rem, (min-width: 640px) 80vw, 95vw"
      />

      <div className="pointer-events-none absolute inset-2 rounded-[1.35rem] bg-linear-to-t from-navy-950/25 via-transparent to-transparent" />
    </div>
  );
}
