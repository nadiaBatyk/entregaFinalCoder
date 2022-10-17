import logger from "../config/winstonConfig.js";
import { ChatService } from "../services/chatService.js";

const chatService = new ChatService();

async function socketConnect(socket) {
  try {
    const messages = await chatService.getMessages();
    
    socket.emit("datosMensajes", messages);
  } catch (error) {
    logger.error(error);
  }

  socket.on("nuevo-mensaje", async (mensaje) => {
    try {
      await chatService.createMessage(mensaje);
      const messages = await chatService.getMessages();
      socket.emit("datosMensajes", messages);
    } catch (error) {
      logger.error(error);
    }
  });
}

export { socketConnect };
