import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import CreateParcel from "./components/parcel/CreateParcel";
import EditPickupDestination from "./components/parcel/EditPickupDestination";
import UserDashboard from "./components/userDashboard/UserDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/userDashboard" component={UserDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/createParcel" component={CreateParcel} />
          <Route path="/editDestination" component={EditPickupDestination} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
