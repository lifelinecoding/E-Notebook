import express from "express";
import fetchUser from "../Middleware/fetchuser.js";
import Notes from "../Models/Notes.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Route 1:- Get all the notes using : GET "api/notes/fetchallnotes" : Login Required

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    if (!notes) {
      return res.status(400).json({ Error: "User not found" });
    }
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

// Route 2:- Add a new note using : POST "api/notes/addnote" : Login Required

router.post(
  "/addnote",
  fetchUser,
  [
    body("title")
      .notEmpty()
      .withMessage("Title cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Title should not be less than 3 characters"),
    body("description")
      .notEmpty()
      .withMessage("Description should not be empty")
      .isLength({ min: 5, max: 80 })
      .withMessage(
        "Note description length should lie between 5 to 80 characters"
      ),
  ],
  async (req, res) => {
    try {
      // Validation check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, tag } = req.body;
      // let note = new Notes({
      //   title, description, tag, user: req.user.id
      // })

      // note.save();

      let note = await Notes.create({
        title: title,
        description: description,
        tag: tag,
        user: req.user.id,
      });

      res.json(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ Error: "Internal Server Error" });
    }
  }
);

export default router;
