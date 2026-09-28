"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Shell, { ExternalLinkIcon, SectionHeading } from "./components/Shell";
import { introLines, profile, stats } from "./data";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [step, setStep] = useState(0);

  // Skip the intro if the visitor has already entered during this session
  useEffect(() => {
    try {
      if (sessionStorage.getItem("entered") === "1") setEntered(true);
    } catch {}
  }, []);

  useEffect(() => {
    if (entered || step >= introLines.length) return;
    const timer = window.setTimeout(() => setStep((s) => s + 1), 1000);
    return () => window.clearTimeout(timer);
  }, [entered, step]);

  const enter = () => {
    try {
      sessionStorage.setItem("entered", "1");
    } catch {}
    setEntered(true);
  };

  if (!entered) {
    return (
      <main
        className="flex min-h-screen items-center justify-center bg-black bg-cover bg-center px-4 py-10 text-red-500"
        style={{ backgroundImage: "url('/hacker.png')" }}
      >
        <div className="w-full max-w-4xl rounded-xl bg-black/80 p-6 text-center shadow-2xl shadow-black/50 sm:p-10">
          <p className="mb-4 font-mono text-xs tracking-[0.35em] text-emerald-400">
            MANUEL MOLAPO / CYBERSECURITY PORTFOLIO
          </p>
          <h1 className="mb-8 text-4xl font-black tracking-widest sm:text-5xl md:text-7xl">YOU ARE NOT ALONE</h1>
          <div aria-live="polite" className="min-h-[220px] space-y-2 font-mono text-base sm:text-xl md:text-2xl">
            {introLines.slice(0, step).map((line, i) => (
              <p key={`${i}-${line}`} className="min-h-[1.5rem]">{line || "\u00a0"}</p>
            ))}
          </div>
          {step >= introLines.length && (
            <button
              type="button"
              onClick={enter}
              className="mt-8 rounded border border-red-500 px-10 py-4 font-mono text-xl transition hover:bg-red-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              ENTER PORTFOLIO
            </button>
          )}
          <div className="mt-8 space-y-2 text-left font-mono text-xs text-emerald-400 sm:text-sm">
            <p>&gt; INITIALIZING SECURE CONNECTION...</p>
            <p>&gt; BYPASSING FIREWALL...</p>
            <p>&gt; ACCESS GRANTED.</p>
            {step >= introLines.length && <p className="pt-2">WELCOME, OPERATOR.</p>}
          </div>
        </div>
      </main>
    );
  }

  return (
    <Shell>
      <section className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-black/80 p-8 sm:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-red-500/[0.07] blur-3xl" />
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2 font-mono text-xs tracking-wider text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            CYBERSECURITY PORTFOLIO
          </div>
          <p className="mb-2 font-mono text-sm text-slate-500">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
            Manuel Molapo<span className="text-red-500">.</span>
          </h1>
          <p className="mt-3 text-sm text-red-500 sm:text-base">{profile.role} · {profile.location}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Cybersecurity researcher and bug bounty hunter focused on discovering vulnerabilities, analyzing attack paths, and understanding how applications fail.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-lg bg-red-500 px-7 py-4 text-sm font-semibold text-black transition hover:bg-red-400">
              Explore My Work →
            </Link>
            <a
              href="https://www.linkedin.com/in/manuel-molapo-619182342/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-7 py-4 text-sm font-medium text-white transition hover:border-red-500/30"
            >
              Contact on LinkedIn <ExternalLinkIcon />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-500">
            <span>OFFENSIVE SECURITY</span><span className="text-red-500">/</span>
            <span>BUG BOUNTY</span><span className="text-red-500">/</span>
            <span>VULNERABILITY RESEARCH</span>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading number="01" title="Research Overview" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/[0.08] bg-black/80 p-6 transition hover:border-red-500/20 sm:p-7">
              <p className="font-mono text-3xl font-bold text-red-500 sm:text-4xl">{s.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">{s.label}</p>
            </div>
          ))}
          <div className="rounded-xl border border-red-500/20 bg-black/80 p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Current Focus</p>
            <p className="mt-3 text-lg font-medium text-white">Offensive Security</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Bug bounty research, web application security, API testing, and practical vulnerability discovery.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-600">Statistics and rankings are self-reported and may change over time.</p>
      </section>
    </Shell>
  );
}