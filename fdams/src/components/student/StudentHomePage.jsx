import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentHomePage = () => {
  const [accountDetails, setAccountDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get("/student");
        setAccountDetails(response.data);
      } catch (error) {
        setError("Error fetching account details");
      }
    };

    fetchAccountDetails();
  }, []);

  if (accountDetails.userType === "student") {
    return (
      <div>
        <div>Student Home Page {accountDetails.name}</div>
      </div>
    );
  } else {
    // Handle the case when the user is not a staff
    return (
      <div>
        <div>Access denied. User is not a student.</div>
      </div>
    );
  }
};

export default StudentHomePage;
