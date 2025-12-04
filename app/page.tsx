import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { SectionCard } from "./components/section-card";

const sections = [
  {
    title: "About the firm",
    description:
      "Learn how Construct AI Systems LLC partners with leadership teams to deploy resilient AI infrastructure.",
    href: "/about",
    badge: "company",
  },
  {
    title: "Platform",
    description:
      "Discover the platform pillars: secure data pipelines, orchestration, observability, and governance.",
    href: "/platform",
    badge: "platform",
  },
  {
    title: "Modules",
    description:
      "Preview modular capabilities for copilots, analytics, agents, and control planes tailored to your stack.",
    href: "/modules",
    badge: "modules",
  },
  {
    title: "Demo & Contact",
    description:
      "Book a private demo, align on success criteria, and connect with our solutions engineers.",
    href: "/demo",
    badge: "next step",
  },
];

export default function Home() {
  return (
    <PageShell>
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-surface p-8 shadow-soft">
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
            Construct AI Systems LLC
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Premium corporate site for enterprise-ready AI systems.
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            We design, build, and operate the AI backbone for regulated industries. Explore the
            platform, preview specialized modules, and coordinate a bespoke demo with our team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-strong"
            >
              Explore the platform
              <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Talk to solutions
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Enterprise-grade",
                copy: "SRE-driven reliability, governance-first posture, and SOC2 practices.",
              },
              {
                title: "AI with guardrails",
                copy: "Quality, safety, and observability baked into every module.",
              },
              {
                title: "Partnering model",
                copy: "Dedicated program team guiding architecture, rollout, and change management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-md)] border border-border/60 bg-background/60 px-4 py-3"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-muted leading-5">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-32 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-gradient-to-b from-white via-white to-background shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,95,255,0.14),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(0,56,227,0.12),transparent_40%)]" />
          <div className="relative flex h-full flex-col justify-between gap-6 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                Platform snapshot
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Construct AI Platform</h2>
              <p className="mt-3 text-base leading-7 text-muted">
                Unified orchestration for models, data, and applications with zero-compromise
                security and human-in-the-loop controls.
              </p>
            </div>
            <div className="grid gap-3 rounded-[var(--radius-md)] border border-white/60 bg-white/60 p-4 backdrop-blur">
              {[
                "Data + model governance with audit-grade trails.",
                "Realtime observability across agents, copilots, and APIs.",
                "Deployment patterns for on-prem, VPC, and hybrid edge.",
                "Blueprints for analytics, automation, and safety layers.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[var(--radius-sm)] bg-foreground/[0.03] px-3 py-2"
                >
                  <span className="mt-[2px] h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </div>
    </PageShell>
  );
}
