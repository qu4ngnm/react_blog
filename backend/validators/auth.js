const { check } = require("express-validator");
exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Please enter your name"),
  check("email").not().isEmail().withMessage("Please enter your email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password at least 6 characters"),
];

exports.userSigninValidator = [
  check("email").not().isEmail().withMessage("Please enter your email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password at least 6 characters"),
];
