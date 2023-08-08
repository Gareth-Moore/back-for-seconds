import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import apiClient from "../services/api-client";
import BasicCard from "../components/BasicCard";
import BasicCardGrid from "../components/BasicCardGrid";
import RecipeCard from "../components/RecipeCard";

interface Results {
  results: Recipe[];
}

const SearchRecipes = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<Results | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchConcat = search.split(" ").join(",");
    console.log(searchConcat);
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<Results>(
          "/recipes/complexSearch",
          {
            params: {
              query: searchConcat,
              number: 10,
            },
          }
        );
        setRecipes({ results: response.data.results });
        console.log(response.data.results[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsLoading(false);
      }
    };
    fetchRecipes();
  };

  console.log("re-rendered");
  return (
    <>
      <Header></Header>
      <Text textAlign={"center"} w={"90%"} mx="auto">
        Search for any recipes by name, tag or ingredient
      </Text>
      <form onSubmit={handleSubmit}>
        <InputGroup my={5} mx={"auto"} w={{ base: "90%", md: "60%" }}>
          <InputLeftElement children={<SearchIcon color="gray.500" />} />
          <Input
            borderRadius={20}
            placeholder="Enter search"
            variant="filled"
            display="block"
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement
            children={<SearchIcon />}
            as="button"
            type="submit"
          />
        </InputGroup>
      </form>
      <RecipeCard></RecipeCard>
      <BasicCardGrid isLoading={isLoading}>
        {recipes &&
          recipes.results.map((recipe, index) => (
            <BasicCard
              isLoading={isLoading}
              key={index}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
      </BasicCardGrid>
    </>
  );
};

export default SearchRecipes;
