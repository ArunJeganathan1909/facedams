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
  
    return (
      <div>
        <div>StudentHomePage {accountDetails.name}</div>
      </div>
    );
  };

export default StudentHomePage