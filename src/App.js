
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RunningTasks from './components/RunningTasks';
import AddNewTask from "./components/AddNewTask";
import Metrics from "./components/Metrics";
import './App.css'; 
 
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/runningtasks" component={RunningTasks} />
        <Route path="/addnewtask" component={AddNewTask} />
        <Route path="/metrics" component={Metrics} />
      </div>
    </Router>
    );
  }
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/runningtasks">RunningTasks</Link>
      </li>
      <li>
        <Link to="/addnewtask">AddNewTask</Link>
      </li>
      <li>
        <Link to="/metrics">Metrics</Link>
      </li>
    </ul>
  );
}

export default App;

