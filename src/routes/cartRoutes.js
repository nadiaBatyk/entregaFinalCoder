import { Router } from "express";
import { CartController } from "../controllers/cartController.js";
import { createCartValidator } from "../validators/cartValidator.js";
import { createProductValidator } from "../validators/productValidator.js";

const routerCart = Router();
const cartController = new CartController();

routerCart
  .route("/")
  .post(createCartValidator, cartController.createCart)
  .get(cartController.getCarts);

routerCart
  .route("/:id")
  .get(cartController.getCartById)
  .post(createProductValidator, cartController.addProductCart)
  .delete(cartController.deleteCart);
routerCart.route("/:id/productos").get(cartController.getProductsCart)

routerCart
  .route("/:idCart/productos/:idProd")
  .delete(cartController.deleteProductCart);

export default routerCart;
