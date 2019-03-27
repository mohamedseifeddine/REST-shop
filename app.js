const express = require("express")
const app = express


const productRoutes = require("./api/routes/products")
const orderRoutes = require("./api/routes/orders")

app.use("/Product",productRoutes)
app.use("/Order",orderRoutes)

  module.exports = app