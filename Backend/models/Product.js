const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store'}, // {required: true} 
  name: { type: String, required: true },
  print_name: { type: String },
  description: { type: String },
  reviews: { type: [String], default: [] },
  rating: { type: Number, default: 0 },
  images: { type: [String], default: [] },
  price: { type: Number, required: true },
  current_stock_quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  hsn_code: { type: String },
  tax_category: { type: String },
  product_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  specs: { type: Object },
  is_active: { type: Boolean, default: true }
});

module.exports = mongoose.model("Product" , ProductSchema)
