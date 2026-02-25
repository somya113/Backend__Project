CREATE TABLE "practiceEventsRegistrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"eventId" integer NOT NULL,
	"studentNo" varchar(20),
	"name" varchar(100),
	"email" varchar(100),
	"registeredAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "practiceEvents" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"startDate" timestamp,
	"endDate" timestamp
);
--> statement-breakpoint
ALTER TABLE "practiceEventsRegistrations" ADD CONSTRAINT "practiceEventsRegistrations_eventId_practiceEvents_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."practiceEvents"("id") ON DELETE no action ON UPDATE no action;


-- This is the actual SQL migration file that creates/updates tables in PostgreSQL.












