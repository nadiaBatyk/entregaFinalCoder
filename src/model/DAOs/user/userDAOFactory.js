import MongoDBUsers from "./mongoDBUser.js";

class UserDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return MongoDBUsers.getInstance()
      default:
        return MongoDBUsers.getInstance()
    }
  }
}
export default UserDaoFactory;
