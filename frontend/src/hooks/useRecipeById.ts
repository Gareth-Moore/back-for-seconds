import { useDispatch } from "react-redux";
import { setId, setRecipe } from "../slices/currentRecipeSlice";
import apiClient from "../services/api-client";
import { toast } from "react-toastify";

const useRecipeById = (_id: number) => {
  const dispatch = useDispatch();

  const fetchRecipeById = async (_id: number) => {
    try {
      const res = await apiClient.get<FullRecipe>(
        `/recipes/${_id}/information`,
        {
          params: {
            includeNutrition: false,
          },
        }
      );
      dispatch(setId(_id));
      dispatch(setRecipe({ ...res.data }));
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return fetchRecipeById;
};

export default useRecipeById;
