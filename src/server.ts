




import dotenv from "dotenv";
import express from "express";
import eventsRoutes from "./routes/events.routes";
import registrationsRoutes from "./routes/registrations.routes";

dotenv.config();
const app = express();

app.use(express.json());





import jwt from "jsonwebtoken";
import { authMiddleware } from "./middlewares/auth.middleware";

const testToken = jwt.sign(
  { userId: 1 },
  process.env.JWT_SECRET as string,
  { expiresIn: "1h" }
);

console.log("TEST TOKEN:", testToken);

// app.use("/",authMiddleware);
app.use(eventsRoutes);
app.use(registrationsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);             
});






// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



// import dotenv from "dotenv";
// import express from "express";
// import { eq } from "drizzle-orm";
// import { db } from "./db/index";
// import { newEvents, eventsRegistrations } from "./db/schema";


// dotenv.config();

// const app = express();


// app.use(express.json());



// app.post("/events", async (req, res) => {
//   try {
//     const { name, startDate, endDate } = req.body;

//     if (!name || !startDate || !endDate) {
//       return res.status(400).json({ error: "name, startDate and endDate are required" });
//     }

//     const [event] = await db
//       .insert(newEvents)
//       .values({
//         name,
//         startDate: new Date(startDate),
//         endDate: new Date(endDate),
//       })
//       .returning();

//     res.status(201).json(event);


    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not create event" });
//   }
// });



// app.get("/events", async (req, res) => {
//   try {
//     const events = await db.select().from(newEvents);
//     res.json(events);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not fetch events" });
//   }
// });



// app.get("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);

//   if (isNaN(id)) {
//     return res.status(400).json({ error: "Invalid id" });
//   }

//   try {
//     const [event] = await db
//       .select()
//       .from(newEvents)
//       .where(eq(newEvents.id, id));

//     if (!event) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json(event);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not fetch event" });
//   }
// });


// app.put("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);

//   if (isNaN(id)) {
//     return res.status(400).json({ error: "Invalid id" });
//   }

//   try {
//     const [event] = await db
//       .update(newEvents)
//       .set(req.body)
//       .where(eq(newEvents.id, id))
//       .returning();

//     if (!event) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json(event);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not update event" });
//   }
// });



// app.delete("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);

//   if (isNaN(id)) {
//     return res.status(400).json({ error: "Invalid id" });
//   }

//   try {
//     const [event] = await db
//       .delete(newEvents)
//       .where(eq(newEvents.id, id))
//       .returning();

//     if (!event) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json({ message: "Event deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not delete event" });
//   }
// });



// app.post("/registrations", async (req, res) => {
//   try {
//     const { eventId, name, email, studentNo } = req.body;

//     if (!eventId || !name || !email || !studentNo) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const [reg] = await db
//       .insert(eventsRegistrations)
//       .values({ eventId, name, email, studentNo })
//       .returning();

//     res.status(201).json(reg);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not create registration" });
//   }
// });



// app.get("/registrations", async (req, res) => {
//   try {
//     const regs = await db.select().from(eventsRegistrations);
//     res.json(regs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not fetch registrations" });
//   }
// });



// app.get("/events/:eventId/registrations", async (req, res) => {
//   const eventId = Number(req.params.eventId);

//   if (isNaN(eventId)) {
//     return res.status(400).json({ error: "Invalid event id" });
//   }

//   try {
//     const regs = await db
//       .select()
//       .from(eventsRegistrations)
//       .where(eq(eventsRegistrations.eventId, eventId));

//     res.json(regs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not fetch registrations" });
//   }
// });



// app.delete("/registrations/:id", async (req, res) => {
//   const id = Number(req.params.id);

//   if (isNaN(id)) {
//     return res.status(400).json({ error: "Invalid id" });
//   }

//   try {
//     const [reg] = await db
//       .delete(eventsRegistrations)
//       .where(eq(eventsRegistrations.id, id))
//       .returning();

//     if (!reg) {
//       return res.status(404).json({ error: "Registration not found" });
//     }

//     res.json({ message: "Registration deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Could not delete registration" });
//   }
// });


// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });







 // "start": "node dist/index.js",
    // "dev": "ts-node src/index.ts",






























































































































// app.post("/events", async (req, res) => {
//   try {

   
//     if (!req.body.name || !req.body.startDate || !req.body.endDate) {
//       return res.status(400).json({ 
//         error: "Missing required fields",
//         required: ["name", "startDate", "endDate"],
//         received: Object.keys(req.body)
//       });
//     }

    
//     const eventData = {
//       name: req.body.name,
//       startDate: req.body.startDate ? new Date(req.body.startDate) : null,
//       endDate: req.body.endDate ? new Date(req.body.endDate) : null,
//     };

