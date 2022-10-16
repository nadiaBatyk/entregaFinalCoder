import { ChatService } from "../services/chatService.js";

export class ChatController{
    constructor() {
        this.chatService = new ChatService();
      } 
      getMessages = async (req, res, next) => {
        try {
          
          return  res.render("layouts/chat", {
            layout: "chat",
           
          });
        } catch (error) {
          return next(error);
        }
      };
      getMessagesByEmail = async (req, res, next) => {
        try {
          let {email} = req.params
          let messages = await this.chatService.getMessagesByEmail(email);
          return res.json(messages);
        } catch (error) {
          return next(error);
        }
      };
    
      
}