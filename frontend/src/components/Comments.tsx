import { Box, Heading, VStack, Text, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([
    { userName: "Gareth", comment: "Hello there", userId: 505 },
    { userName: "Gareth", comment: "Hello there", userId: 505 },
    { userName: "Gareth", comment: "Hello there", userId: 505 },
    { userName: "Gareth", comment: "Hello there", userId: 505 },
    { userName: "Gareth", comment: "Hello there", userId: 505 },
  ]);

  return (
    <>
      <Box w={{ base: "90%", md: "760px" }} mx={"auto"}>
        <Heading
          w={{ base: "90%", md: "760px" }}
          fontFamily={"'Courier Prime', monospace;"}
          p={{ base: 5, md: 10 }}
        >
          Comments:
        </Heading>
        <Box
          mb={50}
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
              minH="unset"
              resize="none"
              placeholder="What did you think of this recipe?"
              height={"120px"}
              sx={{
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
          {comments.length > 0 ? (
            <VStack align={"left"} padding={5}>
              {comments.map((value, index) => (
                <Box key={index}>
                  <Text fontWeight={"bold"}>{value.userName}</Text>
                  <Text textAlign={"justify"}>{value.comment}</Text>
                </Box>
              ))}
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
