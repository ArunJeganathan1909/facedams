import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCourse from "./AddCourse";
import CourseCategories from "./CourseCategories";
import UpdateCourse from "./UpdateCourse";

const AdminCourseDisplay = () => {
  return (
    <Routes>
      <Route path="/AddCourse" element={<AddCourse />} />
      <Route
        path="/1st_Year"
        element={<CourseCategories yearOfStudy="1stYear" />}
      />
      <Route
        path="/2nd_Year"
        element={<CourseCategories yearOfStudy="2ndYear" />}
      />
      <Route
        path="/3rd_Year"
        element={<CourseCategories yearOfStudy="3rdYear" />}
      />
      <Route
        path="/4th_Year"
        element={<CourseCategories yearOfStudy="4thYear" />}
      />
      <Route path="/:id" element={<UpdateCourse />} />
    </Routes>
  );
};

export default AdminCourseDisplay;
