import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import profilImage from "../../assets/profil.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-dark-100 to-dark-200 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Ariel Yordan Tjahyadinata
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-400 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Cloud Computing Enthusiast",
                  2000,
                  "Software Engineer",
                  2000,
                  "IT Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-8 py-3 rounded-full flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#projects"
                className="border-2 border-accent-primary text-accent-primary px-8 py-3 rounded-full hover:bg-accent-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-primary/20 mx-auto">
                <img
                  src={profilImage}
                  alt="Ariel Yordan Tjahyadinata"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
