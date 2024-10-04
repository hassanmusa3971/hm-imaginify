import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
      clerk_id: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      photo: { type: String, required: true },
      firstName: { type: String },
      lastName: { type: String},
      plainId: { type: Number, default: 1 },
      creditBlance: { type: Number, default: 10 },
});

const User = models.User || model("User", UserSchema);
export default User;