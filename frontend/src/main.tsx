import React from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginSceen />} />
      <Route path="/register" element={<SignupScreen />} />
    </Route>
  )
);

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <App />  */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
