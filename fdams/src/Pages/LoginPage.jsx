import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <Link to="/Login/staffLogin">Staff</Link>
      <Link to="/Login/studentLogin">Student</Link>
    </div>
  );
};

export default LoginPage;
