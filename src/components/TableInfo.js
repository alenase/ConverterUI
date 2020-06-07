import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

function TableInfo(props) {
  const currencyNames = props.info;
  const tableRows = props.data.map((element) =>
    <TableRow first={element.currency} second={currencyNames.get(element.currency)} />
  );
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Код валюты</th>
          <th>Название</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </Table>
  );
}

export default TableInfo;