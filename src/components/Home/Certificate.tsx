import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BadgeCheck, Sparkles, FileCheck2 } from "lucide-react";

const Certificate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const certificates = [
    {
      icon: BadgeCheck,
      title: "Develop Your Google Cloud Network",
      issuer: "Google Cloud Certified",
      note: "Short proof that you can finish a structured learning path and apply it to real work.",
    },
    {
      icon: Award,
      title: "Build Infrastructure with Terraform on Google Cloud",
      issuer: "Google Cloud Certified",
      note: "Shows consistency in collaborative settings, event support, and project delivery.",
    },
    {
      icon: FileCheck2,
      title: "Implement DevOps Workflows in Google Cloud",
      issuer: "Google Cloud Certified",
      note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    },
  ];

  return (
    <section id="certificate" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            Certificate
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            Proof of learning, without turning the page into a wall of badges.
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            Keep the strongest certificates visible, and let the rest support
            the story instead of competing with the projects.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-surface rounded-[2rem] p-6 md:p-8"
          >
            <div className="flex items-center gap-3 text-slate-300">
              <Sparkles className="text-slate-400" size={18} />
              <span className="text-sm uppercase tracking-[0.22em]">
                Recruiter-friendly selection
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {certificates.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        0{index + 1}
                      </div>
                      <h3 className="mt-1 text-xl font-display font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.issuer}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="card-surface rounded-[2rem] p-6 md:p-8"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(181,109,255,0.12),rgba(5,2,10,0.85))] p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">
                How to present it
              </div>
              <ul className="mt-5 space-y-4 text-slate-300 leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>
                    Show only the most relevant certificates, not every single
                    badge you ever collected.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-600" />
                  <span>
                    Use titles that are easy to scan and tie them to the skill
                    recruiter needs to understand.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>
                    Keep the visual treatment light so the section feels like
                    proof, not decoration.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
