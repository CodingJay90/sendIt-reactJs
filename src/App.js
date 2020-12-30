import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboard from "./components/admin/AdminDashboard";
import EditLocation from "./components/admin/EditLocation";
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
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/createParcel" component={CreateParcel} />
          <Route path="/editDestination" component={EditPickupDestination} />
          <Route path="/editLocation" component={EditLocation} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
