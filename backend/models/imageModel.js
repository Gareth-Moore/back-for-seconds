import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  myFile: String,
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
