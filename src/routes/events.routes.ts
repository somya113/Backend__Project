import { Router } from "express";
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../controllers/events.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const router = Router();

router.post("/events",authMiddleware,createEvent);
router.get("/events",  getEvents);  
router.get("/events/:id",  getEventById);
router.put("/events/:id",  authMiddleware,updateEvent);
router.delete("/events/:id",authMiddleware,deleteEvent);

export default router;
