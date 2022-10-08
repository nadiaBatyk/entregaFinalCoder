import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import productsSchema from "../../models/productsSchema.js";
let instance = null;
class MongoDBProducts extends MongoDBDAO {
  constructor() {
    super("Products", productsSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBProducts("Products", productsSchema);
    return instance;
  }
}
export default MongoDBProducts;
