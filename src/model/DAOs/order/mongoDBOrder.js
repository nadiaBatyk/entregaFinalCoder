import { ErrorCustom } from "../../../helpers/errorCustom.js";
import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import orderSchema from "../../modelos/orderSchema.js";
let instance = null;
class MongoDBOrder extends MongoDBDAO {
  constructor() {
    super("Orders", orderSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBOrder("Orders", orderSchema);
    return instance;
  }
}
export default MongoDBOrder;
