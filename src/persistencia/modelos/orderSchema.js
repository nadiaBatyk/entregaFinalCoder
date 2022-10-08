import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cart: mongoose.Schema.Types.Mixed,
  user: mongoose.Schema.Types.Mixed,
  userId: { type: String, require: true },
  
});
export default orderSchema;
