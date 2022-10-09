import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import orderSchema from "../../modelos/orderSchema.js";
import { ErrorCustom } from "../../../error/errorCustom.js";
let instance = null;
class MongoDBOrder extends MongoDBDAO {
  constructor() {
    super("Orders", orderSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBCart("Carts", cartSchema);
    return instance;
  }

  async getOrdersByUser(user) {
    try {
      const orders = await this.collection.find({ "user._id": user._id });
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
