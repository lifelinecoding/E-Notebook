import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/";

const connectToDatabase = async () => {
    mongoose.connect(DB_URI).then(() => {
        console.log("Connected to the database successfully");
    }).catch((error) => {
        console.error("Database connection error:", error);
    });
};

export default connectToDatabase;