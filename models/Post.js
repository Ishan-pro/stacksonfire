import mongoose from "mongoose";
import Users from "./Users";

const PostSchema = mongoose.Schema({
  text: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

export default Posts || mongoose.model("Posts", PostSchema);
