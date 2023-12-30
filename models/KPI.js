import mongoose from "mongoose";
const Schema = mongoose.Schema;

const monthSchema = new Schema({
  month: String,
  revenue:{
    type:Number,
  },
  expenses:{
    type:Number,
  },
  operationalExpenses:{
    type:Number,
  },
  nonOperationalExpenses:{
    type:Number,
  }
},{toJSON:{getters:true}});

const daySchema=new Schema({
    day: String,
    revenue:{
      type:Number,
    },
    expenses:{
      type:Number,
    },
},{toJSON:{getters:true}})


const KPISchema = new Schema({
  totalProfit: {
    type: Number,
  },
  totalRevenue: {
    type: Number,
  },
  expensesByCategory: {
    type: Map,
    of: {
      type: Number,
    },
  },
  monthlyData: [monthSchema],
  dailyData:[daySchema]
}, {timestamps:true,toJSON:{getters:true}});

const KPI = mongoose.model("KPI", KPISchema);
export default KPI;
