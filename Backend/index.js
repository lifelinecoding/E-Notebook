import express from "express";
import connectToDatabase from "./Database.js";
import authRoutes from "./Routes/auth.js";
import notesRoute from "./Routes/notes.js";

const app = express();

const port = 5000;

// Connect to the database
connectToDatabase();

//Middleware
app.use(express.json());

// Available Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoute);

app.get("/", (req, res) => {
  res.send("Hello Aditya!");
});

app.listen(port, () => {
  console.log(`E-Notebook Backend listening on port ${port}`);
});
