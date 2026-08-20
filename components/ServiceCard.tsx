import { renderIcon } from "@/lib/icon-map";
import { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <span className="flex size-13 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900">
        {renderIcon(service.icon, { className: "size-6 text-accent-400", strokeWidth: 1.6 })}
      </span>
      <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>
    </div>
  );
}
