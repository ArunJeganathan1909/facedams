import React from "react";
import AdminCoursesNav from "./courses/AdminCoursesNav";
import "../../styles/layout/DisplayContant.css";

const AdminCourses = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminCoursesNav />
      </div>
      <div className="display-contant-display">Admin Courses display</div>
    </div>
  );
};

export default AdminCourses;
