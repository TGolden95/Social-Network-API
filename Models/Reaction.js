const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const { schema } = require("./user");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    validate: [
      ({ length }) => length <= 280,
      "Maximum length is 280 characters!",
    ],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

module.exports = reactionSchema;
