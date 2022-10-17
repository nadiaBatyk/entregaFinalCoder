import { ErrorCustom } from "../../../helpers/errorCustom.js";
import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import orderSchema from "../../models/orderSchema.js";
let instance = null;
class MongoDBOrder extends MongoDBDAO {
  constructor() {
    super("Orders", orderSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBOrder("Orders", orderSchema);
    return instance;
  }

  async getOrdersByUserId(id) {
    try {
      const orders = await this.collection.find({ "cart.user._id": id });
      if (orders) {
        return orders;
      }
      const err = new ErrorCustom("User without orders", 404, "Not found");
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }
}
export default MongoDBOrder;
