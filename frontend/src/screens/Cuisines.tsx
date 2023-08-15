import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import dbClient from "../services/db-client";
import convertToBase64 from "../services/convert-image";

interface NewImage {
  myFile: string;
}

const Cuisines = () => {
  const [postImage, setPostImage] = useState({ myFile: "" });

  const createImage = async (newImage: NewImage) => {
    try {
      await dbClient.post("/image", newImage, { withCredentials: true });
    } catch (error) {}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createImage(postImage);
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 as string });
  };

  return (
    <>
      <Image src={postImage.myFile}></Image>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <Button type="submit">Submit image</Button>
      </form>
    </>
  );
};

export default Cuisines;
