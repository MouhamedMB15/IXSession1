

//Express
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const blogsRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");

const connectDB = require("./database/db");

connectDB();

const port = process.env.PORT || 8000;
const app = express();
const path = require("path");

app.use(cors());

app.use(express.json());

//Routes 
app.use("/api/blogs", blogsRoutes);
app.use("/api/categories", categoryRoutes);
// app.use("app/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});