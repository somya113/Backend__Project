import { Router } from "express";
import { createRegistration, getRegistrations, getRegistrationsByEventId, deleteRegistration } from "../controllers/registrations.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
const router = Router();

router.post("/registrations",authMiddleware, createRegistration);
router.get("/registrations", authMiddleware,getRegistrations);
router.get("/events/:eventId/registrations",authMiddleware, getRegistrationsByEventId);
router.delete("/registrations/:id",authMiddleware,deleteRegistration);

export default router;
