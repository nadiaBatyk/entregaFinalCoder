import { ProductService } from "../services/productService.js";

export class ProductController {
  constructor() {
    this.productService = new ProductService();
  }
  getProducts = async (req, res, next) => {
    try {
      let { categoria } = req.query;
      let products = [];
      if (categoria) {
        products = await this.productService.getProductsByCategory(categoria);
      } else {
        products = await this.productService.getProducts();
      }

      return res.json(products);
    } catch (error) {
      return next(error);
    }
  };
  getProductById = async (req, res, next) => {
    try {
      let { id } = req.params;
      let product = await this.productService.getProductById(id);
      return res.json(product);
    } catch (error) {
      return next(error);
    }
  };

  createProduct = async (req, res, next) => {
    try {
      let product = req.body;
      let newProduct = await this.productService.createProduct(product);
      return res.json(newProduct);
    } catch (error) {
      return next(error);
    }
  };
  deleteProduct = async (req, res, next) => {
    try {
      let { id } = req.params;
      let message = await this.productService.deleteProduct(id);
      return res.json(message);
    } catch (error) {
      return next(error);
    }
  };
  updateProduct = async (req, res, next) => {
    try {
      let product = req.body;
      let { id } = req.params;
      let newProduct = await this.productService.updateProduct(product, id);
      return res.json(newProduct);
    } catch (error) {
      return next(error);
    }
  };
}
