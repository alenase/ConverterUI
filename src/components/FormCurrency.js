import React from 'react';
import '../App.css';
import { Button, Col, Form, Row, Dropdown } from 'react-bootstrap'


function GenerateTableRows(props) {
  const currencyList = props.data.map((d) =>
    <Dropdown.Item key={d.currency} eventKey={d.currency}>

      {d.currency}
    </Dropdown.Item>
  );
  return (
    <Dropdown.Menu>
      {currencyList}
    </Dropdown.Menu>
  );

}

function FormCurrency(props) {
  return (
    <Form>
      <Row id="row">
        <Col md={{ span: 3, offset: 3 }}>
          <Button variant={props.stateValues.ifDisabledButtonKupit} onClick={props.handleBuyCurrencyTrue}>Купить</Button>
        </Col>

        <Col md={{ span: 0, offset: 0 }}>
          <Button variant={props.stateValues.ifDisabledButtonProdat} onClick={props.handleBuyCurrencyFalse}>Продать</Button>
        </Col>
      </Row>

      <Row id="row">
        <Col md={{ span: 1, offset: 3 }}>
          <p>Сумма:</p>
        </Col>

        <Col md={{ span: 2, offset: 0 }}>
          <Form.Control value={props.stateValues.summ} name="summ" onChange={props.handleSummChange}></Form.Control>
        </Col>

        <Col md={{ span: 1, offset: 0 }}>
          <Dropdown onSelect={props.handleSelectedCurrencyChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {props.stateValues.selectedCurrency}
            </Dropdown.Toggle>
            <GenerateTableRows data={props.data} />
          </Dropdown>
        </Col>

      </Row>

    </Form>

  );
}


export default FormCurrency;
