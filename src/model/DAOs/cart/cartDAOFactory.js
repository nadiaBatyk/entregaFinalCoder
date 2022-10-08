import MongoDBCart from "./mongoDBCart";

class CartDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return new MongoDBCart();
      default:
        return new MongoDBCart();
    }
  }
}
export default CartDaoFactory;
