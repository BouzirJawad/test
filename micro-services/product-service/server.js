const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/productdb");

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(3002, () => console.log("Product service running on 3002"));
