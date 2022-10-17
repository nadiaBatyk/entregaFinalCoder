import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import userSchema from "../../models/userSchema.js";
import { ErrorCustom } from "../../../helpers/errorCustom.js";
let instance = null;
class MongoDBUsers extends MongoDBDAO {
  constructor() {
    super("Users", userSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBUsers("Users", userSchema);
    return instance;
  }
  async createUser(newUser) {
    try {
      const oldUser = await this.collection.findById({ email: newUser.email });
      if (oldUser) {
        const err = new ErrorCustom(
          `User already exist. Please log in`,
          409,
          "Existent user"
        );
        throw err;
      }
      const user = await this.collection.create(newUser);
      if (user) return user;
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }
  async getUserByEmail(email) {
    try {
      const user = await this.collection.findOne({ email });
      if (!user) {
        const err = new ErrorCustom(`User not found`, 404, "Non-existent user");
        throw err;
      }
      if (user) return user;
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
export default MongoDBUsers;
