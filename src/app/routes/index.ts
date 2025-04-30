import express from "express";
import { customerRoutes } from "../modules/customer/customer.routes";
import { bikeRoutes } from "../modules/bike/bike.routes";
import { servicesRoutes } from "../modules/service/services.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/services",
    route: servicesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
