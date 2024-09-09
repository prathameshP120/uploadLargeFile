import express from "express";
const app = express();
import dotenv, { config } from "dotenv";
dotenv.config({ path: "./config/config.env" });
import cookieParser from "cookie-parser";
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";
import errormiddleware from "./middlewares/errors.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";

// Handle Uncaught exceptions   e.g=> console.log(Hello):Hello is not defined
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught expection");
  process.exit(1);
});

//Connecting to database

connectDatabase();

app.use(express.json({ limit: "10mb" })); // which is also the limit of the cloudinary
app.use(cookieParser());
//import all routes

app.use("/api/v1", productRoutes);

app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);

//using errormiddleware
app.use(errormiddleware); //make sure we have to include errormiddleware after the endpoints

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(`Shutting down server due to Unhandled Promise Rejection `);
  server.close(() => {
    process.exit(1);
  });
});
