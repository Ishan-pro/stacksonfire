import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  password: { type: String, validation: { min: 8 } },
});

export default Users || mongoose.model("Users", UserSchema);
