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
  async getByCategory(category) {
    try {
      const allData = await this.collection.find({ category: category });

      if (allData?.length) {
        return allData;
      }
      const err = new ErrorCustom("Item no encontrado", 404, "Not found");
      throw err;
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
export default MongoDBProducts;
