const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

//User-Service
app.use("/api/users", async (req, res) => {
  const response = await axios({
    method: req.method,
    url: `http://localhost:3001${req.url}`,
    data: req.body,
  });
  res.json(response.data);
});

//Product-Service
app.use("/api/products", async (req, res) => {
  const response = await axios({
    method: req.method,
    url: `http://localhost:3002${req.url}`,
    data: req.body,
  });
  res.json(response.data);
});

app.listen(3000, () => console.log("API Gateway running on 3000"));
