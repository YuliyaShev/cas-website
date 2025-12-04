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
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8 md:pb-10">
        <Link href="/" className="flex items-center gap-3 rounded-full border border-border/70 bg-surface px-3 py-2 shadow-soft transition hover:shadow-glow">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold uppercase text-white shadow-glow">
            CAI
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Construct AI Systems</span>
            <span className="text-xs text-muted">Premium AI platform</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/90 px-2 py-1 text-sm shadow-soft backdrop-blur md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-accent text-white shadow-glow"
                    : "text-foreground/80 hover:bg-foreground/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-strong md:flex"
        >
          <span>Request a call</span>
          <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
        </Link>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">{children}</main>

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
