import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, LayoutGrid, Smartphone, Layers3 } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const focusAreas = [
    {
      icon: Cloud,
      title: "Cloud & backend",
      description:
        "I like building systems that stay organized, measurable, and ready to scale.",
    },
    {
      icon: LayoutGrid,
      title: "Web interfaces",
      description:
        "I enjoy turning ideas into polished screens with clear hierarchy and rhythm.",
    },
    {
      icon: Smartphone,
      title: "Mobile products",
      description:
        "I pay attention to details that help mobile experiences feel fast and intuitive.",
    },
  ];

  const tools = [
    "React",
    "Flutter",
    "Node.js",
    "Firebase",
    "Tailwind",
    "Figma",
    "Python",
    "GitHub",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="focus" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            Focus
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            What I focus on
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            Instead of listing every tool, I prefer showing the kind of problems
            I like to solve and the stack I reach for most often.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-3"
        >
          {focusAreas.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface rounded-[1.75rem] p-6"
              whileHover={{ y: -6 }}
            >
              <item.icon className="text-accent" size={24} />
              <h3 className="mt-4 text-xl font-display font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 card-surface rounded-[1.75rem] p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Working stack
              </div>
              <p className="mt-2 text-slate-200">
                The set of tools I use most often when building and refining.
              </p>
            </div>
            <Layers3 className="text-slate-400" />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
