CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"description" text DEFAULT 'Default comment ',
	"created_at" timestamp DEFAULT now()
);
