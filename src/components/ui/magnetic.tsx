"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "framer-motion";

/**
 * Wraps children in a magnetic pull toward the cursor within `range`.
 * Adapted from 21st.dev/@ibelick/magnetic for this project's framer-motion setup.
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
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    if (!hovered) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= range) {
        const scale = 1 - dist / range;
        x.set(dx * intensity * scale);
        y.set(dy * intensity * scale);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [hovered, intensity, range, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
