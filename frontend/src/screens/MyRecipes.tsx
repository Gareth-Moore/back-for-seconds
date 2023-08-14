import SidebarGrid from "../components/SidebarGrid";
import RecipeCard from "../components/RecipeCard";
import MyRecipesList from "../components/MyRecipesList";

const MyRecipes = () => {
  return (
    <SidebarGrid showComments={true}>
      <MyRecipesList />
      <RecipeCard />
    </SidebarGrid>
  );
};

export default MyRecipes;
