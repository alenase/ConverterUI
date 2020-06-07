import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
  const carouselItems = props.pictures.map((ref) =>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded"
        src={ref.link}
        alt={"Slide " + ref.id}
      />
    </Carousel.Item>
  );
  return (
    <Carousel>
      {carouselItems}
    </Carousel>
  );
}

export default Slider;