import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import gdsc from "../../assets/gdsc.jpg";
import esport from "../../assets/juara.jpg";
import hima from "../../assets/ic2.jpg";
import spb from "../../assets/league.jpg";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Head of Finance & Logistic Division",
      company: "Informatics Community",
      period: "Oct 2023 - Oct 2024",
      location:
        "Jakarta, Indonesia Institute Business and Information Kwik Kian Gie",
      points: [
        "Coordinated event logistics and kept execution running smoothly.",
        "Supported finance collection from internal and external sources and helped increase funds raised.",
      ],
      image: hima,
    },
    {
      title: "Member",
      company: "Google Developer Students Club IBI KKG",
      period: "Oct 2023 - Oct 2024",
      location:
        "Jakarta, Indonesia Institute Business and Information Kwik Kian Gie",
      points: [
        "Joined study jam sessions focused on mobile development using Flutter.",
        "Participated in workshops, tech talks, and collaboration events to expand knowledge and network.",
      ],
      image: gdsc,
    },
    {
      title: "Esports Player",
      company: "KSB E-sports",
      period: "Oct 2022 - Oct 2023",
      location:
        "Jakarta, Indonesia Institute Business and Information Kwik Kian Gie",
      points: [
        "Built team discipline through structured practice and coordinated play.",
        "Strengthened communication and decision-making under pressure.",
      ],
      image: esport,
    },
    {
      title: "Sales Promotion Boy",
      company: "PT. Berca Retail Group",
      period: "June 2022 - July 2023/June 2023 - July 2023",
      location: "Jakarta, Indonesia",
      points: [
        "Promoted products and engaged potential buyers in a retail environment.",
        "Managed inventory and supported sales targets during the Jakarta Fair period.",
      ],
      image: spb,
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            Experience
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            Selected experience
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            A summary of leadership, team, and project experiences that shaped
            how I collaborate and execute.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10 space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface overflow-hidden rounded-[1.75rem] p-4 md:p-5"
            >
              <div className="grid gap-5 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-ink-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-200">
                    {exp.period}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-1 text-slate-300">
                      <Calendar size={14} className="text-accent" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-1 text-slate-300">
                      <MapPin size={14} className="text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-accent font-medium">{exp.company}</h4>
                  </div>

                  <ul className="mt-4 space-y-3 text-slate-300 leading-relaxed">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                    <ArrowUpRight size={16} />
                    <span>
                      Experience shaped through collaboration and delivery.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
