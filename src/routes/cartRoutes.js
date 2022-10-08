import { Router } from "express";
import { CartController } from "../controllers/cartController.js";

const routerCart = Router();
const cartController = new CartController()

routerCart.route("/").post(cartController.createCart).get(cartController.getCarts);

routerCart
  .route("/:id")
  .delete(cartController.deleteCart)
  

routerCart
  .route("/:id/productos")
  .get(cartController.getProductsCart)
  .post(cartController.addProductCart);

routerCart
  .route("/:idCart/productos/:idProd")
  .delete(cartController.deleteProductCart);

export default routerCart;
