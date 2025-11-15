export default function Home() {
  return (
    <main style={{ maxWidth: "42rem", margin: "2rem auto", padding: "0 1.5rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>K. Hudson</h1>
        <p>Writer. Building Dreamfield and future projects.</p>
      </header>

      <p style={{ marginBottom: "1.5rem" }}>
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
          target="_blank"
          rel="noreferrer"
        >
          Join the mailing list
        </a>
      </p>

      <nav>
        <a href="/dreamfield" style={{ marginRight: "1rem" }}>Dreamfield</a>
        <a href="/projects">Projects</a>
      </nav>
    </main>
  );
}
