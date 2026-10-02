import Shell from "../components/shell";
import HackerBackground from "./HackerBackground";
import "./writeups.css";

// Edit this list to change the planned methodology modules
const modules = [
  "Recon & Asset Discovery",
  "Application Mapping",
  "Authentication & Access Control",
  "Server-Side & Injection Flaws",
  "Exploitation & Impact",
  "Reporting Like a Pro",
];

export default function Writeups() {
  return (
    <Shell>
      <div className="relative">
        <HackerBackground />
        <div className="relative z-10 space-y-12">
          <header className="wr-shake text-center">
            <p className="font-mono text-sm text-emerald-400 sm:text-base">
              root@vantaroot:~$ <span className="wr-type">./writeups --methodology</span>
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-wider text-white sm:text-7xl">
              <span className="wr-glitch" data-text="BUG BOUNTY WRITEUPS">
                BUG BOUNTY <span className="text-red-500">WRITEUPS</span>
              </span>
            </h1>
            <p className="mt-5 font-mono text-xs tracking-[0.25em] text-slate-400 sm:text-sm">
              THE METHODOLOGY BEHIND AN EXCELLENT BUG HUNTER
            </p>
          </header>

          <section className="mx-auto w-full max-w-3xl rounded-2xl border border-red-500/40 bg-black/85 p-8 text-center shadow-[0_0_50px_rgba(239,68,68,.2)] sm:p-12">
            <p className="font-mono text-xs tracking-[0.3em] text-emerald-400">
              <span className="wr-blink mr-2 inline-block h-2 w-2 rounded-full bg-red-500" />
              STATUS: DECRYPTING...
            </p>
            <h2 className="mt-5 text-5xl font-black tracking-widest text-red-500 sm:text-7xl">COMING SOON</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Bug bounty writeups are on the way. This page will teach the methodology on how to become an excellent bug hunter.
            </p>
            <div className="mx-auto mt-7 h-1.5 max-w-md overflow-hidden rounded bg-white/10">
              <div className="wr-bar h-full w-1/3 bg-gradient-to-r from-red-500 to-emerald-400" />
            </div>
          </section>

          <section>
            <p className="mb-6 text-center font-mono text-xs tracking-[0.3em] text-slate-500">PLANNED METHODOLOGY MODULES</p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {modules.map((m, i) => (
                <div key={m} className="wr-card rounded-xl border border-white/[0.1] bg-black/80 p-6">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-emerald-400">MODULE_{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-red-500">[ LOCKED ]</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{m}</h3>
                  <p className="mt-2 font-mono text-[11px] tracking-wider text-slate-600">COMING SOON</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}