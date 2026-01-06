import express from "express";
import User from "../Models/Users.js";
import { body, validationResult } from "express-validator";
import bcrypt from 'bcryptjs';

const router = express.Router();

//Create a user using: POST "/api/auth/createuser"

router.post(
  "/createuser",
  // Checking the validation of the request body attributes.
  [
    body("name")
      .notEmpty()
      .withMessage("Name field should not be empty")
      .isLength({ min: 3 })
      .withMessage("Name should be at least 3 characters"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  async (req, res) => {
    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User already exists with this email" });
      }

      // Securing the password using hash function of bcryptjs and also adding salt into it.
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      // Create user in the database
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });


      res
        .status(201)
        .json({ success: true, message: "User created successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default router;
