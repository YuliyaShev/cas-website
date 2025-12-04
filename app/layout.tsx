import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Company" },
  { href: "/platform", label: "Platform" },
  { href: "/modules", label: "Modules" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Construct AI Systems LLC | Premium AI Infrastructure",
  description:
    "Construct AI Systems builds the premium AI platform for enterprises. Explore our platform, modules, and tailored demo experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6">
          <header className="sticky top-0 z-50 -mx-6 mb-8 border-b border-black/5 bg-white/70 px-6 py-4 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
              <Link href="/" className="flex items-center gap-3 rounded-full px-2 py-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-semibold uppercase tracking-wide text-white">
                  CAI
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold">Construct AI Systems</span>
                  <span className="text-xs text-muted">Premium AI platform</span>
                </div>
              </Link>
              <nav className="flex items-center gap-2 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden md:block" />
            </div>
          </header>

          <main className="flex-1 pb-12">{children}</main>

          <footer className="mt-8 border-t border-black/5 py-6 text-sm text-muted">
            © {year} Construct AI Systems LLC
          </footer>
        </div>
      </body>
    </html>
  );
}
