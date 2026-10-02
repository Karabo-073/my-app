"use client";

import { useEffect, useRef } from "react";

// Full-screen Matrix rain: dense green columns with bright heads, ~25fps, pauses when tab hidden
export default function HackerBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = "01アイウエオカキクケコサシスセソ{}[]<>/$#%&*=+0x7fELF";
    const size = 18;
    let w = 0, h = 0, raf = 0, last = 0;
    let drops: number[] = [];
    let speeds: number[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(w / size);
      drops = Array.from({ length: cols }, () => Math.random() * -(h / size));
      speeds = Array.from({ length: cols }, () => 0.5 + Math.random() * 1);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (document.hidden || t - last < 40) return;
      last = t;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = `${size}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * size;
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = "rgba(52,211,153,.75)";
        ctx.fillText(ch, i * size, y - size);
        ctx.fillStyle = Math.random() > 0.97 ? "rgba(239,68,68,.95)" : "rgba(220,255,240,.95)";
        ctx.fillText(ch, i * size, y);
        drops[i] += speeds[i];
        if (y > h && Math.random() > 0.97) drops[i] = 0;
      }
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
    <div aria-hidden="true" className="wr-layer">
      <canvas ref={ref} className="wr-fill h-full w-full opacity-60" />
      <div className="wr-fill wr-pulse" />
      <div className="wr-sweep" />
      <div className="wr-fill wr-crt" />
      <div className="wr-fill wr-vignette" />
    </div>
  );
}