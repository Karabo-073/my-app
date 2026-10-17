"use client";

import { useEffect, useState } from "react";
import Shell from "./components/shell";
import { introLines } from "./data";
import { AboutProfile, FinalContact, Hero, Metrics, Publications, ResearchDomains, ResearchInPractice, SelectedWork, Toolkit } from "./home/sections";

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
    <Shell hideContact>
      <Hero />
      <Metrics />
      <AboutProfile />
      <ResearchDomains />
      <Toolkit />
      <ResearchInPractice />
      <Publications />
      <SelectedWork />
      <FinalContact />
    </Shell>
  );
}