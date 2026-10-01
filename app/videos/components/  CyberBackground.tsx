"use client";

import { useEffect, useRef } from "react";

const fragments = [
  { t: "$ nmap -sV -p- <target>", x: "3%", y: "24%", d: "28s" },
  { t: "0x7f454c46 0x02010100", x: "78%", y: "18%", d: "22s" },
  { t: "> enumerating services...", x: "6%", y: "68%", d: "30s" },
  { t: "GET /index HTTP/1.1", x: "80%", y: "62%", d: "26s" },
  { t: "[+] session established", x: "44%", y: "86%", d: "32s" },
];

// Matrix-style falling characters (transparent canvas, ~20fps, pauses when tab hidden)
export default function CyberBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = "01ABCDEF<>/{}$#";
    const size = 16;
    let w = 0, h = 0, raf = 0, last = 0;
    let drops: number[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: Math.ceil(w / size) }, () => Math.random() * -60);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (document.hidden || t - last < 50) return;
      last = t;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = `${size}px monospace`;
      drops.forEach((y, i) => {
        if (i % 2) return; // every other column keeps it subtle
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.93 ? "rgba(52,211,153,.8)" : "rgba(239,68,68,.6)";
        ctx.fillText(ch, i * size, y * size);
        drops[i] = y * size > h && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="vr-layer">
      <div className="vr-fill vr-grid" />
      <canvas ref={ref} className="vr-fill h-full w-full opacity-40" />
      {fragments.map((f) => (
        <pre
          key={f.t}
          className="vr-float absolute hidden font-mono text-[11px] text-emerald-400/25 md:block"
          style={{ left: f.x, top: f.y, ["--d" as string]: f.d }}
        >
          {f.t}
        </pre>
      ))}
      <div className="vr-scan" />
      <div className="vr-fill vr-noise" />
      <div className="vr-fill vr-vignette" />
    </div>
  );
}