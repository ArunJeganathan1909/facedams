import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../styles/AddingForm.css";

const AddStaff = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState("computerScience");
  const [idno, setIdno] = useState("");
  const [role, setRole] = useState("academic");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const registerStaff = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/staff/register", {
        name,
        email,
        idno,
        department,
        role,
        mobile,
        password,
      });
      alert("Staff added successfully");
    } catch (error) {
      alert("Registration failed. Please try again later");
    }
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Add Staff</h2>
      <form onSubmit={registerStaff} className="adding-form-container">
        <label className="adding-form-label">
          <span className="adding-form-text">Name </span>
          <input
            type="text"
            placeholder="Enter the Staff Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Id No </span>
          <input
            type="text"
            placeholder="Enter the Id No"
            value={idno}
            onChange={(e) => setIdno(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <label className="adding-form-label">
          <span className="adding-form-text">Department </span>
          <select
            value={department}
            onChange={handleDepartmentChange}
            className="adding-form-select"
          >
            <option value="mathematics&statistics">
              Mathematics & Statistics
            </option>
            <option value="physics">Physics</option>
            <option value="computerScience">Computer Science</option>
            <option value="chemistry">Chemistry</option>
            <option value="botony">Botony</option>
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
          <span className="adding-form-text">Role </span>
          <select
            value={role}
            onChange={handleRoleChange}
            className="adding-form-select"
          >
            <option value="academic">Academic Staff</option>
            <option value="non-academic">Non-Academic Staff</option>
          </select>
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
        <button>Add Staff</button>
      </form>
    </div>
  );
};

export default AddStaff;
