import asyncHandler from "express-async-handler";

// description:     Auth, user/set token
// route:           POST api/users/auth
// access:          Public

const authUser = async (req, res) => {
  res.status(200).json({ message: "Autherize user" });
};

// description:
// route:
// access:

export { authUser };
