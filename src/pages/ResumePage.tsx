import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
} from "lucide-react";
import cvFile from "../assets/CV - Ariel Yordan Tjahyadinata.pdf";

const outline = [
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "skills", label: "Skills" },
  { id: "download", label: "Download" },
];

const education = [
  {
    year: "2022 - 2026",
    title: "Institute Business and Informatics Kwik Kian Gie",
    description:
      "Informatics Engineering graduate with a GPA of 3.87 and an Adaro Foundation scholarship recipient.",
  },
  {
    year: "2019 - 2022",
    title: "SMK Strada I",
    description: "Accounting graduate.",
  },
];

const experience = [
  {
    period: "Feb 2025 - Aug 2025",
    title: "AI Project Intern",
    company: "PT Salam Pacific Indonesia Lines",
    description:
      "Developed operational web systems and automation solutions using Next.js and Flask to streamline business processes, support real-time monitoring, and improve reporting efficiency.",
  },
  {
    period: "Oct 2023 - Oct 2024",
    title: "Head of Finance & Logistic Division",
    company: "Informatics Community",
    description:
      "Coordinated event logistics, kept execution moving, and supported finance collection for internal and external sources.",
  },
  {
    period: "Oct 2023 - Oct 2024",
    title: "Member",
    company: "Google Developer Students Club IBI KKG",
    description:
      "Joined Flutter study jams, workshops, and community events while expanding technical depth and network.",
  },
  {
    period: "Oct 2022 - Oct 2023",
    title: "Esports Player",
    company: "KSB E-sports",
    description:
      "Built team discipline through structured practice, coordination, and decision-making under pressure.",
  },
  {
    period: "Jun 2022 - Jul 2023",
    title: "Sales Promotion Boy",
    company: "PT. Berca Retail Group",
    description:
      "Worked on product promotion, inventory handling, and sales support during a high-traffic retail period.",
  },
];

const projects = [
  {
    title: "Allergify",
    category: "Mobile application",
    description:
      "AI and OCR-powered app for allergen detection in packaged food, designed to feel practical, fast, and accessible.",
  },
  {
    title: "JaHub",
    category: "Mobile application",
    description:
      "Android reminder and shared activity management app for married couples, built to support coordination and communication.",
  },
  {
    title: "Flow Report",
    category: "Web application",
    description:
      "Operational reporting system for automated bulk spreadsheet processing and report generation.",
  },
  {
    title: "SportZona",
    category: "Web application",
    description:
      "A modern and responsive Indonesian sports news portal delivering the latest updates on football, badminton, basketball, MotoGP, and more, built with React.",
  },
  {
    title: "Boolah",
    category: "Web application",
    description:
      "A web-based sports field booking platform that allows users to check availability and reserve fields online while helping owners efficiently manage bookings.",
  },
  {
    title: "Dapur Fantastic",
    category: "Web application",
    description:
      "A modern recipe web app that lets users find recipes, follow cooking steps, and get AI-based suggestions from available ingredients.",
  },
  {
    title: "Good / Bad Fortune",
    category: "Web application",
    description:
      "A small web experiment with responsive layout, dark mode, and a slightly playful tone.",
  },
  {
    title: "planT",
    category: "Mobile application",
    description:
      "Flutter solution challenge project that reached the top 50, balancing product clarity and technical execution.",
  },
];

const certificates = [
  {
    year: "2024",
    title: "Develop Your Google Cloud Network",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Implement DevOps Workflows in Google Cloud",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Monitoring and Log with Google Cloud Observability",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Build a Secure Google Cloud Network",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Implementing Cloud Balancing Load for Compute Engine",
    issuer: "Google Cloud Certified",
  },
  {
    year: "2024",
    title: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Belajar Dasar Git dengan Github",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2024",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
  },
];

const ResumePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="page-shell">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="soft-panel rounded-[2rem] p-6 md:p-7">
              <div className="page-eyebrow">Navigation Pane</div>
              <div className="mt-4 text-2xl font-display font-bold text-white leading-tight">
                CV Outline
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                A document-style layout with sections you can scan from left to
                right.
              </p>

              <nav className="mt-6 space-y-2">
                {outline.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} className="text-accent" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="soft-panel rounded-[2rem] p-6 md:p-7">
              <div className="flex items-center gap-2 text-slate-300">
                <FileText size={16} className="text-slate-400" />
                Quick facts
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                  Jakarta, Indonesia
                </li>
                <li className="flex gap-3">
                  <GraduationCap
                    size={15}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  S.Kom, Informatics graduate
                </li>
                <li className="flex gap-3">
                  <Briefcase
                    size={15}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  Web, cloud, and mobile products
                </li>
              </ul>
            </div>
          </aside>

          <div className="space-y-6">
            <section
              id="summary"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <FileText size={16} className="text-slate-400" />
                Summary
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[0.92]">
                A CV that reads like a document and stays easy to scan.
              </h1>
              <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-slate-300">
                Fresh Informatics graduate based in Jakarta with a focus on web,
                cloud, and mobile work. I like building calm, practical, and
                dependable digital products while keeping the overall structure
                clear and readable.
              </p>
            </section>

            <section
              id="education"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap size={16} className="text-slate-400" />
                Education
              </div>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 md:p-6"
                  >
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      {item.year}
                    </div>
                    <h2 className="mt-2 text-xl md:text-2xl font-display font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="experience"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <Briefcase size={16} className="text-slate-400" />
                Work Experience
              </div>
              <div className="mt-6 space-y-4">
                {experience.map((item) => (
                  <article
                    key={`${item.title}-${item.period}`}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 md:p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] tracking-[0.2em] text-slate-300">
                        <Calendar size={13} className="text-accent" />
                        {item.period}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl md:text-2xl font-display font-bold text-white">
                      {item.title}
                    </h2>
                    <div className="mt-2 text-accent font-medium">
                      {item.company}
                    </div>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <Sparkles size={16} className="text-slate-400" />
                Projects
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {projects.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      {item.category}
                    </div>
                    <h2 className="mt-2 text-xl font-display font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="certificates"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <BadgeCheck size={16} className="text-slate-400" />
                Certificates
              </div>
              <div className="mt-6 space-y-4">
                {certificates.map((item) => (
                  <article
                    key={item.title}
                    className="flex flex-col gap-2 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        {item.year}
                      </div>
                      <h2 className="mt-2 text-lg md:text-xl font-display font-bold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-300">
                        {item.issuer}
                      </p>
                    </div>
                    <BadgeCheck size={18} className="text-accent" />
                  </article>
                ))}
              </div>
            </section>

            <section
              id="skills"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <Layers3 size={16} className="text-slate-400" />
                Skills
              </div>

              <div className="mt-6 border-t border-slate-700/60 pt-5 space-y-4 text-sm md:text-base leading-relaxed text-slate-300">
                <p>
                  <span className="font-semibold text-white">
                    Operating Systems:
                  </span>{" "}
                  Windows, Linux.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Programming Language:
                  </span>{" "}
                  HTML, CSS, JavaScript, PHP, Java, Python, Dart, C#, Go.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Containerization and Orchestration:
                  </span>{" "}
                  Docker, Kubernetes.
                </p>
                <p>
                  <span className="font-semibold text-white">Frameworks:</span>{" "}
                  Flutter, Tailwind, React JS, Express JS, Hapi, Flask, Angular,
                  CodeIgniter.
                </p>
                <p>
                  <span className="font-semibold text-white">Soft Skills:</span>{" "}
                  Adaptability, Problem-solving, Verbal and Written
                  Communication, Teamwork, Critical Thinking, Time Management,
                  Growth Mindset, Project Management, Energy Management,
                  Resilience.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Tools and Technologies:
                  </span>{" "}
                  Visual Studio Code, Android Studio, GitHub, Google Cloud
                  Platform, Postman, Firebase, Node js, Netbeans IDE, Figma,
                  Enterprise Architect, XAMPP, WebStorm, Notion, Trello, Jira.
                </p>
              </div>
            </section>

            <section
              id="download"
              className="soft-panel rounded-[2.25rem] p-6 md:p-8 scroll-mt-28 bg-[linear-gradient(180deg,rgba(138,157,127,0.14),rgba(9,6,19,0.94))]"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <FileText size={16} className="text-slate-400" />
                Download
              </div>
              <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
                If you need the formal file, you can open the full PDF here
                without leaving the portfolio page.
              </p>
              <a
                href={cvFile}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 hover:bg-accent/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download size={18} /> Download PDF
              </a>
            </section>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumePage;
