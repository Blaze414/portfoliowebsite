import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A vertical dimension-line running the height of the viewport, filling as
 * you scroll — the site-wide extension of the hero's coordinate-tick ruler,
 * not a new motif. Functional, not decorative: click anywhere on the track
 * to jump to that scroll position. Hidden on small screens where it would
 * just eat thumb space against page edges.
 */
const ScrollRuler = () => {
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  const onTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientY - rect.top) / rect.height;
    const doc = document.documentElement;
    window.scrollTo({ top: pct * (doc.scrollHeight - window.innerHeight), behavior: "smooth" });
  };

  return (
    <div
      className="hidden lg:block fixed right-4 top-0 h-screen w-4 z-40 cursor-pointer group"
      onClick={onTrackClick}
      aria-hidden="true"
    >
      <div className="absolute right-1.5 top-0 h-full w-px bg-border group-hover:bg-muted-foreground/40 transition-colors" />
      {[0, 25, 50, 75, 100].map((pct) => (
        <span
          key={pct}
          className="absolute right-0 w-3 h-px bg-border"
          style={{ top: `${pct}%` }}
        />
      ))}
      <motion.div
        className="absolute right-1.5 top-0 w-px bg-primary origin-top"
        style={{ scaleY: fill, height: "100%" }}
      />
    </div>
  );
};

export default ScrollRuler;
