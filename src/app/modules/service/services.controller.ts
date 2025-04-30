import { NextFunction, Request, Response } from "express";
import { serviceService } from "./services.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await serviceService.createService(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const services = await serviceService.getAllServices();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Services fetched successfully",
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

const getServiceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const serviceId = req.params.id;
  try {
    const service = await serviceService.getServiceById(serviceId);
    if (!service)
      return res
        .status(404)
        .json({ success: false, status: 404, message: "Service not found" });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

const markServiceComplete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceId = req.params.id;
    const getService = await serviceService.getServiceById(serviceId);

    if (!getService) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Service not found",
      });
    }

    if (getService.completionDate) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Service already marked as completed",
      });
    }

    const service = await serviceService.markServiceComplete(serviceId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service marked as completed",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

const getPendingOrOverdueServices = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const services = await serviceService.getPendingOrOverdueServices();
    res.status(200).json({
      success: true,
      message: "Pending or overdue services fetched successfully",
      data: services,
    });
  } catch (error) {
    next(error);
  }
};

export const serviceController = {
  createService,
  getAllServices,
  getServiceById,
  markServiceComplete,
  getPendingOrOverdueServices,
};
