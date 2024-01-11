import React from "react";
import AdminNavBar from "../components/AdminNavBar";
import "../styles/layout/AdminPage.css";
import AdminDisplay from "../components/AdminDisplay";

const AdminPage = () => {
  return (
    <div className="Admin">
      <div className="Admin-header">
        <AdminNavBar />
      </div>
      <div className="Admin-display">
        <AdminDisplay />
      </div>
    </div>
  );
};

export default AdminPage;
