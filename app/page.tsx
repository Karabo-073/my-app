"use client";

import { useEffect, useState } from "react";

const introLines = [
  "EVERY SYSTEM YOU TRUST",
  "IS WATCHING YOU.",
  "",
  "EVERY MOVE YOU MAKE",
  "LEAVES A TRACE.",
  "",
  "BUT TOGETHER,",
  "WE LEAVE NONE.",
];

type Stat = {
  value: string;
  label: string;
};

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
};

type Article = {
  title: string;
  description: string;
  link: string;
  label: string;
};

type Book = {
  status: string;
  title: string;
  description: string;
  tags: string[];
  note?: string;
};

const profile = {
  name: "Manuel Molapo",
  role: "Cybersecurity Researcher | Bug Bounty Hunter",
  location: "Johannesburg, South Africa",
  bio: "I’m a cybersecurity researcher and bug hunter focused on offensive security, vulnerability research, and web application security. I participate in CTFs and bug bounty programs, researching vulnerabilities and attack paths across web applications and APIs.",
};

const stats: Stat[] = [
  { value: "Top 1%", label: "TryHackMe Global" },
  { value: "#10", label: "TryHackMe South Africa" },
  { value: "100+", label: "CTFs Completed" },
  { value: "13", label: "Professional Reports" },
  { value: "7", label: "7 reports validated on Bugcrowd" },
  { value: "10", label: "Articles Published" },
  { value: "2", label: "Books In Development" },
];

const skills = [
  "Web Application Pentesting",
  "API Security",
  "Bug Bounty Hunting",
  "Vulnerability Research",
  "SQL Injection",
  "IDOR",
  "Broken Access Control",
  "SSRF",
  "HTTP Request Smuggling",
  "Path Traversal",
  "XSS",
  "Privilege Escalation",
  "Network Security",
  "Red Teaming",
];

const tools = [
  "Burp Suite",
  "Nmap",
  "FFUF",
  "Gobuster",
  "Wireshark",
  "Kali Linux",
  "Linux",
  "Git & GitHub",
];

const projects: Project[] = [
  {
    number: "01",
    title: "NeuroLock IDS",
    category: "NETWORK SECURITY · C++",
    description:
      "A lightweight intrusion detection system built with C++ and libpcap to identify suspicious network activity, including port scans, ICMP floods, and suspicious HTTP payload patterns.",
    tags: ["C++", "libpcap", "IDS", "Network Monitoring"],
    link: "https://github.com/Karabo-073/Neurolock_IDS",
  },
  {
    number: "02",
    title: "Phishing attack",
    category: "Social Engineering",
    description:
      "A stimulated phishing campaign  was conducted on an user who works on local comapany to manipulate employee into revealing sensitive information on the company. ",
    tags: ["Security", "Social engineering"],
    link: "https://github.com/Karabo-073/Phishing-Attack",
  },
  {
    number: "03",
    title: "Web Application Security Research",
    category: "BUG BOUNTY · WEB SECURITY",
    description:
      "Hands-on vulnerability research covering SQL injection, IDOR, broken access control, SSRF, HTTP request smuggling, path traversal, and related attack paths.",
    tags: ["Bug Bounty", "Web Pentesting", "Research"],
    link: "https://github.com/Karabo-073/CTF-Reports",
  },
];

const articles: Article[] = [
  {
    title: "How attackers gain remote access using AndroRAT",
    description:
      "An educational breakdown of AndroRAT and how it can be abused to gain remote access to Android devices, demonstrated in controlled testing environments.",
    label: "ANDROID SECURITY",
    link: "https://medium.com/@molapomanuel709/how-attackers-gain-remote-access-using-androrat-a9221e00c85e",
  },
  {
    title: "How Hackers could spy on you using Camphish",
    description:
      "A look at Camphish, a technique used to capture webcam images through a spoofed permission prompt, explored here for defensive awareness.",
    label: "SOCIAL ENGINEERING",
    link: "https://medium.com/@molapomanuel709/how-hackers-could-spy-on-you-using-camphish-e377ba315597",
  },
  {
    title: "How attackers could compromise any Android phone",
    description:
      "An educational security research article exploring Android compromise techniques and mobile security risks.",
    label: "ANDROID SECURITY",
    link: "https://medium.com/@molapomanuel709/how-attackers-could-compromise-any-android-phone-475f0940af44",
  },
  {
    title:
      "When AI Agents Turned an Internal Package Service into a Bridge to Hugging Face",
    description:
      "A security-research breakdown of an AI-related incident and its security implications.",
    label: "AI SECURITY",
    link: "https://medium.com/@molapomanuel709/when-ai-agents-turned-an-internal-package-service-into-a-bridge-to-hugging-face-073f576bbd4f",
  },
  {
    title: "Agentic Bug Hunter",
    description:
      "A practical guide exploring AI agents and their potential role in bug bounty hunting.",
    label: "AI BUG HUNTING",
    link: "https://medium.com/@molapomanuel709/agentic-bug-hunter-0dc6f644c48b",
  },
];

