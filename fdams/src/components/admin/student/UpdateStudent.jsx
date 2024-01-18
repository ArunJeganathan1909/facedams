import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/AddingForm.css";
import axios from "axios";

const UpdateStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [regno, setRegno] = useState("");
  const [mobile, setMobile] = useState("");
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/student/${id}`).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setYearOfStudy(response.data.yearOfStudy);
      setRegno(response.data.regno);
      setMobile(response.data.mobile);
      setSubjects(response.data.subjects);
    });
  }, [id]);

  const handleYearOfStudyChange = (e) => {
    setYearOfStudy(e.target.value);
  };

  const handleSubjectChange = (e) => {
    const selectedSubjects = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSubjects(selectedSubjects);
  };

  const UpdateStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/student/${id}`, {
        name,
        email,
        yearOfStudy,
        regno,
        mobile,
        subjects,
      });
      alert("Student Updated successfully");
    } catch (error) {
      alert("Update failed. Please try again later");
    }
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Update Student</h2>
      <form onSubmit={UpdateStudent} className="adding-form-container">
        <label className="adding-form-label">
          <span className="adding-form-text">Name </span>
          <input
            type="text"
            placeholder="Enter the Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Reg No </span>
          <input
            type="text"
            placeholder="Enter the Reg No"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
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
          <span className="adding-form-text">Subjects </span>
          <select
            multiple
            value={subjects}
            onChange={handleSubjectChange}
            className="adding-form-select"
          >
            <option value="pure_Mathematics" typeof="checkbox">Pure Mathematics</option>
            <option value="applied_Mathematics">Applied Mathematics</option>
            <option value="statistics">Statistics</option>
            <option value="physics">Physics</option>
            <option value="computerScience">Computer Science</option>
            <option value="chemistry">Chemistry</option>
            <option value="botany">Botany</option>
            <option value="zoology">Zoology</option>
            <option value="fisheries">Fisheries</option>
          </select>
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">E-Mail </span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Mobile </span>
          <input
            type="tel"
            placeholder="e.g: +94 07xxxxxxxx"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="adding-form-input"
          />
        </label>

        <button>Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
