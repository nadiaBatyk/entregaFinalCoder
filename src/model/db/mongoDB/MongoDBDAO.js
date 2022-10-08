import mongoose from "mongoose";
import { ErrorCustom } from "../../../error/errorCustom.js";

import connectDB from "./dbConnect.js";

class MongoDBDAO {
  constructor(collectionName, schema) {
    connectDB();
    this.collection = mongoose.model(collectionName, schema);
  }
  async getAll() {
    try {
      const allData = await this.collection.find({});
      return allData;
    } catch (error) {
      const err = new ErrorCustom(error, 500, "Error");
      throw err;
    }
  }
  async getById(id) {
    try {
      const idData = await this.collection.find({ _id: id });

      if (idData?.length) {
        return idData;
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
  async getByField(field) {
    try {
      const idData = await this.collection.findOne(field, function (err, obj) {
        console.log(obj);
      });

      if (idData?.length) {
        return idData;
      }
      const err = new ErrorCustom("Item no encontrado", 404, "Not found");
      throw err;
    } catch (error) {
      console.log(`HOLAAAA`);
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }

  async deleteById(id) {
    try {
      const deletedItem = await this.collection.deleteOne({ _id: id });
      if (deletedItem?.deletedCount) {
        return `Se eliminó el item`;
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
  async create(item) {
    try {
      const newItem = await this.collection.create(item);
      if (newItem) {
        return newItem;
      }
      const err = new ErrorCustom(error, 500, "Error");
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
  async update(item, id) {
    try {
      const updatedItem = await this.collection.findOneAndUpdate(
        { _id: id },
        item,
        { new: true }
      );
      if (updatedItem) return updatedItem;
      const err = new ErrorCustom(
        `Item no encontrado ${item._id}`,
        404,
        "Not found"
      );
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
  //FUNCIONES SOLO PARA EL CARRITO
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
    } catch (error) {
      if (error instanceof ErrorCustom) {
        throw error;
      } else {
        const err = new ErrorCustom(error, 500, "Error");
        throw err;
      }
    }
  }
  async addProductToCart(product, idCart) {
    try {
      const addedItem = await this.collection.updateOne(
        { _id: idCart },
        {
          $push: {
            products: product,
          },
        }
      );
      if (addedItem?.modifiedCount) {
        return `Se modificó el item`;
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
}
export default MongoDBDAO;
