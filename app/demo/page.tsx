import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Demo | Construct AI Systems LLC",
};

export default function DemoPage() {
  return (
    <PageShell>
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Demo
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Prepare your tailored Construct AI demo
          </h1>
          <p className="text-lg leading-8 text-muted">
            Outline the experience you want to highlight: modules to showcase, datasets to connect,
            and success criteria to validate.
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>
            Use this page to publish demo agendas, supported environments, and the onboarding steps
            required ahead of live sessions. Add timelines, prerequisites, and collaboration details
            as your assets are ready.
          </p>
          <ul>
            <li>Discovery and scoping to map your use cases and constraints.</li>
            <li>Safe dataset preparation with governance sign-off.</li>
            <li>Live walkthrough with engineers and program leadership.</li>
            <li>Follow-up plan: architecture recommendations and rollout paths.</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
