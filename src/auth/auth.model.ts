import mongoose, { Schema } from "mongoose"

const AuthSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    password: {
      type: String,
      required: true,
      // minlength: 4,
      // maxlength: 15
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, required: true, ref: 'Roles' },
    profileImage: String
  },
  { timestamps: true }
)

export default mongoose.model('Auths', AuthSchema)