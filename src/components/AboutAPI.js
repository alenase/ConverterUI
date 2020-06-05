import React from 'react';
import '../App.css';
import TableInfo from './TableInfo';
import Container from 'react-bootstrap/Container';

function AboutAPI() {
    return (
      <Container id="Body">
        <h1>Privat Api</h1>
        <p>Наш сайт позволяет производить конвертацию между следующими валютами</p>
        <h4 align = "left">Cписок доступных валют:</h4>
        <TableInfo />
      </Container>
    );
  }
  
export default AboutAPI;
  