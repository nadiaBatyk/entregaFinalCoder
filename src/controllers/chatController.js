import config from "../config/config.js";
import { ChatService } from "../services/chatService.js";

export class ChatController {
  constructor() {
    this.chatService = new ChatService();
  }
  getMessages = async (req, res, next) => {
    try {
      const { user } = req.session;
      if(!user){
        return res.redirect('/')
      }
      const userType = user.email == config.ADMIN_MAIL ? "sistema" : "usuario";
      const userData = {type:userType,email:user.email}
      return res.render("layouts/chat", {
        layout: "chat",
        userData,
      });
    } catch (error) {
      return next(error);
    }
  };
  getMessagesByEmail = async (req, res, next) => {
    try {
      let { email } = req.params;
      let messages = await this.chatService.getMessagesByEmail(email);
      return res.json(messages);
    } catch (error) {
      return next(error);
    }
  };
}
