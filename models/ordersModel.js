import mongoose from "mongoose"
const ordersSchema = mongoose.Schema({
  email: {type:String},
  price: {type:String},
});

export default mongoose.model("Orders", ordersSchema);