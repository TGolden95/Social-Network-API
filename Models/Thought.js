const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require("./Reaction");
const { schema } = require("./user");

const thoughtSchema = new Schema({
  thoughtText: {
    type: Strring,
    required: true,
    validate: [
      ({ length }) => length > 0 && length <= 280,
      "Must be between 1 and 280 characters!",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const thought = model("thought", thoughtSchema);

moduole.exports = thought;
