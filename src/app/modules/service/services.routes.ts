import express, { Request, Response } from "express";
import { serviceController } from "./services.controller";

const router = express.Router();

router.post("/", serviceController.createService);
router.get("/status", serviceController.getPendingOrOverdueServices);
router.get("/", serviceController.getAllServices);
router.put("/:id/complete", serviceController.markServiceComplete);
router.get("/:id", serviceController.getServiceById);

export const servicesRoutes = router;
