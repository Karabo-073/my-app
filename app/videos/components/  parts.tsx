/* eslint-disable @next/next/no-img-element */
import { VideoItem, effectiveStatus, getThumbnail, isLive } from "../ videoData";

export function HudCorners() {
  const c = "absolute h-4 w-4 border-red-500/70";
  return (
    <>
      <span className={`${c} left-2 top-2 border-l border-t`} />
      <span className={`${c} right-2 top-2 border-r border-t`} />
      <span className={`${c} bottom-2 left-2 border-b border-l`} />
      <span className={`${c} bottom-2 right-2 border-b border-r`} />
    </>
  );
}

export function VideoThumb({ video, sweep = false }: { video: VideoItem; sweep?: boolean }) {
  const src = getThumbnail(video);
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#2a0a0a] via-black to-black">
      {src ? (
        <img
          src={src}
          alt={video.title}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 font-mono">
          <span className="text-5xl text-red-500/80">▶</span>
          <span className="text-[11px] tracking-[0.3em] text-slate-500">SIGNAL PENDING</span>
        </div>
      )}
      <div className="vr-lines absolute inset-0" />
      <div className={`vr-sweep ${sweep ? "vr-sweep-on" : ""}`} />
      <HudCorners />
      <span className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] tracking-widest text-red-400">
        <span className="vr-blink h-2 w-2 rounded-full bg-red-500" /> REC
      </span>
    </div>
  );
}

export function StatusBadge({ video }: { video: VideoItem }) {
  const live = isLive(video.videoUrl);
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-wider ${
        live ? "border-emerald-400/40 text-emerald-400" : "border-red-500/30 text-red-400"
      }`}
    >
      <span className={`vr-blink h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-red-500"}`} />
      {effectiveStatus(video)}
    </span>
  );
}

export function ViewVideoButton({ url, large = false }: { url: string; large?: boolean }) {
  const size = large ? "px-8 py-4 text-base" : "px-6 py-3.5 text-sm";
  const base = `inline-flex w-full items-center justify-center gap-2 rounded-lg font-mono font-bold tracking-widest transition sm:w-auto ${size}`;
  if (isLive(url)) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-red-500 text-black hover:bg-red-400 hover:shadow-[0_0_28px_rgba(239,68,68,.6)]`}
      >
        VIEW VIDEO <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Coming soon"
      className={`${base} cursor-not-allowed border border-red-500/40 bg-red-500/10 text-red-400`}
    >
      VIEW VIDEO <span className="text-[10px] font-normal opacity-70">· COMING SOON</span>
    </button>
  );
}