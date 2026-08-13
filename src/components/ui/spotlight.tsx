"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, type SpringOptions } from "framer-motion";

/**
 * Cursor-follow highlight — reads as a loupe sweeping the drafting table
 * under the pointer. Adapted from 21st.dev/@ibelick/spotlight, retinted to
 * the spec-sheet palette. Parent must be position:relative + overflow-hidden.
 */
type SpotlightProps = {
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({ size = 220, springOptions = { bounce: 0 } }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [parent, setParent] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const left = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const top = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    setParent(containerRef.current?.parentElement ?? null);
  }, []);

  const onMove = useCallback(
    (e: MouseEvent) => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [parent, mouseX, mouseY]
  );

  useEffect(() => {
    if (!parent) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, [parent, onMove]);

  return (
    <motion.div
      ref={containerRef}
      className="pointer-events-none absolute rounded-full blur-2xl transition-opacity duration-300"
      style={{
        width: size,
        height: size,
        left,
        top,
        opacity: hovered ? 1 : 0,
        background:
          "radial-gradient(circle at center, hsl(var(--primary) / 0.16), transparent 75%)",
      }}
    />
  );
}
