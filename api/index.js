const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const Student = require("./models/Student");
const Staff = require("./models/Staff");
const Course = require("./models/Course");
const FaceData = require("./models/FaceData");

const app = express();
const PORT = 5000;
const bcryptSalt = 10;
const JwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
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

// Middleware to authenticate the token
const authenticateToken = (request, response, next) => {
  const token = request.cookies.token;

  if (!token) {
    return response.status(401).json({ error: "Token not found" });
  }

  jwt.verify(token, JwtSecret, {}, (error, userData) => {
    if (error) {
      response.status(401).json({ error: "Token is invalid or expired" });
    } else {
      request.userData = userData;
      next();
    }
  });
};

// Register student
app.post("/student/register", async (request, response) => {
  const {
    name,
    email,
    regno,
    yearOfStudy,
    courses,
    mobile,
    password,
    subject,
  } = request.body;

  try {
    const studentDoc = await Student.create({
      name,
      email,
      regno,
      yearOfStudy,
      courses,
      subject,
      mobile,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    response.json(studentDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

// Register staff
app.post("/staff/register", async (request, response) => {
  const { name, email, idno, department, role, mobile, password } =
    request.body;

  try {
    const staffDoc = await Staff.create({
      name,
      email,
      idno,
      department,
      role,
      mobile,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    response.json(staffDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

// Register course
app.post("/course/register", async (request, response) => {
  const { name, courseCode, yearOfStudy, subject, lecturerIdNo } = request.body;

  try {
    const courseDoc = await Course.create({
      name,
      courseCode,
      yearOfStudy,
      subject,
      lecturerIdNo,
    });
    response.json(courseDoc);
  } catch (error) {
    response.status(422).json(error);
  }
});

// Login
app.post("/staff/login", async (request, response) => {
  const { email, password } = request.body;
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
      response.status(422).json("Invalid password");
    }
  } else {
    response.status(404).json("User not found");
  }
});

app.post("/student/login", async (request, response) => {
  const { email, password } = request.body;
  const studentDoc = await Student.findOne({ email });

  if (studentDoc) {
    const passOk = bcrypt.compareSync(password, studentDoc.password);
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
      response.status(422).json("Invalid password");
    }
  } else {
    response.status(404).json("User not found");
  }
});

app.post("/logout", async (request, response) => {
  response.clearCookie("token").json({ message: "Logged out successfully" });
});

app.get("/staffs", async (request, response) => {
  response.json(await Staff.find());
});

app.get("/students", async (request, response) => {
  response.json(await Student.find());
});

app.get("/courses", async (request, response) => {
  response.json(await Course.find());
});

// Get staff details (requires authentication)
app.get("/staff", authenticateToken, async (request, response) => {
  try {
    const { id } = request.userData;
    const staff = await Staff.findById(id);

    if (staff) {
      const { name, email, mobile, _id } = staff;
      response.json({ name, email, mobile, _id });
    } else {
      response.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// Get student details (requires authentication)
app.get("/student", authenticateToken, async (request, response) => {
  try {
    const { id } = request.userData;
    const student = await Student.findById(id);

    if (student) {
      const { name, email, mobile, _id } = student;
      response.json({ name, email, mobile, _id });
    } else {
      response.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/staff/:id", async (request, response) => {
  const { id } = request.params;

  response.json(await Staff.findById(id));
});

// Update staff information including face data
app.put("/staff/:id", async (request, response) => {
  const staffId = request.params.id;
  const { name, email, idno, department, role, mobile, password, file } =
    request.body;

  try {
    const existingStaff = await Staff.findById(staffId);

    if (!existingStaff) {
      return response.status(404).json({ message: "Staff not found" });
    }

    existingStaff.name = name || existingStaff.name;
    existingStaff.email = email || existingStaff.email;
    existingStaff.idno = idno || existingStaff.idno;
    existingStaff.department = department || existingStaff.department;
    existingStaff.role = role || existingStaff.role;
    existingStaff.mobile = mobile || existingStaff.mobile;

    if (password) {
      existingStaff.password = bcrypt.hashSync(password, bcryptSalt);
    }

    const updatedStaff = await existingStaff.save();

    
    response.json(updatedStaff);
  } catch (error) {
    response.status(422).json(error);
  }
});

// Delete staff by ID
app.delete("/staff/:id", async (request, response) => {
  const staffId = request.params.id;

  try {
    const deletedStaff = await Staff.findByIdAndDelete(staffId);

    if (deletedStaff) {
      response.json({ message: "Staff deleted successfully" });
    } else {
      response.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/course/:id", async (request, response) => {
  const { id } = request.params;

  response.json(await Course.findById(id));
});

// Update course information
app.put("/course/:id", async (request, response) => {
  const courseId = request.params.id;
  const { name, courseCode, yearOfStudy, subject, lecturerIdNo } = request.body;

  try {
    // Find the staff member by ID
    const existingCourse = await Course.findById(courseId);

    if (!existingCourse) {
      return response.status(404).json({ message: "Course not found" });
    }

    // Update only the provided fields
    existingCourse.name = name || existingCourse.name;
    existingCourse.courseCode = courseCode || existingCourse.courseCode;
    existingCourse.yearOfStudy = yearOfStudy || existingCourse.yearOfStudy;
    existingCourse.subject = subject || existingCourse.subject;
    existingCourse.lecturerIdNo = lecturerIdNo || existingCourse.lecturerIdNo;

    // Update the password only if a new one is provided

    // Save the updated staff information
    const updatedCourse = await existingCourse.save();

    response.json(updatedCourse);
  } catch (error) {
    response.status(422).json(error);
  }
});

// Delete course by ID
app.delete("/course/:id", async (request, response) => {
  const courseId = request.params.id;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (deletedCourse) {
      response.json({ message: "Course deleted successfully" });
    } else {
      response.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});




app.get("/student/:id", async (request, response) => {
  const { id } = request.params;

  response.json(await Student.findById(id));
});

// Delete student by ID
app.delete("/student/:id", async (request, response) => {
  const studentId = request.params.id;

  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (deletedStudent) {
      response.json({ message: "Student deleted successfully" });
    } else {
      response.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/student/:id", async (request, response) => {
  const studentId = request.params.id;
  const { name, email, regno, yearOfStudy, mobile, subjects, courses, file } =
    request.body;

  try {
    // Find the student by ID
    const existingStudent = await Student.findById(studentId);

    // ... (unchanged)

    // Save the updated student information
    const updatedStudent = await existingStudent.save();

    // Automatically add courses based on conditions
    const matchingCourses = await Course.find({
      yearOfStudy: yearOfStudy,
      subject: { $in: subjects },
    });

    if (matchingCourses.length > 0) {
      // Add the matching courses to the student
      existingStudent.courses = matchingCourses.map(
        (course) => course.courseCode
      );

      // Save the updated student information with added courses
      await existingStudent.save();
    }

    

    response.json(updatedStudent);
  } catch (error) {
    response.status(422).json(error);
  }
});

// ... (unchanged)



app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
