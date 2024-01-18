import React from "react";
import AdminStaffNav from "./staff/AdminStaffNav";
import "../../styles/layout/DisplayContant.css";
import AdminStaffDisplay from "./staff/AdminStaffDisplay";

const AdminStaff = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminStaffNav />
      </div>
      <div className="display-contant-display">
        <AdminStaffDisplay />
      </div>
    </div>
  );
};

export default AdminStaff;
