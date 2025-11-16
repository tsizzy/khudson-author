export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
     {/* HERO */}
      <header className="hero-header">
        <img
          src="/images/herobanner.jpg"
          alt="K Hudson hero banner"
          className="hero-image"
        />

        {/* Your hero text / buttons */}
        <h1 className="hero-title">Dreamfield</h1>
        <p className="hero-subtitle">
          A speculative SF universe about reality, perception, and the stories we use to explain ourselves.
        </p>
      </header>
     

      {/* STICKY NAV UNDER HERO */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 border-b border-sky-400/30 backdrop-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 gap-4">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-emerald-200">
            K. Hudson · Dreamfield
          </div>
          <div className="flex flex-wrap gap-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase">
            <a href="#dreamfield" className="hover:text-sky-300">
              Dreamfield
            </a>
            <a href="#projects" className="hover:text-sky-300">
              Projects
            </a>
            <a href="#newsletter" className="hover:text-sky-300">
              Mailing list
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {/* DREAMFIELD SECTION */}
        <section id="dreamfield" className="mb-12 md:mb-16">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-emerald-200 mb-1">
            The world
          </div>
          <h2 className="text-xl md:text-2xl text-sky-300 mb-3 uppercase tracking-[0.18em]">
            About Dreamfield
          </h2>
          <div className="space-y-3 text-sm md:text-base text-slate-200 max-w-3xl">
            <p>
              Dreamfield is a story about control, consensus reality, and the
              cost of outsourcing our judgment to the systems we build. It lives
              somewhere between space opera, psychological drama and quiet
              philosophical SF.
            </p>
            <p>
              On this page I’ll collect updates, lore snippets, and side pieces
              that orbit the main novel — without turning everything into a
              content machine.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-12 md:mb-16">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-emerald-200 mb-1">
            Side pieces
          </div>
          <h2 className="text-xl md:text-2xl text-sky-300 mb-3 uppercase tracking-[0.18em]">
            Projects &amp; peripheral short stories
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-3xl">
            Some small satellite projects around the main book:
          </p>

          <ul className="mt-4 divide-y divide-slate-700/60 text-sm text-slate-100 max-w-3xl">
            <li className="py-3">
              <strong className="text-emerald-200">Horinthian Meditations</strong>{" "}
              – a short piece exploring the temple culture and pain rituals that
              show up in the novel’s opening.
            </li>
            <li className="py-3">
              <strong className="text-emerald-200">Rynar’s War Notes</strong> –
              fragments from a strategist who refuses to outsource his intuition
              to machines.
            </li>
            <li className="py-3">
              <strong className="text-emerald-200">Oracle Fragments</strong> –
              in-universe documents from the predictive system that insists
              “Dreamfield is ready”.
            </li>
          </ul>

          <p className="mt-3 text-xs text-slate-400">
            (You can swap these out later for whatever you actually publish.)
          </p>
        </section>

        {/* MAILING LIST SECTION */}
        <section id="newsletter" className="mb-16">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-emerald-200 mb-1">
            Stay in the loop
          </div>
          <h2 className="text-xl md:text-2xl text-sky-300 mb-3 uppercase tracking-[0.18em]">
            Mailing list
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-3xl mb-4">
            If you’d like occasional, thoughtful updates instead of an endless
            stream of posts, drop your email below. I’ll send new chapters,
            behind-the-scenes notes, and the occasional piece on media and
            perception.
          </p>

          <div className="rounded-2xl border border-sky-400/30 bg-slate-900/60 p-4 md:p-5">
            <p className="text-xs text-slate-300 mb-3">
              The form below is embedded from Google Forms. Replace the{" "}
              <code>src</code> with your actual form’s embed URL when it’s ready.
            </p>

            <div className="relative w-full overflow-hidden rounded-xl bg-slate-950 aspect-[4/3]">
              {/* Replace the src URL with your real Google Form embed link */}
              <iframe
                src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                title="Dreamfield mailing list"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
           <footer className="site-footer">
        <img
          src="/images/footerimage.jpg"
          alt="Footer Image"
          className="footer-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/70 backdrop-blur-sm" />
        <div className="relative max-w-5xl mx-auto px-4 py-10 space-y-4">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.3em] text-emerald-200 mb-1">
              Elsewhere
            </div>
            <p className="text-sm text-slate-100 max-w-md">
              I publish essays and smaller thoughts in a few other places. If you
              prefer reading in newsletter form or on long-form platforms, you
              can find me here:
            </p>
          </div>

          <ul className="flex flex-wrap gap-3 text-xs">
            <li>
              <a
                href="https://YOUR-SUBSTACK-URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-400/70 bg-slate-900/70 px-3 py-1 hover:border-sky-300"
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@YOUR-HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-400/70 bg-slate-900/70 px-3 py-1 hover:border-sky-300"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/YOUR-HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-400/70 bg-slate-900/70 px-3 py-1 hover:border-sky-300"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://Reddit.com/YOUR-HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-400/70 bg-slate-900/70 px-3 py-1 hover:border-sky-300"
              >
                Reddit
              </a>
            </li>
          </ul>

          <div className="text-[0.7rem] text-slate-300/90">
            © {new Date().getFullYear()} K. Hudson. Dreamfield project.
          </div>
        </div>
      </footer>
    </div>
  );
}

