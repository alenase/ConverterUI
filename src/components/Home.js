import React from 'react';
import '../App.css';
import FormCurrency from './FormCurrency';
import TableResult from './TableResult';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
  {id: 1, currency: "CHF", saleRateNB:15.6389750, purchaseRateNB:15.6389750},
  {id: 2, currency: "EUR", saleRateNB:18.7949200, purchaseRateNB:18.7949200},
  {id: 3, currency: "GBP", saleRateNB:23.6324910, purchaseRateNB:23.6324910},
  {id: 4, currency: "PLZ", saleRateNB:4.4922010, purchaseRateNB:4.4922010},
  {id: 5, currency: "RUR", saleRateNB:0.3052700, purchaseRateNB:0.3052700},
  {id: 6, currency: "SEK", saleRateNB:2.0283750, purchaseRateNB:2.0283750},
  {id: 7, currency: "UAH", saleRateNB:1.0000000, purchaseRateNB:1.0000000},
  {id: 8, currency: "USD", saleRateNB:15.0564130, purchaseRateNB:15.0564130},
  {id: 9, currency: "XAU", saleRateNB:17747.7470000, purchaseRateNB:17747.7470000},
  {id: 10, currency: "CAD", saleRateNB:13.2107400, purchaseRateNB:13.2107400}

];





function Home() {
    return (
      <Container id="Body">

        <FormCurrency data={data}/>
        <Row id="Row">
          <Col  md={{ span: 5, offset: 3 }} sm={{ span: 0, offset: 3 }}>
          <TableResult  data={data}/>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Home;
  