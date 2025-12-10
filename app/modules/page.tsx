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

const modules = [
  {
    title: "Advanced PDF Viewer",
    description:
      "A high-fidelity PDF rendering engine designed for construction drawings. Includes smooth zoom, structured navigation, and support for engineering annotations.",
  },
  {
    title: "AI Analysis",
    description:
      "AI-powered interpretation of drawings that assists with understanding project details, identifying potential issues, and accelerating review workflows.",
  },
  {
    title: "Issue Detection",
    description:
      "A smart system that identifies areas of potential conflict, missing information, or inconsistencies across documentation.",
  },
  {
    title: "2D / 3D Coordination Viewer",
    description:
      "A unified environment for reviewing drawings and 3D models together, helping improve clarity and reduce coordination errors.",
  },
];

export default function ModulesPage() {
  return (
    <div className="space-y-14 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[24px] border border-black/5 bg-white/70 px-8 py-14 shadow-soft backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(11,95,255,0.06),transparent_35%),radial-gradient(circle_at_0%_50%,rgba(0,56,227,0.05),transparent_30%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">
            Modules
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Construct AI Modules Overview
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Enterprise-ready capabilities designed for construction teams—built with premium UI,
            dependable performance, and AI-first workflows.
          </p>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Platform Modules
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Stable, production-focused capabilities
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
            >
              <div className="group h-full rounded-2xl border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-glow">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
