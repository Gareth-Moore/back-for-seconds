import {
  Box,
  Heading,
  VStack,
  Text,
  Textarea,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  return (
    <>
      <Box w={{ base: "90%", md: "760px" }} mx={"auto"}>
        <Heading
          w={{ base: "90%", md: "760px" }}
          fontFamily={"'Courier Prime', monospace;"}
        >
          Comments:
        </Heading>
        <Box
          my={50}
          bg={"white"}
          borderRadius={15}
          w={{ base: "90%", md: "760px" }}
          mx={"auto"}
          p={{ base: 5, md: 10 }}
          border={"1px solid lightgray"}
        >
          <Heading fontSize={"md"} mb={2}>
            Enter comment:
          </Heading>
          <form>
            <Textarea
              width="100%"
              minH="unset" // Remove the minimum height restriction
              resize="none" // Disable resizing
              placeholder="What did you think of this recipe?"
              height={"120px"}
              sx={{
                // Override Chakra UI styles
                minHeight: "unset !important",
                overflow: "auto !important",
              }}
            ></Textarea>
            <Button
              display={"block"}
              ml={"auto"}
              type={"submit"}
              mt={2}
              bg={"red.400"}
              color={"white"}
              _hover={{ bg: "red.500" }}
            >
              Submit
            </Button>
          </form>
          {comments.length === 0 ? (
            <VStack align={"left"} padding={5}>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
              <Text fontWeight={"bold"}>Gareth</Text>
              <Text textAlign={"justify"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                veritatis unde enim doloribus, deserunt temporibus in ex eum
                iusto similique tenetur quis, omnis sequi eligendi. Velit
                officia dolores eaque ipsum repellat voluptas modi veniam
                doloribus quidem amet optio, illum perspiciatis unde dolorem
                autem consequatu necessitatibus.
              </Text>
            </VStack>
          ) : (
            <VStack align={"start"}>
              <Text>No comments yet, be the first to comment?</Text>
            </VStack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Comments;
