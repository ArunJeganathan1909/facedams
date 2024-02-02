import React, { useEffect, useState } from "react";
import AdminNavBar from "../components/admin/AdminNavBar";
import "../styles/layout/PageContant.css";
import AdminDisplay from "../components/admin/AdminDisplay";
import axios from "axios";

const AdminPage = () => {
  const [accountDetails, setAccountDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get("/staff");
        setAccountDetails(response.data);
      } catch (error) {
        setError("Error fetching account details");
      }
    };

    fetchAccountDetails();
  }, []);
  if (accountDetails.userType === "staff" && accountDetails.admin) {
    return (
      <div className="page-contant">
        <div className="page-contant-header">
          <AdminNavBar />
        </div>
        <div className="page-contant-display">
          <AdminDisplay />
        </div>
      </div>
    );
  } else {
    // Handle the case when the user is not a staff
    return (
      <div>
        <div>Access denied. User is not an admin.</div>
      </div>
    );
  }
};

export default AdminPage;
