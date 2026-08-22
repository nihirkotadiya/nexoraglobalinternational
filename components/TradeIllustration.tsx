import { Ship, Plane, Container, MapPin } from "lucide-react";

export default function TradeIllustration() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-lg">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 shadow-2xl shadow-navy-950/40" />
      <div className="absolute inset-0 rounded-[2rem] bg-grid-pattern opacity-30" />

      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d9ae55" stopOpacity="0" />
            <stop offset="50%" stopColor="#d9ae55" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9ae55" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="150" rx="150" ry="95" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
        <ellipse cx="200" cy="150" rx="110" ry="70" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
        <path
          d="M40 190 Q 150 60 360 120"
          fill="none"
          stroke="url(#routeLine)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          d="M60 90 Q 180 220 340 190"
          fill="none"
          stroke="url(#routeLine)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {[
          [70, 95],
          [330, 115],
          [150, 55],
          [250, 235],
          [60, 195],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#d9ae55" opacity="0.85" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
        <Ship className="size-11 text-white" strokeWidth={1.4} />
      </div>

      <div className="absolute right-8 top-8 flex size-14 items-center justify-center rounded-xl bg-accent-500/90 shadow-lg shadow-accent-500/30">
        <Plane className="size-6 text-white" strokeWidth={1.6} />
      </div>

      <div className="absolute bottom-10 left-8 flex size-14 items-center justify-center rounded-xl bg-leaf-500/90 shadow-lg shadow-leaf-500/30">
        <Container className="size-6 text-white" strokeWidth={1.6} />
      </div>

      <div className="absolute bottom-6 right-10 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg">
        <MapPin className="size-4 text-accent-600" />
        <span className="text-xs font-semibold text-navy-800">35+ Countries</span>
      </div>
    </div>
  );
}
