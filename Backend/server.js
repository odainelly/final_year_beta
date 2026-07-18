import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";




// App configuration
const app = express();
const port = process.env.PORT || 5000;
connectDB()
connectCloudinary()

// app.get("/Home", (req, res) => {
//   res.json({ message: "API is running on Home route" });
// });

// Middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
