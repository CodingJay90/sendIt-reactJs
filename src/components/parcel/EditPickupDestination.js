import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateParcel.css";

const EditPickupDestination = (props) => {
  const destination = props.history.location.state.destination;
  const parcel_id = props.history.location.state.id;
  const [value, setValue] = useState("");
  useEffect(() => setValue(destination), []);
  toast.configure();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://sendit-parcel.herokuapp.com/parcels/${parcel_id}/destination`,
      {
        method: "PUT",
        body: JSON.stringify({
          destination: value,
          user_id: localStorage.getItem("currentUserId"),
        }),
        headers: {
          "Content-type": "Application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.msg);
          setTimeout(() => history.push("/userDashBoard"), 3001);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Create">
      <div class="form">
        <h1>Edit pickup Destination</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="destination">Pickup Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Update pick up destination"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPickupDestination;
