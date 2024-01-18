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

  return (
    <div>
      <div>StaffHomePage {accountDetails.name}</div>
    </div>
  );
};

export default StaffHomePage;
