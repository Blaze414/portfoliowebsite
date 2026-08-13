import { useEffect, useRef } from "react";

const LINES = ["AL ZADID", "YUSUF"];

/**
 * Signature hero moment: the name assembles from scattered particles into
 * type, then drifts and repels from the cursor. Real "Al Zadid Yusuf" text
 * stays in the DOM (sr-only) for accessibility/SEO; the canvas is decorative.
 */
const ParticleName = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let particles: { x: number; y: number; tx: number; ty: number; vx: number; vy: number; accent: boolean }[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999 };

    // Reused across calls so a re-assemble (font swap-in, resize) doesn't
    // reset particles already resting at their targets back to scatter.
    const prevTargets = new Map<number, { x: number; y: number }>();

    const buildTargets = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      if (w === 0 || h === 0) return; // not laid out yet — bail, a later call will retry
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) return;

      const fontSize = Math.min(h * 0.42, w * 0.155);
      octx.fillStyle = "#000";
      octx.font = `800 ${fontSize}px "Big Shoulders Display", sans-serif`;
      octx.textBaseline = "middle";
      const lineHeight = fontSize * 0.9;
      const startY = h / 2 - (lineHeight * (LINES.length - 1)) / 2;
      LINES.forEach((line, i) => octx.fillText(line, 2, startY + i * lineHeight));

      const step = w > 640 ? 4 : 3;
      const data = octx.getImageData(0, 0, w, h).data;
      const targets: { x: number; y: number }[] = [];
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          if (data[(y * w + x) * 4 + 3] > 120) targets.push({ x, y });
        }
      }
      if (targets.length === 0) return; // glyph metrics not ready yet — keep existing particles, retry later

      // Particles start close to their target (small jitter), not scattered
      // off-canvas: requestAnimationFrame is paused for backgrounded/inactive
      // tabs in every real browser, so the very first synchronous frame here
      // must already read as the name — the rAF loop (when it runs) only
      // adds a subtle settle-in and the idle cursor-repel drift on top.
      particles = targets.map((t, i) => {
        const prior = prevTargets.get(i);
        if (prior) return { x: prior.x, y: prior.y, tx: t.x, ty: t.y, vx: 0, vy: 0, accent: i % 17 === 0 };
        const jitter = reduceMotion ? 0 : 18;
        return {
          x: t.x + (Math.random() - 0.5) * jitter,
          y: t.y + (Math.random() - 0.5) * jitter,
          tx: t.x,
          ty: t.y,
          vx: 0,
          vy: 0,
          accent: i % 17 === 0,
        };
      });
      prevTargets.clear();
      particles.forEach((p, i) => prevTargets.set(i, { x: p.x, y: p.y }));

      // Draw immediately: in reduced-motion mode nothing else ever repaints,
      // and even with the rAF loop running, a resize/self-heal rebuild
      // shouldn't leave a stale frame on screen until the next tick.
      draw();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const dark = document.documentElement.classList.contains("dark");
      const fg = dark ? "rgba(230,238,242,0.92)" : "rgba(17,26,38,0.9)";
      const accent = "rgba(255,90,20,0.95)";

      for (const p of particles) {
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * 0.012;
        p.vy += dy * 0.012;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const distSq = mdx * mdx + mdy * mdy;
        if (distSq < 3200) {
          const dist = Math.sqrt(distSq) || 1;
          const force = (1 - dist / 56.6) * 2.6;
          p.vx += (mdx / dist) * force;
          p.vy += (mdy / dist) * force;
        }

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.accent ? accent : fg;
        ctx.fillRect(p.x, p.y, 1.6, 1.6);
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    // Cached instead of read fresh on every pointermove — this listener is
    // global (the repel radius is small, but the hero should react the
    // instant the cursor enters it), so recomputing the rect per event would
    // force a synchronous layout read on every mouse move across the whole
    // page. Refreshed on scroll/resize instead, where the position can
    // actually change.
    let wrapRect = wrap.getBoundingClientRect();
    const refreshRect = () => {
      wrapRect = wrap.getBoundingClientRect();
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX - wrapRect.left;
      mouse.y = e.clientY - wrapRect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let ro: ResizeObserver | undefined;
    const healTimers: ReturnType<typeof setTimeout>[] = [];

    // Build immediately with whatever font is available — never block first
    // paint on a font-load promise (slow/flaky networks can stall it for
    // seconds, or resolve with glyph metrics that aren't ready yet).
    buildTargets(); // draws itself once targets resolve
    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave, { passive: true });
      window.addEventListener("scroll", refreshRect, { passive: true, capture: true });
    }

    ro = new ResizeObserver(() => {
      buildTargets();
      refreshRect();
    });
    ro.observe(wrap);

    // Self-heal: once the display font actually finishes loading, rebuild
    // so glyph shapes are correct — and retry a couple more times shortly
    // after in case the very first rebuild still raced stale metrics.
    document.fonts.ready
      .then(() => {
        if (!cancelled) buildTargets();
      })
      .catch(() => {
        /* font API unsupported — the immediate build above already covers it */
      });
    [200, 800].forEach((delay) => {
      healTimers.push(
        setTimeout(() => {
          if (!cancelled) buildTargets();
        }, delay)
      );
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro?.disconnect();
      healTimers.forEach(clearTimeout);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", refreshRect, true);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[150px] sm:h-[220px] md:h-[290px] lg:h-[330px] -ml-0.5 mb-4"
    >
      <h1 className="sr-only">Al Zadid Yusuf</h1>
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ParticleName;
