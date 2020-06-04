import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

function TableResult() {
    return (
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <TableRow first="1" second="1" />
    <TableRow first="1" second="1" />
    <TableRow first="1" second="1" />
    <TableRow first="1" second="1" />
    </tbody>
</Table>
    );
  }
  
  export default TableResult;