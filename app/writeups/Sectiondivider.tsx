export default function SectionDivider({ label }: { label: string }) {
  return (
    <div aria-hidden="true" className="relative py-2">
      {/* Beveled 3D bar: dark base, a raised red highlight line, and layered shadows top/bottom.
          Same technique as the TryHackMe page divider, colors unchanged. */}
      <div
        className="h-3 w-full rounded-full"
        style={{
          background: "linear-gradient(180deg, #000 0%, #1a0000 35%, #3a0404 50%, #1a0000 65%, #000 100%)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.04), 0 -1px 0 rgba(0,0,0,0.6), inset 0 2px 2px rgba(239,68,68,0.25), inset 0 -2px 3px rgba(0,0,0,0.8), 0 10px 24px -8px rgba(239,68,68,0.25)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.55), transparent)" }}
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-red-500/30 bg-black px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] text-red-400 shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
        {label}
      </span>
    </div>
  );
}