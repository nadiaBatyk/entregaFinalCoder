import MongoDBMessages from "./MongoDBMessages.js";


class MessagesDaoFactory {
  static get(dbName) {
    switch (dbName) {
      case "mongoDB":
        return MongoDBMessages.getInstance()
      default:
        return MongoDBMessages.getInstance()
    }
  }
}
export default MessagesDaoFactory;