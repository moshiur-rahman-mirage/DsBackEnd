import mongoose from "mongoose";
const Schema = mongoose.Schema;


const TransactionSchema = new Schema({
  buyer: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  productIds:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }]
 
}, {timestamps:true,toJSON:{getters:true}});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
