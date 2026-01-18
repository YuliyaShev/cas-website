"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <>
      <div className="relative z-20 w-full border-b border-amber-200/80 bg-gradient-to-r from-amber-100/90 via-amber-50/95 to-amber-100/90 px-6 py-5 text-center text-lg font-semibold tracking-[0.08em] text-neutral-900 shadow-[0_12px_36px_rgba(0,0,0,0.1)] backdrop-blur md:py-6 md:text-xl">
        <span className="mr-3 inline-flex items-center rounded-full border border-amber-300/70 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">
          Notice
        </span>
        The website is currently being refined. We appreciate your understanding.
      </div>
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-6 py-32 md:py-40">
      <Image
        src="/hero-city-sunset.webp"
        alt="Digital skyline for Construct AI Systems"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-900/45 via-neutral-900/18 to-white/12" />
      <div className="absolute -left-24 top-10 -z-10 h-96 w-96 rounded-full bg-white/8 blur-3xl" />
      <div className="absolute bottom-0 right-[-6rem] -z-10 h-72 w-72 rounded-full bg-amber-100/24 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[24px] border border-white/40 bg-white/55 px-10 py-12 text-center shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur"
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-900 drop-shadow-sm"
        >
          CAS | Construction AI Systems
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 drop-shadow md:text-5xl"
        >
          AI-Powered Construction Modernization
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-neutral-800 drop-shadow-sm md:text-2xl"
        >
          Intelligent automation that accelerates coordination, reduces errors, and improves
          construction decision-making.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-100 px-8 py-4 text-lg font-semibold text-neutral-900 shadow-soft transition hover:shadow-lg"
          >
            Request a Demo
            <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="https://app.constructaisystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-7 py-3 text-base font-semibold text-neutral-900 backdrop-blur-md transition hover:bg-white/35"
          >
            Explore Platform
          </Link>
        </motion.div>
      </motion.div>
      </section>

      <section className="relative z-10 mx-auto mt-12 flex w-full max-w-5xl flex-col gap-6 rounded-[28px] border border-white/50 bg-white/65 px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-900">Pricing</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">Choose your CAS plan</h2>
        <p className="mt-2 text-base text-neutral-700">
          Flexible tiers for teams adopting Construct AI Systems — from pilots to full-scale rollouts.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "$249",
            cadence: "/mo",
            features: [
              "Up to 10 drawing ingests/month",
              "AI analysis & conflict flags",
              "Basic reporting",
              "Email support",
            ],
            cta: { label: "Start trial", href: "/demo" },
          },
          {
            name: "Pro",
            price: "$550",
            cadence: "/mo",
            highlight: true,
            features: [
              "Up to 75 ingests/month",
              "Compliance checker & geometry extraction",
              "AI recommendations + issue routing",
              "Priority support",
            ],
            cta: { label: "Subscribe", href: "/demo" },
          },
          {
            name: "Enterprise",
            price: "$850",
            cadence: "/mo",
            features: [
              "Unlimited projects",
              "SSO/SAML and RBAC",
              "Dedicated success + SLA",
              "On-prem/VPC deployment options",
            ],
            cta: { label: "Contact sales", href: "mailto:hello@construct.ai" },
          },
        ].map((plan) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`flex h-full flex-col gap-4 rounded-2xl border border-black/5 bg-white/75 p-6 shadow-soft backdrop-blur ${
              plan.highlight ? "outline outline-2 outline-[color:var(--color-accent)]" : ""
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">{plan.name}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-neutral-900">{plan.price}</span>
                  <span className="text-sm text-neutral-600">{plan.cadence}</span>
                </div>
              </div>
              {plan.highlight ? (
                <span className="rounded-full bg-[color:var(--color-accent)]/15 px-3 py-1 text-xs font-semibold text-neutral-900">
                  Most popular
                </span>
              ) : null}
            </div>
            <ul className="space-y-2 text-sm text-neutral-800">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--color-accent-strong)] shadow-glow" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href={plan.cta.href}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[color:var(--color-accent)] to-[color:var(--color-accent-strong)] text-white shadow-soft hover:shadow-lg"
                    : "border border-white/60 bg-white/50 text-neutral-900 backdrop-blur hover:bg-white/70"
                }`}
              >
                {plan.cta.label} <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      </section>
    </>
  );
}
