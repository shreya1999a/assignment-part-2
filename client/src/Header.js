import React from 'react';
import { Container, Row, Col, Image, Navbar, Nav } from 'react-bootstrap';
import { FaCameraRetro } from 'react-icons/fa';

const ImageWithDescription = () => {
  return (
    <Container>
      <Navbar bg="light">
        <Navbar.Brand href="#">
          <FaCameraRetro /> Media library
        </Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
      </Navbar>
      <Row>
      <Col md={4}>
          <Image src="https://via.placeholder.com/300x300" fluid />
        </Col>
        <Col md={8}>
          <h1>James Smith</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, tellus non congue commodo, libero sapien faucibus
            libero, eu egestas lacus magna id ligula. Aliquam erat volutpat.
            Nulla vel velit vel nibh rutrum luctus. Nunc malesuada nulla a
            diam laoreet, in aliquet metus suscipit.
          </p>
        </Col>
      
      </Row>
    </Container>
  );
};

export default ImageWithDescription;
