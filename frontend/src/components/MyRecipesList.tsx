import {
  Box,
  Collapse,
  HStack,
  Heading,
  List,
  ListItem,
  Show,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import apiClient from "../services/api-client";
import { useGetUserRecipesMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";

interface UserRecipes {
  id: number;
  name: string;
}

const MyRecipesList = () => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 992px)");
  const [recipeList, setRecipeList] = useState<UserRecipes[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    if (!isLargerThanLg) {
      setIsListOpen((prevIsListOpen) => !prevIsListOpen);
    }
  };

  const [getRecipes] = useGetUserRecipesMutation();

  const fetchRecipes = async () => {
    try {
      const res = await getRecipes({});
      if ("data" in res) {
        const data = res.data;
        setRecipeList(data.recipes);
        console.log(data.recipes);
      } else if ("error" in res) {
        const errorMessage = res.error.toString(); // Convert error to string
        toast.error(errorMessage);
      }
    } catch (error: any) {
      toast.error("Oops, something went wrong!");
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
    setIsListOpen(isLargerThanLg);
  }, [isLargerThanLg]);

  return (
    <Box color={"white"}>
      <VStack
        pt={5}
        px={{ base: 0, lg: 5 }}
        align={{ base: "center", lg: "start" }}
      >
        <HStack spacing={5} cursor="pointer" onClick={toggleList}>
          <Heading
            fontSize={{ base: "lg" }}
            fontFamily={"'Courier Prime', monospace"}
            mt={1}
          >
            My Recipes
          </Heading>
          <Show below="lg">
            {isListOpen ? (
              <AiOutlineMinusSquare size="24px" />
            ) : (
              <AiOutlinePlusSquare size="24px" />
            )}
          </Show>
        </HStack>
        <Box
          width={{ base: "90%", md: "80%", lg: "100%" }}
          pb={isListOpen ? 5 : 0}
        >
          <Collapse in={isListOpen} animateOpacity>
            <List
              backgroundColor={{ base: "white", lg: "white" }}
              fontWeight={"bold"}
              fontFamily={"'Courier Prime', monospace"}
              color="red.400"
              w={"100%"}
              borderRadius={10}
              p={3}
            >
              {recipeList &&
                recipeList.map((value, index) => (
                  <ListItem
                    key={index}
                    padding={2}
                    overflow={"none"}
                    whiteSpace={"nowrap"}
                    style={{
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                      display: "block",
                      overflow: "hidden",
                    }}
                  >
                    {value.name}
                  </ListItem>
                ))}
            </List>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default MyRecipesList;
