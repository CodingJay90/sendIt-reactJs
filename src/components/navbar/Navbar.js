import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";

const Navbar = () => {
  toast.configure();
  const [user, setUser] = useState("");
  const authToken = localStorage.getItem("token");
  const history = useHistory();

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
  }, [authToken, user]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUserId");
    toast.info(`Logging You out ${user}`);
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 2000);
  };

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

              <li onClick={logout}>Logout</li>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
