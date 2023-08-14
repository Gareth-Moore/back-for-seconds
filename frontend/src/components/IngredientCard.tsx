import {
  VStack,
  Image,
  Text,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingList } from "../slices/shoppingListSlice";

const IngredientCard = ({ ingredient }: { ingredient: Ingredient }) => {
  const { shoppingList } = useSelector((state: any) => state.shoppingList);

  const dispatch = useDispatch();

  const handleClick = async (id: number, name: string) => {};

  return (
    <VStack
      bg={"white"}
      w={"100%"}
      borderRadius={15}
      height={"200px"}
      justify={"space-between"}
      overflow={"hidden"}
      _hover={{ border: "2px solid lightgray" }}
    >
      <Image
        p={5}
        src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`}
        w={"120px"}
        h="120px"
      ></Image>
      <Box>
        <Text
          textAlign={"center"}
          overflow={"hidden"}
          color={"gray.700"}
          textOverflow="ellipsis"
          maxW="180px"
          maxH="24px"
          whiteSpace="nowrap"
        >
          {ingredient.name}
        </Text>
      </Box>
      <Button
        justifySelf={"flex-end"}
        display={"block"}
        w={"100%"}
        ml={"auto"}
        borderRadius={"none"}
        bg={"red.400"}
        color={"white"}
        onClick={() => handleClick(ingredient.id, ingredient.name)}
        _hover={{ bg: "red.500" }}
      >
        Add +
      </Button>
    </VStack>
  );
};

export default IngredientCard;
