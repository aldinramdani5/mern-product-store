import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import dns from "dns";

import productRoutes from "./routes/product.route.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();
const app = express();

//middleware
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server Berjalan di http://localhost:5000");
});
