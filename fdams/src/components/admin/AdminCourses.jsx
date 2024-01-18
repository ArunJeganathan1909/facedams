import React from "react";
import AdminCoursesNav from "./courses/AdminCoursesNav";
import "../../styles/layout/DisplayContant.css";
import AdminCourseDisplay from "./courses/AdminCourseDisplay";

const AdminCourses = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminCoursesNav />
      </div>
      <div className="display-contant-display">
        <AdminCourseDisplay />
      </div>
    </div>
  );
};

export default AdminCourses;
