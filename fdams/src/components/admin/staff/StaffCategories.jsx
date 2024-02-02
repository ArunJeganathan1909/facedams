import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Table.css";

const StaffCategories = ({ role }) => {
  const [accountDetails, setAccountDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get("/staffs", {
          params: { role },
        });

        // Filter the staff based on the role
        const filteredStaff = role
          ? response.data.filter((staff) => staff.role === role)
          : response.data;

        setAccountDetails(filteredStaff);
      } catch (error) {
        setError("Error fetching account details");
      }
    };

    fetchAccountDetails();
  }, [role]);

  const handleAdminClick = async (id) => {
    try {
      const updatedStaffs = accountDetails.map((staff) => {
        if (staff._id === id) {
          return { ...staff, admin: !staff.admin }; // Toggle the 'admin' status
        }
        return staff;
      });

      setAccountDetails(updatedStaffs);

      const staffToUpdate = accountDetails.find((staff) => staff._id === id);
      await axios.put(`/StaffAdmin`, {
        id: id,
        admin: !staffToUpdate.admin,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/staff/${id}`);
      const updatedStaffs = accountDetails.filter((staff) => staff._id !== id);
      setAccountDetails(updatedStaffs);
      alert("Staff Deleted successfully");
    } catch (error) {
      console.error("Error deleting staff", error);
      setError("Error deleting staff");
    }
  };

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
                <th className="table-header-text">Department</th>
                <th className="table-header-text">E-Mail</th>
                <th className="table-header-text">Edit Area</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {accountDetails.map((staff) => (
                <tr className="table-body-row" key={staff._id}>
                  <td className="table-body-text"> {staff.name} </td>
                  <td className="table-body-text"> {staff.idno} </td>
                  <td className="table-body-text"> {staff.department} </td>
                  <td className="table-body-text"> {staff.email} </td>
                  <td className="table-body-text">
                    <button
                      className="star-button"
                      onClick={() => handleAdminClick(staff._id)}
                    >
                      {staff.admin ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="content-icon-fill"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="content-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      )}
                    </button>
                    <Link to={"/Admin/Staff/" + staff._id}>
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
                        <span className="button-text">Edit</span>
                      </button>
                    </Link>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(course._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="delete-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      <span className="button-text">Delete</span>
                    </button>
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

export default StaffCategories;
