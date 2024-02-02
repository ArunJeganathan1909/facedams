import React from "react";
import { Routes, Route } from "react-router-dom";
import RequestCategories from "./RequestCategories";
import ReplyRequest from "./ReplyRequest";

const AdminRequestDisplay = () => {
  return (
    <Routes>
      <Route
        path="/Staffs_Requests"
        element={<RequestCategories userType="staff" />}
      />
      <Route
        path="/Students_Requests"
        element={<RequestCategories userType="student" />}
      />
      <Route path="/:id" element={<ReplyRequest />} />
    </Routes>
  );
};

export default AdminRequestDisplay;
