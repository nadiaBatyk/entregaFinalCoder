import config from "../config/config";
import { PlantillaNuevoPedido } from "./emails/nuevoPedido";
import { MensajeBase } from "./mensajes/mensajeClass";

export function sendMessages(order){
    const mailPed = new PlantillaNuevoPedido(order);
    mailPed.sendMail();
    const messageWhatsapp = new MensajeBase(
      mailPed.subject,
      config.ADMIN_MAIL
    );
    messageWhatsapp.sendMessage(true);
    const messageCliente = new MensajeBase(
      `Hola ${order.cart.user.fullName}👋 Recibimos tu pedido y se encuentra en proceso. Ecommerce✨`,
      order.cart.user.phone
    );
    messageCliente.sendMessage();
    
}
