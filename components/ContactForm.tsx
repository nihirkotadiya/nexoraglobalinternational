"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { categories } from "@/data/categories";
import { services } from "@/data/services";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-accent-500 focus:bg-white focus:ring-2 focus:ring-accent-100";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent-200 bg-accent-100 p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent-600">
          <CheckCircle2 className="size-7 text-white" />
        </span>
        <h3 className="text-xl font-semibold text-navy-900">
          Inquiry Received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. A member of our trade team will get
          back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-accent-600 hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 555 000 1234"
            className={inputClasses}
          />
        </Field>
        <Field label="Company Name" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company Ltd."
            className={inputClasses}
          />
        </Field>
        <Field label="Country" htmlFor="country">
          <input
            id="country"
            name="country"
            type="text"
            placeholder="United States"
            className={inputClasses}
          />
        </Field>
        <Field label="Product / Service" htmlFor="interest">
          <select id="interest" name="interest" className={inputClasses}>
            <option value="">Select an option</option>
            <optgroup label="Products">
              {categories.map((category) => (
                <option key={category.slug} value={category.name}>
                  {category.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Services">
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements, target quantities, and timeline..."
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-accent-600/30 transition-colors hover:bg-accent-500"
      >
        Submit Inquiry
        <Send className="size-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="text-accent-600"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