//     const [created] = await db.insert(newEvents).values(eventData).returning();
//     res.status(201).json(created);
//   } catch (err: any) {
//     console.error("Error creating event:", err);
//     const errorMessage = err?.message || "Unknown error";
//     console.error("Full error details:", err);
//     res.status(500).json({ 
//       error: "Failed to create event",
//       details: errorMessage,
//       hint: "Make sure database tables exist (run: npm run db:push)"
//     });
//   }
// });


// app.get("/events", async (req, res) => {
//   try {
//     const data = await db.select().from(newEvents);
//     res.json(data);
//   } catch (err) {
//     console.error("Error fetching events:", err);
//     res.status(500).json({ error: "Failed to fetch events" });
//   }
// });

// app.get("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid event id" });
//   }

//   try {
//     const [event] = await db
//       .select()
//       .from(newEvents)
//       .where(eq(newEvents.id, id));

//     if (!event) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json(event);
//   } catch (err) {
//     console.error("Error fetching event:", err);
//     res.status(500).json({ error: "Failed to fetch event" });
//   }
// });


// app.put("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid event id" });
//   }

//   try {
//     const [updated] = await db
//       .update(newEvents)
//       .set(req.body)
//       .where(eq(newEvents.id, id))
//       .returning();

//     if (!updated) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json(updated);
//   } catch (err) {
//     console.error("Error updating event:", err);
//     res.status(500).json({ error: "Failed to update event" });
//   }
// });

// // Delete an event
// app.delete("/events/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid event id" });
//   }

//   try {
//     const [deleted] = await db
//       .delete(newEvents)
//       .where(eq(newEvents.id, id))
//       .returning();

//     if (!deleted) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json({ message: "Event deleted", event: deleted });
//   } catch (err) {
//     console.error("Error deleting event:", err);
//     res.status(500).json({ error: "Failed to delete event" });
//   }
// });



// app.post("/registrations", async (req, res) => {
//   try {
 
//     if (!req.body.eventId) {
//       return res.status(400).json({ 
//         error: "Missing required field: eventId",
//         required: ["eventId", "studentNo", "name", "email"]
//       });
//     }

//     const [created] = await db
//       .insert(eventsRegistrations)
//       .values(req.body)
//       .returning();
//     res.status(201).json(created);
//   } catch (err: any) {
//     console.error("Error creating registration:", err);
//     const errorMessage = err?.message || "Unknown error";
//     console.error("Full error details:", err);
//     res.status(500).json({ 
//       error: "Failed to create registration",
//       details: errorMessage,
//       hint: err?.message?.includes("foreign key") 
//         ? "Make sure the eventId exists (create event first)"
//         : "Check server console for details"
//     });
//   }
// });



// app.get("/registrations", async (req, res) => {
//   try {
//     const data = await db.select().from(eventsRegistrations);
//     res.json(data);
//   } catch (err: any) {
//     console.error("Error fetching registrations:", err);
//     const errorMessage = err?.message || "Unknown error";
//     console.error("Full error details:", err);
//     res.status(500).json({ 
//       error: "Failed to fetch registrations",
//       details: errorMessage 
//     });
//   }
// });


// app.get("/events/:eventId/registrations", async (req, res) => {
//   const eventId = Number(req.params.eventId);
//   if (Number.isNaN(eventId)) {
//     return res.status(400).json({ error: "Invalid event id" });
//   }

//   try {
//     const data = await db
//       .select()
//       .from(eventsRegistrations)
//       .where(eq(eventsRegistrations.eventId, eventId));
//     res.json(data);
//   } catch (err) {
//     console.error("Error fetching event registrations:", err);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch registrations for the event" });
//   }
// });



// app.get("/registrations/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid registration id" });
//   }

//   try {
//     const [registration] = await db
//       .select()
//       .from(eventsRegistrations)
//       .where(eq(eventsRegistrations.id, id));

//     if (!registration) {
//       return res.status(404).json({ error: "Registration not found" });
//     }

//     res.json(registration);
//   } catch (err) {
//     console.error("Error fetching registration:", err);
//     res.status(500).json({ error: "Failed to fetch registration" });
//   }
// });


// app.delete("/registrations/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   if (Number.isNaN(id)) {
//     return res.status(400).json({ error: "Invalid registration id" });
//   }

//   try {
//     const [deleted] = await db
//       .delete(eventsRegistrations)
//       .where(eq(eventsRegistrations.id, id))
//       .returning();

//     if (!deleted) {
//       return res.status(404).json({ error: "Registration not found" });
//     }

//     res.json({ message: "Registration deleted", registration: deleted });
//   } catch (err) {
//     console.error("Error deleting registration:", err);
//     res.status(500).json({ error: "Failed to delete registration" });
//   }
// });



