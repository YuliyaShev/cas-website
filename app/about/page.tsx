'use client';

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-14 pb-16">
      <section className="relative overflow-hidden rounded-[24px] border border-black/5 bg-white/70 px-8 py-14 shadow-soft backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(11,95,255,0.06),transparent_35%),radial-gradient(circle_at_0%_50%,rgba(0,56,227,0.05),transparent_30%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">
            Company
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            About Construct AI Systems
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            A technology company building intelligent tools for construction modernization.
          </p>
        </motion.div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-3"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Who We Are
          </p>
          <p className="text-lg leading-8 text-foreground/90">
            Construct AI Systems LLC is a U.S.-based technology company focused on developing AI
            solutions that enhance engineering coordination, reduce construction errors, and
            modernize project workflows.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="rounded-[20px] border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Our Mission</h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Our mission is to improve the accuracy, speed, and quality of construction processes by
            integrating advanced artificial intelligence into everyday engineering tasks.
          </p>
        </motion.div>
      </section>

      <section className="space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            What We Build
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Product Pillars</h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="grid gap-3 rounded-[20px] border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          {[
            "AI-powered tools for analyzing construction drawings",
            "Automated detection of engineering conflicts",
            "Real-time 2D ↔ 3D coordination tools",
            "Heatmap-driven quality control insights",
            "Intelligent assistants for RFI and documentation workflows",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-[14px] bg-foreground/[0.03] px-4 py-3 text-sm text-foreground/90"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </section>

      <section className="space-y-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
            Our Approach
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Design and engineering principles
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="rounded-[20px] border border-black/5 bg-white/70 p-6 shadow-soft backdrop-blur"
        >
          <p className="text-base leading-7 text-foreground/90">
            We build with a clean UI and an engineering-first mindset, pairing cloud-native
            architecture with scalable AI workflows. Every experience is crafted with modern design
            principles—minimal, intentional, and performant—so teams can operate with clarity and
            confidence.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
