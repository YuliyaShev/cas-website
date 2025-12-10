'use client';

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const interests = [
  "Platform overview",
  "AI drawing analysis",
  "Compliance checker",
  "Geometry extraction",
  "AI recommendations",
  "Decision hub",
];

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1001+"];

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Unable to submit form");
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unexpected error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company" name="company" required />
        <Field label="Job title" name="role" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field type="email" label="Work email" name="email" required />
        <Field label="Phone" name="phone" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Select label="Country/Region" name="country" required options={countryOptions} />
        <Select label="Team size" name="companySize" options={companySizes} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Select label="Area of interest" name="interest" required options={interests} />
        <Field label="Project / Notes" name="notes" placeholder="Tell us about timelines, goals, constraints" />
      </div>
      <div className="flex items-start gap-2 rounded-xl bg-white/60 p-4 shadow-soft backdrop-blur">
        <input type="checkbox" id="marketing" name="marketing" className="mt-1" />
        <label htmlFor="marketing" className="text-sm text-foreground/80">
          I agree to receive updates about Construct AI Systems. You can unsubscribe at any time.
        </label>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {status === "success" ? (
        <p className="text-sm font-semibold text-[color:var(--color-accent-strong)]">Thanks! We’ll be in touch shortly.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <label className="flex flex-col gap-1 text-sm text-foreground/80">
      <span className="font-semibold text-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-black/10 bg-white/70 px-3 text-base text-foreground shadow-soft outline-none transition focus:border-[color:var(--color-accent)] focus:bg-white focus:shadow-glow"
      />
    </label>
  );
}

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function Select({ label, name, options, required }: SelectProps) {
  return (
    <label className="flex flex-col gap-1 text-sm text-foreground/80">
      <span className="font-semibold text-foreground">{label}</span>
      <select
        name={name}
        required={required}
        className="h-11 rounded-xl border border-black/10 bg-white/70 px-3 text-base text-foreground shadow-soft outline-none transition focus:border-[color:var(--color-accent)] focus:bg-white focus:shadow-glow"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

const countryOptions = [
  "United States",
  "Canada",
  "United Kingdom",
  "European Union",
  "Australia",
  "New Zealand",
  "United Arab Emirates",
  "Saudi Arabia",
  "India",
  "Singapore",
  "Japan",
  "South Korea",
  "Brazil",
  "Mexico",
  "Other",
];
