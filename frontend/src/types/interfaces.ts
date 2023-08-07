interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface Ingredient {}

interface ApiResponse {
  recipes: Recipe[];
}
