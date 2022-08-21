import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import profile from '../assest/logo2.jpg'

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://res.cloudinary.com/abubakarraza64/image/upload/v1661023069/bnxtflegzh0i8yam2dmd.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://res.cloudinary.com/abubakarraza64/image/upload/v1661023069/bnxtflegzh0i8yam2dmd.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://res.cloudinary.com/abubakarraza64/image/upload/v1661023069/bnxtflegzh0i8yam2dmd.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;