"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "framer-motion";

/**
 * Wraps children in a magnetic pull toward the cursor within `range`.
 * Adapted from 21st.dev/@ibelick/magnetic for this project's framer-motion setup.
 *
 * Listens for the cursor's approach continuously (not gated behind hover) —
 * real magnetic pull starts before the cursor touches the element, not once
 * it's already on top. Cheap to leave always-on: the rect is cached and only
 * refreshed on scroll/resize, so each move is just arithmetic, no layout read.
 */
type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  springOptions?: SpringOptions;
  className?: string;
};

const SPRING = { stiffness: 200, damping: 18, mass: 0.4 };

export function Magnetic({
  children,
  intensity = 0.3,
  range = 90,
  springOptions = SPRING,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rect = el.getBoundingClientRect();
    const refreshRect = () => {
      rect = el.getBoundingClientRect();
    };

    let inRange = false; // only touch the spring while something's actually happening

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= range) {
        inRange = true;
        const scale = 1 - dist / range;
        x.set(dx * intensity * scale);
        y.set(dy * intensity * scale);
      } else if (inRange) {
        inRange = false;
        x.set(0);
        y.set(0);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", refreshRect, { passive: true, capture: true });
    window.addEventListener("resize", refreshRect, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", refreshRect, true);
      window.removeEventListener("resize", refreshRect);
    };
  }, [intensity, range, x, y]);

  return (
    <motion.div ref={ref} className={className} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  );
}
