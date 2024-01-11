import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/DisplayContantHeader.css";

const AdminRequestsNav = () => {
  return (
    <div className="displayNavBar-header">
      <div className="displayNavBar-contant">
        <Link>Staffs Requests</Link>
      </div>
      <div className="displayNavBar-contant">
        <Link>Students Requests</Link>
      </div>
    </div>
  );
};

export default AdminRequestsNav;
