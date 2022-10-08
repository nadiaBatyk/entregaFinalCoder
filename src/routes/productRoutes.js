import { Router } from "express";
import { ProductController } from "../controllers/productController.js";

const routerProducts = Router();
const productController = new ProductController();

routerProducts
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

routerProducts
  .route("/:id")
  .get(productController.getProducts)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)

export default routerProducts;
