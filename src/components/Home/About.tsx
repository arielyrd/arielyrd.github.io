import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import mySelf from "../../assets/about_myself.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.32em] text-accent">
            About
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-white leading-[0.95]">
            A fresh graduate who likes building clear products with an honest
            visual language.
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            I&apos;m Ariel Yordan Tjahyadinata, a recent Informatics graduate
            with a focus on web, cloud, and mobile work that feels practical,
            polished, and easy to trust.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-surface overflow-hidden rounded-[2rem] p-4">
              <img
                src={mySelf}
                alt="Ariel Yordan Tjahyadinata"
                className="h-[34rem] w-full rounded-[1.5rem] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 left-6 card-surface rounded-2xl px-5 py-4">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Based in
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Jakarta, Indonesia
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "Education", value: "S.Kom" },
                { icon: MapPin, label: "Location", value: "Jakarta" },
                { icon: Sparkles, label: "Style", value: "Calm, functional" },
              ].map((item) => (
                <div key={item.label} className="card-surface rounded-2xl p-4">
                  <item.icon className="text-accent" size={18} />
                  <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="card-surface rounded-[1.75rem] p-7 md:p-10 text-slate-300 space-y-5 leading-relaxed text-base md:text-lg">
              <p>
                I started from the curiosity of wanting to understand how
                digital products are actually built, then kept moving deeper
                into web, cloud, and mobile work. Over time, my approach became
                less about simply making interfaces look good and more about
                making them feel thoughtful and dependable.
              </p>
              <p>
                What I enjoy most is the part where structure, visuals, and
                logic meet. I like organizing messy ideas into something
                readable, then refining it until the result feels calm and
                intentional.
              </p>
              <p>
                Outside of coursework and projects, I have also learned through
                organizational roles and collaborative work, which shaped how I
                think about ownership, communication, and finishing details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
