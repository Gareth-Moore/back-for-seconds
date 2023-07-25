import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import {
  routeNotFound,
  globalErrorHandler,
} from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// start express
const app = express();

app.get("/", (req, res) => res.send("Server is ready..."));

// routes
app.use("/api/users", userRoutes);

// error handlers
app.use(routeNotFound);
app.use(globalErrorHandler);

app.listen(port, () => console.log(`Server has started on port: ${port}`));
