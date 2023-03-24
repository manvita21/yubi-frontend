

import React from "react";

function TableData(props) {

    const resultRow = [];

    for (let  tableDate of props.tableDates) { 
        resultRow.push(
            <tr>
                    <td>{tableDate.name}</td>
                    <td>{tableDate.colname}</td>
                    <td>{tableDate.colvalue}</td>
                    <td><input placeholder="enter update value"/></td>
                </tr>
        );
    }

    return (
        <div style={{
            display: 'grid',
            marginLeft: '20%',
            marginRight: '20%',
            paddingTop: '5%'
        }}>
            <table>
                <tr>
                    <th>Table Name</th>
                    <th>Column Name</th>
                    <th>Distinct value</th>
                    <th>User input</th>
                </tr>
               <tbody>
                {resultRow}
               </tbody>
            </table>
        </div>
    )
}

export default TableData;