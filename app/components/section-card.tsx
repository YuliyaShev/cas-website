'use client';

import { motion } from "framer-motion";
import Link from "next/link";

type SectionCardProps = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

export function SectionCard({ title, description, href, badge }: SectionCardProps) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-surface px-6 py-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          {badge ? (
            <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
          <span>Explore</span>
          <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
        </div>
        <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition duration-500 group-hover:scale-110 group-hover:bg-accent/16" />
      </Link>
    </motion.div>
  );
}
