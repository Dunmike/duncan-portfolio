"use client";

import { useState } from "react";

export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
  {
    number: "01",
    title: "IT Support",
    description: "Troubleshooting systems, supporting users, and solving technical problems.",
    icon: "⌘",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Building modern, responsive, and user-friendly websites.",
    icon: "</>",
  },
  {
    number: "03",
    title: "Computer Science",
    description: "Applying computing knowledge to practical digital solutions.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Technical Skills",
    description: "Exploring databases, hardware, software, and system maintenance.",
    icon: "⚙",
  },
];


  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-3xl font-black tracking-tighter text-white">
               Mr <span className="text-sky-400">D.</span>
            </span>
            <span className="hidden font-semibold sm:block">
              Duncan Musembi
              
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
  <a href="#home" className="hover:text-sky-400">Home</a>
  <a href="#about" className="hover:text-sky-400">About</a>
  <a href="#skills" className="hover:text-sky-400">Skills</a>
  <a href="#projects" className="hover:text-sky-400">Projects</a>
  <a href="#contact" className="hover:text-sky-400">Contact</a>
</div>

<button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={menuOpen}
  className="rounded-lg border border-sky-400/40 px-3 py-2 text-sky-300 md:hidden"
>
  {menuOpen ? "✕" : "☰"}
