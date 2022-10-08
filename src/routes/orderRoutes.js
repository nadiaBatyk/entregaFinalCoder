import { Router } from "express";
import * as daos from "../daos/index.js";

const routerOrder = Router();

routerOrder
  .route("/")
  .post(daos.orderDao.createOrder)
  .get(daos.orderDao.getOrders)
  .get(daos.orderDao.getOrderByUser);

routerOrder
  .route("/:id")
  .get(daos.orderDao.getOrders)
  .delete(daos.orderDao.deleteOrder);

export default routerOrder;
