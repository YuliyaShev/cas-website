import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "About | Construct AI Systems LLC",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Company
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            About Construct AI Systems LLC
          </h1>
          <p className="text-lg leading-8 text-muted">
            We are a premium engineering partner building the AI backbone for organizations that
            demand security, reliability, and measurable outcomes.
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            The Construct AI team blends product strategists, platform engineers, and SRE leaders.
            Our work centers on designing resilient AI operating models, implementing robust data
            foundations, and delivering exceptional user experiences powered by automation and
            intelligence.
          </p>
          <p>
            This page will evolve with leadership bios, our delivery principles, and proof points
            from regulated industries. Use it to align stakeholders and set the tone for Construct
            AI Systems as a trusted enterprise partner.
          </p>
          <ul>
            <li>Headquartered in the U.S. with global delivery capability.</li>
            <li>Focused on security, governance, and reliability from day one.</li>
            <li>Engagement model pairs product strategy with hands-on engineering.</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
