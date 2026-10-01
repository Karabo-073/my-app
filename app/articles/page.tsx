import Shell, { ExternalLinkIcon, SectionHeading } from "../components/shell";
import { articles } from "../data";

export default function Articles() {
  return (
    <Shell>
      <section>
        <SectionHeading number="01" title="Research & Publications" />
        <p className="mb-7 text-sm leading-7 text-slate-500 sm:text-base">
          Cybersecurity articles, technical research, and educational content published on Medium.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((a, i) => (
            <article key={a.title} className="flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-black/80 transition hover:border-red-500/25">
              <div className="relative flex h-44 items-end overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-black to-black p-6">
                <div aria-hidden="true" className="absolute right-4 top-3 font-mono text-6xl font-bold text-red-500/[0.07]">0{i + 1}</div>
                <div aria-hidden="true" className="absolute right-6 top-6 h-20 w-20 rounded-full border border-red-500/10" />
                <div className="relative">
                  <p className="font-mono text-xs tracking-[0.2em] text-red-500">MEDIUM / RESEARCH</p>
                  <p className="mt-2 text-xl font-bold text-white">{a.label}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold leading-7 text-white">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{a.description}</p>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-red-500 hover:text-red-400">
                  Read on Medium <ExternalLinkIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a href="https://medium.com/@molapomanuel709" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:border-red-500/30 hover:text-red-400">
          Explore All Publications <ExternalLinkIcon />
        </a>
      </section>
    </Shell>
  );
}