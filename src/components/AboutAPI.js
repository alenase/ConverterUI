import React from 'react';
import '../App.css';
import '../styles/about_api.css';
import TableInfo from './TableInfo';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

function AboutAPI() {
  return (
    <Container id="Body">
      <h1>Privat Api</h1>
      <div>
        <h4>Наш сайт позволяет производить конвертацию между следующими валютами</h4>
        <div>
          <h6 align="left">Cписок доступных валют:</h6>
          <TableInfo />
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica10-800x300-d02.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://iveron.ru/wp-content/uploads/2019/03/2-800x300.jpg"
            alt="second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://www.geont.ru/assets/cache/images/images/sliders/costa_rica/costa_rica9-800x300-c71.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AboutAPI;
