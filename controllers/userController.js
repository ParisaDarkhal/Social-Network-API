const { User } = require("../models");
const userRouter = require("express").Router();

// get all users
userRouter.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get user by id
userRouter.get("/:id", async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a user
userRouter.post("/post-user", async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = new User({ username, email });

    const savedUser = await newUser.save();
    if (savedUser) {
      res.status(200).json(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = userRouter;
