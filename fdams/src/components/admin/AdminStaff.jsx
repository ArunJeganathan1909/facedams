import React from "react";
import AdminStaffNav from "./staff/AdminStaffNav";
import "../../styles/layout/DisplayContant.css";

const AdminStaff = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminStaffNav />
      </div>
      <div className="display-contant-display">Admin Staff display</div>
    </div>
  );
};

export default AdminStaff;
