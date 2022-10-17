import { PlantillaMail } from "./plantillaBase.js";
import config from "../../config/config.js";

export class PlantillaNuevoPedido extends PlantillaMail {
  constructor(pedido) {
    
    super(
      config.ADMIN_MAIL,
      `Nuevo pedido de ${pedido.cart.user.fullName} - Email:${pedido.cart.user.email}`,``
    );
    this.productos=pedido.cart.products
    this.text=`Lista de productos:\n ${this.armarListaProductos()}`
  }
  armarListaProductos = () => {
    return this.productos.map(p=>`✅${p.name}`.trimStart()).join('\n')

  };
}
