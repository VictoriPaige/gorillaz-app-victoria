const mongoose = require("mongoose");
const { Schema } = mongoose;

const Song = new Schema(
  {
    name: { type: String, required: true },
    runtime: { type: Number, required: true },
    lyrics: { type: String, required: false },
    isDeluxe: { type: Boolean, required: true },
    isExplicit: { type: Boolean, required: true },
    features: { type: Array, required: false },
    album: { type: Schema.Types.ObjectId, ref: "albums" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("songs", Song);
