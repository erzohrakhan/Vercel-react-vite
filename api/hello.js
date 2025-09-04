import dotenv from "dotenv";
import { neon, neonConfig } from "@neondatabase/serverless";

async function dbClient() {
  //for http coonections non-pooling
  neonConfig.fetchConnectionCache = true;
  dotenv.config();
  return neon(process.env.DATABASE_URL);
}

export default async function handler(req, res) {
  const db = await dbClient();
  console.log(db);
  const results = await db`select now();`;
  res.status(200).json({
    message: "Hello from Vercel Serverless API!",
    res: results,
  });
}
