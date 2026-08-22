import { Country } from "@/lib/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-md">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-accent-400">
        {country.code}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-navy-900">
          {country.name}
        </span>
        <span className="text-xs text-slate-500">{country.region}</span>
      </div>
    </div>
  );
}
