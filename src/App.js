
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Metrics from "./components/Metrics";
import RunningTasks from './components/RunningTasks';
import AddNewTask from "./components/AddNewTask";
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
    </ul>
  );
}

export default App;

