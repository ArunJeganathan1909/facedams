import React from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/PageContantNavBar.css";

const StudentNavBar = () => {
  return (
    <div className="page-contant-NavBar">
      <div className="page-contant-contant">
        <Link to="/Students/Home">Home</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Students/Courses">Courses</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Students/Attendance">Attendance</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Students/Requests">Requests</Link>
      </div>
      <div className="page-contant-contant">
        <Link to="/Students/Profile">Profile</Link>
      </div>
    </div>
  );
};

export default StudentNavBar;
