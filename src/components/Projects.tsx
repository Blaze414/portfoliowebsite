import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Pokedex — Flutter",
    description:
      "Cross-platform Pokedex app with Gemini API integration for image recognition and PokéAPI for data. Custom animations, provider-based state management, and offline caching.",
    tech: ["Flutter", "Dart", "Gemini API", "REST"],
    github: "https://github.com/Blaze414/Pokedex",
    featured: true,
  },
  {
    title: "Pokedex — Swift",
    description:
      "iOS Pokedex app combining Gemini API for real-time Pokémon image recognition with PokéAPI for rich data. Features a custom parser, local caching for offline access, and a polished SwiftUI interface with smooth animations.",
    tech: ["Swift", "SwiftUI", "Gemini API", "REST"],
    github: "https://github.com/Blaze414/Pokedex-Swift",
  },
  {
    title: "Animal Shelter Manager",
    description:
      "Responsive SPA for shelter operations with advanced search/filtering, analytics dashboard, and multi-framework implementation (React, Next.js, Vue).",
    tech: ["React", "Next.js", "Vue", "Vite"],
    github: "https://github.com/Blaze414/AnimalShelterManager-React",
  },
  {
    title: "Smart Home IoT Solution",
    description:
      "End-to-end IoT architecture using Arduino, Raspberry Pi, and Thingsboard for device-to-cloud monitoring with MQTT-based data transmission and real-time alerts.",
    tech: ["Arduino", "Raspberry Pi", "Thingsboard", "MQTT"],
    github: "https://github.com/alzadid",
  },
  {
    title: "Digital Twin Platform",
    description:
      "Capstone project: Real-time environmental simulations using AWS IoT Core and Cesium ion with microservices architecture for predictive disaster management analytics.",
    tech: ["AWS IoT Core", "Cesium", "DynamoDB", "Microservices"],
    github: "https://github.com/BrankoRoknic/DigitalTwin"
  },
  {
    title: "Grocery Web App",
    description:
      "Full-stack e-commerce app with PHP backend, AWS RDS, dynamic cart, AJAX-driven real-time updates, and secure payment processing with prepared statements.",
    tech: ["PHP", "MySQL", "JavaScript", "AWS RDS"],
    github: "https://github.com/Blaze414/Grocery-Web-App",
    demo: "https://grocery-web-app-xgtr.onrender.com/index.php"
  },
  {
    title: "Restaurant Order Management System",
    description:
      "Java-based system connecting waitstaff and kitchen teams in real time via a dynamic Swing/JavaFX GUI. Features automated order routing with a queue mechanism, integrated billing, and receipt generation — built with OOP principles for scalability.",
    tech: ["Java", "JavaFX", "Swing", "OOP"],
    github: "https://github.com/alzadid/Restaurant-Order-Management-System",
  },
  {
    title: "Android Studio Cache Cleaner",
    description:
      "macOS utility app that clears Android Studio and Gradle caches in one click via shell command execution wrapped in a clean SwiftUI interface. Includes real-time status logs, error handling, and safe-removal confirmations.",
    tech: ["Swift", "SwiftUI", "Shell", "macOS"],
    github: "https://github.com/Blaze414/AndroidStudioCacheCleaner-mac",
  },
  {
    title: "YouTube Music Ultra Downloader",
    description:
      "Cross-platform GUI audio downloader built with PyQt6 and yt-dlp + ffmpeg. Supports 320 kbps MP3 extraction, cover-art embedding, metadata saving, playlist browsing with thumbnail previews, and configurable concurrent downloads.",
    tech: ["Python", "PyQt6", "yt-dlp", "ffmpeg", "SQLite", "Multithreading"],
    github: "https://github.com/Blaze414/youtube-music-ultra-downloader",
    demo: "https://youtube-music-ultra-downloader-webs.vercel.app/"
  },
  {
    title: "SRM Batch Memory Page",
    description:
      "Full multi-section memorial web app for the Scholastica Mirpur Batch 20, featuring a gallery, music, and photography pages. Built purely with HTML, CSS, and JavaScript with cross-page consistency, responsive layout, and polished creative design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dhrubo20/dhrubo20.github.io",
    demo: "https://dhrubo20.github.io/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:glow-blue ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    {project.featured && (
      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-widget-sky border border-primary/20">
        FEATURED
      </span>
    )}

    <h3 className="text-xl font-semibold tracking-display mb-3 text-foreground">
      {project.title}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="flex items-center gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          Source
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="font-mono text-xs text-widget-sky tracking-widest mb-3">
          01 / PROJECTS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-display">
          Things I've Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
