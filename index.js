import express from "express";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import cors from "cors";
// dotenv.config();
import ordersRouter from "./routes/ordersRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
// const MONGOCB_URI = process.env.MONGOCB_URI 
// import userRouter from "./routes/userRoutes.js";
// import productRouter from "./routes/productRoutes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/users", userRouter);

// app.use("/products", productRouter);

// app.listen(8080, () => {
//   mongoose.connect("mongodb://localhost:27017/gcet");
//   console.log("Server Started");
// });



const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.use("/products", productRouter);

app.use("/orders", ordersRouter);

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});
