import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Contact | Construct AI Systems LLC",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-[24px] border border-black/5 bg-white/75 p-8 shadow-soft backdrop-blur">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
              Contact
            </span>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Let’s connect about your project
            </h1>
            <p className="text-lg leading-8 text-muted">
              Align on objectives, get a tailored demo, and plan your rollout with our team.
            </p>
          </div>
          <div className="prose prose-slate max-w-none text-sm leading-7 text-foreground/80">
            <p>
              Share a few details so we can connect you with the right specialist. We respond quickly
              with next steps, timeline, and a focused demo plan.
            </p>
            <p>
              Prefer email?{" "}
              <Link href="mailto:hello@construct.ai" className="text-foreground hover:text-[color:var(--color-accent-strong)]">
                hello@construct.ai
              </Link>
            </p>
          </div>
          <ContactForm />
        </div>

        <div className="space-y-4 rounded-[24px] border border-black/5 bg-white/65 p-8 shadow-soft backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">How we can help</h2>
          <ul className="space-y-3 text-sm text-foreground/85">
            {[
              "Enterprise demos tailored to your drawings and governance needs.",
              "Architecture and rollout planning for regulated environments.",
              "Security, compliance, and data residency discussions.",
              "Pricing and packaging guidance for teams and programs.",
              "Support and success for existing customers.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--color-accent-strong)] shadow-glow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur">
            <h3 className="text-base font-semibold text-foreground">Need support?</h3>
            <p className="mt-2 text-sm text-foreground/75">
              Existing customers can open a ticket with details about the workspace, module, and urgency.
            </p>
            <Link
              href="mailto:support@construct.ai"
              className="group mt-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/80"
            >
              Email support
              <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
