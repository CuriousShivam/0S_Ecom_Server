const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Product = require("../models/Product.js");

router.get("/", async(req, res) => {
  try{
    dummyData = { 
      name: "headphones",
      print_name: "Super",
      description: "Electornic Product",
      reviews: ["review 1" , "review 2"],
      rating: { type: Number, default: 0 },
      images: ['img1' , 'img2'],
      price: 3000,
      current_stock_quantity: 40,
      hsn_code: "xyz",
      tax_category: "taxable",
      product_category: "Electronics",
      specs: "specs",
      is_active: true}
      res.send(dummyData);
  }
  catch{res.send('Cant Get Products')}
});

module.exports = router;