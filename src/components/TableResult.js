import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

function GenerateTableRows(props) {
  const tableRows = props.data.map((d) =>
    <TableRow first={d.saleRateNB} second={d.currency} />
  );
  return (
    <tbody>
      {tableRows}
    </tbody>
  );

}

function TableResult(props) {
  return (
    <Table responsive >
      <thead>
        <tr>
          <th>Валюта</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <GenerateTableRows data={props.data} />
    </Table>
  );
}

export default TableResult;