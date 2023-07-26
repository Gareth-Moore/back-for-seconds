import asyncHandler from "express-async-handler";
import { simulateError } from "../utils/errorUtils.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

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

  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400); // bad request
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user.id);
    // 201 fulfilled request & data created
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
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
