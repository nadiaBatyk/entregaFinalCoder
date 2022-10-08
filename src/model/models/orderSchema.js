import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cart: mongoose.Schema.Types.Mixed,
  user: mongoose.Schema.Types.Mixed,
  
});
export default orderSchema;
