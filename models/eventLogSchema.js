const mongoose = require("mongoose");

const eventLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, 
  details: { type: Object }, 
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("EventLog", eventLogSchema);
