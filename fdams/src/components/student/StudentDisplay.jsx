import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentHomePage from "./StudentHomePage";
import StudentCourses from "./StudentCourses";
import StudentAttendance from "./StudentAttendance";
import StudentRequests from "./StudentRequests";
import StudentProfile from "./StudentProfile";

const StudentDisplay = () => {
  return (
    <Routes>
      <Route path="/Home" Component={StudentHomePage} />
      <Route path="/Courses" Component={StudentCourses} />
      <Route path="/Attendance" Component={StudentAttendance} />
      <Route path="/Requests" Component={StudentRequests} />
      <Route path="/Profile" Component={StudentProfile} />
    </Routes>
  );
};

export default StudentDisplay;
