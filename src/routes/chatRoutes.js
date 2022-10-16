import { Router } from "express";
import { ChatController } from "../controllers/chatController.js";

const routerChat = Router();
const chatController = new ChatController();

routerChat
  .route("/")
  .get(chatController.getMessages)

  routerChat.route("/:email").get(chatController.getMessagesByEmail);

export default routerChat;
