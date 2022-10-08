import mongoose from "mongoose";



const productsSchema = new mongoose.Schema({
    name:{type:String,require:true,max:100},
    //description:{type:String,require:true,max:300},
   // code:{type:String, unique:true},
    url:{type:String,require:true},
    price:{type:Number,require:true, min:0},
    // stock:{type:Number,require:true, min:0},
    // timestamp:{type:Date,require:true},

})
export default productsSchema;