import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Certificate", to: "/certificate" },
    { label: "Experience", to: "/experience" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/arielyrd" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ariel-yordan/" },
    { icon: Instagram, href: "https://www.instagram.com/arlyrd98/" },
    { icon: Mail, href: "mailto:arielyordan2004@gmail.com" },
  ];

  return (
    <footer className="border-t border-white/8 bg-ink-950/80 py-12 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-accent transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-400">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/8 bg-white/5 p-3 text-slate-300 hover:bg-white/10 hover:text-accent transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-slate-400">
              Fresh Graduate S.Kom
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I build dark, calm, and functional portfolio experiences with a
              focus on clarity and strong presentation.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-8 text-center">
          <p className="text-slate-400">
            Copyright © 2026 - Ariel Yordan Tjahyadinata
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
