import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#"> SendIt</a>
            </li>
          </ul>
          <ul>
            <li>
              <a class="user" href="#"></a>
            </li>
            <li>
              <a class="auth" href="#">
                {" "}
                Sign Up
              </a>
            </li>
            <li>
              <a class="auth" href="#">
                Login
              </a>
            </li>
            <li id="logout">
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
