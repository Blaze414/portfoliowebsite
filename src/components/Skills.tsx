import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Mobile & Desktop",
    items: ["Flutter", "Dart", "Swift", "SwiftUI", "Java", "C++", "Nintendo Switch (libnx)"],
  },
  {
    category: "Backend & Cloud",
    items: ["AWS Lambda", "EC2", "S3", "DynamoDB", "Docker", "Kubernetes"],
  },
  {
    category: "IoT & Embedded",
    items: ["ESP32", "MicroPython", "MQTT", "Arduino", "Raspberry Pi", "Thingsboard"],
  },
  {
    category: "Data & DevOps",
    items: ["PostgreSQL", "MongoDB", "Terraform", "GitHub Actions", "CI/CD", "Jenkins"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-6 mb-16 pb-4 border-b border-border"
      >
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">Tech Stack</h2>
        <span className="font-mono text-xs text-muted-foreground tracking-widest mb-1 shrink-0">
          DOC/STACK
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 divide-border border border-border">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`p-5 ${i > 0 ? "sm:border-l border-border" : ""}`}
          >
            <h3 className="text-[11px] font-mono text-primary tracking-widest mb-4">
              {String(i + 1).padStart(2, "0")} — {group.category.toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
