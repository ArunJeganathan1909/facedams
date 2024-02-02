import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/DisplayContantHeader.css";

const AdminStudentNav = () => {
  return (
    <div className="displayNavBar-header">
      <div className="displayNavBar-contant">
        <Link to="/Admin/Students/AddStudent">Add Student</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Students/1st_Year">1st Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Students/2nd_Year">2nd Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Students/3rd_Year">3rd Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Students/4th_Year">4th year</Link>
      </div>
    </div>
  );
};

export default AdminStudentNav;
