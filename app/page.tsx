"use client";

import { motion, Variants } from "framer-motion";
import { PlayIcon, SparklesIcon } from "@heroicons/react/24/solid";

const stats = [
  { label: "Location", value: "Nepal" },
  { label: "Profession", value: "Film Actor" },
];

const films = [
  {
    title: "Hostel 3",
    role: "Shiva",
    year: "2025",
    description:
      "Released March 7, 2025, Sashan Kandel’s campus drama following hostel friendships and conflicts; Ashish plays Shiva, navigating loyalty and pressure.",
  },
  {
    title: "Future Feature",
    role: "TBA",
    year: "—",
    description: "Reserved spot for upcoming projects in production.",
  },
];

const skills = [
  "Acting",
  "Dancing",
  "Dialogue Delivery",
  "Horse riding",
  "Martial Arts",
  "Modeling",
  "Screen Presence",
  "Direction",
];

const galleryItems = [
  {
    label: "Cinematic Still",
    image: "/ashish5.png",
  },
  {
    label: "Photoshoot",
    image: "/ashish1.png",
  },
  {
    label: "Casual",
    image: "/ashish6.png",
  },
  {
    label: "Behind the Scenes",
    image: "/ashish2.png",
  },
  {
    label: "Character Study",
    image: "/ashish3.png",
  },
  {
    label: "Red Carpet",
    image: "/ashish4.png",
  },
];

