import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image01  from "./Images/01.png"
import image02  from "./Images/02.png"
import image03  from "./Images/03.png"
import image04  from "./Images/04.png"



const Gallery = () => {
  return (
    <Container  >
      <Row>
        <Col>
          <img src={image01} alt="" />
        </Col>
        <Col>
          <img src={image02} alt="" />
        </Col>
      </Row>

      <Row>
        <Col>
          <img src={image03} alt="" />
        </Col>
        <Col>
          <img src={image04} alt="" />
        </Col>
      </Row>
    </Container>
  )
}

export default Gallery
