import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} from "../controllers/shoppingListController.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getShoppingList)
  .post(protect, addToShoppingList)
  .delete(protect, deleteFromShoppingList);

export default router;
