import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/PageContantNavBar.css";

const StaffNavBar = () => {
  return (
    <div className="page-contant-NavBar">
      <div className="page-contant-contant">
        <Link to="/Staffs/Home">Home</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Staffs/Courses">Courses</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Staffs/Attendance">Attendance</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Staffs/Requests">Requests</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Staffs/Profile">Profile</Link>
      </div>
    </div>
  );
};

export default StaffNavBar;
