import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import dbClient from "../services/db-client";
import convertToBase64 from "../services/convert-image";
import { useSelector } from "react-redux";

interface NewImage {
  myFile: string;
}

const Cuisines = () => {
  const [postImage, setPostImage] = useState({ myFile: "" });
  const { userInfo } = useSelector((state: any) => state.auth);

  const createImage = async (newImage: NewImage) => {
    try {
      const res = await dbClient.post(
        "/image",
        { ...newImage, userId: userInfo._id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      console.log("posted");
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
