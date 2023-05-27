const { Schema, model, Types } = require("mongoose");

const UserScheme = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email.`,
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thaughts",
      },
    ],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      virtuals: ture,
    },
  }
);

// Schema Settings:Create a virtual called friendCount that retrieves the length of the user's friends array field on query
UserScheme.virtual("friendCount").get(function () {
  return this.friends.length; //this ==> UserSchema
});

// sets User model
const User = model("User", UserScheme);

// export module
module.exports = User;
