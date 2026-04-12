import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Mobile & Desktop",
    items: ["Flutter", "Dart", "Swift", "SwiftUI", "Java", "C++"],
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
        className="mb-16"
      >
        <p className="font-mono text-xs text-widget-sky tracking-widest mb-3">
          03 / SKILLS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-display">
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h3 className="text-sm font-mono text-widget-sky mb-4">
              {group.category.toUpperCase()}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
