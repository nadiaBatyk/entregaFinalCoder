import config from "../config/config.js";
import CartDaoFactory from "../model/DAOs/cart/cartDAOFactory.js";
import CartDto from "../model/DTOs/cartDTO.js";
import ProductDTO from "../model/DTOs/productDTO.js";

export class CartService {
  constructor() {
    this.cartDao = CartDaoFactory.get(config.DB_NAME);
  }
  async getCarts() {
    const carts = await this.cartDao.getAll();
    return carts.map((c) => new CartDto(c));
  }
  async getCartById(id) {
    const cart = await this.cartDao.getById(id);
    return new CartDto(cart);
  }
  async getProductsCart(id) {
    const products = await this.cartDao.getProductsInCart(id);
    return products.map((p) => new ProductDTO(p));
  }
  async createCart(cart) {
    const newCart = await this.cartDao.create(cart);
    return new CartDto(newCart);
  }
  async addProductCart(product, idCart) {
    const cart = await this.cartDao.addProductToCart(product, idCart);
    return new CartDto(cart);
  }
  async deleteProductCart(idProduct, idCart) {
    const message = await this.cartDao.deleteProductFromCart(idProduct, idCart);
    return message;
  }
  async deleteCart(id) {
    const message = await this.cartDao.deleteById(id);
    return message;
  }
}
