const express = require("express");
const productRouter = express.Router();
const { saveProducts } = require("../controllers/productController");

productRouter.post("/products", saveProducts);

module.exports = { productRouter };
