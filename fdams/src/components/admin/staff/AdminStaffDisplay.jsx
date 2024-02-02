import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStaff from "./AddStaff";
import StaffCategories from "./StaffCategories";
import UpdateStaff from "./UpdateStaff";

const AdminStaffDisplay = () => {
  return (
    <Routes>
      <Route path="/AddStaff" element={<AddStaff />} />
      <Route
        path="/AcademicStaff"
        element={<StaffCategories role="academic" />}
      />
      <Route path="/:id" element={<UpdateStaff />} />

      <Route
        path="/NonAcademicStaff"
        element={<StaffCategories role="non-academic" />}
      />
    </Routes>
  );
};

export default AdminStaffDisplay;
