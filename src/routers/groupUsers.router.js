const groupUsersRouter = require("express").Router();
const {
  getGroupUsers,
  createGroupUser,
  getGroupUserById,
  updateGroupUser,
  deleteGroupUser,
} = require("../controllers/groupUsers.controller");

groupUsersRouter.get("/", getGroupUsers);
groupUsersRouter.get("/:id", getGroupUserById);
groupUsersRouter.post("/", createGroupUser);
groupUsersRouter.patch("/:id", updateGroupUser);
groupUsersRouter.delete("/:id", deleteGroupUser);

module.exports = groupUsersRouter;
