import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateCourse = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [courseCode, setCourseCode] = useState();
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [subject, setSubject] = useState("");
  const [lecturerIdNo, setLecturerIdNo] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/course/${id}`).then((response) => {
      setName(response.data.name);
      setCourseCode(response.data.courseCode);
      setYearOfStudy(response.data.yearOfStudy);
      setSubject(response.data.subject);
      setLecturerIdNo(response.data.lecturerIdNo);
    });
  }, [id]);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleYearOfStudyChange = (e) => {
    setYearOfStudy(e.target.value);
  };

  const UpdateCourse = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/course/${id}`, {
        name,
        courseCode,
        yearOfStudy,
        subject,
        lecturerIdNo,
      });
      alert("Course Updated successfully");
    } catch (error) {
      alert("Update failed. Please try again later");
    }
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Update Course</h2>
      <form onSubmit={UpdateCourse} className="adding-form-container">
        <label className="adding-form-label">
          <span className="adding-form-text">Name </span>
          <input
            type="text"
            placeholder="Enter the Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Course Code </span>
          <input
            type="text"
            placeholder="Enter the Course code"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Year Of Study </span>
          <select
            value={yearOfStudy}
            onChange={handleYearOfStudyChange}
            className="adding-form-select"
          >
            <option value="1stYear">1st Year</option>
            <option value="2ndYear">2nd Year</option>
            <option value="3rdYear">3rd Year</option>
            <option value="4thYear">4th Year</option>
          </select>
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Subject </span>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="adding-form-select"
          >
            <option value="pure_Mathematics">Pure Mathematics</option>
            <option value="applied_Mathematics">Applied Mathematics</option>
            <option value="statistics">Statistics</option>
            <option value="physics">Physics</option>
            <option value="computerScience">Computer Science</option>
            <option value="chemistry">Chemistry</option>
            <option value="botony">Botony</option>
            <option value="zoology">Zoology</option>
            <option value="fisheries">Fisheries</option>
          </select>
        </label>

        <label className="adding-form-label">
          <span className="adding-form-text">Lecturer Id No </span>
          <input
            type="text"
            placeholder="Enter the Id No"
            value={lecturerIdNo}
            onChange={(e) => setLecturerIdNo(e.target.value)}
            className="adding-form-input"
          />
        </label>

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateCourse;
