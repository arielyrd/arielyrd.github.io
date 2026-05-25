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

const ContactPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <section className="page-shell">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <div className="page-eyebrow">Contact</div>
            <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-[5.6rem] font-display font-bold tracking-tight text-white leading-[0.9]">
              Let&apos;s make the next project feel clear from the start.
            </h1>
            <p className="page-lead max-w-3xl">
              If you have a project, collaboration, or role in mind, this is
              where the conversation can begin.
            </p>
          </div>

          <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center gap-2 text-slate-300">
              <MessageCircle size={16} className="text-slate-400" />
              Availability
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Open to opportunities that value thoughtful execution, product
              clarity, and a portfolio that feels intentional.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="space-y-5">
            <div className="soft-panel rounded-[2rem] p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.32em] text-slate-400">
                Social links
              </div>
              <div className="mt-6 space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border-b border-white/10 pb-4 text-slate-300 hover:text-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent group-hover:bg-accent/10 transition-colors">
                      <link.icon className="w-5 h-5" />
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="soft-panel rounded-[2rem] p-6 md:p-8 bg-[linear-gradient(180deg,rgba(181,109,255,0.12),rgba(9,6,19,0.92))]">
              <div className="text-xs uppercase tracking-[0.32em] text-accent">
                Best fit
              </div>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Roles or collaborations where the portfolio, the product
                thinking, and the execution all matter equally.
              </p>
            </div>
          </div>

          <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition-colors focus:border-accent/40"
                  placeholder="Tell me about the project or opportunity"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 hover:bg-accent/90 transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
