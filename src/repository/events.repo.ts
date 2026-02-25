import { eq } from "drizzle-orm";
import { db } from "../db/index";
import { newEvents } from "../db/schema";

export const insertEvent = async (name, startDate, endDate) => {
  return await db
    .insert(newEvents)
    .values({
      name,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    })
    .returning();
};

export const selectAllEvents = async () => {
  return await db.select().from(newEvents);
};

export const selectEventById = async (id) => {
  return await db.select().from(newEvents).where(eq(newEvents.id, id));
};

export const updateEventById = async (id, body) => {
  return await db.update(newEvents).set(body).where(eq(newEvents.id, id)).returning();
};

export const deleteEventById = async (id) => {
  return await db.delete(newEvents).where(eq(newEvents.id, id)).returning();
};
