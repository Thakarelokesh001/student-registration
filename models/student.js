const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: Number,
      required: true,
      trim: true,
    },
    subjects: {
      type: String,
      required: true,
      trim: true,
    },
    class: {
      type: String,
      required: true,
      trim: true,
    },
    society: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

const student = mongoose.model("Student-registration", studentSchema);
module.exports = student;
