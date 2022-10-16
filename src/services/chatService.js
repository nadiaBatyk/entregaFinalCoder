import config from "../config/config.js";
import MessagesDaoFactory from "../model/DAOs/message/messageDAOFactory.js";
import MessageDTO from "../model/DTOs/messageDTO.js";
export class ChatService {
    constructor(){
        this.chatDao = MessagesDaoFactory.get(config.DB_NAME);
    }
    async getMessages() {
        const chats = await this.chatDao.getAll();
        return chats.map((c) => new MessageDTO(c));
      }
      async getMessagesByEmail(email) {
        const chats = await this.chatDao.getByEmail(email);
        return chats.map((c) => new MessageDTO(c));
      }
      async createMessage(message) {
        const newMessage = await this.chatDao.create(message);
        return new MessageDTO(newMessage);
      }
      
}