</button>

          <a
            href="mailto:musembiduncan1@gmail.com"
            className="rounded-full border border-sky-400/70 px-4 py-2 text-sm font-medium transition hover:bg-sky-400 hover:text-slate-950 sm:px-5"
          >
            Let's Talk ↗
          </a>
        </nav>
        {menuOpen && (
  <div className="border-t border-white/10 bg-[#050b18] px-6 py-4 md:hidden">
    {[
      ["Home", "#home"],
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ].map(([label, href]) => (
      <a
        key={href}
        href={href}
        onClick={() => setMenuOpen(false)}
        className="block py-3 text-slate-300 transition hover:text-sky-400"
      >
        {label}
      </a>
    ))}
  </div>
)}
      </header>

      {/* Welcome / Hero */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
      >
        <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            <span className="h-px w-10 bg-sky-400" />
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Hello, I'm
            <br />
            Duncan
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Musembi.
            </span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-slate-200 sm:text-2xl">
            IT Support <span className="text-sky-400">|</span> Computer Science
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            I am passionate about technology, troubleshooting technical
            problems, working with databases, and building useful digital
            experiences. I am constantly learning and turning ideas into
            practical solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:bg-sky-300"
            >
              Explore My Work <span className="ml-2">→</span>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-7 py-4 font-semibold transition hover:border-sky-400 hover:text-sky-300"
            >
              Contact Me
            </a>
              
<a
  href="/Duncan-Musembi-CV.pdf"
  download="Duncan-Musembi-CV.pdf"
  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/40 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
>
  Download My CV <span aria-hidden="true">↓</span>
</a>

          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to learning and new opportunities
          </div>
        </div>

        {/* Decorative technology graphic */}
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="mr-d-rotate absolute inset-[8%] rounded-full border border-sky-400/20" />
          <div className="mr-d-rotate absolute inset-[15%] rounded-full border border-blue-400/30" />
          <div className="absolute inset-[23%] rounded-full border border-dashed border-sky-400/30" />

          <div className="absolute inset-[20%] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="mr-d-glow relative flex h-56 w-56 items-center justify-center rounded-full border border-sky-400/50 bg-gradient-to-br from-blue-500/20 via-[#0a1830] to-[#050b18] shadow-[0_0_90px_rgba(14,165,233,0.18)] sm:h-64 sm:w-64">
            <div className="text-center">
              <p className="text-7xl font-black tracking-tighter text-white">
  Mr <span className="text-sky-400">D.</span>
</p>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-400" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                Code · Learn · Build
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-[17%] rounded-xl border border-sky-400/30 bg-[#0a1527]/90 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-xs text-slate-400">Currently exploring</p>
            <p className="mt-1 font-semibold text-sky-300">Web Technologies</p>
          </div>

          <div className="absolute bottom-[15%] left-0 rounded-xl border border-white/10 bg-[#0a1527]/95 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-400">My approach</p>
            <p className="mt-1 font-semibold">Solve. Improve. Repeat.</p>
          </div>

          <div className="absolute left-[14%] top-[15%] h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_20px_#38bdf8]" />
          <div className="absolute bottom-[17%] right-[15%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
        </div>
      </section>

      
{/* About */}
<section
  id="about"
  className="relative overflow-hidden border-y border-white/10 bg-[#080f1e] px-6 py-24"
>
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

  <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
        Get to know me
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
        Curious mind.
        <span className="block mt-2 text-sky-400">
          Technical mindset.
        </span>
      </h2>

      <p className="mt-7 leading-8 text-slate-400">
        I'm Duncan Musembi, also known as Mr D. I have a bachelors Digree in
        Computer Science and an interest in IT support, databases, web development and cyber security technician.
      </p>

      <p className="mt-5 leading-8 text-slate-400">
        My experience in customer service and sales has helped me
        develop communication, teamwork, and problem-solving skills.
        I'm continuing to strengthen my technical abilities by
        building projects and learning modern web technologies.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
      >
        Let's connect <span>→</span>
      </a>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          icon: "⌘",
          title: "IT Support",
          description: "Technical troubleshooting and user support.",
        },
        {
          icon: "</>",
          title: "Web Development",
          description: "Building responsive websites and interfaces.",
        },
        {
          icon: "◇",
          title: "Database Knowledge",
          description: "Learning SQL and structured data management.",
        },
        {
          icon: "✦",
          title: "Communication",
          description: "Customer service, teamwork, and collaboration.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-white/10 bg-[#0b1729] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]"
        >
          <span className="text-3xl font-bold text-sky-400">
            {item.icon}
          </span>

          <h3 className="mt-5 font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      
{/* Projects */}
<section
  id="projects"
  className="border-y border-white/10 bg-white/[0.02] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          My work
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Projects that bring ideas to life.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Explore my development journey, technical interests, and
          the digital solutions I plan to build.
        </p>
      </div>

      <span className="w-fit rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-sm text-sky-300">
        03 Featured Projects
      </span>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: "01",
          icon: "</>",
          title: "Mr D. Portfolio",
          category: "WEB DEVELOPMENT",
          description:
            "My personal portfolio showcasing my background, technical skills, and journey into modern web development.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          status: "In development",
          featured: true,
        },
        {
          number: "02",
          icon: "⌘",
          title: "IT Support Hub",
          category: "IT SUPPORT",
          description:
            "A planned knowledge base for documenting troubleshooting steps, common computer problems, and practical solutions.",
          technologies: ["React", "Problem Solving", "IT Support"],
          status: "Planned",
          featured: false,
        },
        {
          number: "03",
          icon: "◇",
          title: "Database Explorer",
          category: "DATABASES",
          description:
            "A planned learning project for practising SQL queries, managing records, and exploring database operations.",
          technologies: ["SQL", "Databases", "CRUD"],
          status: "Planned",
          featured: false,
        },
      ].map((project) => (
        <article
          key={project.number}
          className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br from-[#0c192d] to-[#060d19] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] ${
            project.featured
              ? "border-sky-400/30"
              : "border-white/10"
          }`}
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-sky-400/5 blur-3xl transition group-hover:bg-sky-400/15" />

          <div className="relative flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-2xl font-bold text-sky-300 transition group-hover:border-sky-400/60 group-hover:bg-sky-400/20">
              {project.icon}
            </div>
            <span className="text-sm font-medium tracking-widest text-slate-600">
              {project.number}
            </span>
          </div>

          <p className="relative mt-7 text-xs font-semibold tracking-[0.18em] text-sky-400">
            {project.category}
          </p>

          <h3 className="relative mt-3 text-xl font-bold text-white">
            {project.title}
          </h3>

          <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-xs text-slate-400">
              {project.status}
            </span>
            <span
              aria-hidden="true"
              className="text-lg text-sky-400 transition group-hover:translate-x-1"
            >
              ↗
            </span>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-10 text-center">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-xl border border-sky-400/40 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
      >
        Discuss a project <span>→</span>
      </a>
    </div>
  </div>
</section>

     
      {/* Contact */}
      <section id="contact" className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#0a1425] to-[#050b16] p-8 text-center shadow-[0_0_50px_rgba(56,189,248,0.06)] sm:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Get in touch
          </p>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
            Let&apos;s build something <span className="text-sky-400">great.</span>
          </h2>

          <p className="mx-auto mb-9 max-w-2xl leading-7 text-slate-400">
            Have a website idea, need IT support, or want to collaborate on a
            project? I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:musembiduncan1@gmail.com"
              className="rounded-xl bg-sky-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
            >
              Email Me ↗
            </a>

            <a
              href="https://wa.me/254111567158"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-sky-400/60 hover:bg-sky-400/5"
            >
              WhatsApp ↗
            </a>
          
<a
  href="https://github.com/Dunmike"
  target="_blank"
  rel="noreferrer"
  className="rounded-xl border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-sky-400/60 hover:bg-sky-400/5"
>
  GitHub Profile ↗
</a>

          </div>

          <p className="mt-6 text-sm text-slate-500">
            Nairobi, Kenya · Available for opportunities
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
        © 2026 Duncan Musembi. Built with Next.js.
      </footer>
    </main>
  );
}
