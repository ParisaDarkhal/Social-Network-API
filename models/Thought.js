const { Schema, model, Types } = require("mongoose");

const formatDate = require("../utils/dateFormat"); // to show date in standard format
function getFormattedDate(date) {
  return formatDate(date);
}

const ReactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => {
        new Types.ObjectId();
      },
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => getFormattedDate(createdAt),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => getFormattedDate(createdAt),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionsSchema],
  },
  {
    toJSON: { getters: true },
  }
);

// sets Thoughts model
const Thaughts = model("Thoughts", ThoughtSchema);

// export module
module.exports = Thaughts;
