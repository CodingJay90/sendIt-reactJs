import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import UserDashboard from "./components/userDashboard/UserDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/userDashboard" component={UserDashboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
