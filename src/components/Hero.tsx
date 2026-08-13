import { motion } from "framer-motion";
import ParticleName from "./ParticleName";
import { Magnetic } from "./ui/magnetic";

const stack = ["FLUTTER", "REACT", "C/C++", "IOT", "AWS", "TYPESCRIPT"];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 pt-28 pb-0 overflow-hidden">
      {/* Coordinate ticks along the edges — literal drafting-table ruler */}
      <div className="pointer-events-none absolute inset-x-6 top-24 hidden md:flex justify-between font-mono text-[10px] text-muted-foreground/50 tabular">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i}>{String(i * 12).padStart(3, "0")}</span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ParticleName />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-[0.95] tracking-tight text-muted-foreground">
            SOFTWARE ENGINEER —
          </p>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-tight text-foreground">
            MOBILE, WEB, IOT &amp; <span className="text-primary">SWITCH HOMEBREW.</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
        >
          I build software end-to-end — from cross-platform mobile apps
          and web platforms to IoT devices and cloud infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <Magnetic range={100} intensity={0.25}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground active:scale-[0.96] transition-[background-color,color,scale] duration-200"
              style={{ borderRadius: "2px" }}
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic range={100} intensity={0.25}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary active:scale-[0.96] transition-[border-color,color,scale] duration-200"
              style={{ borderRadius: "2px" }}
            >
              Get in Touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Title block — stack rendered like a drawing's spec strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 border-t border-border"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-6 divide-x divide-border">
          {stack.map((item) => (
            <div key={item} className="px-4 py-4 font-mono text-[11px] tracking-widest text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
