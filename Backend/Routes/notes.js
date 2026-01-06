import express from "express";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Your notes are here!");
});


export default router;
