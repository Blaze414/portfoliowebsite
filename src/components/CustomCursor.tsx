import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Turns the pointer itself into the site's crosshair motif — same glyph as
 * the nav mark, project-card hover, and orbit center. mix-blend-mode:
 * difference means one color works correctly over both themes and any
 * surface, light or dark, without a theme check. Desktop/fine-pointer only;
 * never renders on touch, and never blocks clicks (pointer-events: none).
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hoveringLink, setHoveringLink] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  const rafRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = (e.target as HTMLElement)?.closest("a, button, [role='button']");
      setHoveringLink(Boolean(target));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      animate={{ scale: hoveringLink ? 1.8 : 1 }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" className="block">
        <line x1="11" y1="0" x2="11" y2="7" stroke="white" strokeWidth="1.5" />
        <line x1="11" y1="15" x2="11" y2="22" stroke="white" strokeWidth="1.5" />
        <line x1="0" y1="11" x2="7" y2="11" stroke="white" strokeWidth="1.5" />
        <line x1="15" y1="11" x2="22" y2="11" stroke="white" strokeWidth="1.5" />
        <circle
          cx="11"
          cy="11"
          r="2.5"
          fill={hoveringLink ? "white" : "none"}
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
