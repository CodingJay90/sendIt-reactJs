import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ item }) => {
  return (
    <div>
      <div class="order-item">
        <p>
          Recipient name: <span id="name">{item.recipient_name}</span>
        </p>
        <p>
          Recipient Mobile No:{" "}
          <span id="phone_no">{item.recipient_phone_no}</span>
        </p>
        <p>
          Pickup Location: <span id="location">{item.pickup_location}</span>
        </p>
        <p>
          Destination: <span id="destination">{item.destination}</span>
        </p>
        <p>
          Status: <span id="status">{item.status}</span>
        </p>
        <p>
          Parcel Id: <span id="id">{item.id}</span>
        </p>
        <div>
          <Link href="">Edit</Link>
          {item.status === "cancelled" ? null : (
            <button class="btn" id="cancel-btn">
              Cancel order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
