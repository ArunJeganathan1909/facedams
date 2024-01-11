const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const Student = require("./models/Stdedent");
const Staff = require("./models/Staff");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5000;
const bcryptSalt = 10;
const JwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";
app.use(cors());
app.use(express.json());
app.use(cookieParser());

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/student/register", async (request, response) => {
  const { name, email, regno, yearOfStudy, courses, mobile, password } =
    request.body;

  try {
    const studentDoc = await Student.create({
      name,
      email,
      regno,
      yearOfStudy,
      courses,
      mobile,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    response.json(studentDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

app.post("/staff/register", async (request, response) => {
  const { name, email, idno, department, role, courses, mobile, password } =
    request.body;

  try {
    const staffDoc = await Staff.create({
      name,
      email,
      idno,
      department,
      role,
      courses,
      mobile,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    response.json(staffDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

app.post("/course/register", async (request, response) => {
  const { name, courseCode, yearOfStudy } = request.body;

  try {
    const staffDoc = await Staff.create({
      name,
      courseCode,
      yearOfStudy,
    });
    response.json(staffDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const studentDoc = await Student.findOne({ email });

  if (!studentDoc) {
    const staffDoc = await Staff.findOne({ email });

    if (staffDoc) {
      const passOk = bcrypt.compareSync(password, staffDoc.password);

      if (passOk) {
        jwt.sign(
          {
            email: staffDoc.email,
            id: staffDoc._id,
          },
          JwtSecret,
          {},
          (error, token) => {
            if (error) throw error;
            response.cookie("token", token).json(staffDoc);
          }
        );
      } else {
        response.status(422).json("Password not ok");
      }
    } else {
      response.json("not found");
    }
  } else {
    if (passOk) {
      jwt.sign(
        {
          email: studentDoc.email,
          id: studentDoc._id,
        },
        JwtSecret,
        {},
        (error, token) => {
          if (error) throw error;
          response.cookie("token", token).json(studentDoc);
        }
      );
    } else {
      response.status(422).json("Password not ok");
    }
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
