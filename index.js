const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const student = require("./models/student");
const studentRoute = require("./routes/student");
app.use(bodyParser.json());
app.use("/api", studentRoute);
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
mongoose
  .connect("mongodb://localhost:27017/student-registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO MONGODB DATABASE SUCCESSFULLY");
  })
  .catch(() => {
    console.log("FAILED TO CONNECT TO THE DATABASE");
  });
