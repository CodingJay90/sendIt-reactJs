import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const token = localStorage.getItem("token");
toast.configure();

const UserDashboard = () => {
  useEffect(() => {
    if (token) {
      toast.error(
        "You are unauthenticated, you need to be logged in to do that"
      );
    }
  }, [token]);
  return <div></div>;
};

export default UserDashboard;
