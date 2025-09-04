// lib/secrets.ts
import dotenv from "dotenv";
dotenv.config();

export async function getDatabaseUrl() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL in environment");
  }
  return process.env.DATABASE_URL;
}
