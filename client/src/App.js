import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form, Navbar, Nav } from 'react-bootstrap';
import api from "./api";
import { FaCameraRetro } from 'react-icons/fa';
const App = () => {
  const [title, setTitle] = useState("Shreya Lethakula");
  const [description, setDescription] = useState(
    "Im shreya reddy lethakula currently doing master in computer science.  Im shreya reddy lethakula currently doing master in computer science. Im shreya reddy lethakula currently doing master in computer science.Im shreya reddy lethakula currently doing master in computer science.Im shreya reddy lethakula currently doing master in computer science.Im shreya reddy lethakula currently doing master in computer science.Im shreya reddy lethakula currently doing master in computer science."
  );
  const [imageSrc, setImageSrc] = useState("images/pic1.jpg");
  const [isEditing, setIsEditing] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [reacjsResult, setReacjsResult] = useState(0);
  const [serverResult, setServerResult] = useState(0);


  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  // const handleImageChange = (event) => {
  //   setImageSrc(event.target.value);
  // };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };
  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };
  const handleSubmitClick = async () => {
    setReacjsResult(Number(firstNumber) + Number(secondNumber));
    const data = {
      firstNumber: Number(firstNumber),
      secondNumber: Number(secondNumber)
    }
    const result = await api.post("calc", data);
    console.log(result.data)
    setServerResult(result.data.result)

  };
  return (
    <Container style={{ padding: "20px" }}>
      <Navbar bg="light">
        <Navbar.Brand href="#">
          <FaCameraRetro /> Media library
        </Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
      </Navbar>
      <Row>

        <Col md={6}>
          {isEditing ? (
            <><Form.Control
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
              <Form.Control
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              /></>
          ) : (<>
            <h1>{title}</h1>
            <p>{description}</p></>
          )}
        </Col>
        <Col md={6}>
          {isEditing ? (
            // <Form.Control
            //   type="text"
            //   value={imageSrc}
            //   onChange={handleImageChange}
            // />
            <></>
          ) : (
            <Image src={imageSrc} fluid />
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={{ span: 6, offset: 6 }}>
          {isEditing ? (
            <Button variant="primary" onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col md={6}>
          <Form.Label>Enter first number:</Form.Label>
          <Form.Control
            type="number"
            value={firstNumber}
            onChange={handleFirstNumberChange}
          />
        </Col>

        <Col md={6}>
          <Form.Label>Enter second number:</Form.Label>
          <Form.Control
            type="number"
            value={secondNumber}
            onChange={handleSecondNumberChange}
          />
        </Col>
        <br></br>
        <br></br>

        <Col md={12}>

          <Button variant="primary" onClick={handleSubmitClick}>
            Submit
          </Button>

        </Col>
        <Col md={12}>
          <Form.Label>Your Addition Result (from server) is:{serverResult}</Form.Label>
        </Col>
        <Col md={12}>
          <Form.Label>Your Addition Result (from ReactJS) is:{reacjsResult}</Form.Label>
        </Col>
      </Row>

    </Container>
  );
};

export default App;
