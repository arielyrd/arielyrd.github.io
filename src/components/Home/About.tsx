import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mySelf from "../../assets/about_myself.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={mySelf} alt="About" className="rounded-lg shadow-lg" />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4 text-gray-300">
              <p>
                Hello Everyone! I'm Ariel Yordan Tjahyadinata, a dedicated
                developer with a deep passion for crafting innovative digital
                solutions. I am particularly interested in cloud computing,
                full-stack web development, and mobile development. I combine
                technical expertise with creative problem-solving skills to
                deliver impactful solutions.
              </p>
              <p>
                My journey in IT began when I saw people my age creating
                websites or mobile applications. Seeing that sparked my interest
                in entering the IT world to learn how they were made—how
                websites and applications could function through lines of code.
                As I delved deeper into the world of IT, I discovered and
                learned so much along the way.
              </p>
              <p>
                I have always been passionate and enthusiastic about learning
                new technologies that can support my career in the future.
                Emerging technologies provide solutions that can be utilized for
                problem-solving in an ever-evolving world like this.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
