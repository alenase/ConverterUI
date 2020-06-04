import React from 'react';
import '../styles/header.css';
import '../App.css';
import  { Button, Row, Col } from 'react-bootstrap';



function Header() {
    return (
      <Row className="Div-Absolute-Header">

        <Col md={{ span: 3, offset: 3 }} sm={{ span: 0, offset: 3 }}> 
       
          <Button  href="/" variant="success">
              Currency
          </Button>
        </Col>

        <Col md={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 3 }}>  
          <Button variant="success" href="/about-api">About API</Button>
          </Col>

      </Row>
    );
  }
  
  export default Header;
  