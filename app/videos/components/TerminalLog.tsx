"use client";

import { useEffect, useState } from "react";

const lines = [
  "> establishing secure channel...",
  "> mounting lab environment...",
  "> loading video archive...",
  "> signal locked: VANTAROOT",
  "> awaiting next transmission...",
];

export default function TerminalLog() {
  const [n, setN] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => setN((x) => x + 1), 1600);
    return () => window.clearInterval(id);
  }, []);

  const count = Math.min(n, 4);
  const shown = Array.from({ length: count }, (_, i) => n - count + i);

  return (
    <div className="min-h-[7.5rem] rounded-lg border border-emerald-400/20 bg-black/70 p-4 font-mono text-xs leading-6 text-emerald-400">
      {shown.map((idx) => (
        <p key={idx} className="vr-fadein">{lines[idx % lines.length]}</p>
      ))}
      <span className="vr-blink inline-block h-3 w-2 bg-emerald-400 align-middle" />
    </div>
  );
}