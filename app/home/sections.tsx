import Link from "next/link";
import { ExternalLinkIcon, SectionHeading } from "../components/shell";
import { articles, profile, stats } from "../data";
import { aboutParagraphs, contactLinks, domains, expertise, practice, toolkit, work } from "./homeData";

const card = "rounded-xl border border-white/[0.08] bg-black/80 transition hover:border-red-500/25";

// Internal paths use Next <Link>, external URLs open in a new tab
function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith("/") ? (
    <Link href={href} className={className}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden rounded-2xl border border-red-500/15 bg-black/80 px-8 py-16 sm:px-16 lg:px-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-[28rem] w-[28rem] rounded-full bg-red-500/[0.07] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-red-500/40 via-red-500/10 to-transparent" />
      <div className="relative max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2 font-mono text-xs tracking-wider text-red-400">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          CYBERSECURITY RESEARCH PORTFOLIO
        </div>
        <p className="font-mono text-sm text-slate-500 sm:text-base">Hello, I’m</p>
        <h1 className="mt-2 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-[9.5rem]">
          Manuel Molapo<span className="text-red-500">.</span>
        </h1>
        <p className="mt-8 text-lg font-semibold text-red-500 sm:text-2xl">Cybersecurity Researcher | Bug Bounty Hunter | Vulnerability Researcher</p>
        <p className="mt-3 font-mono text-xs text-slate-500 sm:text-sm">{profile.location} · Available for Global Security Opportunities</p>
        <p className="mt-10 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-9">
          I investigate vulnerabilities, analyze complex attack paths, and examine how real-world systems fail. My research spans application security, vulnerability discovery, wireless attack surfaces, mobile security, and connected-device security.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
          My work is driven by a single objective: identify security weaknesses before malicious actors can exploit them, validate their impact, and communicate findings that help make technology safer.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="rounded-lg bg-red-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-red-400">Explore My Research →</a>
          <a href="https://www.linkedin.com/in/manuel-molapo-619182342/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 px-8 py-4 text-sm font-medium text-white transition hover:border-red-500/30">
            Connect on LinkedIn <ExternalLinkIcon />
          </a>
        </div>
        <p className="mt-12 font-mono text-[11px] tracking-[0.2em] text-slate-500 sm:text-xs">OFFENSIVE SECURITY / VULNERABILITY RESEARCH / WIRELESS & DEVICE SECURITY</p>
      </div>
    </section>
  );
}

export function Metrics() {
  return (
    <section>
      <SectionHeading number="01" title="Research Overview" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`${card} p-6 sm:p-8`}>
            <p className="font-mono text-4xl font-bold text-red-500 sm:text-5xl">{s.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-600">Statistics and rankings are self-reported and may change over time.</p>
    </section>
  );
}

export function AboutProfile() {
  return (
    <section>
      <SectionHeading number="02" title="About" />
      <div className="grid gap-10 rounded-2xl border border-white/[0.08] bg-black/80 p-8 sm:p-14 lg:grid-cols-[1fr_1.5fr]">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Researcher. Hunter. <span className="text-red-500">Penetration Tester.</span>
        </h2>
        <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
          {aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

export function ResearchDomains() {
  return (
    <section>
      <SectionHeading number="03" title="Research Across the Attack Surface" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {domains.map((d) => (
          <article key={d.id} className={`${card} flex flex-col p-7 sm:p-8`}>
            <div className="flex items-center justify-between gap-3 font-mono text-xs">
              <span className="text-red-500">DOMAIN_{d.id}</span>
              <span className={`rounded-full border px-3 py-1 text-[10px] tracking-wider ${d.status === "HANDS-ON" ? "border-red-500/40 text-red-400" : "border-white/15 text-slate-500"}`}>{d.status}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{d.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
              {d.items.map((i) => (
                <li key={i} className="flex gap-3"><span aria-hidden="true" className="text-red-500">/</span>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Toolkit() {
  const chips = (list: string[], red: boolean) => (
    <div className="flex flex-wrap gap-3">
      {list.map((t) => (
        <span key={t} className={`rounded-md border px-4 py-2.5 text-sm ${red ? "border-red-500/10 bg-red-500/[0.04] text-red-200/80" : "border-white/[0.08] bg-white/[0.02] text-slate-400"}`}>{t}</span>
      ))}
    </div>
  );
  return (
    <section>
      <SectionHeading number="04" title="Security Expertise & Technical Toolkit" />
      <div className="grid gap-5 lg:grid-cols-2">
        <div className={`${card} p-7 sm:p-10`}>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-slate-500">Security Expertise</p>
          {chips(expertise, true)}
        </div>
        <div className={`${card} p-7 sm:p-10`}>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-slate-500">Technical Toolkit</p>
          {chips(toolkit, false)}
        </div>
      </div>
    </section>
  );
}

export function ResearchInPractice() {
  return (
    <section>
      <SectionHeading number="05" title="Research in Practice" />
      <div className="grid gap-5 md:grid-cols-2">
        {practice.map((p, i) => (
          <article key={p.title} className={`${card} flex gap-5 p-7 sm:p-8`}>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.05] font-mono text-sm text-red-500">0{i + 1}</div>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{p.text}</p>
              {p.href && (
                <SmartLink href={p.href} className="mt-4 text-sm font-medium text-red-500 hover:text-red-400">
                  View <ExternalLinkIcon />
                </SmartLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// The five research blogs = the first five entries of `articles` in data.ts
export function Publications() {
  return (
    <section>
      <SectionHeading number="06" title="Research Notes & Technical Publications" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.slice(0, 5).map((a) => (
          <article key={a.link} className={`${card} flex flex-col p-7 sm:p-8`}>
            <p className="font-mono text-xs tracking-[0.2em] text-red-500">{a.label}</p>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{a.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{a.description}</p>
            <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-sm font-medium text-red-500 hover:text-red-400">
              Read Article <ExternalLinkIcon />
            </a>
          </article>
        ))}
      </div>
      <Link href="/articles" className="mt-6 inline-flex rounded-lg border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:border-red-500/30 hover:text-red-400">
        Browse all technical articles →
      </Link>
    </section>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-28">
      <SectionHeading number="07" title="Selected Research & Technical Work" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {work.map((w) => (
          <SmartLink key={w.title} href={w.href} className={`${card} group block p-7 sm:p-9 hover:-translate-y-1`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white transition group-hover:text-red-400">{w.title}</h3>
              <span aria-hidden="true" className="text-red-500">{w.href.startsWith("/") ? "→" : "↗"}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">{w.text}</p>
          </SmartLink>
        ))}
      </div>
    </section>
  );
}

export function FinalContact() {
  return (
    <section id="contact" className="rounded-2xl border border-red-500/20 bg-black/80 p-8 text-center sm:p-16">
      <p className="font-mono text-xs tracking-[0.2em] text-red-500">LET’S CONNECT</p>
      <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">Securing Systems Through Research.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
        I am interested in meaningful security research, vulnerability disclosure, product security.
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Explore my work, review my publications, or connect with me to discuss security research and collaboration.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {contactLinks.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-400 transition hover:border-red-500/30 hover:text-red-400">
            {c.label} <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </section>
  );
}