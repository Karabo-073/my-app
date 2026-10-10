import Shell from "../components/shell";
import RoomCard from "./RoomCard";
import { TRYHACKME_PROFILE, rooms } from "./rooms";

export default function TryHackMe() {
  return (
    <Shell>
      <section
        className="relative overflow-hidden rounded-2xl border border-red-500/25 bg-black/85 p-8 sm:p-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239,68,68,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,.06) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-red-500/[0.09] blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs tracking-[0.3em] text-red-500 sm:text-sm">TRYHACKME | HANDS-ON CYBERSECURITY</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
            TryHackMe <span className="text-red-500">Rooms</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I create hands-on cybersecurity learning experiences designed to help security enthusiasts understand vulnerabilities, practice exploitation techniques, and develop practical offensive security skills.
          </p>
          <p className="mt-5 inline-block rounded border border-red-500/25 bg-black/60 px-4 py-2 font-mono text-xs text-red-500 sm:text-sm">
            &gt; Built by a security researcher. Designed for hands-on learning.
          </p>
        </div>
      </section>

      <section>
        <p className="font-mono text-xs tracking-[0.3em] text-red-500">ROOM CREATION</p>
        <h2 className="mt-3 mb-8 text-3xl font-bold text-white sm:text-4xl">Rooms I&apos;ve Built</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-500/20 bg-black/85 p-8 text-center sm:p-12">
        <p className="font-mono text-xs tracking-[0.3em] text-red-500">SHARING KNOWLEDGE</p>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">More than solving challenges.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Beyond solving challenges and hunting bugs, I build learning environments that help other people develop practical offensive security skills.
        </p>
        <a
          href={TRYHACKME_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex rounded-lg border border-red-500/40 bg-red-500/10 px-6 py-3.5 font-mono text-sm tracking-wider text-red-500 transition hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500/60"
        >
          VIEW MY TRYHACKME PROFILE ↗
        </a>
      </section>
    </Shell>
  );
}