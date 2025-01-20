import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 bg-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Curriculum Vitae
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-8"></div>

          <motion.a
            href="https://drive.google.com/file/d/19Gmt8m04b7Zm8wKrmwdKavAisqcSYlDh/view?usp=drive_link"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-4 rounded-full text-white group hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="group-hover:translate-y-1 transition-transform" />
            <span>See my CV</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
