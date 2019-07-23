
import React, { Component } from 'react';
import './App.css';
import './components/RunningTasks'
import RunningTasks from './components/RunningTasks';

var data = [
  {taskId: 1, cryptocurrency: 'Bitcoin', startTime: '02:15', estimatedEndTime: '21:34', currentReturn: '$5218.93'},
  {taskId: 2, cryptocurrency: 'Etherium', startTime: '12:43', estimatedEndTime: '22:34', currentReturn: '$19739.32'},
  {taskId: 3, cryptocurrency: 'Ren', startTime: '16:39', estimatedEndTime: '19:12', currentReturn: '-$321.95'}
];
 
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header" style={{fontSize: 30, fontWeight: 'bold', textAlign: 'left'}}>Running Tasks</p>
        <RunningTasks data={data}/>
      </div>
    );
  }
}
 
export default App;
=======
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

