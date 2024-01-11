import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/DisplayContantHeader.css";

const AdminStudentNav = () => {
  return (
    <div className="displayNavBar-header">
      <div className="displayNavBar-contant">
        <Link>Add Student</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>1st Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>2nd Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>3rd Year</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>4th year</Link>
      </div>
    </div>
  );
};

export default AdminStudentNav;
