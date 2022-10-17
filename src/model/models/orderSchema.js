import mongoose from "mongoose";
import cartSchema from "./cartSchema.js";

const orderSchema = new mongoose.Schema({
  cart: {type:cartSchema,require:true},
  state: { type: String, default:'generada' },
  timestamp:{type:Date,default: Date.now}
});
export default orderSchema;
