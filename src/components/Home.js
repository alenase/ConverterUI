import React from 'react';
import '../App.css';
import FormCurrency from './FormCurrency';
import TableResult from './TableResult';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
      <Container id="Body">

        <FormCurrency/>
        <TableResult/>
      </Container>
    );
  }
  
  export default Home;
  