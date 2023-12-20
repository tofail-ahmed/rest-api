const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Tofail Ahmed",
    email: "atofail50@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Sayem Ahmed",
    email: "sayem@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Naimun Nahar",
    email: "nahar@gmail.com",
  },
];
module.exports = users;
