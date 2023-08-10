import { Grid, Box } from "@chakra-ui/react";
import SidebarGrid from "../components/SidebarGrid";
import RecipeCard from "../components/RecipeCard";

const MyRecipes = () => {
  return (
    <SidebarGrid>
      <RecipeCard />
    </SidebarGrid>
  );
};

export default MyRecipes;
