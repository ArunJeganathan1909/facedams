import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/layout/PageContant.css";
import StudentNavBar from "../components/student/StudentNavBar";
import StudentDisplay from "../components/student/StudentDisplay";

const StudentPage = () => {
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
      <div className="page-contant">
        <div className="page-contant-header">
          <StudentNavBar />
        </div>
        <div className="page-contant-display">
          <StudentDisplay />
        </div>
      </div>
    );
  } else {
    // Handle the case when the user is not a student
    return (
      <div>
        <div>Access denied. User is not a student.</div>
      </div>
    );
  }
};

export default StudentPage;
