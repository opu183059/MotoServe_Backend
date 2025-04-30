import express, { Request, Response } from "express";
import { bikeController } from "./bike.controller";

const router = express.Router();

router.post("/", bikeController.addBike);
router.get("/", bikeController.getAllBikes);
router.get("/:id", bikeController.getBikeById);

export const bikeRoutes = router;
