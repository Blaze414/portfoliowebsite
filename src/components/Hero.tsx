import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />
      {/* Subtle gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-widget-sky tracking-wide mb-6">
            SOFTWARE ENGINEER
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-display leading-[1.1] mb-6"
        >
          Al Zadid Yusuf
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
        >
          I build production-ready systems — from cross-platform mobile apps 
          and full-stack web platforms to IoT solutions and cloud infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 text-xs font-mono text-slate-gray"
        >
          <span>Flutter</span>
          <span className="text-dark-slate">·</span>
          <span>React</span>
          <span className="text-dark-slate">·</span>
          <span>IoT</span>
          <span className="text-dark-slate">·</span>
          <span>AWS</span>
          <span className="text-dark-slate">·</span>
          <span>TypeScript</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
