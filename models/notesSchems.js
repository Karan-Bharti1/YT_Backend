const mongoose = require("mongoose");

const ytnoteSchema = new mongoose.Schema({
  videoId: { type: String, required: true }, 
  content: { type: String, required: true },
  tags: [{ type: String }], 
}, { timestamps: true });

module.exports = mongoose.model("YT Note", ytnoteSchema);
