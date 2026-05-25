import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Allergify",
    category: "Featured case study",
    description:
      "AI and OCR-powered mobile app for allergen detection in packaged food, designed to feel practical, fast, and accessible.",
    image: null,
    previewLabel: "Mobile application",
    tags: ["Kotlin", "Python", "Firebase", "Node.js", "Google Cloud Platform"],
    links: ["https://github.com/arielyrd/allergify.git"],
  },
  {
    title: "JaHub",
    category: "Thesis Defense Project",
    description:
      "Android-based reminder and shared activity management application for married couples, designed to support communication, coordination, and family harmony in daily life.",
    image: null,
    previewLabel: "Mobile application",
    tags: ["Flutter", "Firebase"],
    links: ["https://github.com/arielyrd/JaHub-App.git"],
  },
  {
    title: "SportZona",
    category: "Final project",
    description:
      "A modern and responsive Indonesian sports news portal delivering the latest updates on football, badminton, basketball, MotoGP, and more, built with React.",
    image: null,
    previewLabel: "Web application",
    tags: ["JavaScript", "React"],
    links: ["https://github.com/arielyrd/news-finder-sportsLocalNews.git"],
  },
  {
    title: "Flow Report",
    category: "Featured case study",
    description:
      "Web-based operational reporting system for automated bulk spreadsheet processing and report generation.",
    image: null,
    previewLabel: "Web application",
    tags: ["JavaScript", "Python", "Node.js"],
    links: [""],
  },
  {
    title: "Boolah",
    category: "Final project",
    description:
      "A web-based sports field booking platform that allows users to check availability and reserve fields online while helping owners efficiently manage bookings.",
    image: null,
    previewLabel: "Web application",
    tags: ["Next.js", "Supabase"],
    links: ["https://github.com/arielyrd/boolah.git"],
  },
  {
    title: "Dapur Fantastic",
    category: "Final project",
    description:
      "A modern recipe web app that lets users find recipes, follow cooking steps, and get AI-based suggestions from available ingredients.",
    image: null,
    previewLabel: "Web application",
    tags: ["TypeScript", "Supabase", "Gemini API"],
    links: ["https://github.com/arielyrd/dapurfantastic.git"],
  },
  {
    title: "Good / Bad Fortune",
    category: "Interactive web piece",
    description:
      "A small web experiment with responsive layout, dark mode, and a slightly playful tone.",
    image: null,
    previewLabel: "Web application",
    tags: ["HTML", "CSS", "JavaScript"],
    links: ["https://github.com/arielyrd/goodbad-fortune.git"],
  },
  {
    title: "planT",
    category: "Competition project",
    description:
      "Flutter solution challenge project that reached the top 50, balancing product clarity and technical execution.",
    image: null,
    previewLabel: "Mobile application",
    tags: ["Dart", "Flutter", "Firebase"],
    links: ["https://github.com/arielyrd/planT.git"],
  },
];

const ProjectsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section className="page-shell">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent">
              <Sparkles size={14} /> Projects
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[0.9]">
              A curated collection of projects I have successfully designed and
              developed.
            </h1>
            <p className="mt-4 text-base text-slate-300 max-w-3xl">
              This page showcases a range of my projects, including academic
              assignments, final and capstone projects, thesis work, competition
              entries, and real-world case projects.
            </p>
          </div>

          {/* <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Reading order
            </div>
            <ol className="mt-5 space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                Strongest project first
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-600" />
                Then supporting work
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                Keep descriptions short and useful
              </li>
            </ol>
          </div> */}
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="soft-panel overflow-hidden rounded-[2.25rem]">
            <div className="flex h-[26rem] w-full items-center justify-center bg-[linear-gradient(180deg,rgba(181,109,255,0.08),rgba(5,2,10,0.92))] md:h-[32rem]">
              <div className="flex flex-col items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-8 text-center text-slate-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  {projects[0].previewLabel === "Mobile application" ? (
                    <Smartphone size={30} />
                  ) : (
                    <Globe2 size={30} />
                  )}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.32em] text-slate-400">
                    {projects[0].previewLabel}
                  </div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-300">
                    Preview intentionally hidden for this project.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="page-eyebrow">{projects[0].category}</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white">
                {projects[0].title}
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
                {projects[0].description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="meta-chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={projects[0].links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:text-accent hover:bg-accent/5 transition-colors"
                >
                  <Github size={16} /> Source
                </a>
                <a
                  href={projects[0].links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-accent/90 transition-colors"
                >
                  Open <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            {projects.slice(1).map((project, index) => (
              <article
                key={project.title}
                className="soft-panel overflow-hidden rounded-[2rem] p-5 md:p-6"
              >
                <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-start">
                  <div className="flex h-40 w-full items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5 text-slate-400 sm:h-44">
                    <div className="flex flex-col items-center gap-2 text-center">
                      {project.previewLabel === "Mobile application" ? (
                        <Smartphone size={22} className="text-accent" />
                      ) : (
                        <Globe2 size={22} className="text-accent" />
                      )}
                      <span className="text-xs uppercase tracking-[0.3em]">
                        {project.previewLabel}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      0{index + 2} / {project.category}
                    </div>
                    <h3 className="mt-2 text-2xl font-display font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="meta-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
