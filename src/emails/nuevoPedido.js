import { PlantillaMail } from "./plantillaBase.js";
import dotenv from "dotenv";
dotenv.config();
export class PlantillaNuevoPedido extends PlantillaMail {
  constructor(pedido) {
    
    super(
      process.env.ADMIN_MAIL,
      `Nuevo pedido de ${pedido.user.name} - Email:${pedido.user.email}`,``
    );
    this.productos=pedido.cart.products
    this.text=`Lista de productos:\n ${this.armarListaProductos()}`
  }
  armarListaProductos = () => {
    return this.productos.map(p=>`✅${p.name}`.trimStart()).join('\n')

  };
}
