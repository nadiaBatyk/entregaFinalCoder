class WebSockets {

  async connection(socket) {
    try {
      const mensajes = await getMensajesController();
      console.log(mensajes);
      socket.emit("datosMensajes", mensajes);
    } catch (error) {
      logger.error(error);
    }

    socket.on("nuevo-mensaje", async (mensaje) => {
      try {
        await sendNewMessage(mensaje);
        const mensajes = await getMensajesController();
        socket.emit("datosMensajes", mensajes);
      } catch (error) {
        logger.error(error);
      }
    });
  }
}
export default new WebSockets()