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
  return (
    <div className="bg-[#050505] text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(26,209,255,0.08),transparent_30%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.04),transparent_40%)]" />

      <main className="min-h-screen w-full">
        {/* Hero */}
        <section id="top" className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "linear-gradient(115deg, rgba(0,0,0,0.82), rgba(5,5,5,0.92) 42%, rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=90')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(26,209,255,0.25),transparent_45%)]" />

          <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 pb-24 pt-28 md:flex-row md:items-center md:pb-28 md:pt-32">
            <div className="flex-1 space-y-6">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-zinc-300">
                <SparklesIcon className="h-4 w-4 text-[var(--accent-gold)]" />
                Nepali Film Star
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                ASHISH GHIMIRE
              </h1>
              <p className="text-lg uppercase tracking-[0.25em] text-zinc-200">
                Nepali Film Actor
              </p>
              <p className="max-w-xl text-base leading-relaxed text-zinc-200">
                "Rising Star of Nepali Cinema" — blending raw authenticity with
                modern charisma. Ashish brings cinematic intensity to every
                frame, captivating audiences and directors alike.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_12px_40px_rgba(26,209,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(26,209,255,0.35)]"
                >
                  <PlayIcon className="h-5 w-5" /> View Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-gold)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-gold)] transition hover:-translate-y-0.5 hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
                >
                  Contact
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:max-w-lg">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex-1">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent-blue)]/20 blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-[var(--accent-gold)]/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur">
                <div
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('/ashish.png')",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-blue)]">
                      Feature
                    </p>
                    <p className="text-lg font-semibold text-white">Hostel 3</p>
                  </div>
                  <div className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-8 flex justify-center">
            <div className="animate-bounce rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Scroll
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                About
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ashish Ghimire - Feel it. Live it . That&apos;s my story
              </h2>
              <p className="text-base leading-relaxed text-zinc-300 text-justify">
                Ashish Ghimire is a Nepali actor recognized for his role as Shiva in Hostel 3 (2025)—a performance that lingered long after the screen went silent. His journey began early with Meri Bassai, portraying Dhundhukari, but it was at Aarohan Gurukul, under the mentorship of Sunil Pokharel, where his craft was sharpened with discipline and intention. Growing up within a creative environment, he developed a presence that is calm yet compelling—never forced, always felt. With a subtle intensity and an instinct for truth, Ashish stands as part of a new generation of Nepali cinema—one that speaks less, but resonates deeper.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.1),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(26,209,255,0.12),transparent_40%)]" />
                <div className="relative grid grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="border-white/5 px-5 py-6 text-sm text-white/80 [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b"
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filmography */}
        <section
          id="portfolio"
          className="bg-white/5 border-t border-b border-white/5 py-20"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-20">
            <div className="flex items-center justify-between gap-6 pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                  Filmography
                </p>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  Featured Work
                </h3>
              </div>
              <a
                href="#contact"
                className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] md:inline-flex"
              >
                Book for Casting
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {films.map((film) => (
                <article
                  key={film.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/70 to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,209,255,0.12),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.12),transparent_35%)]" />
                  </div>
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-blue)]">
                        {film.year}
                      </p>
                      <h4 className="mt-2 text-2xl font-semibold text-white">
                        {film.title}
                      </h4>
                      <p className="text-sm uppercase tracking-[0.25em] text-zinc-300">
                        {film.role}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                      Feature
                    </span>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-zinc-300">
                    {film.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center justify-between gap-6 pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Gallery
              </p>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Frames & Moments
              </h3>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
              >
                <div
                  className="aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 text-sm text-white">
                  <span className="font-semibold">{item.label}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Showreel */}
        <section
          id="showreel"
          className="bg-gradient-to-b from-black via-zinc-950 to-black py-20 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
              Showreel
            </p>
            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Official Acting Showreel
            </h3>
            <p className="mt-4 text-base text-zinc-300">
              High-impact highlights capturing Ashish's range across drama,
              youth narratives, and modern Nepali cinema.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
              <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(26,209,255,0.2),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.15),transparent_40%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:scale-105">
                  <PlayIcon className="h-8 w-8 text-white transition group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-center justify-between pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Skills
              </p>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                On-Screen Strengths
              </h3>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,209,255,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.12),transparent_35%)]" />
                </div>
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-blue)]">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{skill}</p>
                    <p className="text-sm text-zinc-400">
                      Precision • Presence • Emotion
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social */}
        <section
          id="social"
          className="bg-gradient-to-b from-black via-zinc-950 to-black py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                  Social
                </p>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  Stay Connected
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Follow Ashish for casting news, behind-the-scenes, and film
                  drops.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,209,255,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.12),transparent_35%)]" />
                  </div>
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--accent-blue)]">
                      <SocialIcon type={item.icon} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                        {item.name}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-white/5 border-t border-b border-white/5 py-20"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                  Contact
                </p>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  Book for Casting
                </h3>
                <p className="text-base text-zinc-300">
                  Ready for your next production? Reach out for casting, brand
                  collaborations, or special appearances.
                </p>
                <div className="space-y-2 text-sm text-zinc-200">
                  <p>
                    Facebook: <span className="text-white">Ashish Ghimire</span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="text-white">ghimireashish1@gmail.com</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:ghimireashish1@gmail.com?subject=Casting Inquiry for Ashish Ghimire"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_12px_40px_rgba(26,209,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(26,209,255,0.35)]"
                    aria-label="Book Ashish Ghimire for casting"
                  >
                    Book for Casting
                  </a>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                  >
                    Back to Top
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(26,209,255,0.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.14),transparent_35%)]" />
                <div className="relative space-y-4 text-left">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                    Availability
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    Open for Films, Series, Music Videos
                  </p>
                  <p className="text-zinc-300">
                    Currently prioritizing bold, character-driven stories and
                    fresh Nepali narratives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Drama", "Youth", "Action", "Romance"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            © Ashish Ghimire | Nepali Film Actor
          </p>
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <a
              className="hover:text-[var(--accent-blue)]"
              href="https://www.instagram.com/ghimireashish1/"
              target="_blank"
            >
              Instagram
            </a>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <a
              className="hover:text-[var(--accent-blue)]"
              href="https://www.facebook.com/ashish.ghimire.123601"
              target="_blank"
            >
              Facebook
            </a>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <a
              className="hover:text-[var(--accent-blue)]"
              href="https://www.imdb.com/name/nm16679476/?ref_=ext_shr_lnk"
              target="_blank"
            >
              IMDB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
