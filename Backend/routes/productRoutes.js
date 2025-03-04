const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Product = require("../models/Product.js");

router.get("/", async (req, res) => {
  try {
    dummyData = [{
      store_id: "001",
      name: "headphones",
      print_name: "Super",
      description: "Electornic Product",
      reviews: ["review 1", "review 2"],
      rating: { type: Number, default: 0 },
      images: ["img1", "img2"],
      price: 3000,
      unit: 23,
      current_stock_quantity: 40,
      hsn_code: "xyz",
      tax_category: "taxable",
      product_category: "Electronics",
      specs: "specs",
      is_active: true,
    }, {
        store_id: "002",
        name: "Samsung A23",
        print_name: "Smart Phone",
        description: "Electornic Product",
        reviews: ["review 1", "review 2"],
        rating: { type: Number, default: 0 },
        images: ["img1", "img2"],
        price: 33000,
        unit: 100,
        current_stock_quantity: 40,
        hsn_code: "xyz001",
        tax_category: "taxable",
        product_category: "Electronics",
        specs: "Android 15, 12GB RAM, 256GB ROM",
        is_active: true,
      },{
        store_id: "003",
        name: "Microwave",
        print_name: "Microwave",
        description: "Electornic Product",
        reviews: ["review 1", "review 2"],
        rating: { type: Number, default: 0 },
        images: ["img1", "img2"],
        price: 3000,
        unit: 230,
        current_stock_quantity: 20,
        hsn_code: "xyzMCR",
        tax_category: "taxable",
        product_category: "Electronics",
        specs: "12 Litre",
        is_active: true,
      }];
    res.send(dummyData);
  } catch {
    res.send("Cant Get Products");
  }
});

// router.post("/", async)

module.exports = router;
