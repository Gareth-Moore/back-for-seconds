import { VStack, Heading, Image } from "@chakra-ui/react";

const Header = () => {
  return (
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
    </VStack>
  );
};

export default Header;
