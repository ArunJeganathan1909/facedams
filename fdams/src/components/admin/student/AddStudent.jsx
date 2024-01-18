import React, { useState } from "react";
import axios from "axios";
import "../../../styles/AddingForm.css";

const AddStudent = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [yearOfStudy, setYearOfStudy] = useState("1stYear");
  const [regno, setRegno] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState();

  const registerStudent = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/student/register", {
        name,
        email,
        regno,
        yearOfStudy,
        mobile,
        password,
      });
      alert("Student added successfully");
    } catch (error) {
      alert("Registration failed. Please try again later");
    }
  };

  const handleYearOfStudyChange = (e) => {
    setYearOfStudy(e.target.value);
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Add New Student</h2>
      <form onSubmit={registerStudent} className="adding-form-container">
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
          <span className="adding-form-text">Password </span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
