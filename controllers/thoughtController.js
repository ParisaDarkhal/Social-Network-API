const { Thought } = require("../models");
const thoughtRouter = require("express").Router();

// get all thoughts
thoughtRouter.get("/", async (req, res) => {
  try {
    const result = await Thought.find({});
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get thought by id
thoughtRouter.get("/:id", async (req, res) => {
  try {
    const result = await Thought.findOne({ _id: req.params.id });
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create a thought
thoughtRouter.post("/post-thought", async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const newThought = new Thought({ thoughtText, username });
    const savedThought = await newThought.save();
    if (savedThought) {
      console.log(savedThought);
      res.status(200).json(savedThought);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Export Module
module.exports = thoughtRouter;
