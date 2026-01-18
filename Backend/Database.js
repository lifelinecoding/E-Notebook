import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.local" });

const DB_URI = process.env.MONGO_URI;

const connectToDatabase = async () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Connected to the database successfully");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};

export default connectToDatabase;
