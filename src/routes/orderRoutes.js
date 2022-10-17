import { Router } from "express";
import { OrderController } from "../controllers/orderController.js";

const routerOrder = Router();
const orderController = new OrderController()
routerOrder
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getOrders)

routerOrder
  .route("/:id")
  .get(orderController.getOrderById)
  .delete(orderController.deleteOrder);

export default routerOrder;
