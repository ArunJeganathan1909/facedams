import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/layout/PageContant.css";
import StaffNavBar from "../components/staff/StaffNavBar";
import StaffDisplay from "../components/staff/StaffDisplay";

const StaffPage = () => {
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

  // Render the component only if userType is "staff"
  if (accountDetails.userType === "staff") {
    return (
      <div className="page-contant">
        <div className="page-contant-header">
          <StaffNavBar />
        </div>
        <div className="page-contant-display">
          <StaffDisplay />
        </div>
      </div>
    );
  } else {
    // Handle the case when the user is not a staff
    return (
      <div>
        <div>Access denied. User is not a staff.</div>
      </div>
    );
  }
};

export default StaffPage;
