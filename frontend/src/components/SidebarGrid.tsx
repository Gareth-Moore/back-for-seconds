import { Grid, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SidebarGrid = ({ children }: Props) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr", xl: "300px 1fr" }}
    >
      <Box
        bg={"red.400"}
        height={{ base: "60px", lg: "unset" }}
        minHeight={{ lg: "calc(100vh - 60px)" }}
      ></Box>
      <Box minHeight={"calc(100vh - 60px)"}>{children}</Box>
    </Grid>
  );
};

export default SidebarGrid;
