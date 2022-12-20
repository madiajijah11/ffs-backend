const authRouter = require("express").Router();

const {
  login,
  resetPassword,
  registerEmployee,
  registerRecruiter,
  forgotPassword,
} = require("../controllers/auth.controller");
const { validate, rules } = require("../middlewares/vaidator.middleware");

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
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
