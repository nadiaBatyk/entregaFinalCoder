import MongoDBProducts from "./MongoDBProducts.js";

class ProductDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return MongoDBProducts.getInstance()
      default:
        return MongoDBProducts.getInstance()
    }
  }
}
export default ProductDaoFactory;
