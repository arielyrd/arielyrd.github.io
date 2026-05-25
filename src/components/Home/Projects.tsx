import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ArrowUpRight } from "lucide-react";
import Allergify from "../../assets/thumbnail-lifeatbangkit2.png";
import GBF from "../../assets/GBF.jpg";
import planT from "../../assets/planT.jpg";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Allergify",
      description:
        "A mobile application powered by AI and OCR technology to detect allergens in packaged foods. Features include user-friendly allergen scanning, personalized allergen tracking, and real-time updates with a focus on accuracy and accessibility.",
      image: Allergify,
      github: "https://github.com/arielyrd/allergify.git",
      tags: [
        "Node.js",
        "Express.js",
        "Flask",
        "Firebase",
        "Kotlin",
        "Python",
        "Material Design",
      ],
    },
    {
      title: "Good / Bad Fortune",
      description:
        "A website built using HTML5 with Semantic HTML, CSS, and JavaScript, featuring a dark mode and responsive design for an enhanced user experience",
      image: GBF,
      github: "https://github.com/arielyrd/goodbad-fortune.git",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "planT",
      description:
        "An application built using the Dart tech stack with the Flutter framework that competed in the Google Solution Challenge and became one of the top 50 best applications.",
      image: planT,
      github: "https://github.com/arielyrd/planT.git",
      tags: ["Dart", "Flutter", "Firebase"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            Work
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            Selected work
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            A small set of projects that show how I approach product structure,
            implementation, and visual consistency.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card-surface group overflow-hidden rounded-[1.75rem] ${
                index === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden border-b border-white/8">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 ? "h-80 md:h-[30rem]" : "h-60"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-200">
                  {index === 0 ? "Featured case study" : "Selected project"}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </motion.a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={18} />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
