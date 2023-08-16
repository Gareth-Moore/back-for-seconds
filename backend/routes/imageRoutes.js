import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getImages, uploadImage } from "../controllers/imageController.js";

const router = express.Router();

router.route("/").post(uploadImage).get(protect, getImages);

export default router;
