import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <div className="card-surface rounded-[2rem] p-8 md:p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
              <FileText size={24} />
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
              CV
            </div>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold text-white leading-[0.95]">
              Download my CV
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
              A concise snapshot of my education, project work, and
              collaboration experience.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1a7TWX1_r2l4YeOVQqD1ox4_mEBZZox5X/view?usp=drive_link"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-ink-950 hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download />
              <span>Download PDF</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
