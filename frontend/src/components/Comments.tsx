import { Box, Heading, VStack, Text, Textarea, Button } from "@chakra-ui/react";
import { useState, useEffect, FormEvent } from "react";
import useComments from "../hooks/useComments";
import { useDispatch, useSelector } from "react-redux";
import { setComment } from "../slices/commentSlice";
import postComment from "../hooks/updateComments";

const Comments = () => {
  const [currentComment, setCurrentComment] = useState("");
  const comments = useSelector((state: any) => state.comment.comments);
  const recipeId = useSelector((state: any) => state.recipe.id);
  const { userInfo } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentComment("");
    const getComments = async () => {
      try {
        const getCommentsFunction = useComments(recipeId);
        const res = await getCommentsFunction();
        if (res === 404) {
          console.log("No recipe comments exist");
        } else {
          dispatch(setComment(res.comments));
        }
      } catch (error: any) {
        dispatch(setComment([]));
        console.log(error.message);
      }
    };
    getComments();
    return () => {
      dispatch(setComment([]));
    };
  }, [recipeId]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const res = await postComment(
      currentComment,
      userInfo.firstName,
      userInfo._id,
      recipeId
    );
    dispatch(setComment(res));
    setCurrentComment("");
  };

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
          <form onSubmit={(event) => handleSubmit(event)}>
            <Textarea
              onChange={(event) => setCurrentComment(event.target.value)}
              value={currentComment}
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
              {comments.map((value: Comment, index: number) => (
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
