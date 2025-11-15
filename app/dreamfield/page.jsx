export default function DreamfieldPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-8">
      <h1 className="text-3xl font-semibold">Dreamfield</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Peripheral stories</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><a className="underline" href="#">Story 1 (teaser)</a></li>
          <li><a className="underline" href="#">Story 2 (teaser)</a></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Announcements</h2>
        <article className="rounded-xl border p-4">
          <time className="text-sm text-neutral-500">2025-11-15</time>
          <p>Dreamfield hub is live.</p>
        </article>
      </section>

      <p>
        <a href="/" className="underline">
          Back to home
        </a>
      </p>
    </main>
  );
}
