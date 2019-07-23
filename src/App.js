import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Metrics from "./components/Metrics";
import AddNewTask from "./components/AddNewTask";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/metrics" component={Metrics} />
        <Route path="/addnewtask" component={AddNewTask} />
      </div>
    </Router>
  );
}


function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/metrics">Metrics</Link>
      </li>
      <li>
        <Link to="/addnewtask">AddNewTask</Link>
      </li>
    </ul>
  );
}

export default App;