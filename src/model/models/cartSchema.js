import mongoose from "mongoose";
import productsSchema from "./productsSchema.js";

const cartSchema = new mongoose.Schema({
  products: { type: [productsSchema], require: true },
  email:{type:String,require: true},
  address:{type:String,require: true},
  timestamp:{type:Date,default: Date.now}
});
export default cartSchema;
