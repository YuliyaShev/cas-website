import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Contact | Construct AI Systems LLC",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Contact
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Connect with the Construct AI Systems team
          </h1>
          <p className="text-lg leading-8 text-muted">
            Set up a discovery call, align on objectives, and arrange a tailored demo with our
            solutions engineers.
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            Use this page to provide booking links, key contacts, and intake forms. For now, reach
            us directly and we&apos;ll coordinate next steps.
          </p>
          <p>
            Email <Link href="mailto:hello@construct.ai">hello@construct.ai</Link> or schedule time
            with our team to discuss your AI roadmap, security posture, and rollout plan.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-strong"
          >
            Request a demo
            <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="mailto:hello@construct.ai"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            Email the team
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
