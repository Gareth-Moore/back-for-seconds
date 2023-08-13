import { Button } from "@chakra-ui/react";
import dbClient from "../services/db-client";

const TEST = () => {
  const handleClick = async (id: string) => {
    console.log(document.cookie);
    try {
      const res = await dbClient.get<Comment[]>("/comments", {
        params: {
          recipeId: "2",
        },
        withCredentials: true,
      });

      console.log(res);
    } catch {}
  };

  return (
    <Button onClick={() => handleClick("2")}>Here is a big fancy button</Button>
  );
};

export default TEST;
