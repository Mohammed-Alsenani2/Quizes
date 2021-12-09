const express = require("express");
const accountRouter = express.Router();
const { getAccount } = require("../controllers/productController");

accountRouter.get("/products", getAccount);

module.exports = { accountRouter };
