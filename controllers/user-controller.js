const User = require("../Models/User");
// const Thought = require("../Models/Thought");

const getAllUsers = async (req, res) => {
  const user = await User.find(req.params.id);
  res.json(user);
  // res.send("get all users");
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
  // res.send("user created");
};

const getUserById = async (req, res) => {
  const userId = await User.findById(req.params.id);
  res.json(userId);
};

const updateUser = async (req, res) => {
  const userUpdate = await User.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(userUpdate);
};

const deleteUser = async (req, res) => {
  const delUser = await User.findOneAndDelete(req.params.id);
  res.json(delUser);
};

const addFriend = async (req, res) => {
  const newFriend = await User.findOneAndUpdate(
    req.params.id,
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  );
  res.json(newFriend);
};

const deleteFriend = async (req, res) => {
  const delFriend = await User.findOneAndUpdate(
    req.params.id,
    { $pull: { friends: req.params.friendId } },
    { new: true }
  );
  res.json(delFriend);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
