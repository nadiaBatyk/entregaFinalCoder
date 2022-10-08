import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import productsSchema from "../../models/productsSchema.js";

class MongoDBProducts extends MongoDBDAO {
  constructor() {
    super("Products", productsSchema);
  }
}
export default MongoDBProducts;
