import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";




// App configuration
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// api endpoints

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
