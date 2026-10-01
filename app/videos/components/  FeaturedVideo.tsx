import { VideoItem, formatDate } from "../ videoData";
import { StatusBadge, VideoThumb, ViewVideoButton } from "./  parts";

export default function FeaturedVideo({ video }: { video: VideoItem }) {
  return (
    <article className="vr-card vr-glow group grid rounded-2xl border border-red-500/40 bg-black/85 lg:grid-cols-[1.35fr_1fr]">
      <VideoThumb video={video} sweep />
      <div className="flex flex-col p-6 sm:p-9">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-[0.25em] text-red-500">▌FEATURED OPERATION</span>
          <StatusBadge video={video} />
        </div>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{video.title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{video.description}</p>

        {video.hud && (
          <div className="mt-6 rounded-lg border border-emerald-400/20 bg-black/70 p-4 font-mono text-xs">
            <p className="mb-3 flex items-center gap-2 text-[10px] tracking-widest text-emerald-400">
              <span className="vr-blink h-1.5 w-1.5 rounded-full bg-emerald-400" /> LIVE OPERATION FEED
            </p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
              {video.hud.map((h) => (
                <div key={h.label}>
                  <dt className="text-[10px] text-slate-500">{h.label}:</dt>
                  <dd className="mt-0.5 text-sm font-bold tracking-wider text-emerald-400">{h.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 h-1 overflow-hidden rounded bg-white/5">
              <div className="vr-bar h-full w-1/3 bg-red-500/80" />
            </div>
          </div>
        )}

        <p className="mt-5 font-mono text-[11px] text-slate-600">
          {video.category} // PUBLISHED {formatDate(video.publishedAt)}
        </p>
        <div className="mt-auto pt-6">
          <ViewVideoButton url={video.videoUrl} large />
        </div>
      </div>
    </article>
  );
}