import asyncHandler from "express-async-handler";
import Image from "../models/imageModel.js";

// description:   Upload image
// method:        POST
// route:         /api/images
// access:        Private
const getImages = asyncHandler(async (req, res) => {
  // return res.status(200).json({ message: "another hit" });
  try {
    const images = await Image.find({});
    return res.status(200).json(images);
  } catch (error) {
    return res.status(404).json({ message: "No images found" });
  }
}); // description:   Upload image
// method:        POST
// route:         /api/images
// access:        Private
const uploadImage = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "hit" });
  const body = req.body;
  try {
    const newImage = await Image.create(body);
    newImage.save();
    return res.status(201).json({ message: "Image uploaded" });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
});

export { uploadImage, getImages };
