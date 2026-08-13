import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-6 mb-16 pb-4 border-b border-border"
      >
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">Background</h2>
        <span className="font-mono text-xs text-muted-foreground tracking-widest mb-1 shrink-0">
          DOC/ABOUT
        </span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a graduate software engineer based in Melbourne with a Bachelor of
            Engineering (Honours) in Software from Swinburne University of Technology.
            I love building real products end-to-end — from frontend interfaces and
            mobile apps to backend APIs, cloud services, and IoT systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My experience spans Next.js, TypeScript, Python, Flutter, and AWS. I've
            integrated AI tools like Gemini and OpenAI into practical, user-focused
            applications and worked on embedded IoT systems with ESP32 and MQTT.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I thrive in fast-moving teams where communication, problem-solving, and
            independent execution matter. I'm driven by curiosity and the excitement
            of turning ideas into functioning products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xs font-mono text-primary tracking-widest mb-4">EXPERIENCE</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/40 pl-4">
                <p className="text-sm font-medium text-foreground">
                  Research Assistant Intern
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  Haemograph Pty · May – Sep 2024
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Flutter mobile app, AWS Lambda, DynamoDB, Agile sprints
                </p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <p className="text-sm font-medium text-foreground">
                  Junior IT All Rounder Intern
                </p>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">
                  AAKonsult Pty · Feb – May 2024
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Web apps, AWS (EC2, S3), CI/CD pipelines
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono text-primary tracking-widest mb-4">EDUCATION</h3>
            <div className="border-l-2 border-border pl-4">
              <p className="text-sm font-medium text-foreground">
                B.Eng (Honours) — Software
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                Swinburne University of Technology · 2021 – 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
