import { renderIcon } from "@/lib/icon-map";
import { processSteps } from "@/data/process";

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step) => (
        <div
          key={step.step}
          className="relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7"
        >
          <div className="flex items-center justify-between">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent-100">
              {renderIcon(step.icon, { className: "size-6 text-accent-600", strokeWidth: 1.6 })}
            </span>
            <span className="text-3xl font-bold text-slate-100">
              {step.step}
            </span>
          </div>
          <h3 className="text-base font-semibold text-navy-900">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
