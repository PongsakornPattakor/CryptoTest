import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  fiatBalance: { type: Number, default: 0 },
});
const User = mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;
