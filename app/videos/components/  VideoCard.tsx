import { VideoItem, formatDate } from "../ videoData";
import { StatusBadge, VideoThumb, ViewVideoButton } from "./  parts";

export default function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="vr-card group flex flex-col rounded-xl border border-red-500/20 bg-black/80">
      <VideoThumb video={video} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-wider text-red-500">{video.category}</span>
          <StatusBadge video={video} />
        </div>
        <h3 className="text-xl font-semibold text-white transition group-hover:text-red-400">{video.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{video.description}</p>
        <p className="mt-4 font-mono text-[11px] text-slate-600">PUBLISHED // {formatDate(video.publishedAt)}</p>
        <div className="mt-auto pt-6">
          <ViewVideoButton url={video.videoUrl} />
        </div>
      </div>
    </article>
  );
}