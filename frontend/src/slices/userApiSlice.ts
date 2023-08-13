import { apiSlice } from "./apiSlice.ts";

const USERS_URL = "/api/users";
const COMMENTS_URL = "/api/comments";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    updateRecipe: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/recipe`,
        method: "PUT",
        body: data,
      }),
    }),
    getUserRecipes: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/recipe`,
        method: "GET",
      }),
    }),
    deleteUserRecipe: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/recipe`,
        method: "DELETE",
        body: data,
      }),
    }),
    getComments: builder.mutation({
      query: () => ({
        url: COMMENTS_URL,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUpdateRecipeMutation,
  useGetUserRecipesMutation,
  useDeleteUserRecipeMutation,
  useGetCommentsMutation,
} = usersApiSlice;
