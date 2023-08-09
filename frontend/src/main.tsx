import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignupScreen from "./screens/SignupScreen.tsx";
import LoginSceen from "./screens/LoginScreen.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
import store from "./store.ts";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoute.tsx";
import ExploreRecipes from "./screens/ExploreRecipes.tsx";
import SearchRecipes from "./screens/SearchRecipes.tsx";
import InspectRecipe from "./screens/InspectRecipe.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginSceen />} />
      <Route path="/register" element={<SignupScreen />} />

      {/* Private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/explore-recipes" element={<ExploreRecipes />} />
        <Route path="/search-recipes" element={<SearchRecipes />} />
        <Route path="/inspect-recipe" element={<InspectRecipe />} />
      </Route>
    </Route>
  )
);

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
});
// font-family: 'Courier Prime', monospace;
// font-family: 'Montserrat', sans-serif;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      {/* <App />  */}
      <RouterProvider router={router} />
    </Provider>
  </ChakraProvider>
);
