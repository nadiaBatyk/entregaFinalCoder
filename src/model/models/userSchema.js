import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  name: { type: String, require: true, maxLength: 100 },
  email: { type: String, require: true, unique:true, maxLength: 200 },
  password: { type: String, require: true },
  // address: { type: String, require: true },
  phone: { type: String, require: true },
  // age: { type: Number, require: true, min: 0 },
  userImage:{type:String},
  token :{ type:String}
  
});
export default userSchema;
