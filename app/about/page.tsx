import Shell, { SectionHeading } from "../components/shell";
import { experience, profile, skills, tools } from "../data";

export default function About() {
  return (
    <Shell>
      <section>
        <SectionHeading number="01" title="About Me" />
        <div className="rounded-xl border border-white/[0.08] bg-black/80 p-7 sm:p-10">
          <p className="text-base leading-8 text-slate-400 sm:text-lg">{profile.bio}</p>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My research focuses on Android security, social engineering, malware threats, and mobile-device compromise.
            I investigate how attackers can exploit human behaviour, social media, authentication weaknesses,
            and vulnerable applications to gain unauthorized access to accounts and Android devices.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I’m working toward contributing to security teams through practical testing, clear reporting, and continuous hands-on learning.
          </p>
        </div>
      </section>

      <section>
        <SectionHeading number="02" title="Security Expertise" />
        <div className="rounded-xl border border-white/[0.08] bg-black/80 p-7 sm:p-10">
          <p className="mb-5 text-sm text-slate-500">Research areas and hands-on testing experience</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-md border border-red-500/10 bg-red-500/[0.04] px-4 py-2.5 text-sm text-red-200/80 transition hover:border-red-500/30">{s}</span>
            ))}
          </div>
          <div className="my-8 h-px bg-white/[0.08]" />
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-slate-500">Tools & Technologies</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-400">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeading number="03" title="Research Experience" />
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((item, i) => (
            <div key={item.title} className="flex gap-5 rounded-xl border border-white/[0.08] bg-black/80 p-6 sm:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/[0.05] font-mono text-sm text-red-500">0{i + 1}</div>
              <div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}