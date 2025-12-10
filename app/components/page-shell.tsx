'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/modules", label: "Modules" },
  { href: "/demo", label: "Demo" },
  { href: "/contact", label: "Contact" },
];

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[rgba(11,191,243,0.22)] blur-3xl" />
        <div className="absolute right-[-20%] top-[-10%] h-96 w-96 rounded-full bg-[rgba(249,168,38,0.26)] blur-3xl" />
        <div className="absolute bottom-[-15%] left-[15%] h-96 w-96 rounded-full bg-[rgba(11,191,243,0.18)] blur-3xl" />
      </div>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8 md:pb-10">
        <Link href="/" className="flex items-center gap-3 rounded-full border border-border/70 bg-surface px-3 py-2 shadow-soft transition hover:shadow-glow">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-neutral-900 shadow-soft">
            CAI
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Construct AI Systems</span>
            <span className="text-xs text-muted">Premium AI platform</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/70 px-2 py-1 text-sm shadow-soft backdrop-blur md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-white text-neutral-900 shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                    : "text-foreground/80 hover:bg-white/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-full border border-neutral-200/70 bg-white/30 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur-md shadow-soft transition hover:bg-white/60 md:flex"
        >
          <span>Request a call</span>
          <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16">{children}</main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 pb-10 text-sm text-muted md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Construct AI Systems LLC</span>
        <div className="flex items-center gap-3">
          <Link href="/about" className="hover:text-foreground">
            Company
          </Link>
          <Link href="/platform" className="hover:text-foreground">
            Platform
          </Link>
          <Link href="/demo" className="hover:text-foreground">
            Demo
          </Link>
        </div>
      </footer>
    </div>
  );
}
