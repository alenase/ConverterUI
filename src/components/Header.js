import React from 'react';
import '../styles/header.css';
import  { Button, Row, Col } from 'react-bootstrap';

function Header() {
    return (
      <Row className="Div-Absolute-Header">

        <Col md={{ span: 3, offset: 3 }}> 
          <Button>Currency</Button>
        </Col>

        <Col md={{ span: 0, offset: 0 }}>  
          <Button>Aboout API</Button>
          </Col>
          
      </Row>
    );
  }
  
  export default Header;
  