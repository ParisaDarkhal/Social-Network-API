const router = require("express").Router();
const userRoutes = require("./userRouts");

router.use("/users", userRoutes);
module.exports = router;
