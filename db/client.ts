import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { getDatabaseUrl } from "./secrets"; // Adjust path if needed

neonConfig.fetchConnectionCache = true;

export async function getDbClient() {
  const dburl = await getDatabaseUrl();
  return neon(dburl);
}

export async function getDrizzleDbClient() {
  const sql = await getDbClient();
  return drizzle(sql);
}
