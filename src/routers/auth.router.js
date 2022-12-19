const authRouter = require("express").Router();

const {
  login,
  resetPassword,
  registerEmployee,
  registerRecruiter,
  forgotPassword
} = require("../controllers/auth.controller");

authRouter.post("/login", login);
authRouter.post("/registerEmployee", registerEmployee);
authRouter.post("/registerRecruiter", registerRecruiter);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
