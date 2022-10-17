import mongoose from "mongoose";
import productsSchema from "./productsSchema.js";
import userSchema from "./userSchema.js";

const cartSchema = new mongoose.Schema({
  products: { type: [productsSchema], require: true },
  user:{type: userSchema,require: true},
  
  timestamp:{type:Date,default: Date.now}
});
export default cartSchema;
