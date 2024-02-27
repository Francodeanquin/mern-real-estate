import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

const app = express();

app.listen(4000, () => {
  console.log("server is running on port 4000!!!");
});
