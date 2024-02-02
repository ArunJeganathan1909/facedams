import React from "react";
import AdminRequestsNav from "./requests/AdminRequestsNav";
import "../../styles/layout/DisplayContant.css";
import AdminRequestDisplay from "./requests/AdminRequestDisplay";

const AdminRequests = () => {
  return (
    <div className="display">
      <div className="display-contant-header">
        <AdminRequestsNav />
      </div>
      <div className="display-contant-display">
        <AdminRequestDisplay />
      </div>
    </div>
  );
};

export default AdminRequests;
