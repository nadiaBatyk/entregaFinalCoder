import config from "../config/config";
import OrderDaoFactory from "../model/DAOs/order/orderDAOFactory";
import OrderDTO from "../model/DTOs/orderDTO";

createOrder = (req, res, next) => {
    let body = req.body;

    super.create(body).then(
      (item) => {
        
        return res.json(item);
      },
      (error) => next(error)
    );
  };
  export class OrderService{
    constructor(){
      this.ordersDao=OrderDaoFactory.get(config.DB_NAME)
    }
    async getOrders() {
      const orders = await this.ordersDao.getAll();
      return orders.map((c) => new OrderDTO(c));
    }
    async getOrderById(id) {
      const Order = await this.ordersDao.getById(id);
      return new OrderDTO(Order);
    }
    async createOrder(Order) {
      const newOrder = await this.ordersDao.create(Order);
      return new OrderDTO(newOrder);
    }
    async deleteOrder(id) {
      const message = await this.ordersDao.deleteById(id);
      return message;
    }
  }