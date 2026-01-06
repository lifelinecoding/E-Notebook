import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Your notes are here!");
});

export default router;
