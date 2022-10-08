import MongoDBUsers from "./mongoDBUser";

class UserDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return new MongoDBUsers();
      default:
        return new MongoDBUsers();
    }
  }
}
export default UserDaoFactory;
