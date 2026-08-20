import { statistics } from "@/data/statistics";

export default function StatisticsSection() {
  return (
    <section className="bg-navy-950">
      <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-4 sm:py-16">
        {statistics.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {stat.value}
              <span className="text-accent-400">{stat.suffix}</span>
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
