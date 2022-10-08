import { ErrorCustom } from "../../../error/errorCustom.js";
import MongoDBDAO from "../../db/mongoDB/MongoDBDAO.js";
import cartSchema from "../../models/cartSchema.js";
let instance = null;
class MongoDBCart extends MongoDBDAO {
  constructor() {
    super("Carts", cartSchema);
  }
  static getInstance() {
    if (!instance) instance = new MongoDBCart("Carts", cartSchema);
    return instance;
  }
  async getProductsInCart(idCart) {
    try {
      const productsInCart = await this.collection.find(
        { _id: idCart },
        { products: 1 }
      );
      if (productsInCart) {
        return productsInCart;
      }
      const err = new ErrorCustom("Item no encontrado", 404, "Not found");
      throw err;
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }
  async deleteProductFromCart(idProduct, idCart) {
    try {
      const deletedItem = await this.collection.findByIdAndUpdate(
        idCart,
        {
          $pull: {
            products: { _id: idProduct },
          },
        },
        { safe: true }
      );
      if (deletedItem?.deletedCount) {
        return `Se eliminó el producto ${idProduct} del carrito ${idCart}`;
      }
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }
  addProductToCart = async (product, idCart) => {
    try {
      const updatedItem = await this.collection.findOneAndUpdate(
        { _id: idCart },
        {
          $push: {
            products: product,
          },
        },
        { new: true }
      );
      if (updatedItem) return updatedItem;
      const err = new ErrorCustom("Item no encontrado", 404, "Not found");
      throw err;
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  };
}
export default MongoDBCart;
