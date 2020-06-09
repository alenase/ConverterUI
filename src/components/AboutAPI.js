import React from 'react';
import '../App.css';
import '../styles/about_api.css';
import TableInfo from './TableInfo';
import Container from 'react-bootstrap/Container';
import Slider from './Slider';

function AboutAPI(props) {
  return (
    <Container id="body">
      <h1>Privat Api</h1>
      <div>
        <h4>Наш сайт позволяет производить конвертацию между следующими валютами</h4>
        <div>
          <h6 align="left">Cписок доступных валют:</h6>
          <TableInfo data={props.data} info={props.infoMap} />
        </div>
      </div>
      <Slider pictures={props.pictureLinks} />
    </Container>
  );
}

export default AboutAPI;
