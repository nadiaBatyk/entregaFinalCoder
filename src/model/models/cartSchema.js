import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: { type: Array, require: true },
  userId: { type: String, require: true },
  
  timestamp:{type:Date,default: Date.now}
});
export default cartSchema;
