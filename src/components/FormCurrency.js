import React from 'react';
import '../App.css';
import Dialog, { Button, Col, Container, Form, Row, Dropdown } from 'react-bootstrap'



function GenerateTableRows(props) {
  const currencyList = props.data.map((d) =>
    <Dropdown.Item eventKey={d.id}>
      {d.currency}
    </Dropdown.Item>
  );
  return (
    <Dropdown.Menu>
      {currencyList}
    </Dropdown.Menu>
  );

}

class FormCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifDisabledButton1: 'success',
      ifDisabledButton2: 'secondary',
      dropdownName: 'UAH',
    }
    this.handleButton1Click = this.handleButton1Click.bind(this);
    this.handleButton2Click = this.handleButton2Click.bind(this);
  }

  handleButton1Click() {
    this.setState({ ifDisabledButton1: 'success', ifDisabledButton2: 'secondary', })
  }

  handleButton2Click() {
    this.setState({ ifDisabledButton1: 'secondary', ifDisabledButton2: 'success', })
  }

  render() {
    return (
      <Form>
        <Row id="row">
          <Col md={{ span: 3, offset: 3 }}>
            <Button variant={this.state.ifDisabledButton1} onClick={this.handleButton1Click}>Купить</Button>
          </Col>

          <Col md={{ span: 0, offset: 0 }}>
            <Button variant={this.state.ifDisabledButton2} onClick={this.handleButton2Click}>Продать</Button>
          </Col>
        </Row>

        <Row id="row">
          <Col md={{ span: 1, offset: 3 }}>
            <p>Сумма:</p>
          </Col>

          <Col md={{ span: 2, offset: 0 }}>
            <Form.Control value="number" name="summ"></Form.Control>
          </Col>

          <Col md={{ span: 1, offset: 0 }}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.dropdownName}
              </Dropdown.Toggle>
              <GenerateTableRows data={this.props.data} />
            </Dropdown>
          </Col>

        </Row>

      </Form>
    );
  }
}

export default FormCurrency;
