const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    website: String,

    degree: {
      type: Schema.Types.ObjectId,
      ref: "Degrees"
    },

    university: {
      type: Schema.Types.ObjectId,
      ref: "University"
    },

    role: {
      type: String,
      enum: ["Student", "Teacher"],
      required: true,
      default: "Student"
    }
  },

  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

userSchema.index({ email: 1 }, { unique: true });
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
