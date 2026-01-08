import express from "express";
import fetchUser from "../Middleware/fetchuser.js";
import Notes from "../Models/Notes.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Route 1:- Get all the notes using : GET "api/notes/fetchallnotes" : Login Required

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    // Fetching all notes of a specific user by the user ID
    const notes = await Notes.find({ user: req.user.id });

    //Checking if the notes are available or not.
    if (!notes) {
      return res
        .status(400)
        .json({ Error: "No notes available for this user" });
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

      // Destructuring the details from the request body to create a new note in the database.
      const { title, description, tag } = req.body;

      // Creating a new note in the database
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

// Route 3:- Update an existing note using : PUT "api/notes/updatenote" : Login Required

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    // Create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized Access");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

export default router;
