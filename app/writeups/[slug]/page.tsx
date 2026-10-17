/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import Shell from "../../components/shell";
import { Block, getWriteup, writeups } from "../writeupData";

export function generateStaticParams() {
  return writeups.filter((w) => w.published).map((w) => ({ slug: w.slug }));
}

function Render({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-bold text-white sm:text-3xl"><span className="mr-2 text-red-500">#</span>{b.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-white">{b.text}</h3>;
    case "p":
      return <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{b.text}</p>;
    case "list":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-8 text-slate-300 marker:text-red-500 sm:text-lg">
          {b.items.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      );
    case "code":
      return (
        <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-black">
          {b.lang && <p className="border-b border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-red-500">{b.lang}</p>}
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-6 text-slate-300"><code>{b.code}</code></pre>
        </div>
      );
    case "image":
      return (
        <figure className="mt-6">
          <img src={b.src} alt={b.alt} className="w-full rounded-lg border border-white/10" />
          {b.caption && <figcaption className="mt-2 text-center font-mono text-xs text-slate-500">{b.caption}</figcaption>}
        </figure>
      );
    case "note":
      return <p className="mt-6 rounded-lg border border-red-500/30 bg-red-500/[0.06] p-4 text-sm leading-7 text-slate-300">{b.text}</p>;
    case "link":
      return (
        <p className="mt-5">
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/[0.06] px-5 py-3 font-mono text-sm text-red-400 transition hover:bg-red-500/[0.12]"
          >
            {b.label} <span aria-hidden="true">↗</span>
          </a>
        </p>
      );
  }
}

export default async function WriteupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWriteup(slug);
  if (!w || !w.published) notFound();

  return (
    <Shell>
      <article className="mx-auto w-full max-w-4xl rounded-2xl border border-red-500/20 bg-black/85 p-6 sm:p-12">
        <Link href="/writeups" className="font-mono text-sm text-red-500 transition hover:text-red-400">← BACK TO WRITEUPS</Link>
        <p className="mt-8 font-mono text-xs tracking-[0.25em] text-red-500">{w.id} // {w.category}</p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">{w.title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {w.tags.map((t) => (
            <span key={t} className="rounded border border-white/10 px-2.5 py-1 font-mono text-xs text-slate-500">{t}</span>
          ))}
          {w.date && <span className="font-mono text-xs text-slate-600">· {w.date}</span>}
        </div>
        <div className="mt-8 h-px bg-white/10" />
        {w.content.map((b, i) => <Render key={i} b={b} />)}
      </article>
    </Shell>
  );
}