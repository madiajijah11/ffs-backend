const authRouter = require("express").Router();

const {
  login,
  resetPassword,
  registerEmployee,
  registerRecruiter,
  forgotPassword,
} = require("../controllers/auth.controller");
const { validate, rules } = require("../middlewares/validator.middleware");

authRouter.post("/login", rules("login"), validate, login);
authRouter.post(
  "/registerEmployee",
  rules("registerEmployee"),
  validate,
  registerEmployee
);
authRouter.post(
  "/registerRecruiter",
  rules("registerRecruiter"),
  validate,
  registerRecruiter
);
authRouter.post(
  "/forgotPassword",
  rules("forgotPassword"),
  validate,
  forgotPassword
);
authRouter.post(
  "/resetPassword",
  rules("resetPassword"),
  validate,
  resetPassword
);

module.exports = authRouter;
