import asyncHandler from "express-async-handler";
import { simulateError } from "../utils/errorUtils.js";
import Comment from "../models/commentModel.js";

// description:   Get comments for recipe
// method:        DELETE
// route:         /api/comments
// access:        Private
const getUserComments = asyncHandler(async (req, res) => {});

// description:   Add a users comment
// method:        PUT
// route:         /api/comments
// access:        Private
const addUserComment = asyncHandler(async (req, res) => {
  const { recipeId, comments } = req.body;

  const recipeComments = await Comment.findOne({ recipeId });

  if (recipeComments) {
    console.log("fuck");
    console.log(recipeComments.comments);
    comments.map((value) => {
      recipeComments.comments.push(value);
    });
    const updatedComments = await recipeComments.save();
    res.status(200).json(updatedComments);
  } else {
    const updateComments = await Comment.create({
      recipeId: req.body.recipeId,
      comments: req.body.comments,
    });
    res.status(200).json(updateComments);
  }
  res.status(200).json();
});

// description:   Delete a users comment
// method:        DELETE
// route:         /api/comments
// access:        Private
const deleteUserComment = asyncHandler(async (req, res) => {});

export { getUserComments, addUserComment, deleteUserComment };
