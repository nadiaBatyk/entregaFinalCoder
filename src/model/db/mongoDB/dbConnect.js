import mongoose from "mongoose";
import config from "../../../config/config.js";
import logger from "../../../config/winstonConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(config.MONGODB.URL, config.MONGODB.options);
    logger.info(`conectado a la base de datos con éxito`);
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
