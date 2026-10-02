"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile, socials } from "../data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Videos", href: "/videos" },
  { label: "Articles", href: "/articles" },
  { label: "Writeups", href: "/writeups" },
  { label: "Book", href: "/books" },
];

export function ExternalLinkIcon() {
  return <span aria-hidden="true" className="text-red-500">↗</span>;
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm text-red-500">{number}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 px-4 py-3 text-sm text-slate-400 transition hover:border-red-500/30 hover:text-red-400"
        >
          {s.label} <ExternalLinkIcon />
        </a>
      ))}
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main
      className="flex min-h-screen flex-col bg-black bg-cover bg-center bg-fixed text-slate-300"
      style={{ backgroundImage: "url('/hacker.png')" }}
    >
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1800px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 lg:px-16">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 font-mono text-base font-bold text-red-400">
              MM
            </div>
            <div>
              <p className="text-base font-semibold text-white">{profile.name}</p>
              <p className="font-mono text-[11px] text-slate-500">SECURITY RESEARCHER</p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="order-3 flex w-full items-center gap-2 overflow-x-auto md:order-none md:w-auto">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm transition ${
                    active
                      ? "border border-red-500/30 bg-red-500/10 text-red-400"
                      : "border border-transparent text-slate-400 hover:text-red-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://www.linkedin.com/in/manuel-molapo-619182342/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
          >
            Connect <ExternalLinkIcon />
          </a>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1800px] flex-1 space-y-12 px-6 py-10 lg:px-16 lg:py-14">
        {children}

        <section id="contact">
          <div className="rounded-2xl border border-red-500/20 bg-black/80 p-8 text-center sm:p-12">
            <p className="font-mono text-xs tracking-[0.2em] text-red-500">LET&apos;S CONNECT</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Let&apos;s build a more secure digital world.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Interested in my research, technical work, or cybersecurity opportunities? Connect with me or explore my public work.
            </p>
            <div className="mt-7 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/[0.08] bg-black/80 py-6">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col justify-between gap-3 px-6 text-xs text-slate-600 sm:flex-row lg:px-16">
          <p>© 2026 Manuel Molapo · Cybersecurity Research Portfolio</p>
          <p className="font-mono">BUILT WITH NEXT.JS & TAILWIND CSS</p>
        </div>
      </footer>
    </main>
  );
}