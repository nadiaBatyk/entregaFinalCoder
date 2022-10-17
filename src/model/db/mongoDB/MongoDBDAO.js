import mongoose from "mongoose";
import { ErrorCustom } from "../../../helpers/errorCustom.js";

let instance = null;
class MongoDBDAO {
  constructor(collectionName, schema) {
    this.collection = mongoose.model(collectionName, schema);
  }
  static getInstance(collectionName, schema) {
    if (!instance) instance = new MongoDBDAO(collectionName, schema);
    return instance;
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
      const idData = await this.collection.findById(id);

      if (idData) {
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
}
export default MongoDBDAO;
