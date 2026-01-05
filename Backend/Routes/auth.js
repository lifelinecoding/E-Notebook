import express from "express";
import User from "../Models/Users.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

//Create a user using: POST "/api/auth"

router.post(
  "/",
  [
    body('name')
    .notEmpty().withMessage('Name field should not be empty')
    .isLength({ min: 3 }).withMessage('Name should be at least 3 characters'),
    body("email", "Please enter a valid email").isEmail(),
    body(
      "password",
      "Password length should be more than 8 characters"
    ).isLength({
      min: 8,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        res.send(`Error: ${err}`);
      });
  }
);

export default router;
