import { NextFunction, Request, Response } from "express";
import { customerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await customerService.createCustomer(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const customers = await customerService.getAllCustomers();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customers fetched successfully",
      data: customers,
    });
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customerId = req.params.id;
  try {
    const customer = await customerService.getCustomerById(customerId);
    if (!customer)
      return res
        .status(404)
        .json({ success: false, status: 404, message: "Customer not found" });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer fetched successfully",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customerId = req.params.id;
  try {
    const customer = await customerService.updateCustomer(customerId, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Customer updated successfully",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Customer deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const customerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
