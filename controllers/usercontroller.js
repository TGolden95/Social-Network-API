const User = require("../Models/User");

const getUser = async (req, res) => {
  const user = await User.find(req.params.id);
  res.json(user);
  // res.send("get all users");
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  // res.json(newUser);
  res.send("user created");
};

module.exports = { getUser, createUser };
