import MongoDBCart from "./mongoDBCart.js";

class CartDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return MongoDBCart.getInstance()
      default:
        return MongoDBCart.getInstance()
    }
  }
}
export default CartDaoFactory;
