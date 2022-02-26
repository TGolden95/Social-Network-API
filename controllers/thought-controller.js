const { del } = require("express/lib/application");
const Thought = require("../Models/Thought");
const User = require("../Models/user");

const getThoughts = async (req, res) => {
  const thought = await Thought.find(req.params.id);
  res.json(thought);
};

const createThought = async (req, res) => {
  const newThought = await Thought.create(req.body);
  const userThought = await User.findOneAndUpdate(
    req.body.userId,
    { $push: { thoughts: newThought._id } },
    { new: true }
  );
  res.json(userThought);
};

const getThoughtById = async (req, res) => {
  const thoughtId = await Thought.findOne(req.params.id);
  res.json(thoughtId);
};

const updateThought = async (req, res) => {
  const thoughtUpdate = await Thought.findByIdAndUpdate(req.params.id);
  res.json(thoughtUpdate);
};

const deleteThought = async (req, res) => {
  const delThought = await Thought.findByIdAndDelete(req.params.id);
  res.json(delThought);
};

module.exports = {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
};
