import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Image,
  Button,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineSave, AiOutlineComment } from "react-icons/ai";
import { LuVegan } from "react-icons/lu";

const RecipeCard = () => {
  return (
    <VStack
      borderRadius={15}
      w={{ base: "360px", md: "760px" }}
      mx={"auto"}
      p={{ base: 5, md: 10 }}
      border={"1px solid lightgray"}
      align={"flex-start"}
    >
      <Box>
        <VStack
          justify={"flex-start"}
          align={"flex-start"}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Button
            w={"100%"}
            bg={"red.400"}
            color={"white"}
            _hover={{ bg: "red.500" }}
          >
            Save
            <Box ml={3}>
              <AiOutlineSave size={"24px"} />
            </Box>
          </Button>
          <Image
            borderRadius={5}
            src="https://spoonacular.com/recipeImages/664288-556x370.jpg"
            w="100%"
          ></Image>
          <Heading mt={5} fontFamily={"'Courier Prime', monospace"}>
            Easy recipe over here
          </Heading>
          <Text mb={2} mt={2} fontSize={{ base: "sm", md: "md" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            eligendi distinctio dolorum minima saepe perspiciatis repellendus
            fuga animi quam quidem provident, sit facilis quibusdam consequatur.
            Unde corrupti tempora iusto quas nisi facere tenetur a modi quia
            incidunt voluptate possimus, illo magnam saepe asperiores quasi.
            Aperiam aspernatur, nesciunt cumque consequuntur dignissimos
            repellat accusamus, labore velit sed itaque quidem saepe tempora
            explicabo?
          </Text>
          <HStack mb={2}>
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
          </HStack>
          <HStack justify={"center"} w={"100%"} my={5}>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
            </VStack>
            <Box
              h={{ base: "60px", md: "60px" }}
              borderLeft={"1px solid lightgray"}
              mx={{ base: 1, md: 5 }}
            ></Box>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
            </VStack>
            <Box
              h={{ base: "60px", md: "60px" }}
              borderLeft={"1px solid lightgray"}
              mx={{ base: 1, md: 5 }}
            ></Box>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
            </VStack>
          </HStack>
          <HStack justify={"center"} w={"100%"}>
            <VStack>
              <LuVegan size={"48px"} color={"green"} />
              <Text>Vegan</Text>
            </VStack>
          </HStack>
          <VStack align={"flex-start"}>
            <Text>
              <strong>Serving Size:</strong> 10
            </Text>
            <Text>
              <strong>Course:</strong> Dinner
            </Text>
            <Text>
              <strong>Cuisine:</strong> American
            </Text>
          </VStack>
        </VStack>
        <HStack justify={"center"} mt={8}>
          <Button
            w={"40%"}
            bg={"red.400"}
            color={"white"}
            _hover={{ bg: "red.500" }}
          >
            Save
            <Box ml={3}>
              <AiOutlineSave size={"24px"} />
            </Box>
          </Button>
          <Button w={"40%"}>
            Comment
            <Box ml={3}>
              <AiOutlineComment size={"24px"} />
            </Box>
          </Button>
        </HStack>
      </Box>
      <Divider my={50} />
      <Heading fontFamily={"'Courier Prime', monospace"} textAlign={"left"}>
        Ingredients
      </Heading>
      <OrderedList spacing={2} pl={3}>
        <ListItem>6 ounces Butter, softened</ListItem>
        <ListItem>Here is my first list item</ListItem>
        <ListItem>Here is my first list item</ListItem>
        <ListItem>Here is my first list item</ListItem>
      </OrderedList>
      <Heading
        fontFamily={"'Courier Prime', monospace"}
        textAlign={"left"}
        mt={50}
      >
        Instructions
      </Heading>
      <OrderedList spacing={2} pl={3}>
        <ListItem>6 ounces Butter, softened</ListItem>
        <ListItem>Here is my first list item</ListItem>
        <ListItem>Here is my first list item</ListItem>
        <ListItem>Here is my first list item</ListItem>
      </OrderedList>
      <Divider my={50} />
      <Text fontSize={"sm"}>Credit: Foodista</Text>
      <Text fontSize={"sm"}>
        Foodista.com – The Cooking Encyclopedia Everyone Can Edit
      </Text>
    </VStack>
  );
};

export default RecipeCard;
