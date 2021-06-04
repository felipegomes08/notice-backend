const mongoose = require("../database/mongo");

const User = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    senha: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

const userSchema = mongoose.model("User",User);

module.exports = userSchema;
