import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const Login = () => {
  toast.configure();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sendit-parcel.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("currentUserId", data.userId);
          localStorage.setItem("token", data.token);
          history.push("/userDashboard");
          window.location.reload();
        } else {
          toast.error(data.message ? data.message : data);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  return (
    <div>
      <div className="form">
        <h1>Log in</h1>
        <div className="layer">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={onChange}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
