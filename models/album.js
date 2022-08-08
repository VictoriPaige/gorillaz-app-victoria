const mongoose = require("mongoose");
const { Schema } = mongoose;

const Album = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("albums", Album);
