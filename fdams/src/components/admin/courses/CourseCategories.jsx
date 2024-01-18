import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Table.css";

const CourseCategories = ({ yearOfStudy }) => {
  const [accountDetails, setAccountDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get("/courses", {
          params: { yearOfStudy },
        });

        // Filter the staff based on the role
        const filteredStudent = yearOfStudy
          ? response.data.filter((course) => course.yearOfStudy === yearOfStudy)
          : response.data;

        setAccountDetails(filteredStudent);
      } catch (error) {
        setError("Error fetching account details");
      }
    };

    fetchAccountDetails();
  }, [yearOfStudy]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/course/${id}`);
      const updatedCourses = accountDetails.filter(
        (course) => course._id !== id
      );
      setAccountDetails(updatedCourses);
      alert("Course Deleted successfully");
    } catch (error) {
      console.error("Error deleting course", error);
      setError("Error deleting course");
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
                <th className="table-header-text">Year Of Study</th>
                <th className="table-header-text">Subject</th>
                <th className="table-header-text">Lecturer Id No</th>
                <th className="table-header-text">Edit Area</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {accountDetails.map((course) => (
                <tr className="table-body-row" key={course._id}>
                  <td className="table-body-text"> {course.name} </td>
                  <td className="table-body-text"> {course.yearOfStudy} </td>
                  <td className="table-body-text"> {course.subject} </td>
                  <td className="table-body-text"> {course.lecturerIdNo} </td>
                  <td className="table-body-text">
                    <Link to={"/Admin/Courses/" + course._id}>
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

export default CourseCategories;
