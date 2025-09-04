import { db } from "../db/client.js";
import { LeadTable } from "../db/schema.js";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const leads = await db.select().from(LeadTable);
      res.status(200).json(leads);
      return;
    }

    if (req.method === "POST") {
      const body = req.body || {};
      const email = typeof body.email === "string" ? body.email : null;
      const description =
        typeof body.description === "string" ? body.description : null;

      await db.insert(LeadTable).values({ email, description });

      res.status(201).json({ ok: true });
      return;
    }

    res.status(405).json({ error: "Method Not Allowed" });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message || "Unknown error" });
  }
}
