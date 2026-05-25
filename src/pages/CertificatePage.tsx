import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BadgeCheck, Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    year: "2024",
    title: "Develop Your Google Cloud Network",
    issuer: "Google Cloud Certified",
    note: "Short proof that you can finish a structured learning path and apply it to real work.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/12074509",
  },
  {
    year: "2024",
    title: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud Certified",
    note: "Shows consistency in collaborative settings, event support, and project delivery.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/12081064",
  },
  {
    year: "2024",
    title: "Implement DevOps Workflows in Google Cloud",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/12392570",
  },
  {
    year: "2024",
    title: "Monitoring and Log with Google Cloud Observability",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/12426895",
  },
  {
    year: "2024",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/11845059",
  },
  {
    year: "2024",
    title: "Build a Secure Google Cloud Network",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/11843951",
  },
  {
    year: "2024",
    title: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/11824764",
  },
  {
    year: "2024",
    title: "Implementing Cloud Balancing Load for Compute Engine",
    issuer: "Google Cloud Certified",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.skills.google/public_profiles/ad6e9ea6-4243-4f4c-9a0b-4c3286a020b8/badges/11823188",
  },
  {
    year: "2024",
    title: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/4EXG78D9QPRL",
  },
  {
    year: "2024",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/81P24K30NZOY",
  },
  {
    year: "2024",
    title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/2VX347QWNZYQ",
  },
  {
    year: "2024",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/EYX4J8KN6ZDL",
  },
  {
    year: "2024",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/QLZ9V6VK2X5D",
  },
  {
    year: "2024",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/6RPNY3244Z2M",
  },
  {
    year: "2024",
    title: "Belajar Dasar Git dengan Github",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/NVP7QRJQWZR0",
  },
  {
    year: "2024",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    note: "Use this slot for your strongest official certificate so recruiters see proof fast.",
    link: "https://www.dicoding.com/certificates/NVP7Q2Q3RZR0",
  },
];

const CertificatePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

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
            <div className="page-eyebrow">Certificate</div>
            <h1 className="mt-6 max-w-4xl text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[0.9]">
              A curated collection of certifications I have earned, showcasing
              my continuous learning and professional development.
            </h1>
            <p className="page-lead max-w-3xl">
              This page showcases certifications I have obtained from various
              courses to enhance my skills and knowledge.
            </p>
          </div>

          <div className="soft-panel rounded-[2rem] p-6 md:p-8">
            <div className="flex items-center gap-2 text-slate-300">
              <Award size={16} className="text-slate-400" />
              Presentation rule
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Put the strongest certificates first, keep the titles readable,
              and connect them to the skills you want recruiters to remember.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          {certificates.map((item) => (
            <article
              key={item.title}
              className="soft-panel rounded-[2rem] px-5 py-5 md:px-6 md:py-6"
            >
              <div className="grid gap-4 md:grid-cols-[120px_1fr_160px] md:items-center">
                <div className="text-xs uppercase tracking-[0.32em] text-accent">
                  {item.year}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <BadgeCheck size={16} className="text-accent" />
                    {item.issuer}
                  </div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300">
                    {item.note}
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:text-accent hover:bg-accent/5 transition-colors"
                  >
                    Show <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatePage;
