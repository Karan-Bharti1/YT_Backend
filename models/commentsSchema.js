const mongoose = require("mongoose");

const ytcommentSchema = new mongoose.Schema({
  videoId: { type: String, required: true }, // Refers to YouTube video
  commentId: { type: String, required: true, unique: true }, // YouTube comment ID
  text: { type: String, required: true },
  author: { type: String },
  parentCommentId: { type: String, default: null }, // null = top-level comment
}, { timestamps: true });

module.exports = mongoose.model("YTComment", ytcommentSchema);
