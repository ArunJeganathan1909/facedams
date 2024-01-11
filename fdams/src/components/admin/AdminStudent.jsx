import React from "react";
import AdminStudentNav from "./student/AdminStudentNav";
import "../../styles/layout/DisplayContant.css";

const AdminStudent = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminStudentNav />
      </div>
      <div className="display-contant-display">Admin Student display</div>
    </div>
  );
};

export default AdminStudent;
