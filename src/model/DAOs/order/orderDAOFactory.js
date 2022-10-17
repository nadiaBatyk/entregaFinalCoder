import MongoDBOrder from "./mongoDBOrder.js";

class OrderDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return MongoDBOrder.getInstance()
      default:
        return MongoDBOrder.getInstance()
    }
  }
}
export default OrderDaoFactory;
