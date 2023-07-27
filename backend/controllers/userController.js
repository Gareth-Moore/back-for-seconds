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
  console.log("Auth user");

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
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
  console.log("Logout user");

  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

// description:   Get users profile
// method:        GET
// route:         /api/users/profile
// access:        Private
const getUserProfile = asyncHandler(async (req, res) => {
  simulateError(false);

  const user = {
    name: req.user.name,
    id: req.user._id,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// description:   Update user profile
// method:        PUT
// route:         /api/profile
// access:        Private
const updateUserProfile = asyncHandler(async (req, res) => {
  simulateError(false);

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.mail;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
