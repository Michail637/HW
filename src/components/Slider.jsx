import React from 'react';
import {Carousel} from 'react-bootstrap';

import image01 from "../Images/01.png";
import image02 from "../Images/02.png";
import image03 from "../Images/03.png";


const Slider = () => {
  return (
    <div>
      <Carousel   >
      <Carousel.Item style={ {height: 600} } >
        <img src={image01} alt="" className='d-block w-100' />
        <Carousel.Caption>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolorum porro in ut similique illo?</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={ {height: 600} } >
        <img src={image02} alt="" className='d-block w-100' />
        <Carousel.Caption>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolorum porro in ut similique illo?</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={ {height: 600} } >
        <img src={image03} alt="" className='d-block w-100' />
        <Carousel.Caption>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolorum porro in ut similique illo?</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
     
    </div>
  )
}

export default Slider
