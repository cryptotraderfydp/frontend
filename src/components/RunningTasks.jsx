import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
function onInsertRow(row) {
  let newRowStr = ''
 
  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n'
  }

}
 
 
function onDeleteRow(rowKeys) {

}
 
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
        <BootstrapTable data={this.props.data}
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
        </BootstrapTable>
      </div>
    )
  }
}
 
export default RunningTasks;