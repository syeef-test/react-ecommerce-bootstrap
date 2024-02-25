import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const data = await axios.post(
        "https://react-http-83be3-default-rtdb.firebaseio.com/contact-us.json",
        formData
      );
      if (data) {
        alert("Data stored successfully!");
        console.log("Data stored successfully!");
      }

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h3>Contact Us</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Enter phone number</Form.Label>
            <Form.Control
              type="number"
              ref={phoneRef}
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ContactUs;
