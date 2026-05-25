import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    { icon: Mail, href: "mailto:arielyordan2004@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            Connect
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            Let&apos;s connect
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            If you have a project, collaboration idea, or opportunity, feel free
            to reach out.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-surface rounded-[1.75rem] p-6 md:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <MessageCircle size={16} className="text-slate-400" />
              Available for opportunities
            </div>

            <h3 className="mt-5 text-2xl font-display font-bold text-white">
              Social links
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Find me on the platforms I check most often. If you prefer email,
              that works too.
            </p>

            <div className="mt-6 space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-slate-300 hover:bg-white/8 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-surface rounded-[1.75rem] p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/8 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/8 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-2xl border border-white/8 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-4 font-semibold text-ink-950 hover:bg-accent/90 transition-all duration-300"
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
