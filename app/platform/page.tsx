'use client';

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const overviewPoints = [
  "Automated drawing interpretation",
  "Early detection of conflicts and inconsistencies",
  "Smart recommendations based on engineering logic",
  "Faster documentation & RFI cycles",
  "Alignment between office and field teams",
  "Predictability across the entire project lifecycle",
];

const featureBlocks = [
  {
    title: "Drawing Analysis",
    icon: "🗂️",
    description: "AI reads architectural, structural, and fabrication drawings with high fidelity.",
    bullets: ["Detects missing details", "Finds dimensional inconsistencies", "Flags conflicts early"],
  },
  {
    title: "Compliance Checker",
    icon: "✅",
    description: "Cross-checks against codes, specs, and manufacturer requirements automatically.",
    bullets: ["Building code logic", "Material/hardware validation", "Spec alignment"],
  },
  {
    title: "Geometry Extraction",
    icon: "📐",
    description: "Converts 2D plans into structured geometry for downstream AI workflows.",
    bullets: ["Element outlines & levels", "Dimensions & segmentation", "Spatial relationships"],
  },
  {
    title: "AI Recommendations",
    icon: "✨",
    description: "Suggests fixes and clarifications to cut RFIs and rework loops.",
    bullets: ["Risk classification", "Suggested corrections", "Optimal routing / placement"],
  },
  {
    title: "Coordination Hub",
    icon: "🧭",
    description: "A decision layer for issues, approvals, and structured insights.",
    bullets: ["Issue tracking & severity", "Documentation review", "Approval workflows"],
  },
  {
    title: "Issue Detection",
    icon: "⚠️",
    description: "Surfaces risky areas and inconsistencies before they reach the field.",
    bullets: ["Collision spotting", "Unclear zones flagged", "Readiness scoring"],
  },
];

const benefits = [
  { title: "Enhanced Productivity", copy: "Automated interpretation and recommendations speed up review cycles." },
  { title: "Better Decisions", copy: "Structured insights and severity scoring for faster approvals." },
  { title: "Higher Quality", copy: "Fewer conflicts, clearer drawings, and guardrails for every release." },
  { title: "Improved Safety", copy: "Risk flags and compliance checks reduce field surprises." },
];

const workflow = [
  {
    title: "Upload & Ingest",
    copy: "Drop drawings and documentation; CAS prepares them for AI analysis.",
  },
  {
    title: "AI Analysis",
    copy: "Drawing intelligence, compliance checks, and issue detection in minutes.",
  },
  {
    title: "Recommendations",
    copy: "CAS suggests fixes, clarifies risks, and highlights missing details.",
  },
  {
    title: "Decision Hub",
    copy: "Approve, assign, or request edits with structured tasks and RFI-ready context.",
  },
];

const audiences = [
  { title: "Contractors", description: "Reduce costly errors and rework through automated AI checks." },
  { title: "Engineers", description: "Validate designs, ensure technical accuracy, and speed up coordination." },
  { title: "Architects", description: "Receive instant feedback on completeness and constructibility." },
  { title: "Fabricators", description: "Ensure shop drawings meet production requirements." },
  { title: "Project Managers", description: "Improve decision-making and streamline approval cycles." },
  { title: "QA/QC Teams", description: "Identify risks, track issues, and maintain high construction quality." },
];

export default function PlatformPage() {
  return (
    <div className="space-y-14 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[24px] border border-black/5 bg-white/70 px-8 py-14 shadow-soft backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(11,191,243,0.14),transparent_38%),radial-gradient(circle_at_0%_50%,rgba(249,168,38,0.12),transparent_32%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">
            Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            The Construct AI Platform
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            AI-powered drawing analysis, engineering intelligence, and automated construction workflows — in one system.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="space-y-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="mx-auto max-w-5xl space-y-3 text-center"
        >
          <p className="text-lg leading-8 text-foreground/90">
            Construct AI Systems (CAS) transforms 2D drawings, engineering documentation, and field requirements into structured data,
            actionable insights, and predictable project outcomes.
          </p>
          <p className="text-lg leading-8 text-foreground/90">
            The platform combines PDF interpretation, geometry extraction, AI reasoning, and coordination tools into a unified workflow purpose-built
            for modern construction.
          </p>
        </motion.div>
      </section>

      {/* Platform Overview */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Platform Overview
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            CAS reduces errors, accelerates coordination, and improves accuracy
          </h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="grid gap-4 md:grid-cols-3"
        >
          {overviewPoints.map((item) => (
            <li key={item}>
              <div className="group h-full rounded-2xl border border-black/5 bg-white/70 p-5 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-glow">
                <p className="text-base font-semibold text-foreground">{item}</p>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="text-foreground/80"
        >
          The result: fewer mistakes, faster decisions, and higher-quality builds.
        </motion.p>
      </section>

      {/* Core capabilities */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Core Capabilities of the Platform
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Built for AI-first construction</h2>
        </motion.div>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {featureBlocks.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ delay: index * 0.03 }}
              className="rounded-2xl border border-black/5 bg-white/75 p-6 shadow-soft backdrop-blur"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)] text-base">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/85">{feature.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                {feature.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-strong)] shadow-glow" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">Key Benefits</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Why teams choose CAS</h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-black/5 bg-white/75 p-5 shadow-soft backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-8 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)]" />
                <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-foreground/80">{benefit.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Platform Objectives
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">What the platform delivers</h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="grid gap-4 md:grid-cols-2"
        >
          {overviewPoints.map((item) => (
            <li key={item}>
              <div className="group h-full rounded-2xl border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-glow">
                <p className="text-base font-semibold text-foreground">{item}</p>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="text-foreground/80"
        >
          CAS provides a modern, predictable, data-driven workflow for the entire construction lifecycle.
        </motion.p>
      </section>

      {/* Who it's for */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Who Uses the Platform
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Built for the full construction team</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="grid gap-4 md:grid-cols-4"
        >
          {workflow.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-2 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-soft backdrop-blur"
            >
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)]" />
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-6 text-foreground/80">{step.copy}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="grid gap-3 rounded-[20px] border border-black/5 bg-white/75 p-6 shadow-soft backdrop-blur md:grid-cols-2"
        >
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col gap-1 rounded-[14px] bg-foreground/[0.03] px-4 py-3 text-sm text-foreground/90"
            >
              <div className="flex items-center gap-2">
                <span className="mt-[2px] h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent-strong)] shadow-glow" />
                <span className="font-semibold text-foreground">{audience.title}</span>
              </div>
              <p className="text-foreground/80">{audience.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="pt-4 text-sm text-foreground/60">
        © 2025 Construct AI Systems LLC · All rights reserved.
      </section>
    </div>
  );
}
