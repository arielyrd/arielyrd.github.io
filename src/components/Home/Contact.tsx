import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/arielyrd", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ariel-yordan/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/arlyrd98/",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:arielyordan2004@gmail.com", label: "Gmail" },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out! I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              visions.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-400 hover:text-accent-primary transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center group-hover:bg-accent-primary/10">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
