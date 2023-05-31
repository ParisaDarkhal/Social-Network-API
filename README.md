Sure! Here's a sample README.md file for your Social Network API project:

# Social Network API

A backend API for a social network application that handles large amounts of unsorted data using MongoDB, a NoSQL database, and JavaScript. The API is built with Node.js and utilizes the Express framework for handling HTTP requests. Mongoose is used as the Object-Document Mapping (ODM) library for MongoDB.

## Features

- Start the server and sync Mongoose models with the MongoDB database.
- Retrieve formatted JSON data for users and thoughts through GET routes.
- Create, update, and delete users and thoughts through POST, PUT, and DELETE routes.
- Create and delete reactions to thoughts.
- Add and remove friends from a user's friend list.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/ParisaDarkhal/Social-Network-API
```

2. Install the dependencies:

```shell
npm install
```

3. Configure the MongoDB connection by providing the appropriate URL in `.env` file:

```
MONGODB_URI=mongodb://localhost/social-network
```

4. Start the server:

```shell
npm start
```

## Usage

Make sure the server is running and the MongoDB connection is established. You can then use Insomnia or any other HTTP client to interact with the API.

### Users

- **GET `/api/users`**: Retrieve all users.

- **GET `/api/users/:userId`**: Retrieve a specific user by ID.

- **POST `/api/users`**: Create a new user.

- **PUT `/api/users/:userId`**: Update an existing user.

- **DELETE `/api/users/:userId`**: Delete a user.

### Thoughts

- **GET `/api/thoughts`**: Retrieve all thoughts.

- **GET `/api/thoughts/:thoughtId`**: Retrieve a specific thought by ID.

- **POST `/api/thoughts`**: Create a new thought.

- **PUT `/api/thoughts/:thoughtId`**: Update an existing thought.

- **DELETE `/api/thoughts/:thoughtId`**: Delete a thought.

### Reactions

- **POST `/api/thoughts/:thoughtId/reactions`**: Create a new reaction for a thought.

- **DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`**: Delete a reaction from a thought.

### Friends

- **POST `/api/users/:userId/friends/:friendId`**: Add a friend to a user's friend list.

- **DELETE `/api/users/:userId/friends/:friendId`**: Remove a friend from a user's friend list.

---

## Mockup

![mockup-1](images/demo-01.gif)
![mockup-1](images/demo-03.gif)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to modify and use the code according to your needs.

---

[Link to GitHub Repository ](https://github.com/ParisaDarkhal/Social-Network-API)
