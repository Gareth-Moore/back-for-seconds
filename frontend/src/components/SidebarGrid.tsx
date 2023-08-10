import { Grid, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import MyRecipesList from "./MyRecipesList";

interface Props {
  children: ReactNode;
}

const SidebarGrid = ({ children }: Props) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "220px 1fr", xl: "300px 1fr" }}
    >
      <Box
        bg={"red.400"}
        height={{ base: "unset", lg: "unset" }}
        minHeight={{ base: "60px", lg: "calc(100vh - 60px)" }}
      >
        <MyRecipesList />
      </Box>
      <Box minHeight={"calc(100vh - 60px)"}>{children}</Box>
    </Grid>
  );
};

export default SidebarGrid;
