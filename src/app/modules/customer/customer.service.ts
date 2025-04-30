import prisma from "../../../shared/prisma";

const createCustomer = async (data: any) => {
  const userData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const createdCustomerData = await prisma.customer.create({
    data: userData,
  });

  return createdCustomerData;
};

const getAllCustomers = async () => {
  return prisma.customer.findMany();
};

const getCustomerById = async (id: string) => {
  return prisma.customer.findUnique({ where: { customerId: id } });
};

const updateCustomer = async (id: string, data: any) => {
  return prisma.customer.update({ where: { customerId: id }, data });
};

const deleteCustomer = async (id: string) => {
  return prisma.customer.delete({ where: { customerId: id } });
};

export const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
