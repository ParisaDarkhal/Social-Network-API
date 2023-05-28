const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat"); // to show date in standard format

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
      get: (createdAtVal) => {
        dateFormat(createdAtVal);
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ToughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => {
        dateFormat(createdAtVal);
      },
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
const Thaughts = model("Thoughts", ToughtSchema);

// export module
module.exports = Thaughts;
