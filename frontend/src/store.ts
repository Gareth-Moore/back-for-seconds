import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.ts";
import { apiSlice } from "./slices/apiSlice.ts";
import recipeReducer from "./slices/currentRecipeSlice.ts";
import recipesReducer from "./slices/currentRecipesSlice.ts";

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    auth: authReducer,
    recipes: recipesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
