import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import Allergify from "../../assets/thumbnail-lifeatbangkit2.png";
import GBF from "../../assets/GBF.jpg";
import planT from "../../assets/planT.jpg";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Allergify",
      description:
        "A mobile application powered by AI and OCR technology to detect allergens in packaged foods. Features include user-friendly allergen scanning, personalized allergen tracking, and real-time updates with a focus on accuracy and accessibility.",
      image: Allergify,
      github: "https://github.com/arielyrd/allergify.git",
      tags: [
        "Node.js",
        "Express.js",
        "Flask",
        "Firebase",
        "Kotlin",
        "Python",
        "Material Design",
      ],
    },
    {
      title: "Good / Bad Fortune",
      description:
        "A website built using HTML5 with Semantic HTML, CSS, and JavaScript, featuring a dark mode and responsive design for an enhanced user experience",
      image: GBF,
      github: "https://github.com/arielyrd/goodbad-fortune.git",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "planT",
      description:
        "An application built using the Dart tech stack with the Flutter framework that competed in the Google Solution Challenge and became one of the top 50 best applications.",
      image: planT,
      github: "https://github.com/arielyrd/planT.git",
      tags: ["Dart", "Flutter", "Firebase"],
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dark-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-200 rounded-xl overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