const socials = [
  // {
  //   name: "X (Twitter)",
  //   handle: "@ghimireashish1",
  //   href: "https://twitter.com/ghimireashish1",
  //   icon: "x",
  // },
  {
    name: "Facebook",
    handle: "Ashish Ghimire",
    href: "https://www.facebook.com/ashish.ghimire.123601",
    icon: "facebook",
  },
  {
    name: "Instagram",
    handle: "@ghimireashish1",
    href: "https://www.instagram.com/ghimireashish1/",
    icon: "instagram",
  },
  {
    name: "IMDb",
    handle: "Credits & Profile",
    href: "https://www.imdb.com/name/nm16679476/?ref_=ext_shr_lnk",
    icon: "imdb",
  },
];

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M18.3 3H21l-6.6 7.2L21.6 21H15l-4.2-5.6L6 21H3.3l7-7.7L3 3h6l3.7 5 3.6-5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.1C15.4 1 14.1 1 12.7 1 9.9 1 8 2.7 8 5.2V7H5v3h3v10h5V10Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm11.2 1.5a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.8C15.5 4 12 4 12 4h0s-3.5 0-6.8.4c-.4 0-1.2 0-2 .8-.6.6-.8 2-.8 2S2 8.8 2 10.4v1.2c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8 1.6.2 6.6.4 6.6.4s3.5 0 6.8-.4c.4 0 1.2 0 2-.8.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.2c0-1.6-.2-3.2-.2-3.2ZM10 14.8V8.8l5.2 3-5.2 3Z" />
        </svg>
      );
    case "imdb":
      return (
        <svg viewBox="0 0 64 32" className="h-5 w-8 fill-current">
          <rect x="2" y="4" width="60" height="24" rx="3" />
          <path
            className="fill-black"
            d="M10 10h4v12h-4Zm6 0h5l1 5.5L23 10h5v12h-4v-7l-1.7 7h-2.6L18 15v7h-4Zm14 0h5c3 0 4.5 1.4 4.5 4.8v2.4c0 3.6-1.5 4.8-4.5 4.8h-5Zm4 3v6h1c.9 0 1.2-.4 1.2-1.3v-3.4c0-.9-.3-1.3-1.2-1.3Zm9-3h5l1 5.5 1-5.5h5v12h-4v-7l-1.7 7h-2.6L43 15v7h-4Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-[#030303] text-zinc-100">
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="mesh-glow top-[-10%] left-[-5%] bg-[var(--accent-gold)]" />
        <div className="mesh-glow top-[20%] right-[-10%] bg-[var(--accent-blue)]" />
        <div className="mesh-glow bottom-[-5%] left-[10%] bg-white/10" />
      </div>

      <main className="min-h-screen w-full">
        {/* Hero */}
        <section id="top" className="relative isolate min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(3,3,3,0.7), rgba(3,3,3,0.95)), url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=90')",
            }}
          />

          <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-32 md:flex-row md:items-center md:pb-28 md:pt-36">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1 space-y-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent-gold)]" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                  Nepali Film Star
                </p>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
              >
                ASHISH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                  GHIMIRE
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl text-lg leading-relaxed text-zinc-400"
              >
                &quot;Rising Star of Nepali Cinema&quot; — blending raw
                authenticity with modern charisma. Ashish brings cinematic
                intensity to every frame, captivating audiences and directors
                alike.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-5">
                <a
                  href="#portfolio"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
                >
                  <PlayIcon className="h-5 w-5" /> View Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                >
                  Contact
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 pt-4 sm:max-w-md"
              >
                {stats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="text-xl font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
              className="relative flex-1"
            >
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[var(--accent-blue)]/20 to-[var(--accent-gold)]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <div
                  className="aspect-[4/5] bg-cover bg-center grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('/ashish.png')",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-blue)]">
                    Latest Project
                  </p>
                  <h3 className="text-2xl font-bold text-white">Hostel 3</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute inset-x-0 bottom-12 flex justify-center"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">
                Scroll
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="relative py-32 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-20 md:grid-cols-[1.2fr_1fr] md:items-center"
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                    The Story
                  </p>
                  <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                    Ashish Ghimire — <br />
                    <span className="glitter-text">Feel it. Live it. That&apos;s my story.</span>
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-zinc-400 text-justify">
                  Ashish Ghimire is a Nepali actor recognized for his role as Shiva
                  in Hostel 3 (2025)—a performance that lingered long after the
                  screen went silent. His journey began early with Meri Bassai,
                  portraying Dhundhukari, but it was at Aarohan Gurukul, under the
                  mentorship of Sunil Pokharel, where his craft was sharpened with
                  discipline and intention.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="h-12 w-12 rounded-full border border-white/10 p-1">
                    <div className="h-full w-full rounded-full bg-gradient-to-tr from-[var(--accent-gold)] to-white/20" />
                  </div>
                  <p className="text-sm font-medium italic text-zinc-300">
                    &quot;Cinema is not just acting; it&apos;s breathing life into the
                    unspoken.&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
                  },
                }}
                className="glass-card p-1"
              >
                <div className="relative overflow-hidden rounded-[20px] bg-zinc-900/50 p-8">
                  <div className="grid grid-cols-2 gap-12">
                    {stats.map((item) => (
                      <div key={item.label} className="space-y-3">
                        <div className="h-1 w-8 bg-white/10" />
                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                          {item.label}
                        </p>
                        <p className="text-xl font-bold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filmography */}
        <section id="portfolio" className="py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeInUp} className="flex items-end justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                    Filmography
                  </p>
                  <h3 className="text-4xl font-bold text-white sm:text-5xl">
                    Selected Works
                  </h3>
                </div>
                <div className="hidden h-px flex-1 bg-white/10 mx-12 md:block" />
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2">
                {films.map((film) => (
                  <motion.article
                    key={film.title}
                    variants={fadeInUp}
                    className="glass-card group relative p-10"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10 transition-opacity group-hover:opacity-100">
                      <SparklesIcon className="h-6 w-6 text-[var(--accent-gold)]" />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent-blue)]">
                          {film.year}
                        </p>
                        <h4 className="text-3xl font-bold text-white">{film.title}</h4>
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
                          Role: {film.role}
                        </p>
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        {film.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeInUp} className="text-center space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                  Visuals
                </p>
                <h3 className="text-4xl font-bold text-white sm:text-5xl">
                  Frames & Moments
                </h3>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-blue)]">
                        Explore
                      </p>
                      <h4 className="text-xl font-bold text-white">{item.label}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                  Expertise
                </p>
                <h3 className="text-4xl font-bold text-white sm:text-5xl">
                  Crafting the Persona
                </h3>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    className="glass-card group p-8 hover:bg-white/5"
                  >
                    <SparklesIcon className="h-5 w-5 text-white/20 transition-colors group-hover:text-[var(--accent-blue)]" />
                    <p className="mt-6 text-lg font-bold text-white uppercase tracking-wider">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="glass-card relative overflow-hidden p-12 md:p-20"
            >
              <div className="mesh-glow -bottom-1/2 -right-1/4 bg-[var(--accent-blue)] opacity-10" />
              <div className="relative grid gap-16 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-gold)]">
                      Collaboration
                    </p>
                    <h3 className="text-4xl font-bold text-white sm:text-6xl">
                      Let&apos;s Build the <br /> Next Story.
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-zinc-400">
                      ghimireashish1@gmail.com
                    </p>
                    <div className="flex gap-4">
                      {socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-white hover:text-black"
                        >
                          <SocialIcon type={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-12">
                  <div className="space-y-6">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
                      Availability
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Drama", "Action", "Series", "Features", "Comedy"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="mailto:ghimireashish1@gmail.com"
                    className="group inline-flex items-center justify-between rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
                  >
                    Start a Conversation
                    <span className="ml-4 transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
            © 2024 ASHISH GHIMIRE • ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
