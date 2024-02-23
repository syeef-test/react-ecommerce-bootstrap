import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

const MyNavbar = ({ handleShow }) => {
  const cartContext = useContext(CartContext);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  const navLinkStyle = {
    color: "plum",
    textDecoration: "none",
    padding: "0.5rem 1rem",
  };

  const logout = async () => {
    await authCtx.logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" exact style={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/store" style={navLinkStyle}>
            Store
          </NavLink>
          <NavLink to="/about" style={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/contact_us" style={navLinkStyle}>
            Contact Us
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/products" style={navLinkStyle}>
                Products
              </NavLink>
            </>
          )}

          {!isLoggedIn && (
            <>
              <NavLink to="/signin" style={navLinkStyle}>
                Sign In
              </NavLink>
            </>
          )}

          {isLoggedIn && (
            <>
              <NavLink to="/logout" onClick={logout} style={navLinkStyle}>
                Logout
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
      <Button variant="outline-light" onClick={handleShow}>
        Cart: {totalQuantity}
      </Button>
    </Navbar>
  );
};

export default MyNavbar;
