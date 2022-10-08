import MongoDBOrder from "./mongoDBOrder";

class OrderDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return new MongoDBOrder();
      default:
        return new MongoDBOrder();
    }
  }
}
export default OrderDaoFactory;
