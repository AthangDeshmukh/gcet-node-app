import mongoose from "mongoose"
const productsSchema = mongoose.Schema({
  name: {type:String},
  price: {type:Number},
});
// const Product = mongoose.model("Product", productsSchema);  
export default mongoose.model("Product", productsSchema);