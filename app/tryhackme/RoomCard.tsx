import { Room, isRoomLive } from "./rooms";

const GREEN = "#ef4444";

function RoomVisual({ variant }: { variant: Room["visual"] }) {
  return (
    <div
      className="relative h-52 overflow-hidden border-b border-red-500/20 bg-black"
      style={{
        backgroundImage:
          "linear-gradient(rgba(239,68,68,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(239,68,68,.07) 1px,transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      {variant === "terminal" ? (
        <div className="absolute inset-5 rounded-lg border border-red-500/25 bg-black/70 p-4 font-mono text-xs leading-6 text-red-500">
          <p className="mb-2 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-slate-500/70" />
          </p>
          <p>$ connect --room ROOM_01</p>
          <p className="text-slate-500">&gt; deploying machine...</p>
          <p className="text-slate-500">&gt; status: coming soon<span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-red-500 align-middle" /></p>
        </div>
      ) : (
        <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <g stroke={GREEN} strokeOpacity=".4" strokeWidth="1.2" fill="none">
            <path d="M70 100 L200 45 L330 100 L200 155 Z M200 45 L200 155 M70 100 L330 100" />
          </g>
          {[[70, 100], [200, 45], [330, 100], [200, 155]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="14" fill={GREEN} fillOpacity=".08" />
              <circle cx={x} cy={y} r="5" fill={GREEN} />
            </g>
          ))}
          <text x="200" y="188" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={GREEN} fillOpacity=".7">
            ROOM_02 // NETWORK
          </text>
        </svg>
      )}
    </div>
  );
}

export default function RoomCard({ room }: { room: Room }) {
  const live = isRoomLive(room.roomUrl);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-red-500/20 bg-black/85 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_0_34px_rgba(239,68,68,.15)]">
      <RoomVisual variant={room.visual} />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <span className="tracking-widest text-red-500">{room.id} // TRYHACKME</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 px-3 py-1 text-[10px] tracking-wider text-red-500">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {live ? "LIVE" : "COMING SOON"}
          </span>
        </div>
        <h3 className="text-2xl font-bold leading-snug text-white">{room.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">{room.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {room.topics.map((t, i) => (
            <span key={i} className="rounded border border-red-500/20 bg-red-500/[0.05] px-2.5 py-1 font-mono text-xs text-red-500/90">{t}</span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          {live ? (
            <a
              href={room.roomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3.5 font-mono text-sm font-bold tracking-widest text-black transition hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/60 sm:w-auto"
            >
              OPEN ROOM <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 px-6 py-3.5 font-mono text-sm font-bold tracking-widest text-red-500/80 sm:w-auto"
            >
              ROOM COMING SOON
            </button>
          )}
        </div>
      </div>
    </article>
  );
}