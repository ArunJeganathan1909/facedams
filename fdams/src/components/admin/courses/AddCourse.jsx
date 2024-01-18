import axios from "axios";
import React, { useState } from "react";
import "../../../styles/AddingForm.css";

const AddCourse = () => {
  const [name, setName] = useState();
  const [courseCode, setCourseCode] = useState();
  const [yearOfStudy, setYearOfStudy] = useState("1stYear");
  const [subject, setSubject] = useState("computerScience");
  const [lecturerIdNo, setLecturerIdNo] = useState();

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleYearOfStudyChange = (e) => {
    setYearOfStudy(e.target.value);
  };

  const registerCourse = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/course/register", {
        name,
        courseCode,
        yearOfStudy,
        subject,
        lecturerIdNo,
      });
      alert("Course added successfully");
    } catch (error) {
      alert("Registration failed. Please try again later");
    }
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Add New Course</h2>
      <form onSubmit={registerCourse} className="adding-form-container">
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

        <button>Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
