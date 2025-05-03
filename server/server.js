require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());


// Connect to MongoDB
connectDB();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello world"); 
});

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
