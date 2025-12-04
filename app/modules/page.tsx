import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Modules | Construct AI Systems LLC",
};

export default function ModulesPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Modules
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Modular capabilities built for enterprise AI
          </h1>
          <p className="text-lg leading-8 text-muted">
            Showcase configurable modules spanning copilots, analytics, automation, agents, and
            governance to meet different stakeholder needs.
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            Each module can be expanded with features, screenshots, and integration guides. Highlight
            how they compose into end-to-end solutions while remaining standards-compliant and easy
            to observe.
          </p>
          <ul>
            <li>Copilots for operations, sales, and service with strong safety guardrails.</li>
            <li>Analytics layer for structured insights, semantic search, and knowledge extraction.</li>
            <li>Automation and agentic workflows that respect policy, data boundaries, and approvals.</li>
            <li>Governance controls to certify models, monitor drift, and enforce access.</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
