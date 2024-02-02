import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminStaff from "./AdminStaff";
import AdminStudent from "./AdminStudent";
import AdminCourses from "./AdminCourses";
import AdminRequests from "./AdminRequests";

const AdminDisplay = () => {
  return (
    <Routes>
      <Route path="/Home" element={<h1>Welcome to Admin Panel</h1>} />
      <Route path="/Staff/*" Component={AdminStaff} />
      <Route path="/Students/*" Component={AdminStudent} />
      <Route path="/Courses/*" Component={AdminCourses} />
      <Route path="/Requests/*" Component={AdminRequests} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AdminDisplay;
