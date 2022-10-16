import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: { type: String, require: true, max: 100 },
  description: { type: String, require: true, max: 300 },
  category: { type: String, require: true, max: 100 },
  url: { type: String, require: true },
  price: { type: Number, require: true, min: 0 },
  quantity:{ type: Number, require: true, min: 0 },
});
export default productsSchema;
