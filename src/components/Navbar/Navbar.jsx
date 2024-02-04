import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { NavLink } from "react-router-dom";

const MyNavbar = ({ handleShow }) => {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto mx-auto">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
          >
            About
          </NavLink>
        </Nav>
      </Container>
      <Button variant="outline-light" onClick={handleShow && handleShow}>
        Cart: {totalQuantity}
      </Button>
    </Navbar>
  );
};

export default MyNavbar;
