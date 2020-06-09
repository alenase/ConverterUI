import React from 'react';
import '../App.css';
import FormCurrency from './FormCurrency';
import TableResult from './TableResult';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(props) {
  return (
    <Container id="body">
      <FormCurrency data={props.data} />
      <Row id="Row">
        <Col md={{ span: 5, offset: 3 }} sm={{ span: 0, offset: 3 }}>
          <TableResult data={props.data} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
