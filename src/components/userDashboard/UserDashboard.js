import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Orders";
import "./UserDashBoard.css";

const UserDashboard = () => {
  toast.configure();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("currentUserId");
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      toast.error(
        "You are unauthenticated, you need to be logged in to do that"
      );
      history.push("/login");
    } else {
      fetch(`https://sendit-parcel.herokuapp.com/parcels/${userId}`, {
        headers: {
          "x-access-token": token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setLoading(false);
          console.log(data);
        });
    }
  }, [history, token, userId]);

  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>Dashboard</h1>
          <Link to="/createParcel" className="btn">
            Create Order
          </Link>
        </div>

        <div className="details">
          <div></div>
        </div>
        <h2>Orders</h2>
        <div>
          {loading ? (
            <div className="spinner">
              <h4>Loading</h4>
              <i className="fas fa-spinner App-logo-spin App-logo" />
            </div>
          ) : (
            <div className="orders-layer">
              <div className="orders">
                {item.length > 0
                  ? item.map((i) => {
                      return <Orders item={i} key={i.id} />;
                    })
                  : " You have no delivery order yet"}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
