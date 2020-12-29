import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState("");
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    fetch("/auth/user", {
      method: "GET",
      headers: {
        "Content-type": "Apllication/json",
        "x-access-token": authToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.first_name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link> SendIt</Link>
            </li>
          </ul>
          {!authToken ? (
            <ul>
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
            </ul>
          ) : (
            <ul>
              <li>
                <Link className="user">{user}</Link>
              </li>

              <li id="logout">
                <Link>Logout</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
