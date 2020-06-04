import React from 'react';
import '../App.css';


function TableRow(props) {
    return (
      <tr>
      <td>{props.first}</td>
      <td>{props.second} </td>

    </tr>
    );
  }
  
  export default TableRow;