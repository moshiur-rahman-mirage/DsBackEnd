import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  price: {
    type: Number,
  },
  expenses: {
    type: Number,
  },
  transaction:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Transaction"
  }]
 
}, {timestamps:true,toJSON:{getters:true}});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
