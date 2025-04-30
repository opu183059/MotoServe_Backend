import { Request, Response, NextFunction } from "express";
import { bikeService } from "./bike.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

const addBike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bike = await bikeService.addBike(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Bike added successfully",
      data: bike,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBikes = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bikes = await bikeService.getAllBikes();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bikes fetched successfully",
      data: bikes,
    });
  } catch (error) {
    next(error);
  }
};

const getBikeById = async (req: Request, res: Response, next: NextFunction) => {
  const bikeId = req.params.id;
  try {
    const bike = await bikeService.getBikeById(bikeId);
    if (!bike)
      return res
        .status(404)
        .json({ success: false, status: 404, message: "Bike not found" });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bike fetched successfully",
      data: bike,
    });
  } catch (error) {
    next(error);
  }
};

export const bikeController = {
  addBike,
  getAllBikes,
  getBikeById,
};
