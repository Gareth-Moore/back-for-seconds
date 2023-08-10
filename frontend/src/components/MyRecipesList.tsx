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

const MyRecipesList = () => {
  //   const isListOpenInitial = useBreakpointValue({ base: false, lg: true });
  const [isLargerThanLg] = useMediaQuery("(min-width: 992px)");

  console.log("media query", isLargerThanLg);

  const [isListOpen, setIsListOpen] = useState(false);
  console.log("hook", isListOpen);

  const toggleList = () => {
    if (!isLargerThanLg) {
      setIsListOpen((prevIsListOpen) => !prevIsListOpen);
    }
  };

  useEffect(() => {
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
              <ListItem
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
                Vegetable Springrolls
              </ListItem>
              <ListItem
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
                Tacos
              </ListItem>
              <ListItem
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
                Macaroni and cheese
              </ListItem>
            </List>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default MyRecipesList;
