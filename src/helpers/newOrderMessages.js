import config from "../config/config.js";
import { PlantillaNuevoPedido } from "./emails/nuevoPedido.js";
import { MensajeBase } from "./mensajes/mensajeClass.js";

export function sendMessages(order){
    const mailAdmin = new PlantillaNuevoPedido(order,true);
    mailAdmin.sendMail();
    const mailCliente = new PlantillaNuevoPedido(order,false);
    mailCliente.sendMail();
    const messageCliente = new MensajeBase(
      `Hola ${order.cart.user.fullName}👋 Recibimos tu pedido y se encuentra en proceso. Ecommerce✨`,
      order.cart.user.phone
    );
    messageCliente.sendMessage();
    
}
