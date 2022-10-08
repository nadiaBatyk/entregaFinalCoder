import MongoDBProducts from "./MongoDBProducts";

class ProductDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return new MongoDBProducts();
      default:
        return new MongoDBProducts();
    }
  }
}
export default ProductDaoFactory;
