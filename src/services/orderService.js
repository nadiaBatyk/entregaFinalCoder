import config from "../config/config.js";
import { sendMessages } from "../helpers/newOrderMessages.js";
import OrderDaoFactory from "../model/DAOs/order/orderDAOFactory.js";
import OrderDTO from "../model/DTOs/orderDTO.js";


  export class OrderService{
    constructor(){
      this.ordersDao=OrderDaoFactory.get(config.DB_NAME)
    }
    async getOrders() {
      const orders = await this.ordersDao.getAll();
      return orders.map((c) => new OrderDTO(c));
    }
    async getOrderById(id) {
      const order = await this.ordersDao.getById(id);
      return new OrderDTO(order);
    }
    async getOrdersByUserId(id) {
      const orders = await this.ordersDao.getOrdersByUserId(id);
      return orders.map((c) => new OrderDTO(c));
    }
    async createOrder(order) {
      const newOrder = await this.ordersDao.create(order);
      sendMessages(newOrder);
      return new OrderDTO(newOrder);
    }
    async deleteOrder(id) {
      const message = await this.ordersDao.deleteById(id);
      return message;
    }
  }