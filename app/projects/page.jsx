export default function ProjectsPage() {
  const items = [
    { title: "Dreamfield", status: "Active" },
    { title: "Untitled Project 2", status: "Coming soon" },
  ];

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <li key={p.title} className="rounded-xl border p-4">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-neutral-600">{p.status}</p>
          </li>
        ))}
      </ul>

      <p>
        <a href="/" className="underline">
          Back to home
        </a>
      </p>
    </main>
  );
}
