require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes"); 

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions))
// app.use(cors({ origin: "https://your-vercel-app.vercel.app" }));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Sample route
app.get('/', (req, res) => {
  res.send("Backend is running...");
});

// User Routes
app.use("/api/users", userRoutes);
// app.use("/api/product", productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
