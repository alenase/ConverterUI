import React from 'react';
import '../styles/header.css';
import '../App.css';
import { Button, Row, Col } from 'react-bootstrap';



function Header() {
  return (
    <Row className="Div-Absolute-Header">

      <Col md={{ span: 1, offset: 2 }} sm={{ span: 3, offset: 0 }}>
        <Button size="lg" href="/" variant="success">Currency</Button>
      </Col>

      <Col md={{ span: 2, offset: 0 }} sm={{ span: 3, offset: 0 }}>
        <Button size="lg" href="/about-api" variant="success">About API</Button>
      </Col>

    </Row>
  );
}


export default Header;
