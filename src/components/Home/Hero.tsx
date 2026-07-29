import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profilImage from "../../assets/profil.jpg";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,109,255,0.16),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(108,245,255,0.08),_transparent_24%),linear-gradient(180deg,_rgba(18,11,31,0.96),_rgba(8,5,16,1))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="page-shell relative z-10 min-h-[calc(100vh-6rem)] flex items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
              <Sparkles size={14} className="text-slate-400" />
              Portfolio / Ariel Yordan Tjahyadinata
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl lg:text-[5.7rem] font-display font-bold tracking-tight text-white leading-[0.9]">
              Aloha!
            </h1>

            <p className="page-lead">
              Fresh Informatics graduate focused on web, cloud, and software
              engineering. I like minimal layouts with a little tension, a
              little warmth, and details that feel deliberate instead of
              generic.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              {[
                "Cloud Computing",
                "IT Enthusiast",
                "ERP System",
                "Software Engineer",
              ].map((item) => (
                <span key={item} className="meta-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink-950 hover:bg-accent/90 transition-colors"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  About Me
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Location", "Jakarta, Indonesia"],
                ["Availability", "Open for opportunities"],
                ["Focus", "ERP Systems / Software Engineer / AI Enthusiast"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="soft-panel rounded-[1.25rem] px-4 py-4"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm md:text-base font-medium text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl lg:pt-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="absolute -left-4 top-12 h-44 w-44 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-52 w-52 rounded-full bg-slate-700/5 blur-3xl" />

            <div className="soft-panel rounded-[2.25rem] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-ink-900">
                  <img
                    src={profilImage}
                    alt="Ariel Yordan Tjahyadinata"
                    className="img-grayscale h-[28rem] w-full object-cover object-top md:h-[34rem]"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{
                      filter: isHovering ? "grayscale(0)" : "grayscale(1)",
                      transition: "filter 0.5s ease-in-out",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Philosophy
                    </div>
                    <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-200">
                      Keep things simple, build with purpose, and focus on
                      creating meaningful user experiences.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6">
                    {[
                      ["Style", "Minimal with character"],
                      ["Tone", "Playful, not corporate"],
                      ["Priority", "Learning and growth"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          {label}
                        </span>
                        <span className="text-sm text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
