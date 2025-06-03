import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();


app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});





app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.post("/register", async (req, res) => {
  const { name, email, pass } = req.body
  const result = await User.insertOne({name,email,pass});
  return res.json(result);
});

app.post("/login", async (req, res) => {
  const { email, pass } = req.body
  const result = await User.findOne({email, pass});
  if (!result) return res.status(401).json({ message: "Invalid credentials" });
  return res.json(result);
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("AthangDeshmukh");
});

app.get("/weather", (req, res) => {
  res.send("31degree");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});

  if (!products) return res.status(404).json({ message: "No products found" });

 return res.json(products);
});

