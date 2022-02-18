const User = require("../Models/User");

const getUser = async (req, res) => {
  const user = await User.find(req.params.id);
  res.json(user);
};
