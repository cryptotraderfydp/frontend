import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
function onInsertRow(row) {
  let newRowStr = ''
 
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }

}
 
 
function onDeleteRow(rowKeys) {

}

let data = [
  {taskId: 1, cryptocurrency: 'Bitcoin', startTime: '02:15', estimatedEndTime: '21:34', currentReturn: '$5218.93', displayLog: 'Display Log'},
  {taskId: 2, cryptocurrency: 'Etherium', startTime: '12:43', estimatedEndTime: '22:34', currentReturn: '$19739.32', displayLog: 'Display Log'},
  {taskId: 3, cryptocurrency: 'Ren', startTime: '16:39', estimatedEndTime: '19:12', currentReturn: '-$321.95', displayLog: 'Display Log'}
];
 
class RunningTasks extends Component {
  render() {
    const options = {
      afterInsertRow: onInsertRow,
      afterDeleteRow: onDeleteRow
    }
 
    // To delete rows you be able to select rows
    const selectRowProp = {
      mode: 'checkbox'
    }
 
    return (
      <div>
        <BootstrapTable data={data}
                        insertRow={true}
                        deleteRow={true}
                        selectRow={selectRowProp}
                        options={options}
        >
          <TableHeaderColumn isKey
                             dataField='taskId'
                             dataAlign='center'
                             headerAlign='center'>
            Task Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='cryptocurrency'
                             dataAlign='center'
                             headerAlign="center">
            Cryptocurrency
          </TableHeaderColumn>
          <TableHeaderColumn dataField='startTime'
                             dataAlign='center'
                             headerAlign="center">
            Start Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField='estimatedEndTime'
                             dataAlign='center'
                             headerAlign="center">
            Estimated End Time
          </TableHeaderColumn>
          <TableHeaderColumn dataField='currentReturn'
                             dataAlign='center'
                             headerAlign="center">
            Current Return
          </TableHeaderColumn>
          <TableHeaderColumn dataField='displayLog'
                             dataAlign='center'
                             headerAlign="center">
            Log
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default RunningTasks;