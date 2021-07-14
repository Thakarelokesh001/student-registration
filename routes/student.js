const express = require("express");
const router = express.Router();
const Student = require("../models/student");
router.post("/register", async (req, res) => {
  const student = await new Student({
    name: req.body.name,
    contact: req.body.contact,
    subjects: req.body.subjects,
    class: req.body.class,
    society: req.body.society,
    year: req.body.year,
  });
  student.save();
  res.json({ message: "User Registered Successfully", data: student });
});

router.put("/updateStudent/:id", async (req, res) => {
  const stud = await Student.findOneAndUpdate(
    req.params._id,
    {
      name: req.body.name,
      contact: req.body.contact,
      subjects: req.body.subjects,
      class: req.body.class,
      society: req.body.society,
      year: req.body.year,
    },
    { new: true }
  );
  res.send(stud);
});
router.get("/getstudent", async (req, res) => {
  const student = await Student.find();
  res.send(student);
});
module.exports = router;
