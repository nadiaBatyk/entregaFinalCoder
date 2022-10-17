import { CartService } from "../services/cartService.js";

export class CartController {
  constructor() {
    this.cartService = new CartService();
  }
  getCarts = async (req, res, next) => {
    try {
      let carts = await this.cartService.getCarts();
      return res.json(carts);
    } catch (error) {
      return next(error);
    }
  };
  getCartById = async (req, res, next) => {
    try {
      let { id } = req.params;
      let cart = await this.cartService.getCartById(id);
      return res.json(cart);
    } catch (error) {
      return next(error);
    }
  };
  getProductsCart = async (req, res, next) => {
    try {
      let { id } = req.params;
      let products = await this.cartService.getProductsCart(id);
      return res.json(products);
    } catch (error) {
      return next(error);
    }
  };

  createCart = async (req, res, next) => {
    try {
      let cart = req.body;
      let newCart = await this.cartService.createCart(cart);
      return res.json(newCart);
    } catch (error) {
      return next(error);
    }
  };
  addProductCart = async (req, res, next) => {
    try {
      let product = req.body;
      let { id } = req.params;
      let updatedCart = await this.cartService.addProductCart(product, id);
      return res.json(updatedCart);
    } catch (error) {
      return next(error);
    }
  };
  deleteCart = async (req, res, next) => {
    try {
      let { id } = req.params;
      let message = await this.cartService.deleteCart(id);
      return res.json(message);
    } catch (error) {
      return next(error);
    }
  };
 
  deleteProductCart = async (req, res, next) => {
    try {
      let { idCart,idProd } = req.params;
      let message = await this.cartService.deleteProductCart(idProd,idCart)
      return res.json(message);
    } catch (error) {
      return next(error);
    }
  };
}
