import prisma from "../../../shared/prisma";

const addBike = async (data: any) => {
  const bikeData = {
    brand: data.brand,
    model: data.model,
    year: data.year,
    customerId: data.customerId,
  };
  const bike = await prisma.bike.create({
    data: bikeData,
  });
  return bike;
};

const getAllBikes = async () => {
  return prisma.bike.findMany();
};

const getBikeById = async (id: string) => {
  return prisma.bike.findUnique({ where: { bikeId: id } });
};

export const bikeService = {
  addBike,
  getAllBikes,
  getBikeById,
};
