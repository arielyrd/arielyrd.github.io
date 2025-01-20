import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/arielyrd" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ariel-yordan/" },
    { icon: Instagram, href: "https://www.instagram.com/arlyrd98/" },
    { icon: Mail, href: "mailto:arielyordan2004@gmail.com" },
  ];

  return (
    <footer className="bg-dark-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-accent-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-primary transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400">
              Let's connect! Whether you're looking for collaboration
              opportunities or just want to chat, don't hesitate to reach out!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            Copyright © 2025 - Ariel Yordan Tjahyadinata
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
