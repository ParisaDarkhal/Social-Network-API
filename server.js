const express = require("express");
const db = require("./config/connection");
// Require model
// const { ??? } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// I don't know what this part of code does. Just found it on stackoverflow (See comments at the bottom)
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/social-network",
//   {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Port Listen
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// THE CODE ABOVE EXPLANATION
// 1. `mongoose.connect`: This method is used to connect to a MongoDB database. It takes two arguments: the connection URI and an options object.

// 2. `process.env.MONGODB_URI`: This code retrieves the MongoDB connection URI from the environment variable `MONGODB_URI`. Environment variables are often used to store sensitive information like database connection details. If the `MONGODB_URI` environment variable is not set, it falls back to the default URI `'mongodb://localhost/social-network'`, which connects to a MongoDB database named "social-network" running on the local machine.

// 3. `useFindAndModify: false`: This option disables the use of the deprecated `findOneAndUpdate()` and `findOneAndDelete()` methods in Mongoose. When set to `false`, Mongoose uses the MongoDB driver's `findOneAndUpdate()` and `findOneAndDelete()` methods instead.

// 4. `useNewUrlParser: true`: This option tells Mongoose to use the new MongoDB connection string parser instead of the deprecated one. It ensures compatibility with MongoDB connection strings that use the new format.

// 5. `useUnifiedTopology: true`: This option enables the new MongoDB Unified Topology Engine, which provides a more efficient and reliable way to handle database connections. It replaces the deprecated MongoDB Native Driver's connection engine.

// In summary, this code establishes a connection to a MongoDB database using Mongoose in an Express application. It utilizes the provided connection URI or falls back to a default URI, sets some options to ensure compatibility and enable new features, and disables the use of deprecated methods.