const books: Book[] = [
  {
    status: "IN DEVELOPMENT",
    title: "Android Security & Attack Research",
    description:
      "An educational cybersecurity book in development, exploring Android security, social engineering, malware threats, and mobile-device compromise from a security research perspective.",
    tags: ["Android Security", "Mobile Threats", "Ethical Hacking"],
    note: "Planned paid access: $2 subscription. Purchase is not enabled yet.",
  },
  {
    status: "IN DEVELOPMENT",
    title: "Title TBA",
    description:
      "A security research book currently in development. Full title and further details to be announced.",
    tags: ["Security Research"],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manuel-molapo-619182342/",
  },
  { label: "GitHub", href: "https://github.com/Karabo-073/" },
  {
    label: "TryHackMe",
    href: "https://tryhackme.com/p/VantaRoot",
  },
  { label: "Medium", href: "https://medium.com/@molapomanuel709" },
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs text-red-500">{number}</span>
      <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <span aria-hidden="true" className="text-red-500">
      ↗
    </span>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "space-y-2" : "flex flex-wrap gap-2"}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            compact
              ? "flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 text-xs text-slate-400 transition hover:border-red-500/30 hover:text-red-400"
              : "rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:border-red-500/30 hover:text-red-400"
          }
        >
          {social.label} <ExternalLinkIcon />
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (entered || step >= introLines.length) return;

    const timer = window.setTimeout(() => {
      setStep((currentStep) => currentStep + 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [entered, step]);

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

          <h1 className="mb-8 text-4xl font-black tracking-widest sm:text-5xl md:text-7xl">
            YOU ARE NOT ALONE
          </h1>

          <div
            aria-live="polite"
            className="min-h-[220px] space-y-2 font-mono text-base sm:text-xl md:text-2xl"
          >
            {introLines.slice(0, step).map((line, index) => (
              <p key={`${index}-${line}`} className="min-h-[1.5rem]">
                {line || "\u00a0"}
              </p>
            ))}
          </div>

          {step >= introLines.length && (
            <button
              type="button"
              onClick={() => setEntered(true)}
              className="mt-8 rounded border border-red-500 px-10 py-4 font-mono text-xl transition hover:bg-red-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              ENTER PORTFOLIO
            </button>
          )}

          <div className="mt-8 space-y-2 text-left font-mono text-xs text-emerald-400 sm:text-sm">
            <p>&gt; INITIALIZING SECURE CONNECTION...</p>
            <p>&gt; BYPASSING FIREWALL...</p>
            <p>&gt; ACCESS GRANTED.</p>
            {step >= introLines.length && (
              <p className="pt-2">WELCOME, OPERATOR.</p>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center bg-fixed text-slate-300"
      style={{ backgroundImage: "url('/hacker.png')" }}
    >
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 font-mono text-sm font-bold text-red-400">
              MM
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="font-mono text-[10px] text-slate-500">
                SECURITY RESEARCHER
              </p>
            </div>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 text-xs text-slate-400 lg:flex"
          >
            <a className="transition hover:text-red-400" href="#about">
              About
            </a>
            <a className="transition hover:text-red-400" href="#research">
              Research
            </a>
            <a className="transition hover:text-red-400" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-red-400" href="#articles">
              Articles
            </a>
            <a className="transition hover:text-red-400" href="#book">
              Book
            </a>
          </nav>

          <a
            href="https://www.linkedin.com/in/manuel-molapo-619182342/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-500/20 sm:px-4"
          >
            Connect <ExternalLinkIcon />
          </a>
        </div>
      </header>

      <div
        id="home"
        className="mx-auto grid max-w-7xl gap-7 px-5 py-7 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-9 lg:px-10 lg:py-10"
      >
        <aside className="h-fit space-y-4 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-white/[0.08] bg-black/80 p-5">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/20 to-red-900/5 font-mono text-2xl font-bold text-red-400">
              MM
            </div>

            <h1 className="text-xl font-bold text-white">{profile.name}</h1>
            <p className="mt-2 text-xs leading-5 text-red-500">
              {profile.role}
            </p>
            <p className="mt-3 text-xs text-slate-500">{profile.location}</p>

            <div className="my-5 h-px bg-white/[0.08]" />

            <div className="mb-4 flex items-start gap-2 text-xs leading-5 text-slate-400">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500"
              />
              Bug Hunter
            </div>

            <SocialLinks compact />

            <div className="my-5 h-px bg-white/[0.08]" />
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>
            <div className="space-y-1 text-xs">
              {[
                ["Overview", "#home"],
                ["About Me", "#about"],
                ["Research", "#research"],
                ["Projects", "#projects"],
                ["Articles", "#articles"],
                ["Book", "#book"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/[0.04] hover:text-red-400"
                >
                  <span className="mr-2 text-red-500">/</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-black/80 p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Current Focus
            </p>
            <p className="mt-3 text-sm font-medium text-white">
              Offensive Security
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Bug bounty research, web application security, API testing, and
              practical vulnerability discovery.
            </p>
          </div>
        </aside>

        <div className="min-w-0 space-y-10">
          <section className="relative overflow-hidden rounded-2xl border border-red-500/15 bg-black/80 p-6 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-500/[0.07] blur-3xl"
            />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-wider text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                CYBERSECURITY PORTFOLIO
              </div>

              <p className="mb-2 font-mono text-xs text-slate-500">
                Hello, I&apos;m
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Manuel Molapo<span className="text-red-500">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Cybersecurity researcher and bug bounty hunter focused on
                discovering vulnerabilities, analyzing attack paths, and
                understanding how applications fail.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-lg bg-red-500 px-5 py-3 text-xs font-semibold text-black transition hover:bg-red-400"
                >
                  Explore My Work ↓
                </a>
                <a
                  href="https://www.linkedin.com/in/manuel-molapo-619182342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-5 py-3 text-xs font-medium text-white transition hover:border-red-500/30"
                >
                  Contact on LinkedIn <ExternalLinkIcon />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-slate-500">
                <span>OFFENSIVE SECURITY</span>
                <span className="text-red-500">/</span>
                <span>BUG BOUNTY</span>
                <span className="text-red-500">/</span>
                <span>VULNERABILITY RESEARCH</span>
              </div>
            </div>
          </section>

          <section aria-labelledby="overview-heading">
            <SectionHeading number="01" title="Research Overview" />
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.08] bg-black/80 p-4 transition hover:border-red-500/20 sm:p-5"
                >
                  <p className="font-mono text-2xl font-bold text-red-500">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-slate-600">
              Statistics and rankings are self-reported and may change over
              time.
            </p>
          </section>

          <section id="about">
            <SectionHeading number="02" title="About Me" />
            <div className="rounded-xl border border-white/[0.08] bg-black/80 p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-400">{profile.bio}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                My research focuses on Android security, social engineering, malware threats, and mobile-device compromise. 
                I investigate how attackers can exploit human behaviour, social media, authentication weaknesses, 
                and vulnerable applications to gain unauthorized access to accounts and Android devices.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I’m working toward contributing to security teams through
                practical testing, clear reporting, and continuous hands-on
                learning.
              </p>
            </div>
          </section>

          <section id="research">
            <SectionHeading number="03" title="Security Expertise" />
            <div className="rounded-xl border border-white/[0.08] bg-black/80 p-5 sm:p-6">
              <p className="mb-4 text-xs text-slate-500">
                Research areas and hands-on testing experience
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-red-500/10 bg-red-500/[0.04] px-3 py-2 text-xs text-red-200/80 transition hover:border-red-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="my-6 h-px bg-white/[0.08]" />
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="projects">
            <SectionHeading number="04" title="Featured Projects" />
            <div className="grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group rounded-xl border border-white/[0.08] bg-black/80 p-5 transition hover:border-red-500/25 sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-red-500">
                      / PROJECT_{project.number}
                    </span>
                    <ExternalLinkIcon />
                  </div>
                  <p className="mb-2 font-mono text-[10px] tracking-wider text-slate-500">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-red-400">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/[0.08] px-2 py-1 font-mono text-[10px] text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-red-500 hover:text-red-400"
                  >
                    View GitHub profile <ExternalLinkIcon />
                  </a>
                </article>
              ))}
            </div>
            <a
              href="https://github.com/Karabo-073/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg border border-white/10 px-4 py-3 text-xs text-slate-300 transition hover:border-red-500/30 hover:text-red-400"
            >
              Explore All Projects <ExternalLinkIcon />
            </a>
          </section>

          <section id="articles">
            <SectionHeading number="05" title="Research & Publications" />
            <p className="mb-5 text-xs leading-6 text-slate-500">
              Cybersecurity articles, technical research, and educational
              content published on Medium.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {articles.map((article, index) => (
                <article
                  key={article.title}
                  className="overflow-hidden rounded-xl border border-white/[0.08] bg-black/80 transition hover:border-red-500/25"
                >
                  <div className="relative flex h-36 items-end overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-black to-black p-5">
                    <div
                      aria-hidden="true"
                      className="absolute right-4 top-3 font-mono text-5xl font-bold text-red-500/[0.07]"
                    >
                      0{index + 1}
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute right-5 top-5 h-16 w-16 rounded-full border border-red-500/10"
                    />
                    <div className="relative">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-red-500">
                        MEDIUM / RESEARCH
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">
                        {article.label}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold leading-6 text-white">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      {article.description}
                    </p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-red-500 hover:text-red-400"
                    >
                      Read on Medium <ExternalLinkIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a
              href="https://medium.com/@molapomanuel709"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg border border-white/10 px-4 py-3 text-xs text-slate-300 transition hover:border-red-500/30 hover:text-red-400"
            >
              Explore All Publications <ExternalLinkIcon />
            </a>
          </section>

          <section id="book">
            <SectionHeading number="06" title="Book" />
            <div className="space-y-6">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-black/80 p-6 sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-red-500/[0.06] blur-3xl"
                  />
                  <div className="relative grid gap-7 md:grid-cols-[minmax(0,1fr)_190px] md:items-center">
                    <div>
                      <span className="rounded-full border border-red-500/20 bg-red-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-wider text-red-400">
                        {book.status}
                      </span>
                      <h3 className="mt-5 text-2xl font-bold leading-tight text-white">
                        {book.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {book.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.08] px-2 py-1 font-mono text-[10px] text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {book.note && (
                        <p className="mt-5 text-xs text-slate-500">
                          {book.note}
                        </p>
                      )}
                      <a
                        href="https://medium.com/@molapomanuel709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-3 text-xs font-semibold text-red-400 transition hover:bg-red-500/20"
                      >
                        View Book <ExternalLinkIcon />
                      </a>
                    </div>
                    <div
                      aria-label={`${book.title} cover preview`}
                      className="mx-auto flex h-56 w-40 flex-col justify-between border border-red-500/20 bg-gradient-to-br from-[#2a0a0a] via-black to-black p-4 shadow-2xl shadow-black/50"
                    >
                      <div>
                        <p className="font-mono text-[8px] tracking-[0.2em] text-red-500">
                          {book.tags[0] ?? "SECURITY RESEARCH"}
                        </p>
                        <div className="mt-3 h-px bg-red-500/30" />
                      </div>
                      <div>
                        <p className="text-lg font-black leading-tight text-white">
                          {book.title}
                        </p>
                        <p className="mt-2 font-mono text-[8px] leading-4 text-slate-500">
                          {book.status}
                        </p>
                      </div>
                      <p className="font-mono text-[8px] tracking-wider text-red-500">
                        MANUEL MOLAPO
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading number="07" title="Research Experience" />
            <div className="rounded-xl border border-white/[0.08] bg-black/80 p-5 sm:p-6">
              <div className="space-y-5">
                {[
                  {
                    title: "Bug Bounty Research",
                    text: "Hands-on vulnerability research through bug bounty programs, including Bugcrowd.",
                  },
                  {
                    title: "Professional Security Reports",
                    text: "13 reports documenting vulnerability research, technical evidence, impact, and remediation considerations.",
                  },
                  {
                    title: "Technical Writeups",
                    text: "25 writeups covering security labs, exploitation techniques, vulnerability analysis, and attack paths.",
                  },
                  {
                    title: "CTFs & Hands-on Labs",
                    text: "100+ completed CTFs across platforms including TryHackMe, BugForge, and picoCTF.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.05] font-mono text-xs text-red-500">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="rounded-2xl border border-red-500/20 bg-black/80 p-6 text-center sm:p-9">
              <p className="font-mono text-[10px] tracking-[0.2em] text-red-500">
                LET&apos;S CONNECT
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Let&apos;s build a more secure digital world.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-slate-400">
                Interested in my research, technical work, or cybersecurity
                opportunities? Connect with me or explore my public work.
              </p>
              <div className="mt-6 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </section>

          <footer className="border-t border-white/[0.08] py-6">
            <div className="flex flex-col justify-between gap-3 text-[10px] text-slate-600 sm:flex-row">
              <p>
                © 2026 Manuel Molapo · Cybersecurity Research Portfolio
              </p>
              <p className="font-mono">BUILT WITH NEXT.JS & TAILWIND CSS</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
