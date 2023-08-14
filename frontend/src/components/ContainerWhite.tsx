import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  display: "block" | "flex";
}

const ContainerWhite = ({ children, display }: Props) => {
  return (
    <VStack
      mt={50}
      bg={"white"}
      borderRadius={15}
      w={{ base: "90%", md: "760px" }}
      mx={"auto"}
      p={{ base: 5, md: 10 }}
      border={"1px solid lightgray"}
      align={"flex-start"}
      display={display}
    >
      {children}
    </VStack>
  );
};

export default ContainerWhite;
