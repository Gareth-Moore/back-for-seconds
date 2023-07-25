// description:     Auth, user/set token
// route:           POST api/users/auth
// access:          Public

const authUser = (req, res) => {
  res.status(200).json({ message: "Autherise user" });
};

// description:
// route:
// access:

export { authUser };
