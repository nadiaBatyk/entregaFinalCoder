import { OrderService } from "../services/orderService.js";

export class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }
  getOrders = async (req, res, next) => {
    try {
      let { userId } = req.query;
      let orders = [];
      if (userId) {
        orders = await this.orderService.getOrdersByUserId(userId);
      } else {
        orders = await this.orderService.getOrders();
      }

      return res.json(orders);
    } catch (error) {
      return next(error);
    }
  };
  getOrderById = async (req, res, next) => {
    try {
      let { id } = req.params;
      let order = await this.orderService.getOrderById(id);
      return res.json(order);
    } catch (error) {
      return next(error);
    }
  };
  getOrdersByUserId = async (req, res, next) => {
    try {
      return res.json(orders);
    } catch (error) {
      return next(error);
    }
  };

  createOrder = async (req, res, next) => {
    try {
      let order = req.body;
      let newOrder = await this.orderService.createOrder(order);
      return res.json(newOrder);
    } catch (error) {
      return next(error);
    }
  };

  deleteOrder = async (req, res, next) => {
    try {
      let { id } = req.params;
      let message = await this.orderService.deleteOrder(id);
      return res.json(message);
    } catch (error) {
      return next(error);
    }
  };
}
