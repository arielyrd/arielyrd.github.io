import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";
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
      description:
        "Prepared logistics for events and ensured readliness for smooth execution. Assisted treasure in collecting finances from internal and external sources, resulting in a 20% increase in funds raised.",
      image: hima,
    },
    {
      title: "Member",
      company: "Google Developer Students Club IBI KKG",
      period: "Oct 2023 - Oct 2024",
      location:
        "Jakarta, Indonesia Institute Business and Information Kwik Kian Gie",
      description:
        "Participated in study jam sessions focused on mobile programming using Flutter, contributing to the completion of 100%. Participated in 10 events including sessions, workshops, tech talks, and collaboration events to expand knowledge and network within the industry.",
      image: gdsc,
    },
    {
      title: "Esports Player",
      company: "KSB E-sports",
      period: "Oct 2022 - Oct 2023",
      location:
        "Jakarta, Indonesia Institute Business and Information Kwik Kian Gie",
      description:
        "Created responsive websites using modern frontend technologies. Worked directly with clients to implement features.",
      image: esport,
    },
    {
      title: "Sales Promotion Boy",
      company: "PT. Berca Retail Group",
      period: "June 2022 - July 2023/June 2023 - July 2023",
      location: "Jakarta, Indonesia",
      description:
        "Promoted products and engaged potential buyers. Increased product sales by IDR 150 million during the Jakarta Fair employment period. Managed inventory of League shoes in main booth, resulting in a 20% reduction in stock discrepancies.",
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
    <section id="experience" className="py-20 bg-dark-100 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent-primary/20 top-0"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-200 p-6 rounded-xl inline-block w-full max-w-lg"
                >
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-accent-primary mb-2">{exp.company}</h4>
                  <div
                    className={`flex items-center gap-2 text-gray-400 mb-2 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-gray-400 mb-4 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </motion.div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-accent-primary rounded-full z-10"></div>
                <div className="absolute w-8 h-8 bg-accent-primary/20 rounded-full animate-pulse"></div>
              </div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
