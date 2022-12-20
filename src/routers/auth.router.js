const authRouter = require("express").Router();

const {
  login,
  resetPassword,
  registerEmployee,
  registerRecruiter,
  forgotPassword,
} = require("../controllers/auth.controller");
const { body } = require("express-validator");

authRouter.post(
  "/login",
  body("email").isEmail().notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
  login
);
authRouter.post(
  "/registerEmployee",
  body("fullName").notEmpty().withMessage("Full Name is required"),
  body("email").isEmail().notEmpty().withMessage("Email is required"),
  body("phoneNumber").notEmpty().withMessage("Phone Number is required"),
  body("password").notEmpty().withMessage("Password is required"),
  registerEmployee
);
authRouter.post(
  "/registerRecruiter",
  body("fullName").notEmpty().withMessage("Full Name is required"),
  body("email").isEmail().notEmpty().withMessage("Email is required"),
  body("phoneNumber").notEmpty().withMessage("Phone Number is required"),
  body("password").notEmpty().withMessage("Password is required"),
  body("companyName").notEmpty().withMessage("Company Name is required"),
  body("companyField").notEmpty().withMessage("Company Field is required"),
  registerRecruiter
);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
