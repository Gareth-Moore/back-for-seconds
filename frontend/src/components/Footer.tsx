import {
  Box,
  Container,
  Stack,
  Image,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";

const Logo = (props: any) => {
  return <Image src={"src/assets/logo.png"} w="48px" />;
};

export default function Footer() {
  return (
    <Box
      bg={"#f0f0f055"}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop={"1px solid lightgray"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>Epicode Capstone project - Gareth Moore</Text>
        <Stack direction={"row"} spacing={6}>
          <Button
            as={"a"}
            target={"_blank"}
            href={"https://www.linkedin.com/in/gareth-moore-14a645150/"}
          >
            <FaLinkedin />
          </Button>
          <Button
            as={"a"}
            href={"https://github.com/Gareth-Moore"}
            target={"_blank"}
          >
            <FaGithub />
          </Button>
          <Button
            as={"a"}
            href={"https://gareth-moore.github.io/Frontend-Mentor-projects/"}
            target="_blank"
          >
            <BsFillPersonVcardFill />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
