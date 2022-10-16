import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  email: { type: String, require: true },
  type: { type: String, enum: ["usuario", "sistema"] },
  text: { type: String, require: true },
  timestamp: { type: Date, default: Date.now },
});
export default messageSchema;
