import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import gdsc from "../assets/gdsc.jpg";
import esport from "../assets/juara.jpg";
import hima from "../assets/ic2.jpg";
import spb from "../assets/league.jpg";
import intern from "../assets/spil.jpeg";

const experiences = [
  {
    title: "AI Project Intern",
    company: "PT Salam Pacific Indonesia Lines",
    period: "Feb 2025 - Aug 2025",
    location: "Jakarta, Indonesia",
    summary:
      "Developed operational web systems and automation solutions using Next.js and Flask to streamline business processes, support real-time monitoring, and improve reporting efficiency",
    image: intern,
  },
  {
    title: "Head of Finance & Logistic Division",
    company: "Informatics Community",
    period: "Oct 2023 - Oct 2024",
    location: "Jakarta, Indonesia",
    summary:
      "Coordinated event logistics, kept execution moving, and supported finance collection for internal and external sources.",
    image: hima,
  },
  {
    title: "Member",
    company: "Google Developer Students Club IBI KKG",
    period: "Oct 2023 - Oct 2024",
    location: "Jakarta, Indonesia",
    summary:
      "Joined Flutter study jams, workshops, and community events while expanding technical depth and network.",
    image: gdsc,
  },
  {
    title: "Esports Player",
    company: "KSB E-sports",
    period: "Oct 2022 - Oct 2023",
    location: "Jakarta, Indonesia",
    summary:
      "Built team discipline through structured practice, coordination, and decision-making under pressure.",
    image: esport,
  },
  {
    title: "Sales Promotion Boy",
    company: "PT. Berca Retail Group",
    period: "Jun 2022 - Jul 2023",
    location: "Jakarta, Indonesia",
    summary:
      "Worked on product promotion, inventory handling, and sales support during a high-traffic retail period.",
    image: spb,
  },
];

const ExperiencePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="page-shell">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <div className="page-eyebrow">Experience</div>
            <h1 className="mt-6 max-w-4xl text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[0.9]">
              A curated collection of professional experiences I have gained
              throughout my journey.
            </h1>
            <p className="page-lead max-w-3xl">
              This page showcases my professional experience, including roles,
              responsibilities, and contributions across various projects.
            </p>
          </div>

          <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center gap-2 text-slate-300">
              <Briefcase size={16} className="text-slate-400" />
              Quick read
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Leadership, collaboration, pressure, and delivery are the themes
              that run through this timeline.
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent via-white/10 to-transparent md:left-[4.25rem]" />
          <div className="space-y-6">
            {experiences.map((exp) => {
              const [periodStart, periodEnd] = exp.period.split(" - ");

              return (
                <article
                  key={exp.title}
                  className="grid gap-5 md:grid-cols-[120px_1fr] md:gap-8 lg:grid-cols-[140px_220px_1fr] lg:items-start"
                >
                  <div className="relative pl-10 md:pl-0">
                    <span className="absolute left-[0.55rem] top-2 timeline-dot md:left-[3.72rem]" />
                    <div className="max-w-[4.9rem] text-[0.68rem] uppercase tracking-[0.18em] leading-5 text-slate-400">
                      <div>{periodStart || exp.period}</div>
                      {periodEnd && <div>{periodEnd}</div>}
                    </div>
                  </div>
                  <div className="soft-panel overflow-hidden rounded-[1.75rem]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="h-44 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="soft-panel rounded-[1.75rem] p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                        <Calendar size={14} className="text-accent" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                        <MapPin size={14} className="text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-white">
                      {exp.title}
                    </h2>
                    <div className="mt-2 text-accent font-medium">
                      {exp.company}
                    </div>
                    <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300">
                      {exp.summary}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperiencePage;
