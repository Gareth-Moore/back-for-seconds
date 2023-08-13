import dbClient from "../services/db-client";

const postComment = async (
  comment: string,
  userName: string,
  userId: string,
  recipeId: number
) => {
  console.log(comment, userName, userId, recipeId);
  try {
    const res = await dbClient.post(
      `/comments?comment=${comment}&userId=${userId}&userName=${userName}&recipeId=${recipeId}`,

      {
        withCredentials: true,
      }
    );
    return res.data.comments;
  } catch (error: any) {
    return error.response.status;
  }
};

export default postComment;
