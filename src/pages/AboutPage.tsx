import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircleUserRound, MapPin, Sparkles, BadgeCheck } from "lucide-react";
import aboutImage from "../assets/about_myself.jpg";

const milestones = [
  {
    year: "2022 - 2026",
    title: "Institute Business and Informatics Kwik Kian Gie",
    description:
      "An Informatics Engineering graduate with a GPA of 3.87 and a recipient of the Adaro Foundation scholarship.",
  },
  {
    year: "2019 - 2022",
    title: "SMK Strada I",
    description: "An Accounting graduate.",
  },
];

const principles = [
  "Continous learning.",
  "Keep things simple and clear.",
  "Make it useful, not just cool.",
  "Always improving.",
];

const AboutPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="page-shell">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="soft-panel rounded-[2rem] p-4 md:p-5">
              <img
                src={aboutImage}
                alt="Ariel Yordan Tjahyadinata"
                className="img-grayscale h-[20rem] w-full rounded-[1.5rem] object-cover object-top md:h-[24rem] cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                  filter: isHovering ? "grayscale(0)" : "grayscale(1)",
                  transition: "filter 0.5s ease-in-out",
                }}
              />
            </div>

            <div className="space-y-3">
              <div className="page-eyebrow">About</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.95]">
                Ariel Yordan Tjahyadinata
              </div>
              <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-sm">
                Fresh Informatics graduate based in Jakarta. I focus on web,
                cloud, and software engineering with a clean editorial feel and
                a little bit of playfulness.
              </p>
            </div>

            <div className="soft-panel rounded-[1.75rem] p-5">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} className="text-accent" />
                Jakarta, Indonesia
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I like portfolios that feel personal, direct, and carefully
                paced.
              </p>
            </div>
          </aside>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent">
              <CircleUserRound size={14} /> Introduction
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-[5.8rem] font-display font-bold tracking-tight text-white leading-[0.9]">
              Welcome to My Page!
            </h1>

            <p className="page-lead max-w-3xl">
              Hello! I'm Ariel Yordan Tjahyadinata, a fresh graduate in Informatics Engineering who enjoys turning business requirements into reliable software solutions. My experience spans software development, AI applications, and system analysis through academic projects and professional internship, where I learned that good technology is not only about writing code but also about understanding the problems behind it.
              <br></br>
              <br></br>
              My primary interests are ERP/SAP, Software Engineering, and AI Engineering. I am particularly interested in how software can streamline business processes, improve operational efficiency, and support better decision-making. Whether developing AI-based applications, designing system workflows, or building backend services, I aim to create solutions that are practical, maintainable, and aligned with business objectives.
              <br></br>
              <br></br>
              As I begin my professional career, I look for opportunities that challenge me to keep learning, collaborate with experienced teams, and grow into an engineer who combines strong technical skills with a solid understanding of business needs.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              {["Minimal", "Editorial", "Playful", "Project-first"].map(
                (item) => (
                  <span key={item} className="meta-chip">
                    {item}
                  </span>
                ),
              )}
            </div> */}

            <div className="mt-10 grid gap-8 xl:grid-cols-[0.52fr_0.48fr]">
              <div>
                <div className="page-rule" />
                <div className="pt-6">
                  <div className="page-eyebrow">The Journey</div>
                  <div className="mt-6 space-y-8">
                    {milestones.map((item) => (
                      <article key={item.year} className="relative pl-7">
                        <span className="absolute left-0 top-2.5 timeline-dot" />
                        <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                          {item.year}
                        </div>
                        <h2 className="mt-2 text-2xl font-display font-bold text-white">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="soft-panel rounded-[2rem] p-6 md:p-8">
                  <div className="page-eyebrow">What Matters</div>
                  <ul className="mt-6 space-y-4 text-slate-300">
                    {principles.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="soft-panel rounded-[2rem] p-6 md:p-8 bg-[linear-gradient(180deg,rgba(181,109,255,0.12),rgba(9,6,19,0.9))]">
                  <div className="page-eyebrow">Profile Notes</div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      ["Focus", "Web, cloud, software engineering"],
                      ["Work style", "Structured and solution-oriented"],
                      ["What I'm Good At", "Problem Solving, teamwork"],
                      ["Off The Clock", "Comics, tech, and a bit of curiosity"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border-b border-white/10 pb-3"
                      >
                        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          {label}
                        </div>
                        <div className="mt-1 text-sm text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="soft-panel rounded-[2rem] p-6 md:p-8">
                  <div className="flex items-center gap-2 text-slate-300">
                    <BadgeCheck size={16} className="text-slate-400" />
                    Presentation strategy
                  </div>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    I keep the site original by focusing on the rhythm of the
                    page, not the shape of the template. The reference is useful
                    for structure and pacing, but the story, color mood, and
                    interaction style stay mine.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                    <Sparkles size={16} />
                    Originality through composition, contrast, and content.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
