import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/AddingForm.css";
import axios from "axios";

const UpdateStaff = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [idno, setIdno] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/staff/${id}`).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setIdno(response.data.idno);
      setDepartment(response.data.department);
      setRole(response.data.role);
      setMobile(response.data.mobile);
    });
  }, [id]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const updateStaff = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/staff/${id}`, {
        name,
        email,
        idno,
        department,
        role,
        mobile,
      });
      alert("Staff Updated successfully");
    } catch (error) {
      alert("Update failed. Please try again later");
    }
  };

  return (
    <div className="adding-form">
      <h2 className="adding-heading">Update Staff</h2>
      <form onSubmit={updateStaff} className="adding-form-container">
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
          <span className="adding-form-text">Mobile </span>
          <input
            type="tel"
            placeholder="e.g: +94 07xxxxxxxx"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="adding-form-input"
          />
        </label>
        <button type="submit">Update Staff</button>
      </form>
    </div>
  );
};

export default UpdateStaff;
