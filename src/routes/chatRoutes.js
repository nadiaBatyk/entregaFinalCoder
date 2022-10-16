import { Router } from "express";
import { ChatController } from "../controllers/chatController";

const routerChat = Router();
const chatController = new ChatController();

routerProducts
  .route("/")
  .get(chatController.getMessages)
  .post(chatController.createMessage);

routerProducts.route("/:email").get(chatController.getMessagesByEmail);

export default routerChat;
