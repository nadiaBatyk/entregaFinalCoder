import { ProductService } from "../services/productService";

export class ProductController {
    constructor() {
      this.productService = new ProductService();
    }
    getProducts = async (req, res, next) => {
      try {
        let products = await this.productService.getProducts();
        return res.json(products);
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
        let idProd = req.params.id;
        let message = await this.productService.deleteProduct(idProd);
        return res.json(message);
      } catch (error) {
        return next(error);
      }
    };
    updateProduct = async (req, res, next) => {
      try {
        let product = req.body;
        let newProduct = await this.productService.updateProduct(product);
        return res.json(newProduct);
      } catch (error) {
        return next(error);
      }
    };
  };