import { ChatService } from "../services/chatService";

export class ChatController{
    constructor() {
        this.chatService = new ChatService();
      } 
      getMessages = async (req, res, next) => {
        try {
          let messages = await this.chatService.getMessages();
          return res.json(messages);
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
    
      createMessage = async (req, res, next) => {
        try {
          let message = req.body;
          let newMessage = await this.chatService.createMessage(message);
          return res.json(newMessage);
        } catch (error) {
          return next(error);
        }
      };
}