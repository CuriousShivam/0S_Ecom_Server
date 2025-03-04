const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const product = require("../models/Product.js");

router.get