import Shell from "../components/shell";
import CyberBackground from "./components/  CyberBackground";
import FeaturedVideo from "./components/  FeaturedVideo";
import TerminalLog from "./components/TerminalLog";
import VideoCard from "./components/  VideoCard";
import { CHANNEL_URL, videos } from "./ videoData";
import "./  videos.css";

export default function Videos() {
  const featured = videos.find((v) => v.featured) ?? videos[0];
  const rest = videos.filter((v) => v !== featured);

  return (
    <Shell>
      <div className="relative">
        <CyberBackground />
        <div className="relative z-10 space-y-12">
          <header className="grid items-end gap-8 lg:grid-cols-[1fr_420px]">
            <div className="vr-distort">
              <p className="mb-3 font-mono text-xs tracking-[0.35em] text-emerald-400">&gt; ACCESS GRANTED // SECURE LAB</p>
              <h1 className="text-4xl font-black tracking-wider text-white sm:text-6xl">
                <span className="vr-glitch" data-text="VANTAROOT // VIDEO ARCHIVE">
                  VANTAROOT <span className="text-red-500">//</span> VIDEO ARCHIVE
                </span>
              </h1>
              <p className="mt-5 font-mono text-sm tracking-widest text-red-500 sm:text-lg">
                OFFENSIVE SECURITY. REAL LABS. REAL ATTACKS.
                <span className="vr-blink ml-1">_</span>
              </p>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-lg border border-red-500/30 bg-red-500/10 px-6 py-3.5 font-mono text-sm tracking-wider text-red-400 transition hover:bg-red-500/20"
              >
                OPEN YOUTUBE CHANNEL ↗
              </a>
            </div>
            <TerminalLog />
          </header>

          {featured && <FeaturedVideo video={featured} />}

          <section>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-sm text-red-500">02</span>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">All Transmissions</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((v) => (
                <VideoCard key={v.title} video={v} />
              ))}
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-red-500/25 bg-black/60 p-6 text-center font-mono">
                <p className="text-xs tracking-[0.3em] text-slate-500">NEXT TRANSMISSION</p>
                <p className="mt-3 text-lg text-red-400">INCOMING<span className="vr-blink">_</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}