import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  toast.configure();

  const [values, setValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_no: "",
  });
  const history = useHistory();
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sendit-parcel.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone_no: values.phone_no,
        password: values.password,
      }),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("currentUserId", data.userId);
          localStorage.setItem("role", "member");
          localStorage.setItem("token", data.token);
          data.role !== "member"
            ? history.push("/userDashboard")
            : history.push("/adminDashboard");
          window.location.reload();
        } else {
          data.errors.map((err) => {
            return toast.error(err.msg);
          });
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
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              onChange={onChange}
              name="first_name"
              placeholder="First Name"
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              onChange={onChange}
              name="last_name"
              placeholder="Last Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="phone_no">Mobile No</label>
            <input
              type="text"
              onChange={onChange}
              name="phone_no"
              placeholder="Mobile no"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={onChange}
            />
            <button>Submit</button>
            <p>
              Already had an account ? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
