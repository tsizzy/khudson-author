export default function DreamfieldPage() {
  return (
    <main style={{ maxWidth: "48rem", margin: "2rem auto", padding: "0 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Dreamfield</h1>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.3rem" }}>Peripheral stories</h2>
        <ul>
          <li><a href="#">Story 1 (teaser)</a></li>
          <li><a href="#">Story 2 (teaser)</a></li>
        </ul>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.3rem" }}>Announcements</h2>
        <article>
          <time>2025-11-15</time>
          <p>Dreamfield hub is live.</p>
        </article>
      </section>

      <p><a href="/">Back to home</a></p>
    </main>
  );
}
