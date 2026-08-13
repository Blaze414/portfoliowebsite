import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Spotlight } from "./ui/spotlight";

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
    title: "MAME NX Reborn — 2003 Plus",
    description:
      "Standalone Nintendo Switch arcade emulator built directly on MAME2003-Plus — no RetroArch or libretro at runtime. Custom Switch OSD layer, ~5,238 supported drivers, ten-slot save states, thermal-aware performance scaling, and a native pause UI for states, cheats, and hardware config.",
    tech: ["C/C++", "Nintendo Switch", "libnx", "devkitA64", "MAME2003-Plus"],
    github: "https://github.com/Blaze414/mame-nx-reborn-MAME-2003-Plus",
    featured: true,
  },
  {
    title: "MAME NX — Reborn Edition",
    description:
      "Controller-first launcher and pause interface built from scratch for the MAME 0.72 core on Switch. Persistent config, 16:9 screen-fit with cached box-art pillarboxing, per-game side-art via OpenGL, and honest ROM-compatibility reporting instead of silently masking failures.",
    tech: ["C/C++", "Nintendo Switch", "libnx", "OpenGL", "MAME 0.72"],
    github: "https://github.com/Blaze414/mame-nx-reborn-edition",
    featured: true,
  },
  {
    title: "Pokedex — Flutter",
    description:
      "Cross-platform Pokedex app with Gemini API integration for image recognition and PokéAPI for data. Custom animations, provider-based state management, and offline caching.",
    tech: ["Flutter", "Dart", "Gemini API", "REST"],
    github: "https://github.com/Blaze414/Pokedex",
    demo: "https://pokedex-flutter-eight.vercel.app/",
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
    demo: "https://animalsheltermanager-react.onrender.com"
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
    demo: "https://android-studio-cache-cleaner-mac.vercel.app/"
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
    transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    className={`group relative spec-card overflow-hidden p-6 md:p-8 transition-colors duration-300 hover:border-primary/60 ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    <Spotlight size={260} />
    <span className="crosshair absolute -top-[5px] -left-[5px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

    <div className="relative z-10">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-semibold tracking-tighter text-foreground">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 px-2 py-1 text-[10px] font-mono tracking-widest border border-primary/40 text-primary">
            FEATURED
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono border border-border text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            SOURCE
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            DEMO
          </a>
        )}
      </div>
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
        className="flex items-end justify-between gap-6 mb-16 pb-4 border-b border-border"
      >
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">Things I've Built</h2>
        <span className="font-mono text-xs text-muted-foreground tracking-widest mb-1 shrink-0">
          DOC/BUILDS · {String(projects.length).padStart(2, "0")}
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
