import { text, pgTable, timestamp, serial } from "drizzle-orm/pg-core";

export const LeadTable = pgTable("leads", {
  id: serial("id").primaryKey().notNull(),
  email: text("email"),
  description: text("description").default("Default comment "),
  createdAt: timestamp("created_at").defaultNow(),
});
