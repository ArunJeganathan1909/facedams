import React from "react";
import AdminStudentNav from "./student/AdminStudentNav";
import "../../styles/layout/DisplayContant.css";
import AdminStudentDisplay from "./student/AdminStudentDisplay";

const AdminStudent = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminStudentNav />
      </div>
      <div className="display-contant-display">
        <AdminStudentDisplay />
      </div>
    </div>
  );
};

export default AdminStudent;
