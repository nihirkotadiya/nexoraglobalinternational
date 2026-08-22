import { Quote } from "lucide-react";
import { Testimonial } from "@/lib/types";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <Quote className="size-8 text-accent-500" strokeWidth={1.5} />
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex size-11 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
          {testimonial.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-navy-900">
            {testimonial.name}
          </span>
          <span className="text-xs text-slate-500">
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
