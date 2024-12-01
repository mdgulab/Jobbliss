import React from "react";
import { RiArticleLine } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import { AiFillBug } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom"; // Import Router components

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard on button click
  };

  return (
    <nav className="navbar">
      <div className="top-row">
        <div className="logo">
          <a href="/">
            <img src="/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="icon-section">
          <div className="icon">
            <RiArticleLine className="icon-svg" />
            <span>Article</span>
          </div>
          <div className="icon">
            <IoMdPeople className="icon-svg" />
            <span>People</span>
          </div>
          <div className="icon">
            <MdOndemandVideo className="icon-svg" />
            <span>Learning</span>
          </div>
          <div className="icon">
            <IoBagRemove className="icon-svg" />
            <span>Jobs</span>
          </div>
          <div className="icon">
            <AiFillBug className="icon-svg" />
            <span>Games</span>
          </div>
          <div className="line-break">
            <span>|</span>
          </div>
        </div>

        <div className="right-section">
          <button className="contribute">+ Contribute</button>
          <div className="line-break">
            <span>|</span>
          </div>
          <button className="join-now">Join Now</button>
          <button className="login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>

      <div className="second-row">
        <button className="hamburger-menu" aria-label="Toggle Menu">
          ☰
        </button>
        <ul className="nav-links">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li className="dropdown">
            <a href="#">
              Reviews <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Employee Reviews</a>
              </li>
              <li>
                <a href="#">Company Ratings</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              Salaries <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Software Engineer</a>
              </li>
              <li>
                <a href="#">Data Scientist</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              Interviews <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Common Questions</a>
              </li>
              <li>
                <a href="#">Interview Experiences</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs">Job</Link>
          </li>
          <li className="dropdown">
            <a href="#">
              Awards <IoMdArrowDropdown className="arrow-icon" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Best Companies</a>
              </li>
              <li>
                <a href="#">Top Startups</a>
              </li>
            </ul>
          </li>
          <button className="rate-now">Rate Now</button>
          <li>
            <Link to="/employers">For Recruiter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
