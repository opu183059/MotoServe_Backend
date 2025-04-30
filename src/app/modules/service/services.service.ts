import { ServiceStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createService = async (data: any) => {
  const serviceData = {
    bikeId: data.bikeId,
    serviceDate: data.serviceDate,
    description: data.description,
    status: data.status,
  };

  const service = await prisma.serviceRecord.create({
    data: serviceData,
  });
  return service;
};

const getAllServices = async () => {
  return prisma.serviceRecord.findMany();
};

const getServiceById = async (id: string) => {
  return prisma.serviceRecord.findUnique({ where: { serviceId: id } });
};

const markServiceComplete = async (id: string) => {
  return prisma.serviceRecord.update({
    where: { serviceId: id },
    data: { completionDate: new Date(), status: ServiceStatus.DONE },
  });
};

const getPendingOrOverdueServices = async () => {
  const sevenDaysBeforeDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return prisma.serviceRecord.findMany({
    where: {
      status: {
        in: [ServiceStatus.PENDING, ServiceStatus.IN_PROGRESS],
      },
      serviceDate: {
        lt: sevenDaysBeforeDate,
      },
    },
  });
};

export const serviceService = {
  createService,
  getAllServices,
  getServiceById,
  markServiceComplete,
  getPendingOrOverdueServices,
};
