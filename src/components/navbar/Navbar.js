import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link> SendIt</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="user"></Link>
            </li>
            <li>
              <Link to="/register" className="auth">
                {" "}
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="auth">
                Login
              </Link>
            </li>
            <li id="logout">
              <Link>Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
