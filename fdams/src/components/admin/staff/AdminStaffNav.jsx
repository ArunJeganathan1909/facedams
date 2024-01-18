import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/DisplayContantHeader.css";

const AdminStaffNav = () => {
  return (
    <div className="displayNavBar-header">
      <div className="displayNavBar-contant">
        <Link to="/Admin/Staff/AddStaff">Add Staff</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Staff/AcademicStaff">Academic Staff</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link to="/Admin/Staff/NonAcademicStaff">Non Academic Staff</Link>
      </div>
    </div>
  );
};

export default AdminStaffNav;
