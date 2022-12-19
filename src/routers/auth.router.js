const authRouter = require("express").Router();

const {
  login,
  resetPassword,
  register,
  forgotPassword
} = require("../controllers/auth.controller");

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
