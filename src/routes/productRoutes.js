import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
import { createProductValidator } from "../validators/productValidator.js";

const routerProducts = Router();
const productController = new ProductController();

routerProducts
  .route("/")
  .get(productController.getProducts)
  .post(createProductValidator,productController.createProduct);

routerProducts
  .route("/:id")
  .get(productController.getProductById)
  .put(createProductValidator,productController.updateProduct)
  .delete(productController.deleteProduct)
export default routerProducts;
