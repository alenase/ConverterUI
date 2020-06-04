import React from 'react';
import '../App.css';
import Dialog, {Button, Col, Container, Form, Row, Dropdown} from 'react-bootstrap'

function FormCurrency() {
    return (
            <Form>
              <Row id="Row">
              <Col md={{ span: 3, offset: 3 }}> 
              <Button>Купить</Button>
              </Col>
              
              <Col md={{ span: 0, offset: 0 }}>  
              <Button>Продать</Button>
              </Col>

              </Row>


              <Row id="Row">
                  <Col md={{ span: 3, offset: 1 }}>
                <p>Сумма:</p>
                </Col>
                <Col>
                <Form.Control  value="number" name="summ"></Form.Control>
                </Col>

                <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">EURO</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">RUB</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">UAH</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
              </Col>


              </Row>
            </Form>

       );
  }
  
  export default FormCurrency;
  