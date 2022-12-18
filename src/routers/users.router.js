const usersRouter = require("express").Router();
const {
  getUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/", createUsers);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
