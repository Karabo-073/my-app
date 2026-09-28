import Shell, { ExternalLinkIcon, SectionHeading } from "../components/Shell";
import { books } from "../data";

export default function Books() {
  return (
    <Shell>
      <section>
        <SectionHeading number="01" title="Book" />
        <div className="space-y-8">
          {books.map((book) => (
            <div key={book.title} className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-black/80 p-8 sm:p-12">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-red-500/[0.06] blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_260px] md:items-center">
                <div>
                  <span className="rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2 font-mono text-xs tracking-wider text-red-400">{book.status}</span>
                  <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">{book.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-400">{book.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {book.tags.map((t) => (
                      <span key={t} className="rounded-md border border-white/[0.08] px-2.5 py-1 font-mono text-xs text-slate-500">{t}</span>
                    ))}
                  </div>
                  {book.note && <p className="mt-6 text-sm text-slate-500">{book.note}</p>}
                  {book.link ? (
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg border border-red-500/30 bg-red-500/10 px-6 py-3.5 text-sm font-semibold text-red-400 transition hover:bg-red-500/20">
                      View Book <ExternalLinkIcon />
                    </a>
                  ) : (
                    <button type="button" disabled className="mt-6 inline-flex cursor-not-allowed rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-500">
                      Coming Soon
                    </button>
                  )}
                </div>
                <div aria-label={`${book.title} cover preview`} className="mx-auto flex h-80 w-56 flex-col justify-between border border-red-500/20 bg-gradient-to-br from-[#2a0a0a] via-black to-black p-5 shadow-2xl shadow-black/50">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-red-500">{book.tags[0] ?? "SECURITY RESEARCH"}</p>
                    <div className="mt-3 h-px bg-red-500/30" />
                  </div>
                  <div>
                    <p className="text-xl font-black leading-tight text-white">{book.title}</p>
                    <p className="mt-2 font-mono text-[10px] leading-4 text-slate-500">{book.status}</p>
                  </div>
                  <p className="font-mono text-[10px] tracking-wider text-red-500">MANUEL MOLAPO</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}