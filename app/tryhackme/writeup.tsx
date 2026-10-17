/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Block, flags, lessonsLearned, pocSteps, sections } from "./ internalReportsData";

function Render({ b }: { b: Block }) {
  switch (b.type) {
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-white">{b.text}</h3>;
    case "p":
      return <p className="mt-4 text-base leading-8 text-slate-300">{b.text}</p>;
    case "list":
      return (
        <ul className="mt-4 space-y-2 pl-5 text-base leading-8 text-slate-300 marker:text-red-500">
          {b.items.map((it, i) => (
            <li key={i} className="list-disc">{it}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-black">
          {b.lang && (
            <p className="border-b border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-red-500">
              {b.lang}
            </p>
          )}
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-6 text-slate-300">
            <code>{b.code}</code>
          </pre>
        </div>
      );
  }
}

function FlagReveal({ label, verified, value }: { label: string; verified: boolean; value: string }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="rounded-lg border border-red-500/20 bg-black/70 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-sm font-semibold tracking-wider text-white">{label}</p>
        <button
          type="button"
          onClick={() => setShown((s) => !s)}
          aria-expanded={shown}
          className="rounded border border-red-500/40 bg-red-500/10 px-4 py-2 font-mono text-xs tracking-wider text-red-400 transition hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500/60"
        >
          {shown ? "HIDE FLAG" : "REVEAL FLAG"}
        </button>
      </div>
      {shown && (
        <p className="mt-4 rounded border border-white/10 bg-black p-3 font-mono text-sm text-slate-300">
          {verified && value ? value : "Not yet verified against the live lab."}
        </p>
      )}
    </div>
  );
}

function PocModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Proof of Concept">
      <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-red-500/30 bg-black p-6 shadow-[0_0_60px_rgba(239,68,68,0.15)] sm:p-9">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-xs tracking-[0.25em] text-red-500">PROOF OF CONCEPT</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-white/10 px-3 py-1.5 font-mono text-xs text-slate-400 transition hover:border-red-500/30 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/60"
          >
            CLOSE ✕
          </button>
        </div>
        <div className="space-y-6">
          {pocSteps.map((step) => (
            <div key={step.title} className="rounded-lg border border-white/10 bg-black/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider ${
                    step.verified ? "border-red-500/40 text-red-400" : "border-white/15 text-slate-500"
                  }`}
                >
                  {step.verified ? "VERIFIED" : "UNVERIFIED"}
                </span>
              </div>
              <pre className="mt-3 overflow-x-auto rounded bg-black p-3 font-mono text-xs text-slate-300">
                <code>$ {step.command}</code>
              </pre>
              {step.verified && step.output ? (
                <pre className="mt-2 overflow-x-auto rounded border border-white/10 bg-black p-3 font-mono text-xs text-slate-400">
                  <code>{step.output}</code>
                </pre>
              ) : (
                <p className="mt-2 font-mono text-xs text-slate-600">No captured output yet for this step.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Writeup() {
  const [pocOpen, setPocOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-red-500/20 bg-black/80 p-6 sm:p-12">
      <p className="font-mono text-xs tracking-[0.25em] text-red-500">ROOM WRITEUP</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
        Internal Reports — From Enumeration to Root
      </h2>

      <img
        src="/Tryhackme/TryhackmeRoom1.png"
        alt="Internal Reports — TryHackMe room overview"
        className="mt-8 w-full rounded-lg border border-red-500/20"
      />

      {sections.map((s) => (
        <section key={s.number} className="mt-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-red-500">{s.number}</span>
            <h3 className="text-2xl font-semibold text-white">{s.title}</h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          {s.blocks.map((b, i) => (
            <Render key={i} b={b} />
          ))}
        </section>
      ))}

      <section className="mt-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-red-500">09</span>
          <h3 className="text-2xl font-semibold text-white">Capture the Flags</h3>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Try the room yourself before revealing the flags below.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {flags.map((f) => (
            <FlagReveal key={f.label} {...f} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-red-500">10</span>
          <h3 className="text-2xl font-semibold text-white">Lessons Learned</h3>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <p className="mt-4 text-base leading-8 text-slate-300">The complete attack chain:</p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-8 text-slate-300 marker:text-red-500">
          {lessonsLearned.chain.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ol>
        <p className="mt-6 text-base leading-8 text-slate-300">Remediation measures:</p>
        <ul className="mt-4 space-y-2 pl-5 text-base leading-8 text-slate-300 marker:text-red-500">
          {lessonsLearned.remediation.map((r, i) => (
            <li key={i} className="list-disc">{r}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setPocOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-8 py-4 font-mono text-sm font-bold tracking-widest text-black transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/60"
        >
          View PoC
        </button>
      </div>

      <PocModal open={pocOpen} onClose={() => setPocOpen(false)} />
    </article>
  );
}