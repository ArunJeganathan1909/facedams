import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AdminPage from "../Pages/AdminPage.jsx";
import StaffPage from "../Pages/StaffPage.jsx";
import StudentPage from "../Pages/StudentPage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import StaffHomePage from "./staff/StaffHomePage.jsx";
import StaffLogin from "../Pages/StaffLogin.jsx";
import StudentHomePage from "./student/StudentHomePage.jsx";
import StudentLogin from "../Pages/StudentLogin.jsx";

const DisplayPage = () => {
  return (
    <Routes>
      <Route path="/Home" Component={HomePage} />
      <Route path="/Admin/*" Component={AdminPage} />
      <Route path="/Staffs/*" Component={StaffPage} />
      <Route path="/Students/*" Component={StudentPage} />
      <Route path="/Login" Component={LoginPage} />
      <Route path="/Login/staffLogin" Component={StaffLogin} />
      <Route path="/Login/studentLogin" Component={StudentLogin} />
    </Routes>
  );
};

export default DisplayPage;
