const express = require("express");
const { body } = require("express-validator");
const validate = require("../middleware/validationMiddleware");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post(
  "/register",

  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],

  validate,

  registerUser
);
router.post(
  "/login",

  [
    body("email").isEmail(),
    body("password").notEmpty(),
  ],

  validate,

  loginUser
);
module.exports = router;