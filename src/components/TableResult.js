import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';


function GenerateTableRows(props) {

  let currencyToConvertFrom = props.data.map((d) => {
    if (props.stateValues.selectedCurrency === "UAH") {
      return (1);
    } else if (props.stateValues.selectedCurrency === d.currency) {
      return (d.purchaseRate);
    }
  }
  )
    .filter(Number);
  currencyToConvertFrom = currencyToConvertFrom[0];


  const tableValues = props.data.map((d) => {
    console.log('currency: ', d.currency, 'currencyToConvertFrom', currencyToConvertFrom)
    if (props.stateValues.ifBuyCurrency) {
      if (d.currency === 'UAH') { return ((props.stateValues.summ * currencyToConvertFrom).toFixed(2)); }
      return ((props.stateValues.summ * currencyToConvertFrom / d.purchaseRate).toFixed(2));
    } else {
      if (d.currency === 'UAH') { return ((props.stateValues.summ * currencyToConvertFrom).toFixed(2)); }
      return ((props.stateValues.summ * currencyToConvertFrom / d.saleRate).toFixed(2));
    }
  }
  );


  let i = 0;
  const tableRows = props.data.map((d) =>
    <TableRow first={tableValues[i++]} second={d.currency} />);
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
      <GenerateTableRows data={props.data} stateValues={props.stateValues} />
    </Table>
  );
}

export default TableResult;