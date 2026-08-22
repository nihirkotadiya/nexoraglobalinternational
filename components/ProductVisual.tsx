import { renderIcon } from "@/lib/icon-map";

const GRADIENTS: Record<string, string> = {
  "agricultural-products": "from-[#12321d] via-[#c9973f] to-[#0c2717]",
  "food-beverages": "from-[#123722] via-[#8a5a12] to-[#0c2717]",
  textiles: "from-[#1a4a2c] via-[#4f9153] to-[#0c2717]",
  "industrial-products": "from-[#0c2717] via-[#3f5a4a] to-[#101828]",
  chemicals: "from-[#123722] via-[#2f7a4a] to-[#071a10]",
  machinery: "from-[#101828] via-[#6f5a2e] to-[#0c2717]",
  handicrafts: "from-[#1a4a2c] via-[#c9973f] to-[#0c2717]",
  "consumer-products": "from-[#123722] via-[#6fae6f] to-[#0b1c12]",
};

export default function ProductVisual({
  icon,
  category,
  size = "md",
  className = "",
}: {
  icon: string;
  category?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const gradient = GRADIENTS[category ?? ""] ?? "from-navy-700 via-accent-500 to-navy-900";
  const iconSize = size === "lg" ? "size-20 sm:size-24" : size === "sm" ? "size-9" : "size-14";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 size-36 rounded-full bg-black/20 blur-2xl" />
      {renderIcon(icon, { className: `relative text-white/90 ${iconSize}`, strokeWidth: 1.4 })}
    </div>
  );
}
