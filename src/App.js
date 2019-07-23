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
