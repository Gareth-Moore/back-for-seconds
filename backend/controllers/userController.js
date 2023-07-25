import asyncHandler from "express-async-handler";
import { simulateError } from "../utils/errorUtils.js";

// description:   Auth user / set token
// method:        POST
// route:         api/users/auth
// access:        Public
const authUser = asyncHandler(async (req, res) => {
  simulateError(false);

  console.log("start auth controller");
  res.status(200).json({ message: "Autherize user" });
});

// description:   Register a new user
// method:        POST
// route:         /api/users
// access:        Public
const registerUser = asyncHandler(async (req, res) => {
  simulateError(false);

  res.status(200).json({ message: "Register user" });
});

// description:   Logout User
// method:        POST
// route:         /api/users/logout
// access:        Public
const logoutUser = asyncHandler(async (req, res) => {
  simulateError(false);

  res.status(200).json({ message: "Logout user" });
});

// description:   Get users profile
// method:        GET
// route:         /api/users/profile
// access:        Private
const getUserProfile = asyncHandler(async (req, res) => {
  simulateError(false);

  res.status(200).json({ message: "Get user profile" });
});

// description:   Update user profile
// method:        PUT
// route:         /api/profile
// access:        Private
const updateUserProfile = asyncHandler(async (req, res) => {
  simulateError(false);

  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
