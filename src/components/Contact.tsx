import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs text-primary tracking-widest mb-3">
          DOC/CONTACT
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Let's Connect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi — I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      >
        <a
          href="mailto:yusufalzadid@gmail.com"
          className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          style={{ borderRadius: "2px" }}
        >
          <Mail className="w-4 h-4" />
          yusufalzadid@gmail.com
        </a>
        <a
          href="https://github.com/Blaze414"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors duration-200"
          style={{ borderRadius: "2px" }}
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-sm font-mono text-muted-foreground"
      >
        <MapPin className="w-3.5 h-3.5" />
        MELBOURNE, VIC, AUSTRALIA
      </motion.div>
    </div>

    {/* Footer */}
    <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <p>© 2026 AL ZADID YUSUF</p>
        <p>REV 2026.08 — REACT + TAILWIND</p>
      </div>
    </div>
  </section>
);

export default Contact;
