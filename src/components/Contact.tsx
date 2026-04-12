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
        <p className="font-mono text-xs text-widget-sky tracking-widest mb-3">
          05 / CONTACT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-display mb-6">
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
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
          yusufalzadid@gmail.com
        </a>
        <a
          href="https://github.com/Blaze414"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors duration-200"
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
        className="flex items-center justify-center gap-2 text-sm text-slate-gray"
      >
        <MapPin className="w-3.5 h-3.5" />
        Melbourne, VIC, Australia
      </motion.div>
    </div>

    {/* Footer */}
    <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-gray">
        <p>© 2026 Al Zadid Yusuf</p>
        <p className="font-mono">Built with React + Tailwind</p>
      </div>
    </div>
  </section>
);

export default Contact;
