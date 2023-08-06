import {
  Stack,
  Flex,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  Button,
  HStack,
} from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <Flex
      width="100%"
      height="calc(100% - 60px)"
      backgroundImage="url('./src/assets/background-hero.jpg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      justify={"center"}
      align={"center"}
    >
      <HStack
        mx={3}
        backgroundColor={"white"}
        height={"350px"}
        justify={"space-between"}
        borderRadius={10}
      >
        <VStack padding={10} align={"flex-start"}>
          <Text
            textAlign={"left"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Back for Seconds?
          </Text>
          <Text
            mt={5}
            mb={8}
            color={"gray.600"}
            fontWeight={300}
            fontSize={"lg"}
            maxWidth={"400px"}
          >
            With all the recipes under the sun in an easy to find collection
            you'll be cooking up a storm in no time!
          </Text>
          <Stack direction={"row"}>
            <Button
              as={"a"}
              minWidth={"150px"}
              bg={"red.400"}
              color={"white"}
              _hover={{ bg: "red.500" }}
              href="/login"
            >
              Sign in
            </Button>
            <Button
              as={"a"}
              minWidth={"150px"}
              bg={"gray.300"}
              color={"white"}
              _hover={{ bg: "gray.500" }}
              href={"/register"}
            >
              Register
            </Button>
          </Stack>
        </VStack>
        <Image
          display={{ base: "none", md: "block" }}
          src="./src/assets/welcome.jpg"
          height={"100%"}
          borderRightRadius={10}
        ></Image>
      </HStack>
    </Flex>
  );
};

export default HomeScreen;