import {
  Box,
  Grid,
  VStack,
  Image,
  Text,
  Flex,
  Skeleton,
  SkeletonText,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const ExploreRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<ApiResponse>("/recipes/random", {
          params: {
            number: 12,
            tags: "bacon",
          },
        });
        setRecipes(response.data.recipes);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <VStack>
        <Heading fontFamily={"'Courier Prime', monospace"} mt={10}>
          Back for seconds?
        </Heading>
        <Image
          src="src/assets/logo.png"
          w={{ base: "96px", lg: "128px" }}
          mt={5}
          mb={10}
        />

        <Text
          color={"gray.600"}
          textAlign={"center"}
          w={{ base: "90%", lg: "80%" }}
        >
          My recipe website is a labor of love, meticulously curated to inspire
          both novice and seasoned chefs alike. Whether you're seeking comfort
          in a hearty stew, embarking on a global gastronomic adventure, or
          simply looking to whip up a quick, delightful treat, our extensive
          repertoire has something to satisfy every palate and craving.
        </Text>
      </VStack>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        alignItems={"center"}
        justifyItems={"center"}
        maxWidth={{ md: "700px", lg: "1100px" }}
        mx={"auto"}
        gridGap={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((value) => (
            <Box
              key={value}
              boxShadow="5px 5px 0px #FEB2B2"
              w={"300px"}
              h={"390px"}
              bg={"white"}
              borderTopRightRadius={15}
              borderBottomLeftRadius={15}
              border={"1px solid lightgray"}
              borderLeft={"1px solid lightgray"}
            >
              <Skeleton w={"100%"} h={"300px"}></Skeleton>
              <SkeletonText w={"100%"} h={"90px"}></SkeletonText>
            </Box>
          ))}
        {recipes.map((recipe, index) => (
          <VStack
            // boxShadow="1px 1px 0px #FEB2B2"
            key={recipe.id}
            w={"300px"}
            h={"390px"}
            bg={"white"}
            //   borderTopRightRadius={15}
            borderBottomLeftRadius={15}
            border={"1px solid lightgray"}
            // borderLeft={"1px solid lightgray"}
          >
            <Image
              // borderTopRightRadius={15}
              src={recipe.image}
              h={"300px"}
              objectFit={"cover"}
            />
            <Flex h={"70px"} align={"center"}>
              <Text
                color={"gray.700"}
                overflow="hidden"
                fontWeight={"bold"}
                textOverflow="ellipsis"
                maxW="280px"
                maxH="70px"
                textAlign={"center"}
              >
                {recipe.title}
              </Text>
            </Flex>
          </VStack>
        ))}
      </Grid>
    </>
  );
};

export default ExploreRecipes;
("use client");
