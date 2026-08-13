import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Magnetic } from "./ui/magnetic";

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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "bg-background/90 backdrop-blur-xl border-border"
          : "bg-background/0 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-medium text-foreground tracking-widest">
          AZY<span className="text-primary">.</span>01
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="font-mono text-xs tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {String(i + 1).padStart(2, "0")}/{item.label}
            </a>
          ))}
          <Magnetic range={70} intensity={0.3}>
            <a
              href="https://github.com/Blaze414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-mono px-4 py-2 border border-border text-foreground hover:border-primary hover:text-primary active:scale-[0.96] transition-[border-color,color,scale] duration-200"
            >
              GITHUB
            </a>
          </Magnetic>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 -mr-2 text-muted-foreground hover:text-primary transition-colors"
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
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="font-mono text-xs tracking-wide text-muted-foreground hover:text-primary py-2.5 transition-colors duration-200"
                >
                  {String(i + 1).padStart(2, "0")}/{item.label}
                </a>
              ))}
              <a
                href="https://github.com/Blaze414"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono px-4 py-2 mt-2 border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200 text-center"
              >
                GITHUB
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
