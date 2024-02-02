import React from "react";
import { Route, Routes } from "react-router-dom";
import StaffHomePage from "./StaffHomePage";
import StaffCourses from "./StaffCourses";
import StaffAttendance from "./StaffAttendance";
import StaffRequests from "./StaffRequests";
import StaffProfile from "./StaffProfile";

const StaffDisplay = () => {
  return (
    <Routes>
      <Route path="/Home" Component={StaffHomePage} />
      <Route path="/Courses" Component={StaffCourses} />
      <Route path="/Attendance" Component={StaffAttendance} />
      <Route path="/Requests" Component={StaffRequests} />
      <Route path="/Profile" Component={StaffProfile} />
    </Routes>
  );
};

export default StaffDisplay;
