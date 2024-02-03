import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const MyNavbar = ({ handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Container>
      <Button variant="primary" onClick={handleShow}>
        Cart:0
      </Button>
    </Navbar>
  );
};

export default MyNavbar;
