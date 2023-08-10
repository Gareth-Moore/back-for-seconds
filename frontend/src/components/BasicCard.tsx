import { VStack, Text, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useRecipeById from "../hooks/useRecipeById";

interface Props {
  id: number;
  title: string;
  image: string;
  isLoading: boolean;
}

const BasicCard = ({ id, title, image }: Props) => {
  const navigate = useNavigate();
  const fetchRecipeById = useRecipeById(id);

  const handleClick = async () => {
    await fetchRecipeById();
    navigate("/my-recipes");
  };

  return (
    <VStack
      key={id}
      w={"300px"}
      h={"390px"}
      bg={"white"}
      borderBottomLeftRadius={15}
      border={"1px solid lightgray"}
      onClick={handleClick}
    >
      <Image src={image} h={"300px"} objectFit={"cover"} />
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
          {title}
        </Text>
      </Flex>
    </VStack>
  );
};

export default BasicCard;
