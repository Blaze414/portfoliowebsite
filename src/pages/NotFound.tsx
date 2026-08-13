import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs text-primary tracking-widest mb-4">
          DOC/404 — DRIVER NOT FOUND
        </p>
        <h1 className="font-display text-8xl md:text-9xl font-extrabold tracking-tight text-foreground leading-none">
          404
        </h1>
        <p className="text-muted-foreground leading-relaxed mt-6 mb-2 max-w-sm mx-auto">
          Requested route doesn't compile:
        </p>
        <code className="font-mono text-sm text-primary block mb-10">
          {location.pathname}
        </code>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground active:scale-[0.96] transition-[background-color,color,scale] duration-200"
          style={{ borderRadius: "2px" }}
        >
          Return to Root
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
