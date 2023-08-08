import { HStack, Box, Text, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Box w={"100%"} h={"60px"}></Box>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
