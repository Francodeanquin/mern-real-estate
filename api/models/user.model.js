import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://res.cloudinary.com/dfvpkjhsw/image/upload/v1709238832/profile-icon-png-898_loz4g2.png"
  }
},{timestamps:  true});

const User = mongoose.model("User", userSchema)

export default User;