import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./AddStudent";
import StudentCategories from "./StudentCategories";
import UpdateStudent from "./UpdateStudent";

const AdminStudentDisplay = () => {
  return (
    <Routes>
      <Route path="/AddStudent" element={<AddStudent />} />
      <Route path="/1st_Year" element={<StudentCategories yearOfStudy='1stYear' />} />
      <Route path="/2nd_Year" element={<StudentCategories yearOfStudy='2ndYear' />} />
      <Route path="/3rd_Year" element={<StudentCategories yearOfStudy='3rdYear' />} />
      <Route path="/4th_Year" element={<StudentCategories yearOfStudy='4thYear' />} />
      <Route path="/:id" element={<UpdateStudent />} />
    </Routes>
  );
};

export default AdminStudentDisplay;
