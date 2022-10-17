import { ErrorCustom } from "../../../helpers/errorCustom.js";
import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import messageSchema from "../../models/messageSchema.js";

let instance = null;
class MongoDBMessages extends MongoDBDAO {
  constructor() {
    super("Messages", messageSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBMessages("Messages", messageSchema);
    return instance;
  }
  async getByEmail(email) {
    try {
      const allData = await this.collection.find({
        $or: [{ emailTo: email }, { emailFrom: email }],
      });

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
export default MongoDBMessages;
