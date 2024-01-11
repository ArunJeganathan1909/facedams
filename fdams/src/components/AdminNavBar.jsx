import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/AdminNavBar.css";

const AdminNavBar = () => {
  return (
    <div className="AdminNavBar">
      <div className="Admin-contant">
        <Link to="/Admin/Home">Home</Link>
      </div>
      <div className="Admin-contant">
        <Link to="/Admin/Staff">Staffs</Link>
      </div>
      <div className="Admin-contant">
        <Link to="/Admin/Students">Students</Link>
      </div>
      <div className="Admin-contant">
        <Link to="/Admin/Courses">Courses</Link>
      </div>
      <div className="Admin-contant">
        <Link to="/Admin/Requests">Requests</Link>
      </div>
    </div>
  );
};

export default AdminNavBar;
