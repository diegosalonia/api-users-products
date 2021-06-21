const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    lastaName: String,
    email: String,
    birthdate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('users' ,userSchema)