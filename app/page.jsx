export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">[Your Name]</h1>
        <p className="text-neutral-600">
          Writer. Building Dreamfield and future projects.
        </p>
      </header>

      {/* Email signup – use your real Google Form link */}
      <p>
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-xl border border-neutral-400 px-4 py-2"
        >
          Join the mailing list
        </a>
      </p>

      <nav className="space-x-4">
        <a href="/dreamfield" className="underline">
          Dreamfield
        </a>
        <a href="/projects" className="underline">
          Projects
        </a>
      </nav>
    </main>
  );
}
