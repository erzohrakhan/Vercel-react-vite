import { useEffect, useState } from "react";

type Lead = {
  id: number;
  email: string | null;
  description: string | null;
  createdAt: string | null;
};

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  async function refresh() {
    const res = await fetch("/api/leads");
    const data = await res.json();
    setLeads(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, description: desc }),
    });
    setEmail("");
    setDesc("");
    await refresh();
  }

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "2rem auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>Leads</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: 8, marginBottom: 16 }}
      >
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, padding: 8, border: "1px solid #ccc" }}
        />
        <input
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ flex: 2, padding: 8, border: "1px solid #ccc" }}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
        {leads.map((l) => (
          <li
            key={l.id}
            style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}
          >
            <div>
              <strong>{l.email ?? "(no email)"}</strong>
            </div>
            <div style={{ color: "#555" }}>{l.description ?? "-"}</div>
            <div style={{ fontSize: 12, color: "#888" }}>
              {l.createdAt ?? ""}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
