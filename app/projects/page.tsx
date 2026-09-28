import Shell, { ExternalLinkIcon, SectionHeading } from "../components/Shell";
import { projects } from "../data";

export default function Projects() {
  return (
    <Shell>
      <section>
        <SectionHeading number="01" title="Featured Projects" />
        <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.map((p) => (
            <article key={p.number} className="group flex flex-col rounded-xl border border-white/[0.08] bg-black/80 p-7 transition hover:border-red-500/25 sm:p-9">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-sm text-red-500">/ PROJECT_{p.number}</span>
                <ExternalLinkIcon />
              </div>
              <p className="mb-2 font-mono text-xs tracking-wider text-slate-500">{p.category}</p>
              <h3 className="text-2xl font-semibold text-white transition group-hover:text-red-400">{p.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded border border-white/[0.08] px-2.5 py-1 font-mono text-xs text-slate-500">{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-red-500 hover:text-red-400">
                View GitHub profile <ExternalLinkIcon />
              </a>
            </article>
          ))}
        </div>
        <a href="https://github.com/Karabo-073/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:border-red-500/30 hover:text-red-400">
          Explore All Projects <ExternalLinkIcon />
        </a>
      </section>
    </Shell>
  );
}