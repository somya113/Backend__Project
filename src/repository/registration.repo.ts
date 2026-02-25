import { eq } from "drizzle-orm";
import { db } from "../db/index";
import { eventsRegistrations } from "../db/schema";

export const insertRegistration = async (data) => {
  return await db.insert(eventsRegistrations).values(data).returning();
};

export const selectAllRegistrations = async () => {
  return await db.select().from(eventsRegistrations);
};

export const selectRegistrationsByEventId = async (eventId) => {
  return await db
    .select()
    .from(eventsRegistrations)
    .where(eq(eventsRegistrations.eventId, eventId));
};

export const deleteRegistrationById = async (id) => {
  return await db
    .delete(eventsRegistrations)
    .where(eq(eventsRegistrations.id, id))
    .returning();
};
