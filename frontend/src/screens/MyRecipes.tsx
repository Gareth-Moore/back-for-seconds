import { Grid, Box } from "@chakra-ui/react";
import SidebarGrid from "../components/SidebarGrid";
import RecipeCard from "../components/RecipeCard";
import RecipeCardCopy from "../components/RecipeCardCopy";

const MyRecipes = () => {
  return (
    <SidebarGrid>
      <RecipeCardCopy />
    </SidebarGrid>
  );
};

export default MyRecipes;
