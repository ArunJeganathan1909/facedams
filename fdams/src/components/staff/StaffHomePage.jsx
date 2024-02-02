import React, { useEffect, useState } from "react";
import axios from "axios";

const StaffHomePage = () => {
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
      <div>
        <div>Staff Home Page {accountDetails.name}</div>
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

export default StaffHomePage;
