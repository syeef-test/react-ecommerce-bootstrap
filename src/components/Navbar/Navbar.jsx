import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const MyNavbar = ({ handleShow }) => {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Store</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Container>
      <Button variant="primary" onClick={handleShow && handleShow}>
        Cart:{totalQuantity}
      </Button>
    </Navbar>
  );
};

export default MyNavbar;
