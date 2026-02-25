// src/db/schema.ts
import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const newEvents = pgTable("practiceEvents", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
});

export const eventsRegistrations = pgTable("practiceEventsRegistrations", {
  id: serial("id").primaryKey(),
  eventId: integer("eventId").references(()=>newEvents.id).notNull(),
  studentNo: varchar("studentNo", { length: 20 }),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 100 }),
  registeredAt: timestamp("registeredAt").defaultNow(),
});



// pgTable is a function from Drizzle ORM that you use to define a PostgreSQL table in TypeScript.

// Think of it like:

// “Hey Drizzle, this is what my table looks like in the database.”