import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
dotenv.config()
import authRouter from "./routes/auth.route.js"
const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)


app.listen(4000, () => {
  console.log("server is running on port 4000!!!");
});
