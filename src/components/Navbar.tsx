import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-foreground font-semibold text-lg tracking-display">
          AZ<span className="text-widget-sky">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/alzadid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2.5 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/alzadid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 mt-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200 text-center"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
