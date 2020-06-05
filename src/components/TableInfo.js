import React from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

function TableInfo() {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Код валюты</th>
                    <th>Название</th>
                </tr>
            </thead>
            <tbody>
                <TableRow first="USD" second="доллар США" />
                <TableRow first="EUR" second="евро" />
                <TableRow first="RUR" second="российский рубль" />
            </tbody>
        </Table>
    );
}

export default TableInfo;