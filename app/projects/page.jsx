export default function ProjectsPage() {
  const items = [
    { title: "Dreamfield", status: "Active" },
    { title: "Untitled Project 2", status: "Coming soon" },
  ];

  return (
    <main style={{ maxWidth: "48rem", margin: "2rem auto", padding: "0 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Projects</h1>
      <ul>
        {items.map((p) => (
          <li key={p.title} style={{ marginBottom: "0.75rem" }}>
            <strong>{p.title}</strong> – {p.status}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "1.5rem" }}>
        <a href="/">Back to home</a>
      </p>
    </main>
  );
}
