const { del } = require("express/lib/application");
const Thought = require("../Models/Thought");
const User = require("../Models/User");

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

const addReaction = async (req, res) => {
  const newReaction = await User.findOneAndUpdate(
    req.params.id,
    { $addToSet: { reactions: req.params.reactionId } },
    { new: true }
  );
  res.json(newReaction);
};

const deleteReaction = async (req, res) => {
  const delReaction = await User.findOneAndUpdate(
    req.params.id,
    { $pull: { reactions: req.params.reactionId } },
    { new: true }
  );
  res.json(delReaction);
};

module.exports = {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
