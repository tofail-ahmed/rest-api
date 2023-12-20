let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
//get all users
const getSingleUserController = (req, res) => {
  const id = req.params.id;
  const selectedUser = users.find((user) => user.id === id);
  if (selectedUser) {
    res.send(selectedUser);
  } else {
    res.send("user not found");
  }
};
const getUsersController = (req, res) => {
  res.status(200).send({ users });
};

//create a user
const postUserController = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: uuidv4(), username, email };
  users.push(newUser);
  console.log(users);
  res.status(200).send({
    message: "this is post method",
    data: users,
  });
};

//update a user
const putUserController = async (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;

  const selectedUser = users.find((user) => user.id === id);
  if (selectedUser) {
    selectedUser.username = username;
    selectedUser.email = email;
    res.send(users);
  }
};

//delete a user
const deleteUserController = (req, res) => {
  const id = req.params.id;
  const newUsers = users.filter((user) => user.id !== id);
  users = newUsers;

  res.status(200).send({
    message: "this is delete method",
    data: users,
  });
};

//delete by email
// const deleteUserByemail = (req, res) => {
//   const email = req.params.email;

//   let userDeleted = false; // Flag to track if user was deleted

//   users = users.filter((user) => {
//     if (user.email === email) {
//       userDeleted = true; // Set flag to true if user is found and deleted
//       return false; // Exclude the user from the filtered array
//     }
//     return true; // Keep other users in the filtered array
//   });

//   if (userDeleted) {
//     res.status(200).send({
//       message: "User deleted successfully",
//       data: users,
//     });
//   } else {
//     res.status(404).send({
//       message: "User not found",
//       data: users,
//     });
//   }
// };

module.exports = {
  getSingleUserController,
  getUsersController,
  postUserController,
  putUserController,
  deleteUserController,
};
