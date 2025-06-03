import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import mongoose from "mongoose";
const app = express();


app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});
app.use(cors());
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("Praveen");
});

app.get("/weather", (req, res) => {
  res.send("31degree");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Mobile", price: 34 },
    { name: "Tablet", price: 64 },
    { name: "Laptop", price: 45 },
  ];
  res.json(products);
});

