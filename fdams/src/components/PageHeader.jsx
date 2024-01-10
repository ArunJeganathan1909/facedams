import React from "react";
import logo from "../styles/logos/UNIVERSITY_OF_JAFFNA.png";
import "../styles/layout/PageHeader.css";

const PageHeader = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="header-center">
        <h2>Faculty of Science</h2>
        <h2> University of Jaffna</h2>
      </div>
      <div className="header-right">
        <a href="https://www.sci.jfn.ac.lk/">About</a>
        &nbsp; | &nbsp;
        <a href="https://lms.jfn.ac.lk/lms/login/index.php">LMS</a>
        &nbsp; | &nbsp;
        <a href="https://www.sci.jfn.ac.lk/index.php/contact-us/">Contact</a>
      </div>
    </div>
  );
};

export default PageHeader;
