const express = require("express");
const app = express();
const { productRouter } = require("./routers/productRouter");
const { accountRoute } = require("./routers/accountRoute");

app.use("/products", productRouter);
app.use("/account", accountRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
