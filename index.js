import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();


app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});

const userSchema = new mongoose.Schema({
  name: {type:String},
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.post("/register", async (req, res) => {
  const { name, email, pass } = req.body
  const result = await User.insertOne({name: name,email:email,pass:pass});
  return res.json(result);
});

// app.post("/login", async (req, res) => {
//   const { email, pass } = req.body
//   const result = await User.findOne({email, pass});
//   return res.json(result);
// });

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("AthangDeshmukh");
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

