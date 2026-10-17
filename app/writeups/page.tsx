import Link from "next/link";
import Shell from "../components/shell";
import HackerBackground from "./HackerBackground";
import SectionDivider from "./Sectiondivider";
import { Writeup, bySection } from "./writeupData";
import "./writeups.css";

function WriteupCard({ w }: { w: Writeup }) {
  return (
    <article className="wr-card flex flex-col rounded-xl border border-red-500/30 bg-black/85 p-7 sm:p-8">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-emerald-400">{w.id}</span>
        <span className="text-red-500">{w.category}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">
        {w.published ? w.cardTitle ?? w.title : "Coming Soon"}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {w.tags.map((t) => (
          <span key={t} className="rounded border border-white/[0.1] px-2.5 py-1 font-mono text-xs text-slate-500">{t}</span>
        ))}
      </div>
      <div className="mt-auto pt-7">
        {w.published ? (
          <Link
            href={`/writeups/${w.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-mono text-sm font-bold tracking-widest text-black transition hover:bg-red-400 sm:w-auto"
          >
            READ WRITEUP <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-red-500/40 bg-red-500/10 px-6 py-3.5 font-mono text-sm font-bold tracking-widest text-red-400 sm:w-auto"
          >
            READ WRITEUP · COMING SOON
          </button>
        )}
      </div>
    </article>
  );
}

function WriteupSection({ number, title, items }: { number: string; title: string; items: Writeup[] }) {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-sm text-red-500">{number}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((w) => (
          <WriteupCard key={w.id} w={w} />
        ))}
      </div>
    </section>
  );
}

export default function Writeups() {
  return (
    <Shell>
      <div className="relative">
        <HackerBackground />
        <div className="relative z-10 space-y-12">
          <header className="wr-shake text-center">
            <h1 className="text-4xl font-black tracking-wider text-white sm:text-7xl">
              <span className="wr-glitch" data-text="BUG BOUNTY WRITEUPS">
                BUG BOUNTY <span className="text-red-500">WRITEUPS</span>
              </span>
            </h1>
          </header>

          <WriteupSection number="01" title="Bug Bounty Writeups" items={bySection("BUG BOUNTY")} />

          <SectionDivider label="CVE WRITEUPS" />

          <WriteupSection number="02" title="CVE Writeups" items={bySection("CVE")} />

          <SectionDivider label="RESEARCH BLOG" />

          <WriteupSection number="03" title="Research Blog" items={bySection("RESEARCH BLOG")} />
        </div>
      </div>
    </Shell>
  );
}