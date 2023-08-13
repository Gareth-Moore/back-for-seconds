import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import cookieParser from "cookie-parser";
import {
  routeNotFound,
  globalErrorHandler,
} from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// start express
const app = express();

// parse to json
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse form data

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend's URL
    credentials: true, // Include cookies in cross-origin requests
  })
);

// routes
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => res.send("Server is ready..."));

// error handlers
app.use(routeNotFound);
app.use(globalErrorHandler);

app.listen(port, () => console.log(`Server has started on port: ${port}`));
