import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios using npm install axios or yarn add axios

const StaffRequests = () => {
  const [accountDetails, setAccountDetails] = useState({});
  const [requestData, setRequestData] = useState({
    name: "",
    requestTitle: "",
    request: "",
  });
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

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user type and ID from your authentication context or state
      const userType = accountDetails.userType; // Replace with actual user type
      const userId = accountDetails.idno; // Replace with actual user ID

      // Include user type and owner fields in requestData
      const updatedRequestData = {
        ...requestData,
        userType,
        owner: userId,
      };

      // Make an API call to create a request
      const response = await axios.post("/request", updatedRequestData);

      console.log("Request created:", response.data);
      // Handle success or navigate to a different page if needed
    } catch (error) {
      console.error("Error creating request:", error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Create Staff Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={requestData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Request Title:
          <input
            type="text"
            name="requestTitle"
            value={requestData.requestTitle}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Request:
          <textarea
            name="request"
            value={requestData.request}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default StaffRequests;
