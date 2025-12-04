import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Platform | Construct AI Systems LLC",
};

export default function PlatformPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Platform
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            The Construct AI platform stack
          </h1>
          <p className="text-lg leading-8 text-muted">
            Outline the platform pillars, deployment models, and governance approach that underpin
            every Construct AI implementation.
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            Use this page to detail your data pipelines, orchestration layer, observability
            approach, and how Construct AI Systems integrates with existing security and compliance
            controls. Include architectural diagrams, SLAs, and compatibility matrices as you
            develop them.
          </p>
          <ul>
            <li>Data foundation: ingestion, quality, lineage, and retention policies.</li>
            <li>Model operations: deployment patterns, evaluation frameworks, and rollout controls.</li>
            <li>Observability: tracing, auditing, and live metrics across agents, copilots, and APIs.</li>
            <li>Governance: approval workflows, RBAC, and change management for enterprise teams.</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
