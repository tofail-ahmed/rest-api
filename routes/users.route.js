const express = require("express");
const {
  getUsersController,
  postUserController,
  putUserController,
  deleteUserController,
  getSingleUserController,
  deleteUserByemail,
} = require("../controllers/users.controller");
const router = express.Router();
router.get("/:id", getSingleUserController);
router.get("/", getUsersController);
router.post("/", postUserController);
router.put("/:id", putUserController);
router.delete("/:id", deleteUserController);

module.exports = router;
