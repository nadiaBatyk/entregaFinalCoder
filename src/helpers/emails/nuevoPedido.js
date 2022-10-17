import { PlantillaMail } from "./plantillaBase.js";
import config from "../../config/config.js";

export class PlantillaNuevoPedido extends PlantillaMail {
  constructor(pedido, admin) {
    super('','','')
    this.to = admin ? config.ADMIN_MAIL : pedido.cart.user.email;
    this.subject = admin
      ? `Nuevo pedido de ${pedido.cart.user.fullName} - Email:${pedido.cart.user.email}`
      : `Hola ${pedido.cart.user.fullName}👋 Recibimos tu pedido y se encuentra en proceso. Ecommerce✨`;
    this.productos = pedido.cart.products;
    this.text = `Lista de productos:\n ${this.armarListaProductos()}`;
  }
  armarListaProductos = () => {
    return this.productos.map((p) => `✅${p.name}`.trimStart()).join("\n");
  };
}
