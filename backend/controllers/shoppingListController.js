import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// description:   Get shopping list
// method:        GET
// route:         /api/shopping-list
// access:        Private
const getShoppingList = asyncHandler(async (req, res) => {
  const email = req.user.email;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(200).json(user.shoppingList);
  } else {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json("We have the list");
});

// description:   Add to shopping list
// method:        POST
// route:         /api/shopping-list
// access:        Private
const addToShoppingList = asyncHandler(async (req, res) => {
  const { name, id } = req.body;
  console.log("hi");
  if (!name || !id) {
    return res.status(400).json({ message: "Not all parameters are included" });
  }

  const email = req.user.email;

  const user = await User.findOne({ email });

  if (user) {
    const shoppingList = user.shoppingList;
    shoppingList.push({ name, id });
    const updatedShoppingList = await user.save();
    return res.status(200).json(updatedShoppingList.shoppingList);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

// description:   Delete item from shopping list by ID
// method:        DELETE
// route:         /api/shopping-list
// access:        Private
const deleteFromShoppingList = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.query);
  const { id } = req.query;
  console.log(id);
  if (!id) {
    return res.status(400).json({ message: "Query parameters invalid" });
  }

  const email = req.user.email;

  const user = await User.findOne({ email });

  if (user) {
    user.shoppingList = user.shoppingList.filter((value) => value.id != id);
    await user.save();
    return res.status(200).json(user.shoppingList);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});

export { getShoppingList, addToShoppingList, deleteFromShoppingList };
