const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birthYear: { type: String, required: true },
  birthPlace: { type: String, required: true },
  created: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("users", userSchema);
