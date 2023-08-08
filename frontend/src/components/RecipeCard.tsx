import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const RecipeCard = () => {
  return (
    <VStack
      w={{ base: "360px", md: "760px" }}
      mx={"auto"}
      p={{ base: 5, md: 10 }}
      border={"1px solid lightgray"}
    >
      <Box>
        <VStack
          justify={"flex-start"}
          align={"flex-start"}
          fontSize={{ base: "xs", md: "md" }}
        >
          <Heading fontFamily={"'Courier Prime', monospace"}>
            Easy recipe over here
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            eligendi distinctio dolorum minima saepe perspiciatis repellendus
            fuga animi quam quidem provident, sit facilis quibusdam consequatur.
            Unde corrupti tempora iusto quas nisi facere tenetur a modi quia
            incidunt voluptate possimus, illo magnam saepe asperiores quasi.
            Aperiam aspernatur, nesciunt cumque consequuntur dignissimos
            repellat accusamus, labore velit sed itaque quidem saepe tempora
            explicabo?
          </Text>
          <HStack>
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
            <AiFillStar color="gold" size="24px" />
          </HStack>
          <HStack align={"flex-start"} justify={"flex-end"}>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
            </VStack>
            <Box
              h={{ base: "40px", md: "60px" }}
              borderLeft={"1px solid lightgray"}
              mx={{ base: 1, md: 5 }}
            ></Box>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
            </VStack>
            <Box
              h={{ base: "40px", md: "60px" }}
              borderLeft={"1px solid lightgray"}
              mx={{ base: 1, md: 5 }}
            ></Box>
            <VStack>
              <Text fontWeight={"bold"}>Pre Time</Text>
              <Text>20 minutes</Text>
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
        <Box></Box>
      </Box>
    </VStack>
  );
};

export default RecipeCard;
