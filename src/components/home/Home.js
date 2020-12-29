import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const home = () => {
  return (
    <div>
      <div class="conatiner">
        <div class="jumbotron">
          <div class="landing-inner">
            <h1>SendIt .</h1>
            <h5>
              The best delivery website on the internet, with over 5k users and
              over 100k deliveries since 2016
            </h5>
            <Link to="/userDashboard" className="btn btn-default">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
