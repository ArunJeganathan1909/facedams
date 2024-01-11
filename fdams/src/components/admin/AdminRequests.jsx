import React from "react";
import AdminRequestsNav from "./requests/AdminRequestsNav";
import "../../styles/layout/DisplayContant.css";

const AdminRequests = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminRequestsNav />
      </div>
      <div className="display-contant-display">Admin Requests display</div>
    </div>
  );
};

export default AdminRequests;
