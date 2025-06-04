import express from 'express'
import ordersModel from "../models/ordersModel.js";

const ordersRouter = express.Router();

ordersRouter.post("/new", async (req, res) => {
  const {  email, price } = req.body
  const  result = await ordersModel.insertOne({  email, price });
  return res.json(result);
});

export default ordersRouter;