import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RequestCategories = ({ userType }) => {
  const [requestDetails, setRequestDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const response = await axios.get("/request", {
          params: { userType },
        });

        const filterdRequest = userType
          ? response.data.filter((request) => request.userType === userType)
          : response.data;

        setRequestDetails(filterdRequest);
      } catch (error) {
        setError("Error fetching request details");
      }
    };
    fetchRequestDetails();
  }, [userType]);

  return (
    <div className="categories-page">
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr className="table-header-row">
                <th className="table-header-text">Staff Name</th>
                <th className="table-header-text">Id No</th>
                <th className="table-header-text">Request</th>
                <th className="table-header-text">Edit Area</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {requestDetails.map((request) => (
                <tr className="table-body-row" key={request._id}>
                  <td className="table-body-text"> {request.name} </td>
                  <td className="table-body-text"> {request.owner} </td>
                  <td className="table-body-text"> {request.requestTitle} </td>
                  <td className="table-body-text">
                    <Link to={"/Admin/Requests/" + request._id}>
                      <button className="edit-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="edit-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        <span className="button-text">Reply</span>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestCategories;
