import React from 'react';
const { Table, Icon } = require('precise-ui');

function EmployeesTable(props) {
    const { data, columns, deleteEmployee } = props;

    const renderCell = (e) => {
        const value = e.value;

        if (e.key.toLowerCase() === 'action') {
          return <button onClick={(e) => deleteEmployee(e)}><Icon name="Delete" size={1.5} /></button>
        }

        // if (e.key.toLowerCase() !== 'name') {
        //   return value;
        // }

        return (
          <div>
            <strong>{value}</strong>
          </div>
        );
      }


    return (
        <Table
            data={data}
            columns={columns}
            indexed
            cellRenderer={renderCell}
            sortBy="age" />
        );
}

export default EmployeesTable;