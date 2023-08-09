import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipe } from "../slices/currentRecipeSlice";
import apiClient from "../services/api-client";

const InspectRecipe = () => {
  const [displayCard, setDisplayCard] = useState(false);
  const dispatch = useDispatch();

  const { recipe, id } = useSelector((state: any) => state.recipe);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await apiClient.get<FullRecipe>(
          `/recipes/${id}/information`,
          {
            params: {
              includeNutrition: false,
            },
          }
        );
        console.log(res.data);
        dispatch(setRecipe({ ...res.data }));
        setDisplayCard(true);
      } catch (error) {}
    };
    fetchRecipe();
  }, []);

  console.log("FUCK ME HERE IT IS:");
  console.log(recipe);
  return <>{displayCard && <RecipeCard />}</>;
};

export default InspectRecipe;
