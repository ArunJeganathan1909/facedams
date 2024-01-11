import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/DisplayContantHeader.css";

const AdminStaffNav = () => {
  return (
    <div className="displayNavBar-header">
      <div className="displayNavBar-contant">
        <Link>Add Staff</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>Academic Staff</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>Non Academic Staff</Link>
      </div>
    </div>
  );
};

export default AdminStaffNav;
