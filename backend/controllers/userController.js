import asyncHandler from "express-async-handler";
import { simulateError } from "../utils/errorUtils.js";

// description:     Auth, user/set token
// route:           POST api/users/auth
// access:          Public

const authUser = asyncHandler(async (req, res) => {
  simulateError(false);

  console.log("start auth controller");
  res.status(200).json({ message: "Autherize user" });
});

// description:
// route:
// access:

export { authUser };
